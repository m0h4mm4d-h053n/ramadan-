function countdown() {
  const timeSpan = new Date("April 3,2022 00:00:00").getTime() - new Date().getTime();
  
  // 1day = 86400000 milisec, 1hour = 3600000 milisec, 1minute = 60000 milisec
  const inputDay = Math.floor(timeSpan / 86400000);
  const inputHour = Math.floor((timeSpan % 86400000) / 3600000);
  const inputMin = Math.floor((timeSpan % 3600000) / 60000);
  const inputSec = Math.floor((timeSpan % 60000) / 1000);

  document.querySelector(".day").innerText = inputDay;
  document.querySelector(".hour").innerText = inputHour;
  document.querySelector(".minute").innerText = inputMin;
  document.querySelector(".second").innerText = inputSec;
}

setInterval(countdown, 1000);
