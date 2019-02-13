var cartItemsArray = new Array();
var cartPriceArray = new Array();

function addItem(item, price){
	cartItemsArray.push(item);
	cartPriceArray.push(price);
	var cartEl = document.getElementById("cartHead");
	cartEl.insertAdjacentHTML("afterend","<tr><td>" + item +"</td><td>$" + price + "</td></tr>");
}

function checkOut(){
	var grandTotal = 0;
	for (i = 0; i < cartPriceArray.length; i++){
		grandTotal = grandTotal + cartPriceArray[i]; 
	}
	var totalEl = document.getElementById("cart");
	totalEl.textContent = ("$"+Number(grandTotal).toFixed(2));
	var taxesEl = document.getElementById("cartTax");
	taxesEl.textContent = ("$"+Number(grandTotal*0.06).toFixed(2));
	var grandTotalEl = document.getElementById("cartTotal");
	grandTotalEl.textContent = ("$"+Number(grandTotal*1.06).toFixed(2));
}