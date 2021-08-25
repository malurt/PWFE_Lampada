"use strict" //faz com que erros sejam sinalizados

//FUNCOES

function lampOn()
{
    const lamp = document.getElementById("lampada")
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/ligada.jpg" 
        buttonDesligar.disabled = false
        buttonLigar.disabled = true
    }
    
}

function lampOff()
{
    const lamp = document.getElementById("lampada")
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/desligada.jpg" 
        buttonDesligar.disabled = true
        buttonLigar.disabled = false
    }
    
}

function lampBrake()
{
    const lamp = document.getElementById("lampada")
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    lamp.src = "img/quebrada.jpg" 
    buttonDesligar.disabled = true
    buttonLigar.disabled = true
}

function lampIsBroken()
{
    const lamp = document.getElementById("lampada")
    return lamp.src.includes("quebrada")
    //se o src tiver a palavra quebrada, retorna true
}

// EVENTOS
document.getElementById("ligar").addEventListener("click", lampOn)

document.getElementById("desligar").addEventListener("click", lampOff)

document.getElementById("lampada").addEventListener("dblclick",lampBrake)

document.getElementById("lampada").addEventListener("mouseover",lampOn)

document.getElementById("lampada").addEventListener("mouseleave",lampOff)
