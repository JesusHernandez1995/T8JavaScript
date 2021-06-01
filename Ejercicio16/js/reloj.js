/* ------------ Variables ------------------ */
var hora = document.getElementById("hora"),
 minutos = document.getElementById("minutos"),
segundos = document.getElementById("segundos");

/* ------------ Funciones ------------------ */
function update_clock(h, m, s){
    hora.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
}

function get_date(){
    currentTime = new Date();
    hour = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

    update_clock(hour, minutes, seconds);
    setTimeout(get_date,1000); 
}