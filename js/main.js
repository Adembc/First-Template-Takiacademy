// Load Content
let sections = [
  "Graphiste",
  "Concepteur rédacteur",
  "Community manager",
  "Photographe",
  "Graphiste",
  "Photographe",
];
let ids = [
  "graphiste",
  "concepteur",
  "community",
  "photographe-2",
  "graphiste-2",
  "photographe-3",
];
let mainContainer = document.querySelector("main .container");
for (let i = 0; i < sections.length; i++) {
  let content = mainContainer.firstElementChild.cloneNode(true);
  content.id = ids[i];
  let sectionTitle = content.querySelector(".special-title > span");
  sectionTitle.textContent = sections[i];
  let prevBtn = content.querySelector(".prev");
  let nextBtn = content.querySelector(".next");
  prevBtn.id = `prev-${i + 2}`;
  nextBtn.id = `next-${i + 2}`;
  mainContainer.append(content);
}

// change active link
let links = document.querySelectorAll(".inner-links a");
links.forEach((link) => {
  link.onclick = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    link.classList.add("active");
  };
});

// Scroll Navbar
let prevBtnLinks = document.getElementById("prev-btn");
let nextBtnLinks = document.getElementById("next-btn");
let linksContainer = document.querySelector(".inner-links ul");
let counter = 6;
let numberOfLinks = document.querySelectorAll(".inner-links ul li").length;
nextBtnLinks.onclick = () => {
  toScroll =
    linksContainer.querySelectorAll("li a")[counter + 1].offsetWidth +
    (linksContainer.offsetWidth - 120 * 7) / 6;
  linksContainer.scrollLeft += toScroll;
  counter++;
  checkLinks();
};
prevBtnLinks.onclick = () => {
  toScroll =
    linksContainer.querySelectorAll("li a")[counter - 1].offsetWidth +
    (linksContainer.offsetWidth - 120 * 7) / 6;
  linksContainer.scrollLeft -= toScroll;
  counter--;
  checkLinks();
};
function checkLinks() {
  if (counter == 6) {
    prevBtnLinks.classList.add("hide");
  } else {
    prevBtnLinks.classList.remove("hide");
  }
  if (counter == numberOfLinks - 1) {
    nextBtnLinks.classList.add("hide");
  } else {
    nextBtnLinks.classList.remove("hide");
  }
}
// Scroll Boxes
let nextBtns = document.querySelectorAll(".row_container .next");
let prevBtns = document.querySelectorAll(".row_container .prev");
nextBtns.forEach((nextBtn) => {
  nextBtn.onclick = () => {
    boxesContainer = nextBtn.previousElementSibling;
    prevBtn = nextBtn.parentElement.firstElementChild;
    scrollingLeft = 250 + (boxesContainer.offsetWidth - 1000) / 3;
    boxesContainer.scrollLeft += scrollingLeft;
    window.setTimeout(check, 320, prevBtn, nextBtn);
  };
});
prevBtns.forEach((prevBtn) => {
  prevBtn.onclick = () => {
    boxesContainer = prevBtn.nextElementSibling;
    nextBtn = prevBtn.parentElement.lastElementChild;
    scrollingLeft = 250 + (boxesContainer.offsetWidth - 1000) / 3;
    boxesContainer.scrollLeft -= scrollingLeft;
    window.setTimeout(check, 320, prevBtn, nextBtn);
  };
});
function check(prevBtn, nextBtn) {
  if (boxesContainer.scrollLeft == 0) {
    prevBtn.classList.add("hide");
  } else {
    prevBtn.classList.remove("hide");
  }
  if (
    boxesContainer.clientWidth + boxesContainer.scrollLeft ==
    boxesContainer.scrollWidth
  ) {
    nextBtn.classList.add("hide");
  } else {
    nextBtn.classList.remove("hide");
  }
}

// Scroll Boxes Failed Try

// // Scroll boxes
// let nextBtn = document.querySelector("#nextTwo");
// let prevBtn = document.querySelector("#prevTwo");
// // spaceBetweenBoxes = (nextBtn.parentElement.offsetWidth - 1000) / 3;
// nextBtn.onclick = () => {
//   let rightHiddenBoxes = document.querySelectorAll(".box.right");
//   let leftHiddenBoxes = document.querySelectorAll(".box.left");
//   // check();
//   let boxes = document.querySelectorAll("#nextTwo ~ .box");
//   boxes = Array.from(boxes).filter(
//     (box) => !box.classList.contains("left") && !box.classList.contains("right")
//   );
//   if (rightHiddenBoxes.length != 0) {
//     boxes[0].classList.add("left");
//     rightHiddenBoxes[0].classList.remove("right");
//     check();
//   }
// };
// prevBtn.onclick = () => {
//   let rightHiddenBoxes = document.querySelectorAll(".box.right");
//   let leftHiddenBoxes = document.querySelectorAll(".box.left");
//   let boxes = document.querySelectorAll("#nextTwo ~ .box");
//   boxes = Array.from(boxes).filter(
//     (box) => !box.classList.contains("left") && !box.classList.contains("right")
//   );
//   if (leftHiddenBoxes.length != 0) {
//     boxes[3].classList.add("right");
//     leftHiddenBoxes[leftHiddenBoxes.length - 1].classList.remove("left");
//     check();
//   }
// };
// function check() {
//   let rightHiddenBoxes = document.querySelectorAll(".box.right");
//   let leftHiddenBoxes = document.querySelectorAll(".box.left");
//   if (rightHiddenBoxes.length == 0) {
//     nextBtn.classList.add("hide");
//   } else {
//     nextBtn.classList.remove("hide");
//   }
//   if (leftHiddenBoxes.length == 0) {
//     prevBtn.classList.add("hide");
//   } else {
//     prevBtn.classList.remove("hide");
//   }
// }
