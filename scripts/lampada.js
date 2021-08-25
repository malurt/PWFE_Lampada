"use strict" //faz com que erros sejam sinalizados

//FUNCOES

function lampOn()
{
    const lamp = document.getElementById("lampada")
    lamp.src = "img/ligada.jpg" 
}

function lampOff()
{
    const lamp = document.getElementById("lampada")
    lamp.src = "img/desligada.jpg" 
}

// EVENTOS
document.getElementById("ligar").addEventListener("click", lampOn)

document.getElementById("desligar").addEventListener("click", lampOff)
