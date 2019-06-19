
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = "Click";
toggle_close_text = "Close";

toggle.addEventListener(
    "click",
    function () {
        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {
            toggle.innerHTML = toggle_close_text;
        } else {
            toggle.innerHTML = toggle_open_text;
        }
    },
    false
);

setTimeout(function () {
    nav.classList.toggle("open");
}, 800);
    

var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    }
