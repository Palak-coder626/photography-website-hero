const cta = document.querySelector('.btn');
const darklightToggle = document.getElementById('dark-light-toggle');
const graphic = document.querySelector('.graphic');
const image = document.querySelector('.photographer');
let currentMode="light";
function produceRipples(e){
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  const ripples = document.createElement('span');
  ripples.style.top = y + 'px';
  ripples.style.left = x +'px';
  cta.appendChild(ripples);
  setTimeout(()=>{
       ripples.remove();
  },600)
}

function switchTheme(){
  if(currentMode==="light"){
    currentMode="dark";
    darklightToggle.classList.replace('fa-moon','fa-sun');
    darklightToggle.title="Change to light mode";
    document.documentElement.setAttribute('data-theme',"dark");
    image.src= 'images/girlPhotographerDark.svg';
  }else{
    currentMode="light";
    darklightToggle.classList.replace('fa-sun','fa-moon');
    darklightToggle.title="Change to dark mode";
    image.src= 'images/girlphotographer.svg';
    document.documentElement.removeAttribute('data-theme');
  }
}

cta.addEventListener('click',produceRipples);
darklightToggle.addEventListener('click',switchTheme);