


// creating mobile menue elements

let div = document.createElement('div'),
      ul = document.createElement('ul'),

      li = document.createElement('li'),
      link = document.createElement('a');
      link.src = 'home';
      link.textContent = 'Portfolio';
      li.appendChild(link)
      ul.appendChild(li);

      li = document.createElement('li');
      link = document.createElement('a');
      li.src = 'about-me';
      link.textContent = 'About';
      li.appendChild(link)
      ul.appendChild(li);
      
      li = document.createElement('li');
      link = document.createElement('a');
      li.src = 'contact-info';
      link.textContent = 'Contact';



// adding attributes to mobile menue items

ul.classList.add('anchors-list');
link.classList.add('a');


li.appendChild(link);
ul.appendChild(li);
div.appendChild(ul);


icon = document.querySelector('#menu-icon');

icon.onclick = function (){
    div.classList.toggle('mobile-menu')
}

document.body.appendChild(div);


