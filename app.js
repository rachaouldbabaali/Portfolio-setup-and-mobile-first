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
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },

  {
    name: 'Tonic',
    featuredImg: 'images/3rd-project-image.png',
    featuredImgMobile: 'images/project-3.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },

  {
    name: 'Multi-Post Stories',
    featuredImg: 'images/4th-project-image.png',
    featuredImgMobile: 'images/project-4.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illumlaudantium aliquam quaerat dicta minima.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'javaScript'],
    liveVersion: 'https://rachaouldbabaali.github.io/Portfolio-setup-and-mobile-first/index.html',
    sourceCode: 'https://github.com/rachaouldbabaali/Portfolio-setup-and-mobile-first',
  },
];

const projectContainer = document.querySelector('#projects');

// eslint-disable-next-line array-callback-return
projects.map((element, i) => {
  // create all elements used for card

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

  projectBtn.innerHTML = `<button id="${i}" data-modal-target="#modal" class="btn project-link" >See project</button>`;
  projectDiv.classList.add('card-reverse');

  // reverse  card
  if (i % 2 !== 0) {
    projectDiv.style.flexDirection = 'row-reverse';
  } else {
    projectDiv.style.flexDirection = 'row';
  }
});

// Menu PopUP
const modalContainer = document.querySelector('.popup');
const openModalButton = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

function creatPopup(name, imageSource, description, technologies, liveVersion, sourceCode) {
  const modal = document.createElement('div');
  modal.innerHTML = `<div class="modal active" id="modal">
  <div class="modal-header">
    <h4 class="modal-heading">${name}</h4>
    <h4 data-close-button onclick="closeModal()"class="modal-close">&times;</h4>
  </div>
  <div class="small-description">
  <p class="canopy modal-describe">CANOPY</p>
  <img
    src="./images/Counter.svg"
    class="count-vector"
    alt="null"
  />
  <p class="modal-describe">BACK END DEV</p>
  <img
    src="./images/Counter.svg"
    class="count-vector"
    alt="null"
  />
  <p class="modal-describe">2015</p>
  </div>
  <img
  src="${imageSource}"
  class="modal-img"
  alt=""
  />
  <div class="modal-content">
  <p class="modal-texts">
    ${description}
  </p>
  <div class="modal-contact">
    <ul class="languages modal-ul">
      ${technologies.map((tech) => `<li class="language-used">${tech}</li>`).join('')}
    </ul>
    <hr class="modal-hr" />
    <a href="${liveVersion}">
      <button class="btn modal-btn" type="submit">
        See live
        <img
          src="./images/git-modalicon.svg"
          class="modal-vectors"
          alt="git"
        />
      </button>
    </a>
    <a href="${sourceCode}">
      <button class="btn modal-btn" type="submit">
        See Source
        <img
          src="./images/source-code-icon.svg"
          class="modal-vectors"
          alt="source-code"
        />
      </button>
    </a>
  </div>
  </div>
  `;
  modalContainer.append(modal);
}

function openModal(name, imgSource, description, technologies, liveVersion, sourceCode) {
  creatPopup(name, imgSource, description, technologies, liveVersion, sourceCode);
  overlay.classList.add('active');
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  const modal = modalContainer.children[0];
  modalContainer.removeChild(modal);
  overlay.classList.remove('active');
}

openModalButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    openModal(
      projects[event.target.id].name,
      projects[event.target.id].featuredImg,
      projects[event.target.id].description,
      projects[event.target.id].technologies,
      projects[event.target.id].liveVersion,
      projects[event.target.id].sourceCode,
    );
  });
});

// form validation
const contactForm = document.querySelector('#contact-form');
const contactEmail = document.querySelector('#contact-email');
const errorHolder = document.querySelector('.error');
contactForm.addEventListener('submit', (e) => {
  const message = contactEmail.value;
  const messageList = message.replace(/[^a-zA-Z]/g, '').split('');
  for (let i = 0; i < messageList.length; i += 1) {
    if (messageList[i] === messageList[i].toUpperCase()) {
      errorHolder.innerText = 'Error: emails must be written with lowercase characters.';
      e.preventDefault();
    }
  }
});

// local storage
const name = document.querySelector('#user-name');
const email = document.querySelector('#contact-email');
const message = document.querySelector('#msg');
const savedData = JSON.parse(localStorage.getItem('myFormData')) || {};
function saveFormData() {
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('myFormData', JSON.stringify(formData));
}
// Populate the input fields with saved data (if any)
name.value = savedData.name || '';
email.value = savedData.email || '';
message.value = savedData.message || '';
name.addEventListener('input', saveFormData);
email.addEventListener('input', saveFormData);
message.addEventListener('input', saveFormData);
