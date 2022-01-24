const sendForm = () => {
  const btnOpenMidal = document.querySelector('.card-details__button_delivery');
  const cardDetailsTitle = document.querySelector('.card-details__title');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal__title');
  const modaClose = modal.querySelector('.modal__close');
  const modalForm = modal.querySelector('form');


  btnOpenMidal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = cardDetailsTitle.textContent;
  })

  modaClose.addEventListener('click', () => {
    modal.style.display = 'none';
  })

  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const labels = modal.querySelectorAll('.modal__label');

    const sendMessage = {}

    labels.forEach(label => {
      const span = label.querySelector('span');
      const input = label.querySelector('input');

      sendMessage[span.textContent] = input.value;
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendMessage),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        modal.style.display = 'none';

        labels.forEach(label => {
          const input = label.querySelector('input');
          input.value = '';
        })
      })      
  })

}

sendForm()