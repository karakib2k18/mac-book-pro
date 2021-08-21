//memory part js start here
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

document.getElementById("twofivesixGB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 0);
});

document.getElementById("fiveonetwoGB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 100);
});

document.getElementById("oneTB").addEventListener("click", function () {
  totalExtraPrice("extraStoragePrice", 180);
});

// delivary charge part js start
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

// get all price value function
function getTotalPrice(id) {
  let updatePrice = parseFloat(document.getElementById(id).innerText);
  return updatePrice;
}

// Total calculate function
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

//  cupon code calculation
document.getElementById("cupon-apply").addEventListener("click", function () {
  const cuponCodeValue = document.getElementById("cupon-input").value;
  if (cuponCodeValue == "stevekaku") {
    const totalPriceID = document.getElementById("totalPriceCupon");
    const totalPriceValue = parseFloat(totalPriceID.innerText);
    totalPriceID.innerText = (totalPriceValue * 80) / 100;

    console.log(totalPriceValue - totalPriceID.innerText);
  }  else {
    console.log(alert("invalid cupon code"));
  }
});
