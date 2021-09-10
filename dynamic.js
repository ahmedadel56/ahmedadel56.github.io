// creating mobile menue elements

const div = document.createElement('div');
const content = document.createElement('div');
const closeBtn = document.createElement('a');
closeBtn.innerHTML = '&times;';

div.appendChild(closeBtn);
div.appendChild(content);

const icon = document.querySelector('#menu-icon');
let link = document.createElement('a');
link.href = '#news';
link.textContent = 'Portfolio';
link.className = 'nav-click';
content.appendChild(link);

link = document.createElement('a');
link.href = '#about';
link.textContent = 'About';
link.className = 'nav-click';
content.appendChild(link);

link = document.createElement('a');
link.href = '#contact-info';
link.textContent = 'Contact';
link.className = 'nav-click';
content.appendChild(link);

// adding attributes to mobile menue items
div.id = 'container';
div.className = 'mobile-menu';
closeBtn.className = 'closebtn';
content.className = 'content';
document.body.appendChild(div);

// adding functionality to elements

function openContainer() {
  document.getElementById('container').style.height = '100%';
}

function closecContainer() {
  document.getElementById('container').style.height = '0%';
}

icon.addEventListener('click', openContainer);
closeBtn.addEventListener('click', closecContainer);
const navLink = document.querySelectorAll('.nav-click');
navLink.forEach((a) => a.addEventListener('click', closecContainer));

// pop up window info

const mockData = [
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Data Dashboard Healthcare',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Website Protfolio',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Data Dashboard Healthcare',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Website Protfolio',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
  {
    headerCard: 'Profesional Art Printing Data More',
    textCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    badgesCard: ['html', 'bootstrap', 'Ruby'],
    imageURL: './images/popup-img.png',
    liveURL: 'https://www.github.com',
    projectURL: 'https://www.github.com/ahmedadel56',
  },
];

function loadCards(cardsData = mockData) {
  cardsData.forEach((element) => {
    const card = document.createElement('div');
    card.className = 'popup';
    const popupHead = document.createElement('div');
    popupHead.className = 'popup-head';
    const header = document.createElement('h2');
    header.className = 'popup-header';
    header.innerText = element.headerCard;
    const closeCard = document.createElement('a');
    closeCard.innerHTML = '&times;';
    closeCard.className = 'close';
    const skills = document.createElement('div');
    skills.className = 'skills';
    element.badgesCard.forEach((e) => {
      const skill = document.createElement('div');
      skill.className = 'skill';
      skill.innerText = e;
      skills.appendChild(skill);
    });
    const projectBody = document.createElement('div');
    projectBody.className = 'project-body';
    const popupImage = document.createElement('div');
    popupImage.className = 'popup-img';
    popupImage.style.backgroundImage = `Url(${element.imageURL})`;
    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    const bodyText = document.createElement('p');
    bodyText.innerText = element.textCard;
    const demoButtons = document.createElement('div');
    demoButtons.className = 'demo-buttons';
    const footerLink1 = document.createElement('button');
    footerLink1.type = 'button';
    footerLink1.innerHTML = '<span>See Live</span> <img src="./icons/live-demo.svg" alt="Live Demo">';
    footerLink1.addEventListener('click', () => { window.location.replace('https://github.com/ahmedadel56/ahmedadel56.github.io'); });
    const footerLink2 = document.createElement('button');
    footerLink2.type = 'button';
    footerLink2.innerHTML = '<span>See Source</span> <img src="./icons/github-Vector.svg" alt="Source code on github">';
    footerLink1.addEventListener('click', () => { window.location.replace('https://github.com/ahmedadel56/ahmedadel56.github.io'); });
    popupHead.appendChild(header);
    popupHead.appendChild(closeCard);
    projectBody.appendChild(popupImage);
    wrap.appendChild(bodyText);
    demoButtons.appendChild(footerLink1);
    demoButtons.appendChild(footerLink2);
    wrap.appendChild(demoButtons);
    projectBody.appendChild(wrap);
    card.appendChild(popupHead);
    card.appendChild(skills);
    card.appendChild(projectBody);

    document.body.appendChild(card);
  });
}
loadCards();
const project = Array.from(document.querySelectorAll('.card-work1 button,.card-work button'));
const popup = Array.from(document.querySelectorAll('.popup'));
project.forEach((elem) => elem.addEventListener('click', () => {
  popup[project.indexOf(elem)].style.display = 'flex';
  document.body.style.backgroundColor = '#979493';
}));

const closeCard = document.querySelectorAll('.close');
closeCard.forEach((elem) => elem.addEventListener('click', () => {
  popup.forEach((elem) => { elem.style.display = 'none'; });
  document.body.style.backgroundColor = '#fff';
}));