function toggleTheme() {
  html.classList.toggle('light-mode')
  localStorage.setItem('theme', html.className)

  if (localStorage.getItem('theme') === 'light-mode') {
    moonIcon.classList.add('fadeIn')
    sunIcon.classList.add('fadeOut')
    sunIcon.classList.remove('fadeIn')
  } else {
    sunIcon.classList.add('fadeIn')
    moonIcon.classList.add('fadeOut')
    moonIcon.classList.remove('fadeIn')
  }
}

(function() {
  if (localStorage.getItem('theme') === 'light-mode') {
    html.classList.add('light-mode')
  }
}())