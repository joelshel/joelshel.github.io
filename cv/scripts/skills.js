import skills from "../data/skills.js";
import capitalize from '../utils/strings.js';

function renderSkills() {
  let html = '';

  skills.forEach(skill => {
    const { skillType, skills, skillIcon } = skill;
    html += `<div class="skill-container"><h3>${capitalize(skillType)}</h3>`

    skills.forEach(skill => {
      const { name, level } = skill;
      let levelHTML = `<i class="fa-solid ${skillIcon}"></i>`.repeat(level);
      levelHTML += `<i class="fa-solid ${skillIcon} empty"></i>`.repeat(5 - level);
      
      html += `
        <p class="skill">
          <span class="skill-name">${name}</span>
          <span class="skill-level">
            ${levelHTML}
          </span>
        </p>
      `;
    });
    html += '</div>'
  })

  document.querySelector('.skills-container').innerHTML = html;
}

renderSkills();
