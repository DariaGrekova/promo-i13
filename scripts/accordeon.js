const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');

  const tabsClose = () => {
    chItems.forEach((item) => {
        item.querySelector('.characteristics__title').classList.remove('active');           
        item.querySelector('.characteristics__description').classList.remove('open');       
        item.querySelector('.characteristics__description').style.height = '';              
    });
  }

  chItems.forEach(item => {
      const chButton = item.querySelector('.characteristics__title');
      const chDescription = item.querySelector('.characteristics__description');

      chButton.addEventListener('click', () => {

        if (chDescription.classList.contains('open')) {
          chDescription.style.height = '';

        } else {
          tabsClose();     
          chDescription.style.height = chDescription.scrollHeight + 'px';

        }
        
        chButton.classList.toggle('active');
        chDescription.classList.toggle('open');
      });

    })

// без автоскрытия выпадающего списка

  //chItems.forEach(item => {
  //  const chButton = item.querySelector('.characteristics__title')
  //  const chDescription = item.querySelector('.characteristics__description')

  //  chButton.addEventListener('click', () => {

  //    if (chDescription.classList.contains('open')) {
  //      chDescription.style.height = ''

  //    } else {
  //      chDescription.style.height = chDescription.scrollHeight + 'px'

  //    }
      
  //    chButton.classList.toggle('active')
  //    chDescription.classList.toggle('open')
  //  })


  //})

}

accordeon()