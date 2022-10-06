import {
    gsap
} from "gsap";


gsap.from("#first-line", {
    duration: 1,
    x: -200,
    alpha: 0
});
gsap.from("#second-line", {
    duration: 1,
    x: -100,
    alpha: 0,
    delay: 0.5
});