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
    name: 'RAKI BOOK STORE',
    featuredImg: './images/RAKIBookStore.png',
    featuredImgMobile: './images/RAKIBookStore-m.png',
    description:
      'Rakibook store is an online bookstore that offers a wide variety of books across multiple genres. The store provides a convenient and user-friendly platform for customers to browse and purchase books from the comfort of their homes. ',
    technologies: ['HTML', 'CSS', 'javaScript', 'API', 'GitHub', 'Jest'],
    liveVersion: 'https://rachaouldbabaali.github.io/JavaScript-capstone-/dist/',
    sourceCode: 'https://github.com/rachaouldbabaali/JavaScript-capstone-',
  },

  {
    name: 'SmartEd Online School',
    featuredImg: 'images/smarted.png',
    featuredImgMobile: 'images/smarted-m.png',
    description:
      'SmartEd Online is a leading online school that offers a wide range of courses and programs to students of all ages.',
    technologies: ['HTML', 'CSS', 'javaScript', 'Local Storage', 'GitHub'],
    liveVersion: 'https://rachaouldbabaali.github.io/capstone-1/',
    sourceCode: 'https://github.com/rachaouldbabaali/capstone-1',
  },

  {
    name: 'Leaderboard List',
    featuredImg: 'images/leaderboard.png',
    featuredImgMobile: 'images/leaderboard-m.png',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technologies: ['HTML', 'SASS', 'javaScript', 'API', 'Webpack', 'GitHub'],
    liveVersion: 'https://rachaouldbabaali.github.io/Leaderboard-list-app/dist/',
    sourceCode: 'https://rachaouldbabaali.github.io/Leaderboard-list-app',
  },

  {
    name: 'To Do List',
    featuredImg: 'images/todolist.png',
    featuredImgMobile: 'images/todolist-m.png',
    description:
      'A to-do list project is a simple application that allows users to create a list of tasks that they need to complete. The user can add new tasks to the list, mark tasks as completed, and remove tasks from the list.',
    technologies: ['HTML', 'SCSS', 'javaScript', 'Webpack', 'GitHub', 'Jest'],
    liveVersion: 'https://rachaouldbabaali.github.io/To-do_list/dist/',
    sourceCode: 'https://github.com/rachaouldbabaali/To-do_list',
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
  const languageDiv = document.createElement('div');
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
  canopyText.innerText = 'Racha Ouldbabaali';
  canopyText.classList.add('content-text', 'canopy');
  countImage.src = './images/Counter.svg';
  countImage.classList.add('count-vector');
  backText.innerText = 'Front end dev';
  backText.classList.add('content-text');
  countImage2.src = './images/Counter.svg';
  countImage2.classList.add('count-vector');
  yearText.innerText = '2023';
  yearText.classList.add('content-text');
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
    pDescription.innerText = projects[i].description;
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

if (localStorage == null) {
  const formData = {
    user_name: '',
    user_email: '',
    user_message: '',
  };
  localStorage.setItem('myFormData', JSON.stringify(formData));
}

const name = document.querySelector('#user-name');
const email = document.querySelector('#contact-email');
const message = document.querySelector('#msg');
const savedData = JSON.parse(localStorage.getItem('myFormData'));
// read data from local storage if any
name.value = savedData.user_name;
email.value = savedData.user_email;
message.value = savedData.user_message;

// eslint-disable-next-line no-unused-vars
function changeField(event) {
  const changedValue = event.target.value;
  const fieldName = event.target.name;
  const infoStore = JSON.parse(localStorage.getItem('myFormData'));
  localStorage.setItem('myFormData', JSON.stringify({ ...infoStore, [fieldName]: changedValue }));
}