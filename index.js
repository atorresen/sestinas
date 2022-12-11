var select;
window.onload = function() {
  select = document.getElementById("colorDropdown");
  console.log(select);
}

// color one face (line1) in the color selected in the dropdown
// function changeColor(objDropDown) {
//     var color = document.getElementById("chosenColor");
//     color.value = objDropDown.value;
//
//     const line1 = document.querySelectorAll(".l1");
//
//     line1.forEach(box => {
//       box.style.fill = color.value;
//     });
// }

function changeColor(objDropDown) {
  var color = document.getElementById("chosenColor");

  var colorFam;
  switch (objDropDown.value) {
    case "red":
      colorFam = ["#a23456", "#f15243", "#c64125", "#e32614", "#d51362", "#b46531"];
      break;
    // case "pale yellow":
    //   colorFam = ["#ffa23456", "#fff15243", "#ffc64125", "#ffe32614", "#ffd51362", "#ffb46531"];
    //   break;

    case "cyan":
      colorFam = ["#12c4e6", "#61e2d3", "#36d1b5", "#53b6a4", "#45a3f2", "#24f5c1"];
      break;
    case "hot pink":
      colorFam = ["#ff12c4e6", "#ff61e2d3", "#ff36d1b5", "#ff53b6a4", "#ff45a3f2", "#ff24f5c1"];
      break;

    case "blue":
      colorFam = ["#1234e6", "#6152d3", "#3641b5", "#5326a4", "#4513f2", "#2465c1"];
      break;
    case "orange":
      colorFam = ["#ff1234e6", "#ff6152d3", "#ff3641b5", "#ff5326a4", "#ff4513f2", "#ff2465c1"];
      break;

    case "magenta":
      colorFam = ["#a234e6", "#f152d3", "#c641b5", "#e326a4", "#d513f2", "#b465c1"];
      break;
    case "yellow":
      colorFam = ["#ffa234e6", "#fff152d3", "#ffc641b5", "#ffe326a4", "#ffd513f2", "#ffb465c1"];
      break;

    case "yellow-green":
      colorFam = ["#a2c456", "#e1e243", "#c6d125", "#e3b614", "#d5a362", "#b4f531"];
      break;
    // case "ugly pale":
    //   colorFam = ["#ffa2c456", "#ffe1e243", "#ffc6d125", "#ffe3b614", "#ffd5a362", "#ffb4f531"];
    //   break;

    case "green":
      colorFam = ["#12c456", "#61e243", "#36d125", "#53b614", "#45a362", "#24f531"];
      break;
    case "light pink":
      colorFam = ["#ff12c456", "#ff61e243", "#ff36d125", "#ff53b614", "#ff45a362", "#ff24f531"];
      break;

    case "multi dark":
      colorFam = ["#123456", "#615243", "#364123", "#532614", "#451362", "#246531"];
      break;

    default: //multi light
      colorFam = ["#ff123456", "#ff615243", "#ff364125", "#ff532614", "#ff451362", "#ff246531"]
  };

  // main colors
  const line1 = document.querySelectorAll(".l1");
  const line2 = document.querySelectorAll(".l2");
  const line3 = document.querySelectorAll(".l3");
  const line4 = document.querySelectorAll(".l4");
  const line5 = document.querySelectorAll(".l5");
  const line6 = document.querySelectorAll(".l6");

  line1.forEach(path => {
    path.style.fill = (colorFam[0]);
  });
  line2.forEach(path => {
    path.style.fill = (colorFam[1]);
  });
  line3.forEach(path => {
    path.style.fill = (colorFam[2]);
  });
  line4.forEach(path => {
    path.style.fill = (colorFam[3]);
  });
  line5.forEach(path => {
    path.style.fill = (colorFam[4]);
  });
  line6.forEach(path => {
    path.style.fill = (colorFam[5]);
  });


  // colors for gradient
  const grad1 = document.querySelectorAll(".l1g");
  const grad2 = document.querySelectorAll(".l2g");
  const grad3 = document.querySelectorAll(".l3g");
  const grad4 = document.querySelectorAll(".l4g");
  const grad5 = document.querySelectorAll(".l5g");
  const grad6 = document.querySelectorAll(".l6g");

  grad1.forEach(stop => {
    stop.style.stopColor = (colorFam[0]);
  });
  grad2.forEach(stop => {
    stop.style.stopColor = (colorFam[1]);
  });
  grad3.forEach(stop => {
    stop.style.stopColor = (colorFam[2]);
  });
  grad4.forEach(stop => {
    stop.style.stopColor = (colorFam[3]);
  });
  grad5.forEach(stop => {
    stop.style.stopColor = (colorFam[4]);
  });
  grad6.forEach(stop => {
    stop.style.stopColor = (colorFam[5]);
  });

}
