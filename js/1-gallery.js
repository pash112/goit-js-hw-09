import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2020/10/25/23/47/forest-5689372__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2020/10/25/23/47/forest-5689372_1280.jpg',
        description: 'Forest Scene',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg',
        description: 'Aurora Borealis',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        description: 'Majestic Tree',
    },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
    .map(
        ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
  `,
    )
    .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
