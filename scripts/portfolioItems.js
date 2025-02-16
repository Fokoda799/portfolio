const items = [
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'},
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'},
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'},
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'},
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'}, 
  {image: 'https://placehold.co/600x400', title: 'Project' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus', category: 'Web Development'},
]

const portfolioCard = (item, index) => {
  return `
    <div class="portfolio__item" key="${index}">
        <div class="portfolio__image-wrapper">
            <img src="${item.image}" alt="Project ${index + 1}" class="portfolio__image">
            <div class="portfolio__overlay">
                <div class="portfolio__zoom" id="${index}">
                    <img src='imgs/zoom.svg' alt="Zoom In" class="portfolio__zoom-icon" id="${index}">
                </div>
                <h3 class="portfolio__item-title">${item.title} ${index + 1}</h3>
            </div>
        </div>
    </div>`
}

const moreProjects = `
  <div class="portfolio__item">
      <div class="portfolio__image-wrapper">
          <h2>All Projects =></h2>
      </div>
  </div>
`

items.forEach((item, index) => {
  if (index > 4) {
    document.querySelector('.portfolio__grid').insertAdjacentHTML('beforeend', moreProjects);
    return;
  }

  const card = portfolioCard(item, index);
  document.querySelector('.portfolio__grid').insertAdjacentHTML('beforeend', card);
})

document.querySelector('.portfolio__grid').addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);
  document.querySelector('.project__title').textContent = items[target.id].title;
  document.querySelector('.project__category').textContent = items[target.id].category;
  document.querySelector('.project__description').textContent = items[target.id].description;
  document.querySelector('.project__image').src = items[target.id].image;
  document.querySelector('.project__popup').classList.add('active');
  document.querySelector('.popup').classList.add('active');
});

document.querySelector('.project__close-icon').addEventListener('click', () => {
  document.querySelector('.project__popup').classList.remove('active');
  document.querySelector('.popup').classList.remove('active');
});

document.querySelector('.project__close-btn').addEventListener('click', () => {
  document.querySelector('.project__popup').classList.remove('active');
  document.querySelector('.popup').classList.remove('active');
});