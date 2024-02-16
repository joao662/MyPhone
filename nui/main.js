




function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let day = date.getDate();
  let mes = date.getMonth();
  let semana = date.getDay();

  switch(semana){
        case 0:
          semana = "DOM";
          break;
        case 1:
          semana = "SEG";
          break;
        case 2:
          semana = "TER";
          break;
        case 3:
          semana = "QUA";
          break;
        case 4:
          semana = "QUI";
          break;
        case 5:
          semana = "SEX";
          break;
        case 6:
          semana = "SÁB";
  }
  switch(mes){
      case 0:
          mes = "JAN";
        break;
      case 1:
          mes = "FEV";
        break;
      case 2:
          mes = "MAR";
        break;
      case 3:
          mes = "ABR";
        break;
      case 4:
          mes = "MAI";
        break;
      case 5:
          mes = "JUN";
        break;
      case 6:
          mes = "JUL";
      case 7:
          mes = "AGO";
        break;
      case 8:
          mes = "SET";
        break;
      case 9:
          mes = "OUT";
        break;
      case 10:
          mes = "NOV";
        break;
      case 11:
          mes = "DEZ";
        break;
}



   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
    
   let time = hh + ":" + mm;
   let data = semana + " " + day + "   " + mes;

  document.getElementById("timetop").innerText = time;
  document.getElementById("timedisplay").innerText = time;
  document.getElementById("data").innerText = data;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
window.onload = currentTime();



  document.addEventListener("keydown", e =>{
      if(e.key.toLocaleLowerCase() == "escape"){
          currentTime();
          $.post('http://vrp_teste/celular:close');
      }
  })
  window.addEventListener("message", function(event){
      if (event["data"]["showmenu"] == true){
    $("*").fadeIn(1);
          $.post('http://vrp_teste/teste');
  }

  if (event["data"]["showmenu"] == false){
    $("*").fadeOut(1);
    $("*").hide();
  }
})
function calculadora() {  
  new Audio('sons/click.ogg').play()
     setTimeout(() => {
      
      $("#calc").show();
      $("#menuapp").hide(); 
      $("#timedisplay").hide();
      $("#data").hide(); 
      $("#circulo").hide();
      $("#menurapido").hide();
      $("#paisagem").hide();
    },250);  
}
function menu() {
new Audio('sons/click.ogg').play()
setTimeout(() => {
  window.location.href = 'index.html'
},300);
}
function nubank() {
  new Audio('sons/click.ogg').play()
  setTimeout(() => {
   
   $("#nubankk").show();
   $("#menuapp").hide(); 
   $("#timedisplay").hide();
   $("#data").hide(); 
   $("#circulo").hide();
   $("#menurapido").hide();   
   $("#paisagem").hide();  
 },400);  
}

