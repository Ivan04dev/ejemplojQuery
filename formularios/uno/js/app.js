$("#formulario").submit(function(e){
    e.preventDefault();
    enviar();
})

function enviar(){
    // Toma todos los names y crea un areeglo 
    const datos = $('#formulario').serialize();
    $.ajax({
        type: 'post',
        url: 'formulario.php',
        data: datos,
        success: function(texto){
            if(texto.trim() == 'exito'){
                correcto();
            } else {
                phperror(texto);
            }
        }
    })
}

function correcto(){
    $('#mensajeExito').removeClass('d-none');
    $('#mensajeError').addClass('d-none');
}

function phperror(){
    $('#mensajeError').removeClass('d-none');
    $('#mensajeError').html(texto);

}