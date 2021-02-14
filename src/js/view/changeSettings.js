class ChangeSettings {
  addHandlerGetData(handler) {
    document
      .querySelector(".submit_settings")
      .addEventListener("click", handler);
  }

  getInputData() {
    const inputs = [...document.getElementsByTagName("input")];

    let check = true;

    inputs.slice(0, 2).forEach((input) => {
      if (!input.value.includes("#") && input.value !== "") {
        input.value = "Invalid input";
        check = false;
      }
    });

    if (!check) return;

    let values = [];
    inputs.slice(0, 4).forEach((input) => {
      values.push(
        input.value
          .replace("#", "")
          .replace(" ", "")
          .replace("s", "")
          .replace("px", "")
      );
      input.value = "";
    });

    values.push(inputs[4].checked);

    return values;
  }

  changeDataInApp(data, changeData) {
    console.log(changeData);
    changeData[0] != ""
      ? (data.BackgroundColor = `#${Number(changeData[0])}`)
      : "";
    changeData[1] != "" ? (data.targetColor = `#${Number(changeData[1])}`) : "";
    changeData[2] != "" ? (data.targetAppearTime = Number(changeData[2])) : "";
    changeData[3] != "" ? (data.targetSize = changeData[3]) : "";
    data.moveingTarget = changeData[4];

    document.getElementById(
      "apear_time"
    ).textContent = `${data.targetAppearTime}s`;
    document.getElementById("target_size").textContent = `${data.targetSize}px`;
    document.getElementById("target_color").textContent = data.targetColor;
    document.getElementById("background_color").textContent =
      data.BackgroundColor;
  }
}

export default new ChangeSettings();
