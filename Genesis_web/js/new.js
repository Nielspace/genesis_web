console.log("Welcome to Genesis Console")

var info = false;

var infobtn = function(){
  var infoClick = document.querySelector(".info");
  var infoClickp = document.querySelector(".info p");

  if (info===false){

    infoClick.style.display = 'block';
    infoClick.style.visibility = 'visible';
    infoClick.style.opacity = '1';
    infoClick.style.position = "absolute";
    infoClick.style.padding = '10px';
    infoClick.style.margin = '0 60% 0 0';

    infoClickp.style.visibility = 'visible';
    info = true;  
  }
  
  else if (info===true) {
    infoClick.style.display = 'none';

    info = false;
  }
 
}