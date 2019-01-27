window.onload = function() {
    buttonToStart();
}

function buttonToStart() {
    document.getElementById("st").onclick = function() {
        document.getElementById("st").classList.add("hider");
        document.getElementById("float").play();
        document.getElementsByTagName("body")[0].classList.toggle("black");
        backgroundFlash();
    }
}

function toggleBG(x) {
    var body = document.getElementsByTagName("body")[0];
    setTimeout(function() {body.classList.toggle("white")}, x);
    setTimeout(function() {body.classList.toggle("white")}, x+100);
}

function backgroundFlash() {
    toggleBG(9195);
    toggleBG(9548);
    toggleBG(10865);
    toggleBG(11081);
    setTimeout(function() {document.getElementsByTagName("body")[0].classList.toggle("space")}, 12664);
    setTimeout(function() {document.getElementById("floattitle").classList.toggle("hider")}, 12664);
    setTimeout(function() {document.getElementsByTagName("h4")[0].classList.toggle("hider")}, 12664);
    setTimeout(function() {document.getElementById("imagecontainer").classList.toggle("hider")}, 12664);
    changeImages(1, 1, 1, 16248);
    changeImages(1, 0, 2, 16698);
    changeImages(4, 3, 5, 18041);
    changeImages(0, 1, 2, 18252);
    changeImages(2, 2, 1, 19833);
    changeImages(5, 3, 4, 23410);
    changeImages(0, 1, 0, 23858);
    changeImages(5, 5, 5, 25208);
    changeImages(1, 1, 1, 25411);
    changeImages(4, 4, 4, 26771);
    changeImages(0, 2, 1, 26999);
    changeImages(3, 9, 3, 30577);
    changeImages(1, 1, 1, 31026);
    changeImages(9, 9, 9, 32368);
    changeImages(0, 0, 0, 32580);
    changeImages(2, 1, 0, 34158);
    changeImages(1, 0, 2, 38193);
    changeImages(2, 2, 2, 39529);
    changeImages(0, 1, 2, 39742);
    // Chorus Here
    changeImages(7, 1, 2, 41366);
    changeImages(7, 6, 2, 42045);
    changeImages(7, 6, 8, 42732);
    changeImages(7, 6, 9, 44861);
    changeImages(7, 9, 9, 45603);
    changeImages(9, 9, 9, 46302);
    changeImages(3, 9, 9, 48483);
    changeImages(3, 3, 9, 49172);
    changeImages(3, 3, 3, 49831);
    changeImages(3, 3, 5, 52081);
    changeImages(3, 5, 5, 52717);
    changeImages(5, 5, 5, 53412);
    changeImages(3, 3, 3, 55651);
    changeImages(9, 9, 9, 56099);
    changeImages(3, 3, 3, 56551);
    changeImages(9, 9, 9, 56886);
    changeImages(3, 3, 3, 57225);
    changeImages(9, 9, 9, 57448);
    changeImages(3, 3, 3, 57896);
    changeImages(9, 9, 9, 58342);
    changeImages(3, 3, 3, 58676);
    changeImages(9, 9, 9, 59013);
    changeImages(3, 3, 3, 59239);
    changeImages(9, 9, 9, 59683);
    changeImages(3, 3, 3, 60133);
    changeImages(9, 9, 9, 60463);
    changeImages(3, 3, 3, 60799);
    changeImages(9, 9, 9, 61027);
    changeImages(3, 3, 3, 61475);
    changeImages(9, 9, 9, 61925);
    changeImages(3, 3, 3, 62259);
    changeImages(9, 9, 9, 62599);
    changeImages(3, 9, 9, 62820);
    changeImages(3, 3, 9, 63482);
    changeImages(3, 3, 3, 64240);
    changeImages(3, 3, 2, 66403);
    changeImages(3, 1, 2, 67081);
    changeImages(0, 1, 2, 67747);
    changeImages(2, 1, 0, 73560);
    changeImages(1, 1, 1, 77647);
    changeImages(0, 0, 2, 79059);
    changeImages(1, 1, 1, 80785);
    changeImages(1, 2, 0, 84757);
    changeImages(2, 0, 1, 86105);
    changeImages(2, 3, 2, 86347);
    changeImages(3, 1, 3, 87951);
    changeImages(0, 2, 3, 91924);
    changeImages(0, 0, 0, 93465);
    changeImages(1, 3, 2, 95231);
    changeImages(2, 1, 0, 98392);
    changeImages(2, 0, 1, 100492);
    changeImages(3, 3, 3, 100690);
    changeImages(1, 2, 3, 102356);
    changeImages(1, 0, 2, 107788);
    changeImages(0, 1, 3, 109482);
    changeImages(2, 2, 2, 113410);
    changeImages(1, 2, 1, 114754);
    changeImages(0, 0, 0, 115004);
    changeImages(1, 3, 3, 116694);
    changeImages(3, 3, 1, 121923);
    changeImages(0, 1, 2, 122178);
    changeImages(3, 3, 3, 123901);
    changeImages(2, 0, 0, 127867);
    changeImages(1, 1, 2, 129087);
    changeImages(1, 3, 0, 129351);
    changeImages(1, 1, 1, 131106);
    changeImages(0, 1, 3, 134854);
    changeImages(0, 2, 0, 136255);
    changeImages(3, 2, 3, 136513);
    changeImages(4, 1, 4, 138232);
    // come back to you
    changeImages(5, 5, 5, 143992);
    // end come back to you (include or not? not sure will figure out something special maybe)
    changeImages(6, 7, 8, 172145);
    changeImages(8, 6, 7, 172387);
    changeImages(7, 8, 6, 173925);
    changeImages(9, 9, 9, 177955);
    changeImages(7, 8, 7, 179240);
    changeImages(9, 8, 9, 179455);
    changeImages(6, 9, 6, 181255);
    changeImages(9, 3, 9, 185024);
    changeImages(6, 7, 8, 186404);
    changeImages(7, 7, 7, 186601);
    changeImages(8, 8, 8, 188383);
    changeImages(9, 9, 9, 191775);
    changeImages(7, 8, 6, 192218);
    changeImages(8, 6, 7, 193561);
    changeImages(6, 7, 8, 193770);
    changeImages(5, 5, 5, 195453);






    

}

function changeImages(x, y, z, time) {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var imgadress = ["exclamationmarksunset.jpg", "dottedsunset.jpg", "questionmarksunset.jpg", "sunset.jpg", "black.jpg", "white.png", "dottednight.jpg", "exclamationmarknight.jpg", "questionmarknight.jpg", "night.jpg"];
    setTimeout(function() {img1.src = imgadress[x]}, time);
    setTimeout(function() {img2.src = imgadress[y]}, time);
    setTimeout(function() {img3.src = imgadress[z]}, time);
}