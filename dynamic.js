


// creating mobile menue elements

let div = document.createElement('div'),
    content = document.createElement('div'),
      close_btn = document.createElement('a');
      close_btn.innerHTML = '&times;';
    div.appendChild(close_btn);
    div.appendChild(content)

let   icon = document.querySelector('#menu-icon'),
      link = document.createElement('a');
      link.href = '#news';
      link.textContent = 'Portfolio';
      link.className = 'nav-click';
      content.appendChild(link);

      link = document.createElement('a');
      link.href = '#about';  
      link.textContent = 'About';
      link.className = 'nav-click';
      content.appendChild(link)
      
      link = document.createElement('a');
      link.href = '#contact-info';
      link.textContent = 'Contact';
      link.className = 'nav-click';
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
close_btn.addEventListener('click',closecContainer);
let nav_link = document.querySelectorAll('.nav-click');
nav_link.forEach(a => a.addEventListener('click',closecContainer))
console.log(nav_link)

