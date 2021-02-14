import PageNavigation from "./view/pageNavigation.js";
import BasicMode from "./view/basicMode.js";
import ChangeSettings from "./view/changeSettings.js";
import ReactionTime from "./view/reactionTime.js";

// document.querySelector(".start_page");
// const choosePage = document.querySelector(".choose_page");
// const playPage = document.querySelector(".play_page");
// const startBtn = document.querySelector(".start");
// const chooseBtn = document.querySelectorAll(".choose");

const test = function () {
  // console.log(margins1);
};

test();

const basicMode = function () {
  BasicMode.clearPlayingArea();
  BasicMode.renderPlayingArea();
  if (!BasicMode.properties.reactionMode) BasicMode.generateTarget(5);
  if (BasicMode.properties.reactionMode)
    ReactionTime.renderReactionTarget(BasicMode.properties);
};

const changeSettings = function () {
  const changeData = ChangeSettings.getInputData();
  console.log(changeData);
  ChangeSettings.changeDataInApp(BasicMode.properties, changeData);
};

const init = function () {
  PageNavigation.changePage(BasicMode.properties);
  BasicMode.addHandlerStartGame(basicMode);
  ChangeSettings.addHandlerGetData(changeSettings);
};

init();
