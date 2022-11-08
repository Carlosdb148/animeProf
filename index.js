import anime from "./anime.js"

function * generator() {
    while(true) {
        yield Math.floor(Math.random() * 300);
    }
}


const gen = generator();

function random() {
    let elemento = document.querySelector("#square");
    //while(elemento.hasChildNodes()) elemento.removeChild(elemento.firstChild);
    for (let i=0; i< 20; i++) {
        let nodo = document.createElement("div");
        nodo.className = "cuadro";
        nodo.style="background-color: cyan; width:40px; height:40px;";
        elemento.appendChild(nodo);
    }
    anime.timeline({
        targets: '.cuadro',
        delay: 400,
        duration: 3500,
        endDelay: 400,
        direction: 'alternate',
        loop:true
        }).add({
        /*targets: '.cuadro',
        translateX: function() {
        return gen.next().value;
        },*/
        rotate: function() {
        return anime.random(0,360);
        },
        scale: () => {
        return anime.random(0,20);
        },
        opacity: [0.5, 1]
        })/*.add({
        translateX: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        complete: random
        })*/;
    }
    
random();