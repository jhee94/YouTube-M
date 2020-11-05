// const moreBtn = document.querySelector('.into .metadata .moreBtn');
// const title = document.querySelector('.info .metadata .title');

// moreBtn.addEventListener('click', () => {
//   moreBtn.classList.toggle('clicked');
//   title.classList.toggle('clamp');
// });

const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});


const button = document.querySelector('.info .actions li .thumbs');

button.addEventListener('click', () => {
  button.classList.toggle('active');
});
