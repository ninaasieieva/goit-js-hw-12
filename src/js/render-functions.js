import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

let lightBox;
export function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.insertAdjacentHTML('beforeend', images
        .map(image => `
        <div class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong><br>${image.likes}</p>
                <p><strong>Views:</strong><br>${image.views}</p>
                <p><strong>Comments:</strong><br>${image.comments}</p>
                <p><strong>Downloads:</strong><br>${image.downloads}</p>
            </div>
        </div>`).join('')
    );
    if (lightBox) {
        lightBox.refresh();
    } else {
        lightBox = new SimpleLightbox('.gallery a',{
          captions: true,
          captionType: 'attr',
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
        });
    }    
}

export function showLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
}

export function hideLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}

export function notFoundMessage() {
  iziToast.warning({
    title: 'Not found',
    message: 'Sorry, there are no images matching search query. Please try again!',
    position: 'topRight',
  });
}

export function endOfListMessage() {
  iziToast.info({
    title: 'End of List',
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
  });
}

export function errorMessage(error) {
  iziToast.error({
    title: 'Error',
    message: error.message,
    position: 'topRight',
  });
}

export function showLoadMoreButton() {
  const loadMoreButton = document.getElementById('loadMoreButton');
  loadMoreButton.style.display = 'inline-block';
}

export function hideLoadMoreButton() {
  const loadMoreButton = document.getElementById('loadMoreButton');
  loadMoreButton.style.display = 'none';
}

export function scrollDown() {
  const galleryItem = document.querySelector('.gallery-item');
  if (!galleryItem) {
    return;
  }
  const pxToScroll = galleryItem.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: pxToScroll,
    behavior: 'smooth'
  });
}