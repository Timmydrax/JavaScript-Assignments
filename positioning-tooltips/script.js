import {
  computePosition,
  flip,
  shift,
  offset,
} from "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12/+esm";

const quotes = document.querySelector("#quotes");
const tooltipone = document.querySelector("#tooltipone");
const tooltiptwo = document.querySelector("#tooltiptwo");
const tooltipthree = document.querySelector("#tooltipthree");

computePosition(quotes, tooltipone, {
  placement: "top-start",
  middleware: [offset(5), flip(), shift()],
}).then(({ x, y }) => {
  Object.assign(tooltipone.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
});

computePosition(quotes, tooltiptwo, {
  placement: "bottom-start",
  middleware: [offset(5), flip(), shift()],
}).then(({ x, y }) => {
  Object.assign(tooltiptwo.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
});

computePosition(quotes, tooltipthree, {
  placement: "right-start",
  middleware: [offset(5), flip(), shift()],
}).then(({ x, y }) => {
  Object.assign(tooltipthree.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
});
