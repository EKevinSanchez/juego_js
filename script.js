$("#btn_no").hover(function () {
    $("#botonQueSeMueve").css("top", `${Math.random() * 710}px`);
    $("#botonQueSeMueve").css("left", `${Math.random() * 1000}px`);
});