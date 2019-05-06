window.addEventListener("load", start);

function start() {
    console.log("start");

    document.querySelector("#gin_container").classList.add("fallinggin1");
    document.querySelector("#gin_container").addEventListener("click", clickGin);

    document.querySelector("#gin_container1").classList.add("fallinggin2");
    document.querySelector("#gin_container1").addEventListener("click", clickGin);

    document.querySelector("#tonic_container").classList.add("fallingtonic1");
    document.querySelector("#tonic_container").addEventListener("click", clickTonic);

    document.querySelector("#rom_container").classList.add("fallingrom");
    document.querySelector("#rom_container").addEventListener("click", clickRom);

    document.querySelector("#rom_container1").classList.add("fallingrom2");
    document.querySelector("#rom_container1").addEventListener("click", clickRom);

    document.querySelector("#cola_container").classList.add("fallingcola");
    document.querySelector("#cola_container").addEventListener("click", clickCola);

    document.querySelector("#cola_container2").classList.add("fallingcola2");
    document.querySelector("#cola_container2").addEventListener("click", clickCola);

    document.querySelector("#citron_container").classList.add("fallingcitron");
    document.querySelector("#citron_container").addEventListener("click", clickCitron);
}

let point = 0;

function clickGin() {
    console.log(this);
    console.log("clickgin");
    point = point + 1;
    console.log(point);
    this.querySelector(".gin_sprite").classList.add("disappear");
    document.querySelector(".antal").textContent = point;

    document.querySelector("#gin_container").addEventListener("animationend", figurDukop);

    document.querySelector("#gin_container1").addEventListener("animationend", figurDukop);
}

function figurDukop() {
    console.log("reset figur");

    this.querySelector(".gin_sprite").classList.remove("disappear");


    this.classList.remove("falling");
    this.classList.offsetLeft;
    this.classList.add("falling");

}

function clickTonic() {
    console.log(this);
    console.log("clicktonic");
    point = point + 1;
    console.log(point);
    this.classList.add("disappear");
    document.querySelector(".antal").textContent = point;
    document.querySelector("#tonic_container").addEventListener("animationend", tonicDukop);
}

function tonicDukop() {
    console.log("reset tonic");

    this.querySelector(".tonic_sprite").classList.remove("disappear");


    this.classList.remove("falling");
    this.classList.offsetLeft;
    this.classList.add("falling");

}

function clickRom() {
    console.log(this);
    console.log("clickrom");
    this.classList.add("disappear");
    console.log(liv);
    document.querySelector("#liv" + liv).classList.add("disappear");
    liv--;

    document.querySelector("#rom_container").addEventListener("animationend", romDukop);
    document.querySelector("#rom_container1").addEventListener("animationend", romDukop);
}

function romDukop() {
    console.log("reset rom");

    this.querySelector(".rom_sprite").classList.remove("disappear");


    this.classList.remove("falling");
    this.classList.offsetLeft;
    this.classList.add("falling");

}


let liv = 3;

function clickCola() {
    console.log(this);
    console.log("clickcola");
    this.classList.add("disappear");
    console.log(liv);
    document.querySelector("#liv" + liv).classList.add("disappear");
    liv--;

    document.querySelector("#cola_container").addEventListener("animationend", colaDukop);
    document.querySelector("#cola_container2").addEventListener("animationend", colaDukop);
}

function colaDukop() {
    console.log("reset cola");

    this.querySelector(".cola_sprite").classList.remove("disappear");


    this.classList.remove("falling");
    this.classList.offsetLeft;
    this.classList.add("falling");
}

let ekstraliv = 1;

function clickCitron() {
    console.log(this);
    console.log("clickCitron");
    this.classList.add("disappear");
    console.log(ekstraliv);
    document.querySelector("#ekstraliv" + ekstraliv).classList.add("fade_in");
    liv++;

}
