import "./style.css";
import "@lottiefiles/lottie-player";
import * as LottieInteractivity from "@lottiefiles/lottie-interactivity";

window.onload = function () {
  console.log("Dokument geladen");
  console.log(document.querySelector("#preicons"));

  LottieInteractivity.create({
    mode: "scroll",
    player: "#preicons",
    actions: [{ visibility: [0, 0.8], type: "loop", frames: [0, 120] }],
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#oskarball",
    actions: [{ visibility: [0, 1], type: "seek", frames: [0, 250] }],
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#samuelball",
    actions: [{ visibility: [0, 1], type: "seek", frames: [0, 200] }],
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#questionmark",
    actions: [
      {
        visibility: [0, 0.3],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.3, 0.5],
        type: "seek",
        frames: [0, 75],
      },
    ],
  });
};
