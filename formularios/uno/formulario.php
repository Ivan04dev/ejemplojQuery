<?php

    $error = '';

    if(empty($_POST['nombre'])){
        $error = 'Ingresa un nombre <br />';
    } else {
        $nombre = $_POST['nombre'];
        $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
        $nombre = trim($nombre);
        if($nombre === ''){
            $error .= 'El nombre está vacío <br />';
        }
    }

    if(empty($_POST['email'])){
        $error .= 'Ingresa un correo <br />';
    } else {
        $email = $_POST['email'];
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error .= 'Ingresa un correo válido';
        } else {
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        }
    }

    if(empty($_POST['mensaje'])){
        $error .= 'Ingresa un mensaje <br />';
    } else {
        $mensaje = $_POST['mensaje'];
        $mensaje = filter_var($mensaje, FILTER_SANITIZE_STRING);
        $mensaje = trim($mensaje);
        if($mensaje === ''){
            $error .= 'El mensaje está vacío <br />';
        }
    }

