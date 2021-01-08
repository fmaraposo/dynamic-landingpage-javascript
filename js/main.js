//DOM Elements

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12 hr Format
  hour = hour % 12 || 12;

  // Display the Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
}

// Add Zeros in front of single digit hour, min, sec

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background and greeting accordingto the hour
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('../img/morning.JPG')".toLocaleLowerCase();
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Morning';
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.JPG')".toLocaleLowerCase();
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Afternoon';
  } else {
    //Evening
    document.body.style.backgroundImage = "url('../img/night.JPG')".toLocaleLowerCase();
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Night';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.wich == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.keyCode === 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
      localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run the time
showTime();
setBgGreet();
getName();
getFocus();
