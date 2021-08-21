

// memory size select function
function totalExtraPrice(id, price) {
  document.getElementById(id).innerText = price;
  totalPrice();
}


document.getElementById("eightGB").addEventListener("click", function () {
  totalExtraPrice("extraMemoryPrice", 0);
});

document.getElementById("sixteenGB").addEventListener("click", function () {
  totalExtraPrice("extraMemoryPrice", 180);
});

// stroge size select function
document.getElementById("twofivesixGB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 0);
});

document.getElementById("fiveonetwoGB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 100);
});

document.getElementById("oneTB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 180);
});

// delivary charge part function
function totalDeliveryCharge(price) {
  document.getElementById("deliveryPrice").innerText = price;
  totalPrice();
}

document.getElementById("freeDelivery").addEventListener("click", function () {
  totalExtraPrice("deliveryPrice", 0);
});

document.getElementById("paidDelivery").addEventListener("click", function () {
  totalExtraPrice("deliveryPrice", 20);
});

// get all price value id function
function getTotalPrice(id) {
  let updatePrice = parseFloat(document.getElementById(id).innerText);
  return updatePrice;
}

// Total-price calculate function
function totalPrice() {
  const bestPrice = getTotalPrice("bestPrice");
  const memoryPrice = getTotalPrice("extraMemoryPrice");
  const storagePrice = getTotalPrice("extraStoragePrice");
  const deliveryCharge = getTotalPrice("deliveryPrice");
  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = bestPrice + memoryPrice + storagePrice + deliveryCharge;
  const finalTotalCost = document.getElementById("totalPriceCupon");
  finalTotalCost.innerText = totalPrice.innerText;
}

// total price using  cupon code calculation
document.getElementById("cupon-apply").addEventListener("click", function () {
  const cuponCodeID = document.getElementById("cupon-input");
  const cuponCodeValue = cuponCodeID.value;

  if (cuponCodeValue == "stevekaku") {
    const totalPriceID = document.getElementById("totalPriceCupon");
    const totalPriceValue = parseFloat(totalPriceID.innerText);
    totalPriceID.innerText = (totalPriceValue * 80) / 100;
    cuponCodeValue.innerText = '';
  }  else {
    console.log(alert("invalid cupon code"));
  }

});

//end HAVE A GOOD TIME