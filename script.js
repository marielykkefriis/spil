window.addEventListener("load", startsideVises);

"use strict";
let point;
let liv;
let maxLiv = 1;
let minPoint = 2;
let gameDone;
let maxTime = 30000;
let gameTimer;

function startsideVises() {
    console.log("startsideVises");
    //Skjul levelcomplete og gameover når der klikkes på startskærmen
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#gameover").removeEventListener("click", startsideVises);
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#levelcomplete").removeEventListener("click", startsideVises);

    liv = maxLiv;
    point = 0;

    //Restart point

    document.querySelector(".antal").innerHTML = point;


    //Vis regler og skjul startBackground

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#startknap").addEventListener("click", regler);

}

function regler() {
    console.log("regler");


    document.querySelector("#regler").classList.remove("hide");
    document.querySelector("#videreknapregler").addEventListener("click", startSpil);

}

function startSpil() {
    console.log("startSpil");
    gameDone = false;
    //Nulstil point og liv
    point = 0;
    liv = 3;


    document.querySelector("#start").classList.add("hide");
    document.querySelector("#regler").classList.add("hide");

    //Start falde-animationer på gin

    document.querySelector("#gin_container").classList.add("fallinggin1");
    document.querySelector("#gin_container").addEventListener("click", clickGinOrTonic);
    document.querySelector("#gin_container1").classList.add("fallinggin2");
    document.querySelector("#gin_container1").addEventListener("click", clickGinOrTonic);

    //Start falde-animationer på tonic

    document.querySelector("#tonic_container").classList.add("fallingtonic1");
    document.querySelector("#tonic_container").addEventListener("click", clickGinOrTonic);

    //Start falde-animationer på rom

    document.querySelector("#rom_container").classList.add("fallingrom");
    document.querySelector("#rom_container").addEventListener("click", clickRomOrCola);
    document.querySelector("#rom_container1").classList.add("fallingrom2");
    document.querySelector("#rom_container1").addEventListener("click", clickRomOrCola);

    //Start falde-animationer cola

    document.querySelector("#cola_container").classList.add("fallingcola");
    document.querySelector("#cola_container").addEventListener("click", clickRomOrCola);
    document.querySelector("#cola_container2").classList.add("fallingcola2");
    document.querySelector("#cola_container2").addEventListener("click", clickRomOrCola);

    ///Start falde-animationer på citron

    document.querySelector("#citron_container").classList.add("fallingcitron");
    document.querySelector("#citron_container").addEventListener("click", clickCitron);

    //Set timer til spil

    clearTimeout(gameTimer);
    gameTimer = setTimeout(stopSpil, 30000);

    document.querySelector("#flydende").classList.remove("tid");
    document.querySelector("#flydende").offsetHeight;
    document.querySelector("#flydende").classList.add("tid");


    document.querySelector("#liv1").classList.remove("disappear");
    document.querySelector("#liv2").classList.remove("disappear");
    document.querySelector("#liv3").classList.remove("disappear");
    document.querySelector("#time_board").classList.remove("paused");
    document.querySelector("#time_board2").classList.remove("paused");

    //TODO: Spil musik

    document.querySelector("#sound_baggrundsmusik").volume = 1;
    document.querySelector("#sound_baggrundsmusik").load();
    document.querySelector("#sound_baggrundsmusik").play();
}

function clickGinOrTonic() {
    console.log("clickginortonic");
    console.log(this);
    //Vis disappear-animation
    this.removeEventListener("click", clickGinOrTonic);
    this.classList.add("paused");
    this.querySelector(".gin_sprite").classList.add("disappear");
    this.addEventListener("animationend", nyGinOrTonic);

    //Få et point
    //Vis samlet antal point
    point++;
    console.log("point = " + point);
    document.querySelector(".antal").innerHTML = point;


    //TODO: Spil lyd: SKÅL
    if (Math.random() < 0.5) {
        //spil den ene lyd
        document.querySelector("#sound_dåse").volume = 0.10;
        document.querySelector("#sound_dåse").play();
    } else {
        //spil den anden lyd
        document.querySelector("#sound_hælde").volume = 0.50;
        document.querySelector("#sound_hælde").play();
    }


}

