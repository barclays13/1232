let src = document.querySelector(".photo-person-src"),
  target = document.querySelector(".photo-person-img"),
  phone = document.querySelector(".data-person-phone"),
  name = document.querySelectorAll(".data-person-name"),
  email = document.querySelector(".data-person-email"),
  btnAddBlock = document.querySelectorAll(".add-block"),
  btnAddDescription = document.querySelectorAll(".add-description"),
  infoPreson = document.querySelector(".info-preson"),
  btnSaveResume = document.querySelector(".save-resume");


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

const additionalInformation = () => {
  infoPreson.addEventListener('click', (e) => {
    let target = e.target;
    if (target.className === "add-block") {
      target.insertAdjacentHTML('afterend', `        
            <div class="info-preson-block">
              <input class="info-preson-block-title" name="title" type="text" required placeholder="Название блока">
              <button class="add-description">+ Добавить описание </button>
              <div class="info-preson-block-description">
                  <input class="info-preson-block-description-key" name="key" type="text" required placeholder="Заголовок поля:">
                  <input class="info-preson-block-description-propetry" name="propetry" type="text" required placeholder="Содержание поля:">
              </div>
            </div>`)
    } else if (target.className === "add-description") {
      target.insertAdjacentHTML('afterend', `
        <div class="info-preson-block-description">
          <input class="info-preson-block-description-key" name="key" type="text" required placeholder="Заголовок поля:">
          <input class="info-preson-block-description-propetry" name="propetry" type="text" required placeholder="Содержание поля:">
        </div>`
      )
    }
  })
}

const removeElement = (element) => element.parentNode.removeChild(element);

const saveDoc = () => {
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(document.body.innerHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'resume.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}

btnSaveResume.addEventListener('click', () => {

  const getAllInputs = document.querySelectorAll('input'),
    getBtns = document.querySelectorAll("button"),
    getPhoto = document.querySelector(".photo-person");

  for (let i = 0; i< getAllInputs.length ;i++) {

    const newSpan = document.createElement('span'),
        newH4 = document.createElement('h4');

    newH4.textContent = getAllInputs[i].placeholder;
    getAllInputs[i].before(newH4);

    newSpan.style = "margin: auto; text-align: center";
    getAllInputs[i].before(newSpan);

     getAllInputs[i].value ? newSpan.textContent = getAllInputs[i].value : newSpan.textContent = 'Пустое поле...'

    removeElement(getAllInputs[i]);
  }

  for (let i = 0; i< getBtns.length ;i++) {
    removeElement(getBtns[i]);
  }

  removeElement(getPhoto);
  saveDoc();
})

showImage(src,target);
validity(); 
additionalInformation();
