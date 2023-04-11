const navBarItems = document.querySelector('.nav-bar').children;
const menuClose = document.querySelector('.close-hamb');
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
});