function nyGinOrTonic() {
    console.log("nyGinOrTonic");
    console.log(this);
    //Vis gin og tonic igen
    this.classList.remove("paused");

    this.classList.remove("fallinggin1");
    this.offsetHeight;
    this.classList.add("fallinggin1");

    this.classList.remove("fallinggin2");
    this.offsetHeight;
    this.classList.add("fallinggin2");

    this.classList.remove("fallingtonic1");
    this.offsetHeight;
    this.classList.add("fallingtonic1");


    this.addEventListener("click", clickGinOrTonic);

    this.querySelector(".gin_sprite").classList.remove("disappear");
    //Fjern eksisterende position
    this.classList.remove("position0");
    this.classList.remove("position1");
    this.classList.remove("position2");
    this.classList.remove("position3");
    this.classList.remove("position8");
    this.classList.remove("position9");

    //Giv ny (random) position

    let position = Math.floor(Math.random() * 10);
    this.classList.add("position" + position);


    //this.querySelector(".gin_sprite").classList.remove("disappear");
    //this.offsetHeight;

}

function clickRomOrCola() {
    console.log("clickRomorCola");
    console.log(this);
    //Vis disappear-animation
    this.removeEventListener("click", clickRomOrCola);
    this.classList.add("paused");
    this.querySelector(".rom_sprite").classList.add("disappear");
    this.addEventListener("animationend", nyRomOrCola);
    //Mist et liv--
    //Vis antal glas for liv
    document.querySelector("#liv" + liv).classList.add("disappear");
    liv--;
    console.log("liv = " + liv);



    if (liv == 0) {
        stopSpil();
    } else {
        this.addEventListener("animationend", nyRomOrCola);
    }
    //TODO: Spil lyd: AD
    if (Math.random() < 0.5) {
        //spil den ene lyd
        document.querySelector("#sound_ad").volume = 0.5;
        document.querySelector("#sound_ad").play();
    } else {
        //spil den anden lyd
        document.querySelector("#sound_romogcola").volume = 0.5;
        document.querySelector("#sound_romogcola").play();
    }

    // document.querySelector("#energy_board").innerHTML = "Liv = " + liv;
}

function nyRomOrCola() {
    console.log("nyRomOrCola");
    console.log(this);
    //Vis rom og cola igen
    this.classList.remove("paused");

    this.classList.remove("fallingrom");
    this.offsetHeight;
    this.classList.add("fallingrom");

    this.classList.remove("fallingrom2");
    this.offsetHeight;
    this.classList.add("fallingrom2");

    this.classList.remove("fallingcola");
    this.offsetHeight;
    this.classList.add("fallingcola");

    this.classList.remove("fallingcola2");
    this.offsetHeight;
    this.classList.add("fallingcola2");

    this.addEventListener("click", clickRomOrCola);

    this.querySelector(".rom_sprite").classList.remove("disappear");
    //Fjern eksisterende poistion
    this.classList.remove("position4");
    this.classList.remove("position5");
    this.classList.remove("position6");
    this.classList.remove("position7");
    //Giv ny (random) position

    let position = Math.floor(Math.random() * 10);
    this.classList.add("position" + position);

    this.classList.remove("disappear");
    this.offsetHeight;
}

function clickCitron() {
    console.log("clickCitron");
    console.log(this);
    //Vis disappear-animation;
    this.classList.add("paused");
    document.querySelector(".citron_sprite").classList.add("disappear");
    //Få et liv++
    //Vis samlet antal glas for liv
    document.querySelector("#liv" + liv).classList.add;
    if (liv <= 3) {
        liv++;
    }

    console.log("liv = " + liv);
    document.querySelector("#liv" + liv).classList.remove("disappear");

    //TODO: Spil lyd: Wuhu spice it up
    document.querySelector("#sound_citron").volume = 0.20;
    document.querySelector("#sound_citron").play();
    //Citron falder kun én gang
}

function stopSpil() {
    console.log("stopSpil");
    console.log(this);
    document.querySelector("#gin_container").classList.add("paused");
    document.querySelector("#gin_container1").classList.add("paused");
    document.querySelector("#tonic_container").classList.add("paused");
    document.querySelector("#rom_container").classList.add("paused");
    document.querySelector("#rom_container1").classList.add("paused");
    document.querySelector("#cola_container").classList.add("paused");
    document.querySelector("#cola_container2").classList.add("paused");
    document.querySelector("#citron_container").classList.add("paused");
    document.querySelector("#time_board").classList.add("paused");
    document.querySelector("#time_board2").classList.add("paused");
    //Sluk alle eventlistnere
    document.querySelector("#gin_container").removeEventListener("click", clickGinOrTonic);
    document.querySelector("#gin_container1").removeEventListener("click", clickGinOrTonic);
    document.querySelector("#tonic_container").removeEventListener("click", clickGinOrTonic);
    document.querySelector("#rom_container").removeEventListener("click", clickRomOrCola);
    document.querySelector("#rom_container1").removeEventListener("click", clickRomOrCola);
    document.querySelector("#cola_container").removeEventListener("click", clickRomOrCola);
    document.querySelector("#cola_container2").removeEventListener("click", clickRomOrCola);
    document.querySelector("#citron_container").removeEventListener("click", clickCitron);

    if (point >= 20) {
        console.log("levelComplete");
        levelComplete();
    } else {
        gameOver();
    }

}

