let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let start = document.getElementById("start");
let input = document.getElementsByClassName("input-time");
function Timer(h, m, s) {
  start.onclick = () => {
    let h = inputs[0].value;
    let m = inputs[1].value;
    let s = inputs[2].value;
    clearInterval(timer);
    const timer = setInterval(() => {
      seconds.innerText = s;
      min.innerText = m;
      hours.innerText = h;
      s--;
      if (s == 0) {
        m--;
        if (m == 0) {
          h--;
          m = 60;
        }
        s = 60;
      }
      if (h < 0) {
        clearInterval(timer);
        seconds.innerText = 0;
        min.innerText = 0;
        hours.innerText = 0;
      }
    }, 1000);
  };
}
