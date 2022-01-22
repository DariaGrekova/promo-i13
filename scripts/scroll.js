const links = document.querySelectorAll('.header-menu__item a')

seamless.polyfill();

links.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault()
    
    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      seamless.elementScrollIntoView(document.querySelector("#present"), {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  })
})