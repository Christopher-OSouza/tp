function playSera() {
    let a;
    a=Math.random()*2;
    var audio;
    switch(Math.round(a))
    {
        case 0:
         audio = new Audio("sera.ogg");
        break;
        case 1:
        audio = new Audio("seramesmo.ogg");
        break;
        case 2:
        audio = new Audio("temessatbm.ogg");
            break;
    }
    audio.play();

}


