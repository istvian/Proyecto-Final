function myFunction() {
    var x = document.getElementById("hamb");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
span.onclick = function() {
    modal.style.display = "none";
}

function pop(num, text) {
    var img = document.getElementById("popImg");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    img.src = 'img/gallery/carrousel' + num + '.jpg';
    caption.innerHTML = text;
}