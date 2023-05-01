//Input
document.getElementById("btn").addEventListener("click", btnClicked);
//declare variables
let score = 0;

function btnClicked() {
  let ans1 = document.getElementById("question-1").value.toLowerCase();
  let ans2 = document.getElementById("question-2").value.toLowerCase();
  let ans3 = document.getElementById("question-3").value.toLowerCase();
  let ans4 = document.getElementById("question-4").value.toLowerCase();
  //question 1
  if (
    ans1 === "playerunknown's battlegrounds mobile" ||
    ans1 === "playerunknowns battlegrounds mobile"
  ) {
    // results
    document.getElementById("output-1").innerHTML = `✅`;
    score = score + 1;
  } else if (
    ans1 !== "playerunknown's battlegrounds mobile" ||
    ans1 !== "playerunknowns battlegrounds mobile"
  ) {
    // results
    document.getElementById("output-1").innerHTML = `❌`;
  }
  //question  2
  if (ans2 === "brendan greene") {
    // results
    document.getElementById("output-2").innerHTML = `✅`;
    score = score + 1;
  } else if (ans2 !== "brendan greene") {
    // results
    document.getElementById("output-2").innerHTML = `❌`;
  }
  //question 3
  if (ans3 === "android, ios" || ans3 === "android and ios") {
    // results
    document.getElementById("output-3").innerHTML = `✅`;
    score = score + 1;
  } else if (ans3 !== "android, ios" || ans3 !== "android and ios") {
    // results
    document.getElementById("output-3").innerHTML = `❌`;
  }
  //question 4
  if (ans4 === "03/19/18" || ans4 === "19/03/18") {
    // results
    document.getElementById("output-4").innerHTML = `✅`;
    score = score + 1;
  } else if (ans4 !== "03/19/18" || ans4 !== "19/03/18") {
    // results
    document.getElementById("output-4").innerHTML = `❌`;
  }
  //final results
  if (score > 2) {
    document.getElementById("Results").innerHTML =
      score + "/4 (" + (score / 4) * 100 + "%) Amazing work!";
    score = 0;
  }
  if (score < 3) {
    document.getElementById("Results").innerHTML =
      score +
      "/4 (" +
      (score / 4) * 100 +
      "%) Looks like you failed. Better luck next time!";
    score = 0;
  }
}
