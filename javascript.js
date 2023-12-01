const container = document.querySelector('.flex-container');

const content = document.createElement('div');
content.textContent = 'Beware the great power of JAVASCRIPT';

container.appendChild(content);
const bru = document.createElement('div');
bru.textContent = 'Beware the great power of JAVASCRIPT';
container.appendChild(bru);

content.textContent = 'blahblah';

container.textContent("yoyoo")
