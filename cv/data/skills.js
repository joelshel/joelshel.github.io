const codingSkills = [{
  name: 'Python',
  level: 5
}, {
  name: 'C and C++',
  level: 3
}, {
  name: 'R',
  level: 3
}, {
  name: 'SQL',
  level: 3
}, {
  name: 'Shell Scripting (Bash)',
  level: 4
}, {
  name: 'HTML and CSS',
  level: 4
}, {
  name: 'Javascript',
  level: 4
}];

const languageSkills = [{
  name: 'Portuguese (native)',
  level: 5
}, {
  name: 'English',
  level: 4
}];

const otherSkills = [{
  name: 'Office 365',
  level: 4
}, {
  name: 'Linux',
  level: 5
}, {
  name: 'RAxML',
  level: 3
}, {
  name: 'MAFFT',
  level: 3
}, {
  name: 'MrBayes',
  level: 3
}, {
  name: 'Biopython',
  level: 3
}, {
  name: 'Power BI',
  level: 4
}, {
  name: 'GIMP',
  level: 4
}];

// skills
export default [{
  skillType: 'coding',
  skills: codingSkills,
  skillIcon: 'fa-code'
}, {
  skillType: 'languages',
  skills: languageSkills,
  skillIcon: 'fa-language'
}, {
  skillType: 'others',
  skills: otherSkills,
  skillIcon: 'fa-laptop'
}];
