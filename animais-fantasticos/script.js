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
handleMenu();

function handleAccordion() {
  const accordionContent = document.querySelectorAll(".js-accordion dt");
  accordionContent[0].classList.add("active");
  accordionContent[0].nextElementSibling.classList.add("active");

  function handleToggle() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionContent.forEach((item) => {
    item.addEventListener("click", handleToggle);
  });
}
handleAccordion();

function smoothScroll() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function handleScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const element = document.querySelector(href);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", handleScroll);
  });
}
smoothScroll();

function animationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    //se exitem sessões
    const windowMetade = window.innerHeight * 0.6; //60% da altura da janela

    function handleAnimationScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; //pega altura do elemento até o topo da página
        const isSectionViseble = sectionTop - windowMetade < 0;

        if (isSectionViseble) section.classList.add("active");
        else section.classList.remove("active");
      });
    }
    handleAnimationScroll();
    window.addEventListener("scroll", handleAnimationScroll);
  }
}
animationScroll();
