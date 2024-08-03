import { experience } from '../data/experience.js';

function renderExperience() {
  let html = '';

  experience.forEach(item => {
    const { date, description } = item;
    
    html += `
      <div class="data-container">
        <p class="date">${date}</p>
        <p class="experience__description-container stroke stroke__arrow">
          ${description}
        </p>
      </div>
    `;
  });

  document.querySelector('.experience-container').innerHTML = html;
}

renderExperience();