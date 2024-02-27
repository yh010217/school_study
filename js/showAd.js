document.querySelector('.advertise_right>img').onclick=function(){


    if(document.querySelector('.advertise_right').innerHTML
        ===`<img src="img/왼화살표.png">`){
        document.querySelector('.advertise_right').innerHTML =`<img src="img/오른화살표.png">`;
    }
    else {
        document.querySelector('.advertise_right').innerHTML = `<img src="img/왼화살표.png">`;
    }

    document.querySelector('.advertise_right').classList.
        toggle("showAd");
};