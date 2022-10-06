import {
    gsap
} from "gsap";


gsap.to("#first-line", {
    duration: 1,
    x: 500,
    alpha: 0
});
gsap.to("#second-line", {
    duration: 1,
    x: 500,
})