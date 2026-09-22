// Interactions are local: this static exercise does not send customer data.
const form = document.querySelector('.information-form');
const status = document.querySelector('.form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.hidden = false;
  status.textContent = 'Form validated. This demo does not send your information to a server.';
});
form.addEventListener('reset', () => { status.hidden = true; status.textContent = ''; });
document.querySelectorAll('[data-category]').forEach(link => {
  link.addEventListener('click', () => {
    form.elements.comment.value = `I would like to order ${link.dataset.category}.`;
  });
});
document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const detail = document.querySelector(link.getAttribute('href'));
    detail.hidden = !detail.hidden;
    link.setAttribute('aria-expanded', String(!detail.hidden));
    link.textContent = detail.hidden ? 'Read more...' : 'Read less';
  });
});
document.querySelector('.search').addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.querySelector('input').value.trim().toLowerCase();
  const items = [...document.querySelectorAll('.menu-section li')];
  items.forEach(item => item.classList.toggle('search-match', Boolean(query) && item.textContent.toLowerCase().includes(query)));
  const found = document.querySelector('.search-match');
  status.hidden = true;
  if (found) found.scrollIntoView({ block: 'center' });
  else if (query) { status.hidden = false; status.textContent = 'No menu items found.'; }
});
document.querySelectorAll('.vegetarian').forEach(link => link.addEventListener('click', event => {
  event.preventDefault(); document.querySelector('dialog').showModal();
}));
