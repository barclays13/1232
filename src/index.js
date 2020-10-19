const src = document.querySelector(".photo-person-src"),
  target = document.querySelector(".photo-person-img");

function showImage(src,target) {

    const fr = new FileReader();
    fr.onload = () => target.src = fr.result;

    src.addEventListener("change", () => {
      const formatImg = src.files[0].name.substr(-3, 3).toLowerCase();
      (formatImg === 'jpg' || formatImg === 'png') ? fr.readAsDataURL(src.files[0]) : alert('Выберите фото')
    })
  }
  
  showImage(src,target);