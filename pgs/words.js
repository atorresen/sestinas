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
      word.style.backgroundColor = "#ff123456"
    });
    word2.forEach(word => {
      word.style.backgroundColor = "#ff615243"
    });
    word3.forEach(word => {
      word.style.backgroundColor = "#ff364125"
    });
    word4.forEach(word => {
      word.style.backgroundColor = "#ff532614"
    });
    word5.forEach(word => {
      word.style.backgroundColor = "#ff451362"
    });
    word6.forEach(word => {
      word.style.backgroundColor = "#ff246531"
    });
  } else {
    const endwords = document.querySelectorAll(".endWord");
    endwords.forEach(word => {
      word.style.backgroundColor = ""
    });
  }
}
