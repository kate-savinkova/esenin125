const imgs = document.querySelectorAll('img[data-selector]');
const spoilers = document.querySelectorAll('div[data-spoiler]');
const closeButtons = document.querySelectorAll('i.spoiler__button');

const showSpoiler = index => {
  const spoilerToShow = document.querySelector(`div[data-spoiler="${index}"]`);
  spoilerToShow.classList.remove('hidden');
  spoilerToShow.classList.add('showed');
};

imgs.forEach(img =>
  img.addEventListener('click', event => {
    const target = event.target;
    const index = target.dataset.selector;
    return showSpoiler(index);
  })
);

const hideSpoiler = button => {
  const spoilerToHide = button.closest('div[data-spoiler]');
  spoilerToHide.classList.remove('showed');
  spoilerToHide.classList.add('hidden');
};

closeButtons.forEach(button =>
  button.addEventListener('click', () => hideSpoiler(button))
);

const backToTopButton = document.querySelector('i#back-to-top');
const header = document.querySelector('.heading');

backToTopButton.addEventListener('click', () =>
  header.scrollIntoView({ behavior: 'smooth' })
);

const headerArrow = document.querySelector('#arrow');
const infoBlock = document.querySelector('.secblock');

headerArrow.addEventListener('click', () =>
  infoBlock.scrollIntoView({behavior: 'smooth' })
);
