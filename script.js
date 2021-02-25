// Comando de menu/navbar
    $('.barra-btn').click(function(){
        $('.barra .menu').toggleClass("active");
        $('.barra-btn i').toggleClass("active");
    });
    /* Letras que se mueven */
    var typed = new Typed(".prueba1", {
        strings: ["Mi cielito", "Mi amor", "Mi vida", "Mi bebé", "Mi waifu"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".prueba2", {
        strings: ["Te ama demasiado.", "Te quiere un montón.", "Te adora demasiado."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
