import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentPage = 1;
let currentQuery = '';
const perPage = 15; 


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    currentQuery = input.value.trim();
    currentPage = 1;

    
    if (!currentQuery) {
        iziToast.warning({
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        hideLoader();
        return;
    }
  
    try {
        const data = await getImagesByQuery(currentQuery, currentPage);

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        } else {
            createGallery(data.hits);

            if (data.totalHits > perPage) {
                showLoadMoreButton();
            }
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            position: 'topRight',
        });
        console.log(error);
    } finally {
        hideLoader();
    }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        createGallery(data.hits);

        const firstCard = document.querySelector('.gallery-item');
        if (firstCard) {
            const { height } = firstCard.getBoundingClientRect();
            window.scrollBy({
                top: height * 2,
                behavior: 'smooth',
            });
        }
        const maxPages = Math.ceil(data.totalHits / perPage);
        if (maxPages > 1) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();

            iziToast.info({
                message: "You've reached the end of search results.",
                position: 'topRight',
            });
        }
    } catch (error) {
        iziToast.error({
            message: 'Failed to load more images.',
            position: 'topRight',
        });
        console.log(error);
    } finally {
        hideLoader();
    }
});
