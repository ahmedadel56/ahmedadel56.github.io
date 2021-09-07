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