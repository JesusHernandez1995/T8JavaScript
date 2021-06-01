/* ------------------ Variables --------------------- */
 var boton_single_paragraph = document.getElementById("_btnParrafo"),
          boton_first_table = document.getElementById("_btnPrimerParrafo"),
         boton_second_table = document.getElementById("_btnSegundoParrafo"),
           single_paragraph = document.getElementById("parrafo"),
                first_table = document.getElementById("_firstTable"),
               second_table = document.getElementById("_secondTable");

/* ------------------ Eventos --------------------- */
boton_single_paragraph.addEventListener('click', function(){
    if(single_paragraph.style.display == 'none'){
        single_paragraph.style.display = 'block';
    } else {
        single_paragraph.style.display = 'none';
    }
});

boton_first_table.addEventListener('click', function(){
    if(first_table.style.display == 'none'){
        first_table.style.display = 'block'; 
    } else {
        first_table.style.display = 'none'; 
    }
});

boton_second_table.addEventListener('click', function(){
    if(second_table.style.display == 'none'){
        second_table.style.display = 'block'; 
    } else {
        second_table.style.display = 'none'; 
    }
});