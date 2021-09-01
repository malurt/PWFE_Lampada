"use strict" //faz com que erros sejam sinalizados

//FUNCOES
    /*
        MUDANÇAS
        - Criar função que habilita/desabilita botões
    */

const buttonOnOff = (buttonOnState,buttonOffState ) =>
{
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    buttonLigar.disabled = buttonOnState
    buttonDesligar.disabled = buttonOffState
}
/*function buttonOnOff(buttonOnState,buttonOffState )
{
    const buttonDesligar = document.getElementById("desligar")
    const buttonLigar = document.getElementById("ligar")

    buttonLigar.disabled = buttonOnState
    buttonDesligar.disabled = buttonOffState
        //recebe o estado que for passado ao invocar a função
}*/

const lampOn = () =>
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/ligada.jpg" 
        buttonOnOff(true, false) //função que liga/desliga botão
    }
}

/*function lampOn()
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/ligada.jpg" 
        buttonOnOff(true, false) //função que liga/desliga botão
    }
}*/

const lampOff = () => {
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/desligada.jpg" 
        buttonOnOff(false, true) //função que liga/desliga botão
    }
}

/*function lampOff()
{
    const lamp = document.getElementById("lampada")
    if (!lampIsBroken()) //se a lampIsBroken retornar false
    {
        lamp.src = "img/desligada.jpg" 
        buttonOnOff(false, true) //função que liga/desliga botão
    }
}*/

const lampBrake = () =>
{
    const lamp = document.getElementById("lampada")
    lamp.src = "img/quebrada.jpg" 
    buttonOnOff(true, true) //função que liga/desliga botão
}

/*function lampBrake()
{
    const lamp = document.getElementById("lampada")
    lamp.src = "img/quebrada.jpg" 
    buttonOnOff(true, true) //função que liga/desliga botão
}*/

const lampIsBroken = () =>
{
    const lamp = document.getElementById("lampada")
    return lamp.src.includes("quebrada")
}
/*function lampIsBroken()
{
    const lamp = document.getElementById("lampada")
    return lamp.src.includes("quebrada")
    //se o src tiver a palavra quebrada, retorna true
}*/

const getId = (elementId) => document.getElementById(elementId)
/*function getId(elementId)
{
    return document.getElementById(elementId)
}*/

const lampBlink = () =>
{
    const buttonPiscar = document.getElementById("piscar")

    if (buttonPiscar.textContent == "Piscar")
    {
        idDesligar = setInterval(lampOn, 500)
        idLigar = setInterval(lampOff,1000)
        document.getElementById("piscar").textContent = "Parar"
    }

    else
    {
        lamStopBlinking()
        buttonPiscar.textContent = "Piscar"
    }
}

const lamStopBlinking = () =>
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
