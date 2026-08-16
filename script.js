const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const whatsappNumber = '919000000000';
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const grade = document.getElementById('grade').value;
  const quantity = document.getElementById('quantity').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = `Hello TMT Bars Patiala,\n\nI would like a quotation.\n\nName: ${name}\nPhone: ${phone}\nGrade: ${grade}\nQuantity: ${quantity || 'Not specified'}\nRequirement: ${message || 'Not specified'}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
});