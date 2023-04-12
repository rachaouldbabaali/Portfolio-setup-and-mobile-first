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

// popup window
const projects = [
  {
    name: 'Tonic',
    featuredImg: './images/1st-project-image.png',
    featuredImgMobile: './images/project-1.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'images/2nd-project-image.png',
    featuredImgMobile: 'images/project-2.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },

  {
    name: 'Tonic',
    featuredImg: 'images/3rd-project-image.png',
    featuredImgMobile: 'images/project-3.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'images/4th-project-image.png',
    featuredImgMobile: 'images/project-4.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },
];

projects.forEach((element, i) => {
  // create all elements used for card
  const projectContainer = document.querySelector('#projects');
  const projectDiv = document.createElement('div');
  const projectImageDiv = document.createElement('div');
  const projectContentDiv = document.createElement('div');
  const projectImageWeb = document.createElement('img');
  const projectImageMobile = document.createElement('img');
  const countImage = document.createElement('img');
  const countImage2 = document.createElement('img');
  const canopyText = document.createElement('h3');
  const backText = document.createElement('h3');
  const yearText = document.createElement('h3');
  const projectHeader = document.createElement('h2');
  const projectBody = document.createElement('div');
  const projectDescription = document.createElement('div');
  const pDescription = document.createElement('p');
  const languageUl = document.createElement('ul');
  const projectBtn = document.createElement('div');

  // initialise elements
  // card image
  projectImageWeb.src = element.featuredImg;
  projectImageWeb.classList.add('project-image-web');
  projectImageWeb.alt = 'project-image';
  projectImageMobile.src = element.featuredImgMobile;
  projectImageMobile.classList.add('first-project-image');
  projectImageMobile.alt = 'First-project';
  // cardheader
  projectHeader.classList.add('project-heading');
  projectHeader.innerText = element.name;
  // stact text
  canopyText.innerText = 'canopy';
  canopyText.classList.add('content-text', 'canopy');
  countImage.src = './images/Counter.svg';
  countImage.classList.add('count-vector');
  backText.innerText = 'Back end dev';
  backText.classList.add('content-text');
  countImage2.src = './images/Counter.svg';
  countImage2.classList.add('count-vector');
  yearText.innerText = '2015';
  yearText.classList.add('content-text');
  pDescription.innerText = 'A daily selection of privately personalized reads; no accounts or sign-ups required';
  languageUl.classList.add('languages');
  // place elements in document
  projectDiv.classList.add('project');
  projectDiv.append(projectImageDiv, projectContentDiv);
  projectImageDiv.classList.add('project-image');
  projectImageDiv.append(projectImageMobile, projectImageWeb);
  projectContentDiv.classList.add('project-content');
  projectContentDiv.append(projectHeader, projectBody);
  projectBody.classList.add('project-body');
  projectBody.append(projectDescription, pDescription, languageUl, projectBtn);
  projectDescription.classList.add('description');
  projectDescription.append(
    canopyText,
    countImage,
    backText,
    countImage2,
    yearText,
  );

  projects[i].technologies.forEach((tech, n) => {
    const languageLi = document.createElement('li');
    languageLi.classList.add('language-used');
    languageUl.append(languageLi);
    languageUl.classList.add('languages-ul');
    languageLi.innerText = projects[i].technologies[n];
  });

  projectContainer.appendChild(projectDiv);

  projectBtn.innerHTML = '<button data-modal-target="#modal" class="btn project-link" >See project</button>';
  projectDiv.classList.add('card-reverse');

  // reverse  card
  if (i % 2 !== 0) {
    projectDiv.style.flexDirection = 'row-reverse';
  } else {
    projectDiv.style.flexDirection = 'row';
  }
});
