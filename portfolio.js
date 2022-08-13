/* eslint-disable */

const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const navLinks = document.querySelectorAll('ul > li.nav-link');

// open menu when nav toggler is clicked and disabe vertical scroll
bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'hidden';
});

// close menu when the close icon is clicked and allow vertical scroll
closeMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'scroll';
});

// close the menu when item is clicked and allow vertical scroll
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    document.body.style.overflowY = 'scroll';
  });
}

const projectsDetails = [
  {
    title: 'Advice App',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'Sneaker Shop',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'YouTube Clone',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'To Do List App',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'E-commerce website',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'Stop Watch',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

];

const projectsContainer = document.getElementById('projects-container');

function showModal() {
  if (!!document.querySelector('.popup-wrapper') === true) {
    document.querySelector('.popup-wrapper').remove();
  }
  document.querySelector('.popup-wrapper').style.display = 'block';
}

// dynamically create the project section

for (let i = 0; i < projectsDetails.length; i += 1) {
  const projectFile = document.createElement('div');
  projectFile.classList.add('project-file');

  const projectImage = document.createElement('div');
  projectImage.classList.add('project-image');

  const imagePlaceholder = document.createElement('div');
  imagePlaceholder.classList.add('image-placeholder');

  projectImage.appendChild(imagePlaceholder);

  projectFile.appendChild(projectImage);

  const projectText = document.createElement('div');
  projectText.classList.add('project-text');

  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectsDetails[i].title;

  projectText.appendChild(projectTitle);

  const projectLangs = document.createElement('div');
  projectLangs.classList.add('project-langs');

  const langList = document.createElement('ul');
  langList.classList.add('lang-list');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const lang = document.createElement('li');
    lang.textContent = projectsDetails[i].technologies[j];
    langList.appendChild(lang);
  }

  projectLangs.appendChild(langList);

  projectText.appendChild(projectLangs);

  const projectButton = document.createElement('div');
  projectButton.classList.add('project-button');

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('seeModal');
  seeProjectButton.type = 'button';
  seeProjectButton.textContent = 'See Project';

  projectButton.appendChild(seeProjectButton);

  projectText.appendChild(projectButton);

  projectFile.appendChild(projectText);

  projectsContainer.appendChild(projectFile);

  seeProjectButton.addEventListener('click', showModal);
}

function closeModal() {
  document.querySelector('.popup-wrapper').style.display = 'none';
}

// dynamically create popup elements

for (let i = 0; i < projectsDetails.length; i += 1) {
  const popupWrapper = document.createElement('div');
  popupWrapper.classList.add('popup-wrapper');

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const closePopup = document.createElement('p');
  closePopup.classList.add('close-popup');
  closePopup.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  popupContent.appendChild(closePopup);

  const popupImage = document.createElement('div');
  popupImage.classList.add('popup-image');
  popupContent.appendChild(popupImage);

  const popupText = document.createElement('div');
  popupText.classList.add('popup-text');

  const popupHeader = document.createElement('h2');
  popupHeader.classList.add('popup-header');
  popupHeader.textContent = projectsDetails[1].popup_title;
  popupText.appendChild(popupHeader);

  const technologies = document.createElement('ul');
  technologies.classList.add('technologies');
  for (let j = 0; j < projectsDetails[i].mobile_popup_technologies.length; j += 1) {
    const list = document.createElement('li');
    list.textContent = projectsDetails[i].mobile_popup_technologies[j];
    technologies.appendChild(list);
  }
  popupText.appendChild(technologies);

  const technologiesDesktop = document.createElement('ul');
  technologiesDesktop.classList.add('technologies-desktop');
  for (let j = 0; j < projectsDetails[i].desktop_popup_technologies.length; j += 1) {
    const lang = document.createElement('li');
    lang.textContent = projectsDetails[i].desktop_popup_technologies[j];
    technologiesDesktop.appendChild(lang);
  }
  popupText.appendChild(technologiesDesktop);

  const popupDesc = document.createElement('p');
  popupDesc.textContent = projectsDetails[i].long_description;
  popupText.appendChild(popupDesc);

  const popupButtons = document.createElement('div');
  popupButtons.classList.add('popup-buttons');

  const button1 = document.createElement('button');
  button1.type = 'button';
  button1.innerHTML = '<a href="https://hatimdev-he.github.io/Portfolio-site-4/" target="_blank"> See Live <i class="fa fa-link" ></i>';
  popupButtons.appendChild(button1);

  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.innerHTML = '<a href="https://github.com/HatimDev-HE/Portfolio-site-4" target="_blank"> See Source  <i class="fab fa-github"></i></a>';
  popupButtons.appendChild(button2);

  popupText.appendChild(popupButtons);

  popupContent.appendChild(popupText);

  popup.appendChild(popupContent);

  popupWrapper.appendChild(popup);

  projectsContainer.appendChild(popupWrapper);

  closePopup.addEventListener('click', closeModal);
}

// validate contact form

const email1 = document.getElementById('email');
const form1 = document.getElementById('contact-form');
const errorElement1 = document.getElementById('error-messages');
errorElement1.setAttribute('class', 'errors');
function validate() {
  if (email1.value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  errorElement1.innerText = 'Please enter the email in lower case';
  errorElement1.style.color = 'red';
  return false;
}
form1.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validate()) {
    form1.submit();
  }
  validate();
});

// set up local storage

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const mailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // store user inputs in an object

  const storageObject = {
    name: nameInput.value,
    email: mailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('userInputs', JSON.stringify(storageObject));
});

// Typewriter

const TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

  const that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum += 1;
    delta = 500;
  }

  setTimeout(() => {
    that.tick();
  }, delta);
};

window.onload = function () {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i += 1) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  const css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};

// display user input if local storage already exists

function displayUserInput() {
  if (JSON.parse(localStorage.getItem('userInputs'))) {
    const { name, email, message } = JSON.parse(localStorage.getItem('userInputs'));

    nameInput.value = name;
    mailInput.value = email;
    messageInput.value = message;
  }
}
displayUserInput();
