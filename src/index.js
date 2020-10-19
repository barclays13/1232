let src = document.querySelector(".photo-person-src"),
  target = document.querySelector(".photo-person-img"),
  phone = document.querySelector(".data-person-phone"),
  name = document.querySelectorAll(".data-person-name"),
  email = document.querySelector(".data-person-email");
  let btnAddBlock = document.querySelectorAll(".add-block"),
  btnAddDescription = document.querySelectorAll(".add-description");

const showImage = (src,target) => {

    const fr = new FileReader();
    fr.onload = () => target.src = fr.result;

    src.addEventListener("change", () => {
      const formatImg = src.files[0].name.substr(-3, 3).toLowerCase();
      (formatImg === 'jpg' || formatImg === 'png') ? fr.readAsDataURL(src.files[0]) : alert('Выберите фото')
    })
}
  
const validity = () => {
  email.addEventListener('input', () => email.value = email.value.replace(/[^a-z0-9+\@\.]/, ''));
  name.forEach((element) => {
    element.addEventListener('input', () => element.value = element.value.replace(/[^а-яё]/iu, ''));
  });
  phone.addEventListener('input', () => phone.value = phone.value.replace(/[^0-9+]/, ''));
}


btnAddBlock.forEach( elem => 
  elem.addEventListener('click', () => 
    elem.insertAdjacentHTML('afterend', `        
      <div class="info-preson-block">
        <input class="info-preson-block-title" name="title" type="text" required placeholder="Название блока">
        <button class="add-description">Добавить описание </button>
        <div class="info-preson-block-description">
            <input class="info-preson-block-description-key" name="key" type="text" required placeholder="Заголовок поля...">
            <input class="info-preson-block-description-propetry" name="propetry" type="text" required placeholder="Содержание поля...">
        </div>
      </div>`
    )
  )
);

btnAddDescription.forEach( elem => 
  elem.addEventListener('click', () => 
    elem.insertAdjacentHTML('afterend', `
      <div class="info-preson-block-description">
        <input class="info-preson-block-description-key" name="key" type="text" required placeholder="Заголовок поля...">
        <input class="info-preson-block-description-propetry" name="propetry" type="text" required placeholder="Содержание поля...">
      </div>`
    )
  )
)

showImage(src,target);
validity(); 
 