$('#formulario').submit(function(e){
    e.preventDefault();
    enviar();
})

function enviar(){
    var datos = $('#formulario').serialize();
    // console.log(datos);
    $.ajax({
        type: "post",
        url: "formulario.php",
        data: datos,
        success: function(texto){
            if(texto.trim() == "exito"){
                correcto();
            } else {
                phperror();
            }
        }
    })
}

function correcto(){
    $('#mensajeExito').removeClass('d-none');
}

function phperror(){
    $('#mensajeError').removeClass('d-none');
}