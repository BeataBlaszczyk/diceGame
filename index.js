

//document.querySelector("h1").textContent = "aa";


//document.querySelector("h1").click()




function play(){

  var liczba1 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img1").src = "dice" + liczba1 +".png";


  var liczba2 = Math.floor(Math.random()*6)+1;

  document.querySelector(".img2").src = "dice" + liczba2 +".png";


  if (liczba1 > liczba2){
    document.querySelector("h1").innerHTML = "<i  class='flag fas fa-flag'></i> Player 1 won !"
  }else if (liczba1 < liczba2) {
    document.querySelector("h1").innerHTML = "Player 2 won ! <i class='flag fas fa-flag'></i> "
  }else{
      document.querySelector("h1").innerHTML = "<i class='flag fas fa-flag'></i> ! DRAW ! <i class='flag fas fa-flag'></i> "
  }


}
