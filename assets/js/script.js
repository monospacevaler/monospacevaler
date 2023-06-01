// DARK MODE

// Acquisizione root element e assegnazione variabile r
var r = document.querySelector(':root');


//Cambio dei colori in root per la palette dark

function dark() {
  document.getElementById("toggle").setAttribute("onclick", "light()");
  r.style.setProperty('--sfondo', '#333');
  r.style.setProperty('--secondario', '#333');
  r.style.setProperty('--testo', 'white');
  r.style.setProperty('--primario', '#f2b46c');
  r.style.setProperty('--paragrafo', 'whitesmoke');
  r.style.setProperty('--linkfb', '#f2b46c');
  document.getElementById("uxuides").setAttribute("src", "./assets/images/user-experience-white.png");
  document.getElementById("webdes").setAttribute("src", "./assets/images/web-design-white.png");
  document.getElementById("logodes").setAttribute("src", "./assets/images/logo-design-white.png");
  document.getElementById("webdev").setAttribute("src", "./assets/images/front-end-white.png");
}

//Ripristino la palette light

function light() {
  document.getElementById("toggle").setAttribute("onclick", "dark()");
  r.style.setProperty('--sfondo', 'lightblue');
  r.style.setProperty('--secondario', 'white');
  r.style.setProperty('--testo', '#333');
  r.style.setProperty('--primario', 'lightblue');
  r.style.setProperty('--paragrafo', 'black');
  r.style.setProperty('--linkfb', '#13202A');
  document.getElementById("uxuides").setAttribute("src", "./assets/images/user-experience.png");
  document.getElementById("webdes").setAttribute("src", "./assets/images/web-design.png");
  document.getElementById("logodes").setAttribute("src", "./assets/images/logo-design.png");
  document.getElementById("webdev").setAttribute("src", "./assets/images/front-end.png");
}