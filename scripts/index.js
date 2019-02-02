window.onload = function() {
    main();
}
function main() {
    var titleArray = ["titles/bensworld1.gif", "titles/bensworld2.gif", "titles/bensworld3.png", "titles/bensworld4.png", "titles/bensworld5.png", "titles/bensworld6.gif", "titles/bensworld7.png", "titles/bensworld8.png", "titles/bensworld9.gif", "titles/bensworld10.png", "titles/bensworld11.png", "titles/bensworld12.png", "titles/bensworld13.png", "titles/bensworld14.png", "titles/bensworld15.png", "titles/bensworld16.png"];
    var imgArray = ["pictures/couple1.gif", "pictures/cover.jpg", "pictures/coverblue.jpg", "pictures/coverRED.jpg", "pictures/duck.jpg", "pictures/rose.jpg", "pictures/sleepincolor.jpg", "pictures/vertigo.jpg", "pictures/weeson.jpg"];
    var bgcolourArray = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"];
    var musicArray = ["music/megaflora.mp3", "music/shootingstars.mp3", "music/zealots.mp3"];
    var titleNum = Math.floor((Math.random() * titleArray.length));
    var imgNum = Math.floor((Math.random() * imgArray.length));
    var bgcolourNum = Math.floor((Math.random() * bgcolourArray.length));
    var musicNum = Math.floor((Math.random() * musicArray.length));
    document.getElementById("header").src = titleArray[titleNum];
    document.getElementById("picture").src = imgArray[imgNum];
    document.getElementsByTagName("body")[0].style.backgroundColor = bgcolourArray[bgcolourNum];
    document.getElementById("music").onclick = function(){document.getElementById("audio").src = musicArray[musicNum];
                                                        document.getElementById("audio").play();
                                                        document.getElementById("music").style.display = "none";};

}

function gotosite() {
    window.location = document.getElementsByTagName("select")[0].value;
}