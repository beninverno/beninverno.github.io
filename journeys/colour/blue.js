window.onload = function() {
    populatewithcolours();
}

function populatewithcolours() {
    var colorArray = ['#e83737','#e85436','#e86535','#e87935','#e89d35','#e8c435','#e8df35','#c1e835','#a3e835','#79e835','#58e835','#3de835','#35e840','#35e85b','#35e870','#35e882','#35e8a3','#35e8bb','#35e8cd','#35e8df','#35dce8','#35cae8','#35ace8','#3594e8','#3579e8','#355be8','#3535e8','#5835e8','#7635e8','#ac35e8','#cd35e8','#e835e5','#e835b5','#e8359a','#e83576','#e83546']
    for(i = 0; i < 36; i++) {
        var currentDiv = document.getElementsByClassName("column")[i];
        currentDiv.style.backgroundColor = colorArray[i];
        if (i != 28) {
            currentDiv.addEventListener("click", function(){this.classList.add('fade');
                                                            this.style.backgroundColor = "#9ba9c1";
                                                        })
        }
        else if (i == 28) {
            currentDiv.onclick = function(){hideall()};
        }
    }
}

function hideall() {
    var header = document.getElementsByTagName("h1")[0];
    var yes = document.getElementById("yes");
    document.getElementsByClassName("column")[28].onclick = function(){this.classList.add('fade');
                                                                       this.style.backgroundColor = "#9ba9c1";
};
    header.innerHTML = "That is the correct colour!";
    for(i = 0; i < 36; i++) {
        var currentDiv = document.getElementsByClassName("column")[i];
        currentDiv.classList.add('fade');
        currentDiv.style.backgroundColor = '#9ba9c1';
        setTimeout(function(){currentDiv.classList.add('hider')}, 2000);
    setTimeout(function(){
        for(i = 0; i < 6; i++) {
            document.getElementsByClassName("row")[i].classList.add("hider")
        }}, 2000);
    setTimeout(function(){header.innerHTML = "That wasn't too hard, was it? You did great!"}, 2500);
    setTimeout(function(){header.innerHTML = "Let's try again with some more, why don't we? Are you up for the challenge?"}, 6000);
    setTimeout(function(){document.getElementById("yesorno").classList.remove("hider")}, 7000);
    yes.addEventListener("click", function(){hideyesorno()});
    }
}

function hideyesorno(){
    var yesorno = document.getElementById("yesorno");
    var header = document.getElementsByTagName("h1")[0];
    yesorno.classList.add('hider');
    header.innerHTML = "There is only one correct colour. Please choose the correct colour.";
    var colorArray = ['#e83737','#e85436','#e86535','#e87935','#e89d35','#e8c435','#e8df35','#c1e835','#a3e835','#79e835','#58e835','#3de835','#35e840','#35e85b','#35e870','#35e882','#35e8a3','#35e8bb','#35e8cd','#35e8df','#35dce8','#35cae8','#35ace8','#3594e8','#3579e8','#355be8','#3535e8','#5835e8','#7635e8','#ac35e8','#cd35e8','#e835e5','#e835b5','#e8359a','#e83576','#e83546'];
    for(i = 0; i < 6; i++) {
        document.getElementsByClassName("row")[i].classList.remove("hider")
    }
    for(i = 0; i < 36; i++) {
        console.log(i);
        var currentDiv = document.getElementsByClassName("column")[i];
        currentDiv.classList.remove('fade');
        currentDiv.classList.remove('hider');
        currentDiv.style.backgroundColor = colorArray[i];
    }
}

function colourfiller(){
    var colorArray = ['#e83737','#e85436','#e86535','#e87935','#e89d35','#e8c435','#e8df35','#c1e835','#a3e835','#79e835','#58e835','#3de835','#35e840','#35e85b','#35e870','#35e882','#35e8a3','#35e8bb','#35e8cd','#35e8df','#35dce8','#35cae8','#35ace8','#3594e8','#3579e8','#355be8','#3535e8','#5835e8','#7635e8','#ac35e8','#cd35e8','#e835e5','#e835b5','#e8359a','#e83576','#e83546'];

}