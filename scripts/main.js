console.log("javascript is active");
var warningtext = document.getElementById("warning");
warningtext.style.display = 'none';

var launchdate =  new Date(2016, 10, 20);
var currentdate = new Date();
var daystogo = launchdate.getDate() - currentdate.getDate(); 



var logo = document.getElementById("logo"); 
var logotext = document.getElementById("logotext");
logotext.style.display = "none";
var panellarge =document.getElementById("panellarge");
panellarge.style.display = "none";
var logolarge = document.getElementById("logolarge");
var message = document.getElementById("underconstruction");
var daystolaunch = document.getElementById("daystolaunch");
var corners = document.getElementsByClassName("corner");
var whois = document.getElementById("whoisbutton");
var whoispanel = document.getElementById("whoispanel");
whoispanel.style.display = "none";
var projects = document.getElementById("projectsbutton");
var history = document.getElementById("historybutton");
var contacts = document.getElementById("contactsbutton");
var contactspanel = document.getElementById("contactspanel");
contactspanel.style.display ="none";



logo.addEventListener("click", function(e){
  if(logolarge.id === "logolarge"){
  logolarge.id = "logosmall";
  corners.className = "cornersplit";
  message.style.display = "block";
  daystolaunch.innerHTML = daystogo;
  }
  else{
    panellarge.style.display ="none";
    logolarge.id = "logolarge";
    message.style.display = "none"

  };

});

whoisbutton.addEventListener("click", function(e){
  if(logolarge.id === "logolarge"){
  logolarge.id = "logosmall";
  panellarge.style.display = "block";
  whoispanel.style.display ="block";
  contactspanel.style.display ="none";
 
  }
  else{
    panellarge.style.display ="none";
    logolarge.id = "logolarge";
    message.style.display = "none"
    whoispanel.style.display ="none"

  };

});

contactsbutton.addEventListener("click", function(e){
  if(logolarge.id === "logolarge"){
  logolarge.id = "logosmall";
  panellarge.style.display = "block";
  contactspanel.style.display ="block";
  whoispanel.style.display ="none";
  }
  else{
    panellarge.style.display ="none";
    logolarge.id = "logolarge";
    message.style.display = "none";
    contactspanel.style.display ="none";

  };

});




logotext.addEventListener("click", function(e){
  if(logolarge.id === "logolarge"){
  logolarge.id = "logosmall";
  message.style.display = "block";
  daystolaunch.innerHTML = daystogo;
  var cornersplit = document.getElementsByClassName('cornersplit')
  console.log('cornersplit');
  for(i=0; i=cornersplit.length;i++){
  cornersplit[i-1].className = "corner";
  };
  logotext.style.display = 'none';
  logo.style.display = 'block';

  }
  else{
    panellarge.style.display ="none";
    logolarge.id = "logolarge";
    message.style.display = "none";
    message.style.display = "none";
  };

});

logo.addEventListener("mouseover", function(e){
  if(logolarge.id ==="logolarge"){
    for(i=0; i=corners.length;i++){
    corners[i-1].className = "cornersplit";
    };
    logo.style.display = 'none';
    logotext.style.display = 'block';
   
  };

});

logotext.addEventListener("mouseout",function(e){
  if(logolarge.id ==="logolarge" && logo.style.display === "none"){
    var cornersplit = document.getElementsByClassName('cornersplit')
    for(i=0; i=cornersplit.length;i++){
    cornersplit[i-1].className = "corner";
    };
    logotext.style.display = 'none';
    logo.style.display = 'block';
    
  };
});


