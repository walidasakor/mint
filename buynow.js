const buy = document.getElementById("buy");
const oz = document.getElementById("oz").innerText;
const price = document.getElementById("price").innerText;
console.log(oz)
buy.addEventListener("click", function(e){
    e.preventDefault()

    localStorage.setItem("detail", oz)
    localStorage.setItem("amount", price)

    window.location.href = "information.html"
})