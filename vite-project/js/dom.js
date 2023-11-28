document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
  });


function insertCards(arr){
  arr.array.forEach(food => {
    DOMSelectors.column.insertAdjacentHTM (
      "beforeend",
      `<div class="column">
      <div class="card">
          <h2 class="card-header" id="column">${input}</h2>
          <h3 class="card-info" id="column">Author: ${input2}</h3>
          <img src = "${input3}" alt = "" class = "img">
          <button type="click" class="remove">Remove</button>
      </div>
   `)
    
  });
}