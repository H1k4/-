let range = document.querySelector(".range");
let music = document.querySelector(".music");
let audio = document.getElementById("audio");

console.log(range, music, audio);

music.onclick = () => {
    if (audio.paused == true) {
        audio.play();
    } else {
        audio.pause();
    }
};
range.addEventListener("input", () => {
    console.log(range.value / 100);
    audio.volume = range.value / 100;
});