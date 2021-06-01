/* ---------------- Variables -------------------- */

var imagen1 = document.getElementById("img1"),
    imagen2 = document.getElementById("img2"),
    imagen3 = document.getElementById("img3"),
    imagen4 = document.getElementById("img4"),
    imagen5 = document.getElementById("img5"),
    imagen6 = document.getElementById("img6"),
    imagen7 = document.getElementById("img7"),
    imagen8 = document.getElementById("img8"),
   bigImage = document.getElementById("_bigPic");

/* ---------------- Eventos -------------------- */

// --------------- Imagen 1 --------------------
imagen1.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto1.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen1.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 2 --------------------
imagen2.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto2.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen2.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 3 --------------------
imagen3.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto3.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen3.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 4 --------------------
imagen4.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto4.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen4.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 5 --------------------
imagen5.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto5.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen5.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 6 --------------------
imagen6.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto6.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen6.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 7 --------------------
imagen7.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto7.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen7.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});

// --------------- Imagen 8 --------------------
imagen8.addEventListener("mouseover", function(){
    bigImage.style.backgroundImage = "url('img/foto8.jpg')";
    bigImage.style.backgroundPosition = 'center center';
    bigImage.style.backgroundRepeat = 'no-repeat';
    bigImage.classList.add("imagenGrande");
});

imagen8.addEventListener("mouseleave", function(){
    bigImage.style.background = "white";
    bigImage.classList.remove("imagenGrande");
});