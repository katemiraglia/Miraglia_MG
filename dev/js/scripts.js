import {
    gsap
} from "gsap";


gsap.from("#first-line", {
    duration: 0.5,
    alpha: 0,
    y: -100
});
gsap.from("#second-line", {
    duration: 0.5,
    alpha: 0,
    y: -50,
    delay: 0.25
});
gsap.from("#view", {
    duration: 0.5,
    alpha: 0,
    y: 50,
    delay: 0.35
});


let button = document.querySelector("#view");
button.addEventListener("mouseover", function () {
    gsap.to("#view", {
        duration: 0.25,
        scale: 2
    });

    gsap.to("#first-line", {
        duration: 0.25,
        alpha: 0,
        y: 50
    });
    gsap.to("#second-line", {
        duration: 0.25,
        alpha: 0,
        y: 25
    });

});

button.addEventListener("mouseout", function () {
    gsap.to("#view", {
        duration: 0.25,
        scale: 1
    });
    gsap.to("#trail-btn i", {
        duration: 0.25,
        rotateY: 0
    });

    gsap.to("#first-line", {
        duration: 0.25,
        alpha: 1,
        y: 0
    });
    gsap.to("#second-line", {
        duration: 0.25,
        alpha: 1,
        y: 0
    });
});