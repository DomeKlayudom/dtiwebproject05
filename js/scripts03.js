let quiz = document.getElementById("quiz");
let midterm = document.getElementById("midterm");
let final = document.getElementById("final");

let btCalSumGrade = document.getElementById("bt-calSumGrade");
let btCan = document.getElementById("bt-can");

let showSum = document.getElementById("show-sum");
let showGrade = document.getElementById("show-grade");

function calSum() {
  let sum =
    parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value);
  return sum;
}

function validateData() {
  if (quiz.value.length == 0) {
    alert("ป้อน quiz ด้วย");
    return false;
  } else if (isNaN(quiz.value)) {
    alert("ป้อน quiz เป็นตัวเลขเท่านั้น");
    return false;
  } else if (midterm.value.length == 0) {
    alert("ป้อน midterm ด้วย");
    return false;
  } else if (isNaN(midterm.value)) {
    alert("ป้อน midterm เป็นตัวเลขเท่านั้น");
    return false;
  } else if (final.value.length == 0) {
    alert("ป้อน final ด้วย");
    return false;
  } else if (isNaN(final.value)) {
    alert("ป้อน final เป็นตัวเลขเท่านั้น");
    return false;
  }

  return true;
}

function calGrade(sum) {
  showSum.innerHTML = "<strong>ได้คะแนนรวม " + sum + " คะแนน</strong>";
  showGrade.innerHTML =
    sum >= 80
      ? "<strong>ได้เกรด A</strong>"
      : sum >= 50
      ? "<strong>ได้เกรด B</strong>"
      : "<strong>ได้เกรด C</strong>";
}

btCalSumGrade.addEventListener("click", () => {
  if (validateData()) {
    calGrade(calSum());
  }
});
