class PageNavigation {
  _currPage = 0;
  _nextBtns = [
    ...document.querySelectorAll(".choose"),
    document.querySelector(".start"),
    document.querySelector(".settings-btn"),
  ];

  _previousBtns = document.querySelectorAll(".back");

  changePage(data) {
    this._nextBtns.forEach((btn) =>
      btn.addEventListener("click", this.goToNext.bind(this))
    );
    this._previousBtns.forEach((btn) =>
      btn.addEventListener("click", this.goToPrevious.bind(this))
    );

    this.getChosenMode(data);
  }

  goToNext() {
    this._currPage++;
    document.querySelector(".game-container").style.marginTop = `${
      -100 * this._currPage
    }vh`;
  }

  goToPrevious() {
    this._currPage--;
    document.querySelector(".game-container").style.marginTop = `${
      -100 * this._currPage
    }vh`;
  }

  getChosenMode(data) {
    document
      .querySelector(".basic_mode")
      .addEventListener("click", function () {
        data.reactionMode = false;
      });
    document
      .querySelector(".reaction_mode")
      .addEventListener("click", function () {
        data.reactionMode = true;
      });
  }
}

export default new PageNavigation();
