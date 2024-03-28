const navItems = document.querySelector(".nav_items");
const openNavbtn = document.querySelector("#open_nav-btn");
const closeNavbtn = document.querySelector("#close_nav-btn");

const openNav = () => {
  navItems.style.display = "flex";
  openNavbtn.style.display = "none";
  closeNavbtn.style.display = "inline-block";
};

const closeNav = () => {
  navItems.style.display = "none";
  openNavbtn.style.display = "inline-block";
  closeNavbtn.style.display = "none";
};

openNavbtn.addEventListener("click", openNav);
closeNavbtn.addEventListener("click", closeNav);


const sidebar = document.querySelector('aside');
const show = document.querySelector('#show_btn');
const hide = document.querySelector('#hide_btn');

const showSidebar = () =>{
  sidebar.style.left = '0';
  show.style.display = 'none';
  hide.style.display = 'inline-block';
}

const hideSidebar = () =>{
  sidebar.style.left = '100%';
  show.style.display = 'inline-block';
  hide.style.display = 'none';
}

show.addEventListener('click', showSidebar);
hide.addEventListener('click', hideSidebar);