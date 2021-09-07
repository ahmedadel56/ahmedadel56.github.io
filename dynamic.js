


// creating mobile menue elements

let div = document.createElement('div'),
    content = document.createElement('div'),
      close_btn = document.createElement('a');
    div.appendChild(close_btn);
    div.appendChild(content)

let   icon = document.querySelector('#menu-icon');
      link = document.createElement('a');
      link.src = 'home';
      link.textContent = 'Portfolio';
      content.appendChild(link);

      link = document.createElement('a');
      link.src = 'about-me';  
      link.textContent = 'About';
      content.appendChild(link)
      
      link = document.createElement('a');
      link.src = 'contact-info';
      link.textContent = 'Contact';
      content.appendChild(link);


// adding attributes to mobile menue items
div.id = 'container';
div.className = 'mobile-menu';
close_btn.href = 'javascript:void(0)';
close_btn.className = 'closebtn';
content.className = 'content'
document.body.appendChild(div);

function openContainer(){
    document.getElementById("container").style.height = "100%";


}

function closecContainer (){
    document.getElementById("container").style.height = '0%';
}

icon.addEventListener('click', openContainer);
close_btn.onclick = closecContainer();


console.log(icon)

