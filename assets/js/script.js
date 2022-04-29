let headCount = 0;
let totalFlips = 0;

document.addEventListener("DOMContentLoaded", function () {
  let img = document.querySelector("img");
  let message = document.querySelector(".message-container");
  let headsCell = document.querySelector("#heads");
  let headsPercentageCell = document.querySelector("#heads-percent");
  let tailsCell = document.querySelector("#tails");
  let tailsPercentageCell = document.querySelector("#tails-percent");

  document.querySelector("#flip").addEventListener("click", function () {
    results = "tails";
    if (Math.random() < 0.5) {
      headCount++;
      results = "heads";
    }
    //Increase number of flips
    totalFlips++;
    img.setAttribute("src", `./assets/images/penny-${results}.jpg`);
    message.textContent = `You flipped ${results}!!!`;

    headsCell.textContent = headCount;
    headsPercentageCell.textContent =
      Math.round((headCount / totalFlips) * 100) + "%";
    tailsCell.textContent = totalFlips - headCount;
    tailsPercentageCell.textContent =
      Math.round(((totalFlips - headCount) / totalFlips) * 100) + "%";
  });

  document.querySelector("#clear").addEventListener("click", function () {
    totalFlips = 0;
    headCount = 0;
    img.setAttribute("src", "./assets/images/penny-heads.jpg");
    message.textContent = "Let's get Flipping!";
    headsCell.textContent = 0;
    headsPercentageCell.textContent = "0%";
    tailsCell.textContent = 0;
    tailsPercentageCell.textContent = "0%";
  });
});
