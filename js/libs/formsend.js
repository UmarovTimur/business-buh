document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
         console.log(formData.values);
         form.classList.add('_sending');
         let response = await fetch('files/sendmail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            alert(relust.message);
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
         } else {
            alert('Ошибка');
            form.classList.remove('_sending');
         }
      } else {
         alert('Заполните обязательные поля');
      }
   }
   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let i = 0; i < formReq.length; i++) {
         const input = formReq[i];
         formRemoveError(input)
         if (input.value === '') {
            formAddError(input);
            error++;
         } if (input.classList.contains("_tel")) {
            if (input.value.length < 7) {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
});