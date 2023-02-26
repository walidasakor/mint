const buy = document.querySelector(".coin");
const oz = document.querySelector(".oz").innerText;
const price = document.querySelector(".price").innerText;
const num= document.querySelector('.number');


buy.addEventListener("click", function(e){
    num.textContent= 1;
    e.preventDefault()

    localStorage.setItem("detail", oz)
    localStorage.setItem("amount", price)

     window.location.href = "information.html"

    
})