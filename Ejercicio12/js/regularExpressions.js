/* ------------------- VARIABLES ---------------------- */

var input_fecha = document.getElementById("fecha"),
    input_email = document.getElementById("email"),
    input_name = document.getElementById("name_lastName"),
    botonValidarFecha = document.getElementById("btn-dateValidate"),
    botonValidarCorreo = document.getElementById("btn-emailValidate"),
    botonReordenarNomApe = document.getElementById("btn-nameValidate"),
    correcto_fecha_message = document.getElementById("_dateOK"),
    error_fecha_message = document.getElementById("_dateERROR"),
    correcto_email_message = document.getElementById("_emailOK"),
    error_email_message = document.getElementById("_emailERROR"),

    dateExpReg =  /^(?:(?:(0?[1-9]|1\d|2[0-8])[/](0?[1-9]|1[0-2])|(29|30)[/](0?[13-9]|1[0-2])|(31)[/](0?[13578]|1[02]))[/](0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|(29)[/](0?2)[/](\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    emailExpReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    inverseExpReg = /^(\w+), (\w+)', '\\2, \\1$/;

/* ------------------- EVENTOS ---------------------- */

botonValidarFecha.addEventListener('click', function(e){
    e.preventDefault();
    var texto = input_fecha.value;
    if(dateExpReg.test(texto)){
        correcto_fecha_message.style.display = "block";
        error_fecha_message.style.display = "none";
    } else {
        correcto_fecha_message.style.display = "none";
        error_fecha_message.style.display = "block";
    }
    input_fecha.value = "";
});

botonValidarCorreo.addEventListener('click', function(e){
    e.preventDefault();
    var text = input_email.value;
    if(emailExpReg.test(text)){
        correcto_email_message.style.display = "block";
        error_email_message.style.display = "none";
    } else {
        correcto_email_message.style.display = "none";
        error_email_message.style.display = "block";
    }
    input_email.value = "";
})

botonReordenarNomApe.addEventListener('click', function(e){
    e.preventDefault();
    let text = input_name.value;
    
    console.log(inverseExpReg.test(text));
});