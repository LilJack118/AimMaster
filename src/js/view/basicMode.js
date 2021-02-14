class BasicMode {
  properties = {
    targetSize: 40,
    targetAppearTime: 5,
    targetColor: "#222",
    BackgroundColor: "#444",
    moveingTarget: false,
    reactionMode: false,
  };

  _clickToStart = document.querySelector(".click_start");

  addHandlerStartGame(handler) {
    this._clickToStart.addEventListener("click", handler);
  }

  clearPlayingArea() {
    document.querySelector(".click_start").style.display = "none";
    document.querySelector(".settings").style.display = "none";
  }

  renderPlayingArea() {
    document
      .querySelector(".play_page")
      .insertAdjacentHTML("beforeend", this.playingAreaMarkup());
    document.querySelector(
      ".basic_mode_area"
    ).style.background = this.properties.BackgroundColor;
  }

  playingAreaMarkup() {
    return `<div class="basic_mode_area"></div>`;
  }

  generateTarget() {
    let i = 0;
    let score = 0;
    const tick = async function () {
      if (true) {
        // await document
        //   .querySelector(".basic_mode_area")
        //   .insertAdjacentHTML("beforeend", target);

        if (!this.properties.moveingTarget) this.targetWithoutMove(i);
        if (this.properties.moveingTarget) this.addMoveingTarget(i);

        let click = 0;

        document
          .querySelector(`.target_${i}`)
          .addEventListener("click", function (e) {
            if (click > 0) return;
            score++;
            click++;
            e.target.style.background = "black";
          });

        i > 0 ? document.querySelector(`.target_${i - 1}`).remove() : "";
      }

      //   Reset after missed shoot
      if (i > score) {
        this.displayScore(score);
        clearInterval(targetRendering); //Turn off interval
      }
      i++;
    }.bind(this);

    tick();
    const targetRendering = setInterval(
      tick,
      1000 * this.properties.targetAppearTime
    );
  }

  displayScore(score) {
    document.querySelector(".basic_mode_area").remove();

    document.querySelector(".click_start").style.display = "";
    document.querySelector(".settings").style.display = "";
    document.querySelector(".click_title").textContent = `Your score: ${score}`;
  }

  targetWithoutMove(i) {
    const marginTop = `calc(${Math.round(Math.random() * 95) + 5}vh - ${
      this.properties.targetSize
    }px)`;
    const marginLeft = `calc(${Math.round(Math.random() * 95) + 5}% - ${
      this.properties.targetSize
    }px)`;
    const size = `height:${this.properties.targetSize + "px"};width:${
      this.properties.targetSize + "px"
    }`;
    const color = `background:${this.properties.targetColor}`;
    const target = `<div class="target target_${i}", style="margin-top:${marginTop};margin-left:${marginLeft};${size};${color}"></div>`;
    document
      .querySelector(".basic_mode_area")
      .insertAdjacentHTML("beforeend", target);
  }

  addMoveingTarget(i) {
    const size = `height:${this.properties.targetSize + "px"};width:${
      this.properties.targetSize + "px"
    }`;
    const color = `background:${this.properties.targetColor}`;
    const target = `<div class="target target_${i}", style="${size};${color}"></div>`;

    document
      .querySelector(".basic_mode_area")
      .insertAdjacentHTML("beforeend", target);

    document.querySelector(`.target_${i}`).animate(
      [
        // keyframes
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * 90)}vh`,
        },
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * 90)}vh`,
          offset: 0.3,
        },
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * 90)}vh`,
          offset: 0.55,
        },
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * 90)}vh`,
          offset: 0.65,
        },
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * 90)}vh`,
          offset: 0.8,
        },
        {
          marginLeft: `${Math.floor(Math.random() * (100 - 10) + 10)}%`,
          marginTop: `${Math.floor(Math.random() * (100 - 50)) + 50}vh`,
        },
      ],
      {
        // timing options
        duration: this.properties.targetAppearTime * 1000,
        iterations: 1,
      }
    );
  }
}

export default new BasicMode();
