window.onload = function () {
  const navigation = document.querySelector ('header');
  navigation.style.animation += ' navLoad forwards;';
};
const audio = new Audio ('sound/clickson2.mp3');
let isContentOpened = false;

const TitleOfContent = document.createElement ('h2');
const p = document.createElement ('p');
const menu = document.querySelectorAll ('.menu');
const imgAdd = document.createElement("img")
const aSide = document.querySelector ('aside');
const wrapper = document.querySelector ('.page-wrap');
const parcourDiv = document.querySelector(".parcour-div-main")
const portFolio = document.querySelector(".portfolio-div-main")
const profil = document.querySelector(".profil")
const contactBloc = document.querySelector(".contact-bloc")

function mainOpen () {
  menu.forEach (menuIcon => {
    menuIcon.addEventListener ('click', e => {
      aSideSlideSecond ();
      isContentOpened = true;

      if (e.target.className == 'portfolio') {

        setTimeout (function () {
          parcourDiv.style.display = "none"
          portFolio.style.display = "block"
        }, 500);
        
        
        

      }
      if (e.target.className == 'parcours') {
    
        setTimeout (function () {
          portFolio.style.display = "none"
          parcourDiv.style.display = "block" 
        }, 500);
     
      }
    });
  });
}

mainOpen ();

function aSideSlideFirst () {
  setTimeout (function () {
    aSide.style.animation = 'aside_Load 0.8s forwards';
    audio.play ();
  }, 200);
}
function aSideSlideSecond () {
  if (isContentOpened == false) {
    aSideSlideFirst ();
  } else if ((isContentOpened = true)) {
    aSide.style.animation = ' aside_deload 0.8s forwards';
    setTimeout (function () {
      aSide.style.animation = 'aside_Load 0.8s forwards';
      audio.play ();
    }, 1000);
  }
}

const switchBtn = document.querySelector ('input[name=checkbox]');


switchBtn.addEventListener ('change', () => {
  if (switchBtn.checked) {
    console.log ('Checkbox is checked..');
    wrapper.style.background = 'black';
    document.querySelector ('.mode').style.color = 'white';
  } else {
    wrapper.style.background = 'lightgreen';
    document.querySelector ('.mode').style.color = 'black';
    console.log ('Checkbox is not checked..');
  }
});

const closeCross =  document.querySelector("button")
console.log(closeCross);
let nbOfClick = 0;
closeCross.addEventListener("click", (e) => {
  nbOfClick += 1;

  imgAdd.style.transition = "1s"
  aSide.style.animation = ' aside_deload 0.8s forwards';
  if(nbOfClick >= 1) {
    contactBloc.appendChild(imgAdd)
   
        
    imgAdd.style.transition = "1s"
    imgAdd.className = ("leave-message")
    imgAdd.src = ("images/arrow-brushes-design-png-34.png")
    imgAdd.style.opacity = 1;
    imgAdd.style.transition = "1s"
       
      setTimeout (function () {
        imgAdd.style.opacity = 0;
        imgAdd.style.transition = "1s"
      }, 7000);
      setTimeout (function () {
      imgAdd.remove()
    }, 8000);
  }

  
})
