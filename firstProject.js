// JavaScript Document

// Change background color on downward scroll
window.addEventListener("scroll", function(){
  	var navbar = document.querySelector("header");
    
  	if(window.scrollY > 5){
  		navbar.style.backgroundColor = "#D8E2EA";
      navbar.style.boxShadow = "1px 1px 1px #D8E2EA";
    } else if(window.scrollY < 5) {
  		navbar.style.backgroundColor = "";
  		navbar.style.boxShadow = "";
  	}
  });


// Make navbar logo responsive
window.addEventListener("load", function(){
    var compLogo = document.querySelector("#logo");
    
    if (window.innerWidth < 1100) { 
      compLogo.innerHTML = "<i style=\"font-size: 1.4em\" class=\"fas fa-dove\"></i>";
    } else {
      compLogo.innerHTML = "<i class=\"fas fa-dove\"></i> Earlybird/Design";
    }
});

window.addEventListener("resize", function(){
    var compLogo = document.querySelector("#logo");
    
    if (window.innerWidth < 1100) { 
        compLogo.innerHTML = "<i style=\"font-size: 1.4em\" class=\"fas fa-dove\"></i>";
    } else {
        compLogo.innerHTML = "<i class=\"fas fa-dove\"></i> Earlybird/Design";
    }
});

// make home page services intro responsive
window.addEventListener("load", function(){
  var serviceIntro = document.querySelector("#servicesIntro");
  
  if (window.innerWidth < 1000) { 
    serviceIntro.innerHTML = "<p><strong>Visually appealing</strong> &amp; <strong>functional</strong> websites for small businesses.</p><p>Here are some of the services I provide.</p>";
  } else {
    serviceIntro.innerHTML = "<p>I create <strong>visually appealing</strong> &amp; <strong>functional</strong> websites for small businesses.</p><p>Here are some of the services I provide.</p>";
  }
});

window.addEventListener("resize", function(){
  var serviceIntro = document.querySelector("#servicesIntro");
  
  if (window.innerWidth < 1000) { 
    serviceIntro.innerHTML = "<p><strong>Visually appealing</strong> &amp; <strong>functional</strong> websites for small businesses.</p><p>Here are some of the services I provide.</p>";
  } else {
    serviceIntro.innerHTML = "<p>I create <strong>visually appealing</strong> &amp; <strong>functional</strong> websites for small businesses.</p><p>Here are some of the services I provide.</p>";
  }
});