function showWordColors() {
  const cb = document.getElementById("show");
  console.log(cb.checked);

  if (cb.checked == true) {

    const word1 = document.querySelectorAll(".w1");
    const word2 = document.querySelectorAll(".w2");
    const word3 = document.querySelectorAll(".w3");
    const word4 = document.querySelectorAll(".w4");
    const word5 = document.querySelectorAll(".w5");
    const word6 = document.querySelectorAll(".w6");

    word1.forEach(word => {
      word.style.backgroundColor = "#bff"
    });
    word2.forEach(word => {
      word.style.backgroundColor = "#bbf"
    });
    word3.forEach(word => {
      word.style.backgroundColor = "#fbf"
    });
    word4.forEach(word => {
      word.style.backgroundColor = "#fbb"
    });
    word5.forEach(word => {
      word.style.backgroundColor = "#ffb"
    });
    word6.forEach(word => {
      word.style.backgroundColor = "#bfb"
    });
  } else {
    const endwords = document.querySelectorAll(".endWord");
    endwords.forEach(word => {
      word.style.backgroundColor = ""
    });
  }
}
