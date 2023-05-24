import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { PixabayApiImages } from './pixabay-api';
import { reateMarcup } from './createMarcup';
import { refs } from './refs';
import { spinnerPlay, spinnerStop } from './spinner';


refs.form.addEventListener('submit', onSubmitForm);

spinnerPlay();
spinnerStop();

const pixabay = new PixabayApiImages();
const lightboxGallery = new SimpleLightbox('.gallery a');


