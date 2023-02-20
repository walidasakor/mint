const output = document.getElementById("output")

function buyNow(itemDetails) {
    const itemsInCart = JSON.parse?.(localStorage.getItem("itemsInCart")) || [];
    itemsInCart.push(itemDetails);
    localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
    output.innerHTML = localStorage.getItem("itemsInCart")
  }
  
  function viewCart() {
    const itemsInCart = JSON.parse?.(localStorage.getItem("itemsInCart")) || [];
    console.log(itemsInCart);
  }

  function clearAll(){
    localStorage.removeItem("itemsInCart");

  }