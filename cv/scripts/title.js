//* title animation inspired from https://www.proglobalbusinesssolutions.com/css-hover-effects/

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function reverseStep(step) {
  return -step;
}

function putTitle(text) {
  async function animateText() {
    if (phoneMedia.matches) {
      title.innerText = text;
    } else {
      count += step;
      title.innerText = text.substring(0, count);
  
      if (count === 0 || count === text.length) {
        clearInterval(id);
        id = undefined;
        step = reverseStep(step);
  
        await sleep(1000);
        id = setInterval(animateText, 120);
      }
    }
  }

  const title = document.getElementsByClassName("js-title")[0];
  const phoneMedia = window.matchMedia("(320px <= width <= 480px)");

  let count = 0;
  let step = 1;
  let id;

  id = setInterval(animateText, 120);

  const underscore = document.getElementsByClassName("js-underscore")[0];

  window.setInterval(() => {
    underscore.classList.toggle("hidden");
  }, 1000);
}

putTitle("Hello World!");
