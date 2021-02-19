// navigation 
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".anav-links");
    const navLinks = document.querySelectorAll(".anav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("anav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });

}

navSlide();

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.anavbar').addClass("sticky");
        } else {
            $('.anavbar').removeClass("sticky");
        }
    });
})

// about 
$(document).ready(function() {
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Graphics Designer", "Content Writer", "Student", "Artist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});


(function() {
    'use strict';
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();