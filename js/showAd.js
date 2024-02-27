document.querySelector('#advertise_right_button').onclick=function(){

    if(document.querySelector('#advertise_right_button')
            .innerHTML===`<img src="img/왼화살표.png"><p>밀크T<br>학습<br>시작</p>`){
        document.querySelector('#advertise_right_button')
            .innerHTML =`<img src="img/오른화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    else {
        document.querySelector('#advertise_right_button')
            .innerHTML = `<img src="img/왼화살표.png"><p>밀크T<br>학습<br>시작</p>`;
    }
    document.querySelector('.advertise_right').classList.
    toggle("showAd");

};


document.querySelector('#inner_tab_button').onclick=function(){
    document.querySelector('.inner_tab_wrap').classList.
    toggle("inner_tab_wrap_open");

    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_open");
    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_close");
    //innertab 의 크기만큼 for문 돌리고 거기서 open 돼있는거 찾으면 지우고(toggle로 가능한가)
}

document.querySelector('#nyangi').onclick=function(){
    document.querySelector('.inner_tab_wrap').classList.
    toggle("inner_tab_wrap_open");

    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_open");
    document.querySelector('.inner_tab').classList.
    toggle("inner_tab_close");
    //innertab 의 크기만큼 for문 돌리고 거기서 open 돼있는거 찾으면 지우고(toggle로 가능한가)
}

