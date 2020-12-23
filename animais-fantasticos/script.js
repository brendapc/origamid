function handleMenu() {
  const imgList = document.querySelectorAll(".js-imglist li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (imgList.length && tabContent) {
    tabContent[0].classList.add("active");

    function handleActive(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }

    imgList.forEach((item, index) => {
      item.addEventListener("click", () => {
        handleActive(index);
      });
    });
  }
}
handleMenu()

function handleAccordion(){
  const accordionContent = document.querySelectorAll('.js-accordion dt')
  accordionContent[0].classList.add('active')
  accordionContent[0].nextElementSibling.classList.add('active')

  function handleToggle(){
    this.classList.toggle('active')
    this.nextElementSibling.classList.toggle('active')
  }

  accordionContent.forEach((item)=>{
    item.addEventListener('click', handleToggle)
  })
}
handleAccordion()