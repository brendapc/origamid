const controlesForm = document.getElementById("controles");
const selectedArea = document.querySelector(".selecionados");
const botao = document.querySelector(".btn");

controlesForm.addEventListener("change", handleChange);

const handleStyle = {
  element: botao,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  }
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showSelectedOptions();
  saveInLocalStorage(name, value);
}

function saveInLocalStorage(name, value) {
  localStorage[name] = value;
}

function historyFillup() {
  const properties = Object.keys(localStorage);
  console.log(properties)
  properties.forEach((propertie) => {
    if(propertie !== '__vp_fingerprint'){
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
    }
  });
  showSelectedOptions();
}

historyFillup();

function showSelectedOptions() {
  selectedArea.innerHTML =
    "<span>" + botao.style.cssText.split("; ").join(";</span> <span>");
}
