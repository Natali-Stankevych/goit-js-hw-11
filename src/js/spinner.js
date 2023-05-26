
import { refs } from "./refs";

export function spinnerPlay () {
    refs.body.classList.add('Loading');
}

export function spinnerStop() {
    setTimeout(function () {
        refs.body.classList.remove('Loading');
        refs.body.classList.add('Loading');
    }, 1000);
}

