const btn  = document.querySelector('.btn--projects');

btn.addEventListener('click', (e) => {
  console.log(e.target);
  window.Location.href = "projects.html";
})