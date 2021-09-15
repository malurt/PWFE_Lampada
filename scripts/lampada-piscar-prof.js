"use strict" //faz com que erros sejam sinalizados

let idteste
let idDesligar
let idLigar

function buttonOnOff(buttonOnState,buttonOffState )
{
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    buttonLigar.disabled = buttonOnState 
    buttonDesligar.disabled = buttonOffState
        //recebe o estado que for passado ao invocar a função
}

function lampOn()
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/ligada.jpg" 
        buttonOnOff(true, false) //função que liga/desliga botão
    }
}

function lampOff()
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/desligada.jpg" 
        buttonOnOff(false, true) //função que liga/desliga botão
    }
}

function lampBrake()
{
    const lamp = document.getElementById("lampada")
    lamp.src = "img/quebrada.jpg" 
    buttonOnOff(true, true, true) //função que liga/desliga botão

    const buttonPiscar = document.getElementById("piscar")
    buttonPiscar.disabled = true
}

function lampIsBroken()
{
    const lamp = document.getElementById("lampada")
    return lamp.src.includes("quebrada")
    //se o src tiver a palavra quebrada, retorna true
}

function getId(elementId)
{
    return document.getElementById(elementId)
}

function mensagem()
{
    console.log("olá mundo")
}

function testesComFuncoesDeIntervalo ()
{
    console.log("teste1")
    idteste = setInterval(mensagem, 1000)
    console.log("teste2")
}

function lampBlink()
{
    const buttonPiscar = document.getElementById("piscar")

    if (buttonPiscar.textContent == "Piscar")
    {
        idDesligar = setInterval(lampOn, 500)
        idLigar = setInterval(lampOff,1000)
        document.getElementById("piscar").textContent = "Parar"
        document.getElementById("piscar").style.backgroundColor = "rgb(247, 203, 203)"
    }

    else
    {
        lampStopBlinking()
        buttonPiscar.textContent = "Piscar"
        document.getElementById("piscar").style.backgroundColor = "rgb(203, 247, 214)"
    }
    
}

function lampStopBlinking () 
{
    clearInterval(idLigar)
    clearInterval(idDesligar)
}


// EVENTOS
getId("ligar").addEventListener("click", lampOn)
    //usando  a função getId para conseguir o ID ao inves do document.....

document.getElementById("desligar").addEventListener("click", lampOff)

document.getElementById("lampada").addEventListener("dblclick",lampBrake)

document.getElementById("lampada").addEventListener("mouseover",lampOn)

document.getElementById("lampada").addEventListener("mouseleave",lampOff)

document.getElementById("piscar").addEventListener("click", lampBlink)
