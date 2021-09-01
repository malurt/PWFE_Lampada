"use strict" //faz com que erros sejam sinalizados

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
    buttonOnOff(true, true) //função que liga/desliga botão
}

function lampIsBroken()
{
    const lamp = document.getElementById("lampada")
    return lamp.src.includes("quebrada")
    //se o src tiver a palavra quebrada, retorna true
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

async function lampBlink()
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        var contador = 0;

        while (contador < 5)
        {
            buttonOnOff(true, true) //função que liga/desliga botão
            lamp.src = "img/ligada.jpg" 
            await delay(0.5)
            lamp.src = "img/desligada.jpg"
            await delay(0.5)
            contador++
        }
        lamp.src = "img/quebrada.jpg"
    }
}

function getId(elementId)
{
    return document.getElementById(elementId)
}



// EVENTOS
getId("ligar").addEventListener("click", lampOn)
    //usando  a função getId para conseguir o ID ao inves do document.....

document.getElementById("desligar").addEventListener("click", lampOff)

document.getElementById("lampada").addEventListener("dblclick",lampBrake)

document.getElementById("lampada").addEventListener("mouseover",lampOn)

document.getElementById("lampada").addEventListener("mouseleave",lampOff)

document.getElementById("piscar").addEventListener("click", lampBlink)
