import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
export function play() {
  state.isRunning = true;
  document.documentElement.classList.add("running");
  timer.countdown();
}
export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}
export function add() {
  state.isRunning = false;
  state.isRunning = document.documentElement.classList.remove("running");
  state.minutes += 5;
  timer.updateDisplay(state.minutes, el.seconds.textContent);
}
export function sub() {
 
  
  if (state.minutes > 5) {
    state.minutes -= 5;
    state.isRunning = false;
    state.isRunning = document.documentElement.classList.remove("running");
    timer.updateDisplay(state.minutes, el.seconds.textContent);
  }
}

export function rain() {
  if (!el.btnRain.classList.contains("active")) {
    sounds.buttonPressRain.play();
    el.btnRain.classList.toggle("active");
    return;
  }
  el.btnRain.classList.toggle("active");
  sounds.buttonPressRain.pause();
}
export function fire() {
  if (!el.btnFire.classList.contains("active")) {
    sounds.buttonPressFire.play();
    el.btnFire.classList.toggle("active");
    return;
  }
  el.btnFire.classList.toggle("active");
  sounds.buttonPressFire.pause();
}
export function forest() {
  if (!el.btnForest.classList.contains("active")) {
    sounds.buttonPressForest.play();
    el.btnForest.classList.toggle("active");
    return;
  }
  el.btnForest.classList.toggle("active");
  sounds.buttonPressForest.pause();
}
export function coffee() {
  if (!el.btnCoffee.classList.contains("active")) {
    sounds.buttonPressCoffee.play();
    el.btnCoffee.classList.toggle("active");
    return;
  }
  el.btnCoffee.classList.toggle("active");
  sounds.buttonPressCoffee.pause();
}
