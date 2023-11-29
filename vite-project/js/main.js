import "../styles/style.css";
import { cards } from "./menu";

document.querySelector(".theme-btn").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

const DOMSelectors = {
    column: document.querySelector(".column"),
    healthyBtn: document.querySelector('.healthy'),
    unhealthyBtn: document.querySelector('.unhealthy'),
    themeBtn: document.querySelector('.theme-btn'),
    lowcalBtn: document.querySelector('.lcalories'), 
    highcalBtn: document.querySelector('.hcalories'), 
}

function clearfields() {
    DOMSelectors.column.innerHTML = "";
}

function insertCards(arr) {
    arr.forEach((card) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class="name">${card.name}</h3>
                <img src="${card.img}" class="img">
                <h4>Price: ${card.price}</h4> 
            </div>`
        );
    });
}
insertCards(cards)


DOMSelectors.healthyBtn.addEventListener('click', function () {
    let newArr = cards.filter((card) => card.good === 'healthy'); 
    clearfields();
    insertCards(newArr);
});

DOMSelectors.unhealthyBtn.addEventListener('click', function () {
    let newArr = cards.filter((card) => card.good === 'unhealthy'); 
    clearfields();
    insertCards(newArr);
});

DOMSelectors.lowcalBtn.addEventListener('click', function () {
    let newArr = cards.filter((card) => card.calories === 'low'); 
    clearfields();
    insertCards(newArr);
});

DOMSelectors.highcalBtn.addEventListener('click', function () {
    let newArr = cards.filter((card) => card.calories === 'high');
    clearfields();
    insertCards(newArr);
});



