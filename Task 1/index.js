// JavaScript functionality to truncate and expand the description
const description = document.querySelector('.description');
const readMoreBtn = document.getElementById('readMoreBtn');

const initialLines = 3;
const lineHeight = parseInt(getComputedStyle(description).lineHeight);

const fullHeight = lineHeight * initialLines;
const originalText = description.textContent;
const truncatedText = originalText.slice(0, fullHeight) + 'At Apple, innovation is more than a philosophy; it\'s woven into the fabric of our identity. For decades...';

let isExpanded = false;

description.textContent = truncatedText;

readMoreBtn.addEventListener('click', () => {
  if (isExpanded) {
    description.textContent = truncatedText;
    readMoreBtn.textContent = 'Click here to Read More';
  } else {
    description.textContent = originalText;
    readMoreBtn.textContent = 'Click here to Read Less';
  }
  
  isExpanded = !isExpanded;
});
