class ReactionTime {
  renderReactionTarget(data) {
    let i = 1;
    let clicked = true;
    let t0 = 0;
    let time_after = 1;

    let averageTime = [];

    if (i === 1) {
      this.targetWithoutMove(data, 0);
      t0 = performance.now();
    }

    //   console.log(r);
    document.querySelector(".basic_mode_area").addEventListener(
      "click",
      function (e) {
        const target = e.target.closest(".target");

        if (!target) clicked = false;
        if (target || i === 0) clicked = true;

        if (clicked) {
          if (i === time_after) {
            let t1 = performance.now();

            averageTime.push(t1 - t0);
            time_after++;
          }

          t0 = performance.now();

          this.targetWithoutMove(data, i);

          this.removeTarget(i);

          if (i === 10) {
            this.displayAverageTime(averageTime);
            return;
          }
          i++;
        }
      }.bind(this)
    );
  }

  targetWithoutMove(data, i) {
    const marginTop = `calc(${Math.round(Math.random() * 90) + 8}vh - ${
      data.targetSize
    }px)`;
    const marginLeft = `calc(${Math.round(Math.random() * 90) + 8}% - ${
      data.targetSize
    }px)`;
    const size = `height:${data.targetSize + "px"};width:${
      data.targetSize + "px"
    }`;
    const color = `background:${data.targetColor}`;
    const target = `<div class="target target_${i}", style="margin-top:${marginTop};margin-left:${marginLeft};${size};${color}"></div>`;
    document
      .querySelector(".basic_mode_area")
      .insertAdjacentHTML("beforeend", target);
  }

  /*
  targetWithoutMove(data,i) {
    const marginTop = `calc(${Math.round(Math.random() * 95) + 5}vh - ${
      data.targetSize
    }px)`;
    const marginLeft = `calc(${Math.round(Math.random() * 95) + 5}% - ${
      data.targetSize
    }px)`;
    const size = `height:${data.targetSize + "px"};width:${
      data.targetSize + "px"
    }`;
    const color = `background:${data.targetColor}`;
    const target = `<div class="target target_${i}", style="margin-top:${marginTop};margin-left:${marginLeft};${size};${color}"></div>`;
    document
      .querySelector(".basic_mode_area")
      .insertAdjacentHTML("beforeend", target);
  }*/

  removeTarget(i) {
    if (i !== 0) {
      document.querySelector(`.target_${i - 1}`).remove();
    }
  }

  displayAverageTime(time) {
    const avgTime = time.reduce((ac, el) => ac + el) / time.length;

    document.querySelector(".basic_mode_area").remove();

    document.querySelector(".click_start").style.display = "";
    document.querySelector(".settings").style.display = "";
    document.querySelector(
      ".click_title"
    ).textContent = `Average reaction time: ${Math.round(
      avgTime
    )} milliseconds!`;
  }
}

export default new ReactionTime();
