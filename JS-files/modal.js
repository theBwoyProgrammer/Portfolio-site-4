const myProjects = [
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
  {
    image: './images/desksnap.jpg',
    heading: 'Multi-Post Stories Gain+Glory',
    heading1: 'Keeping track of hundreds of components',
    tags: ['HTML', 'CSS', 'Javascripts', 'Rail'],
    tags1: ['Ruby', 'GitHub', 'Codepen'],
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    seeLive: '#',
    seeSource: '#',
  },
];

const workpage = document.querySelector('.workpage');
for (let i = 0; i < myProjects.length; i += 1) {
  workpage.innerHTML += `
  <section class="project-cards"> 
  <div class="placeholder"></div>
   <h2>${myProjects[i].heading}</h2>
  <ul class="languages-list">
  ${myProjects[i].tags
    .map((j) => `<li>${j}</li>`)
    .join('')}
  </ul>
  <button  type="button" class="pro-btn" id="btn-${i}">See Project</button>
 </section>
  `;
}

const modal = document.getElementById('modal-cards');
for (let j = 0; j < myProjects.length; j += 1) {
  const seeBtn = document.querySelectorAll(`[id=btn-${j}]`);
  seeBtn.forEach((bt) => {
    bt.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-img">
        <img src="${myProjects[j].image}" alt="image">
    </div>
    <div class="modal-title">
        <h1>${myProjects[j].heading1}</h1>
    </div>
    <div class="modal-lang">
    <ul>
    ${myProjects[j].tags.map((k) => `<li>${k}</li>`).join('')}
    </ul>
    <ul>
    ${myProjects[j].tags1.map((k) => `<li>${k}</li>`).join('')}
    </ul>
    </div>
    <p>${myProjects[j].desc}</p>
    <div class="buttons">
        <button type="submit" class="btn-bg">see live <img src="./images/seelive.png" alt="see-live" class="btn-img1"></button>
        <button type="submit" class="btn-bg">See Source <img src="./images/Vector.png" alt="see-source" class="btn-img"></button>
    </div>
</div>
    `;
      const closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
      });
    });
  });
}