function levelComplete() {
    //Skriv "Level Complete - du får XX point" ud i konsollen, hvor XX er antal point
    console.log("levelcomplete");
    gameDone = true;
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#videreknap1").addEventListener("click", startsideVises);

    document.querySelector("#gin_container").classList = ("gin position0");
    document.querySelector("#gin_container1").classList = ("gin position1");
    document.querySelector("#tonic_container").classList = ("tonic position3");
    document.querySelector("#rom_container").classList = ("rom position5");
    document.querySelector("#rom_container1").classList = ("rom position6");
    document.querySelector("#cola_container").classList = ("cola position7");
    document.querySelector("#cola_container2").classList = ("cola position8");
    document.querySelector("#citron_container").classList = ("citron position9");

    document.querySelector("#gin_sprite").classList = ("gin_sprite");
    document.querySelector("#gin_sprite1").classList = ("gin_sprite");
    document.querySelector("#tonic_sprite").classList = ("gin_sprite");
    document.querySelector("#tonic_sprite1").classList = ("gin_sprite");
    document.querySelector("#rom_sprite").classList = ("rom_sprite");
    document.querySelector("#rom_sprite1").classList = ("rom_sprite");
    document.querySelector("#cola_sprite").classList = ("rom_sprite");
    document.querySelector("#cola_sprite2").classList = ("rom_sprite");
    document.querySelector("#citron_sprite").classList = ("citron_sprite");
    document.querySelector("#your_score2").textContent = point;
    document.querySelector("#sound_baggrundsmusik").pause();
    document.querySelector("#sound_romogcola").pause();
    document.querySelector("#sound_hælde").pause();
    document.querySelector("#sound_dåse").pause();
    document.querySelector("#sound_ad").pause();
    document.querySelector("#sound_levelcomplete").volume = 0.60;
    document.querySelector("#sound_levelcomplete").play();
    document.querySelector("#sound_wuhu").volume = 0.60;
    document.querySelector("#sound_wuhu").play();

}

function gameOver() {
    //Skriv "Game Over - du får XX point" ud i konsollen, hvor XX er antal point
    console.log("gameover");
    gameDone = true;

    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#videreknap").addEventListener("click", startsideVises);

    document.querySelector("#gin_container").classList = ("gin position0");
    document.querySelector("#gin_container1").classList = ("gin position1");
    document.querySelector("#tonic_container").classList = ("tonic position3");
    document.querySelector("#rom_container").classList = ("rom position5");
    document.querySelector("#rom_container1").classList = ("rom position6");
    document.querySelector("#cola_container").classList = ("cola position7");
    document.querySelector("#cola_container2").classList = ("cola position8");
    document.querySelector("#citron_container").classList = ("citron position9");

    document.querySelector("#gin_sprite").classList = ("gin_sprite");
    document.querySelector("#gin_sprite1").classList = ("gin_sprite");
    document.querySelector("#tonic_sprite").classList = ("gin_sprite");
    document.querySelector("#tonic_sprite1").classList = ("gin_sprite");
    document.querySelector("#rom_sprite").classList = ("rom_sprite");
    document.querySelector("#rom_sprite1").classList = ("rom_sprite");
    document.querySelector("#cola_sprite").classList = ("rom_sprite");
    document.querySelector("#cola_sprite2").classList = ("rom_sprite");
    document.querySelector("#citron_sprite").classList = ("citron_sprite");


    //Vis din endelige score
    document.querySelector("#your_score1").textContent = point;
    document.querySelector("#sound_baggrundsmusik").pause();
    document.querySelector("#sound_romogcola").pause();
    document.querySelector("#sound_hælde").pause();
    document.querySelector("#sound_dåse").pause();
    document.querySelector("#sound_ad").pause();
    document.querySelector("#sound_gameover").volume = 0.60;
    document.querySelector("#sound_gameover").play();
    document.querySelector("#sound_buuu").volume = 0.60;
    document.querySelector("#sound_buuu").play();


}
