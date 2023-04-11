const navBarItems = document.querySelector('.nav-bar').children;
const menuClose = document.querySelector('.close-hamb');
const about = document.querySelectorAll('.mobile-nav-links');
// array distructuring
const [navBarName, navList, menuOpen, containerNav] = navBarItems;
// console.log('object', navBarName, navBarLink, navBarHumb, navBarContainer);

menuOpen.addEventListener('click', () => {
  containerNav.style.display = 'block';
  navList.style.display = 'none';
  menuOpen.style.display = 'none';
  navBarName.style.display = 'none';
});

menuClose.addEventListener('click', () => {
  containerNav.style.display = 'none';
  menuOpen.style.display = 'flex';
  navBarName.style.display = 'flex';
  navList.style.display = 'block';
});

about.forEach((n) => {
  n.addEventListener('click', () => {
    containerNav.style.display = 'none';
    menuOpen.style.display = 'flex';
    navBarName.style.display = 'flex';
    navList.style.display = 'block';
  });
});