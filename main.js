const img = document.getElementById("sliderImg")
const next = document.getElementById("next")
const prev = document.getElementById("prev")



const images = [
  "images/rasm1.jpg",
  "images/rasm2.jpg",
  "images/rasm3.jpg",
  "images/rasm4.jpg"
]

let index = 0

next.addEventListener("click", () => {

  index++

  if(index >= images.length){
    index = 0
  }

  img.src = images[index]

})

prev.addEventListener("click", () => {

  index--

  if(index < 0){
    index = images.length - 1
  }

  img.src = images[index]

})
setInterval(()=>{
    next.click();
},5000)


const plusminus1 = document.querySelectorAll(".plusminus");

plusminus1.forEach(plusminus => {
    const plus = plusminus.querySelector(".plus");
    const minus = plusminus.querySelector(".minus");
    const son = plusminus.querySelector(".son");
    const narxi = plusminus.nextElementSibling;
    const jaminarxi = Number(narxi.dataset.narx);

    let value = 0;

    function updatePrice() {
        const total = value * jaminarxi;
        narxi.textContent = total.toLocaleString() + " so'm";
    }

    plus.addEventListener("click", () => {
        value++;
        son.textContent = value;
        updatePrice();
    });

    minus.addEventListener("click", () => {
        if (value > 0) {
            value--;
            son.textContent = value;
            updatePrice();
        }
    });
});

const input = document.querySelector(".hdivinp input");
const products = document.querySelectorAll(".mdiv3b");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector(".mdiv3fp").textContent.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});