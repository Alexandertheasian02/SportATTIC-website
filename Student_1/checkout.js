//displaying the cart from the local storage
const arrayString = localStorage.getItem('cart');
const cart = JSON.parse(arrayString);
const cartContainer = document.getElementById('cartItems');

let cartHTML = '';
cart.forEach((cart)=>{
    for(const key in cart){
        cartHTML += `${key}: ${cart[key]} <br>`;
    }
});

cartContainer.innerHTML = cartHTML;
//displaying the total in local storage
const total = localStorage.getItem('cartTotal');
const totalContainer = document.getElementById('totalAm');

if (total) {
  totalContainer.innerHTML = `Total:$ ${total}`;
} else {
  totalContainer.innerHTML = 'No total found in local storage.';
}
const userdetails=document.querySelector('#userdetails');

let billingInfoJSON = localStorage.getItem('billingInfo');
let billingInfo = JSON.parse(billingInfoJSON);
document.getElementById('firstname').textContent = billingInfo.firstname;
document.getElementById('lastname').textContent = billingInfo.lastname;
document.getElementById('email').textContent = billingInfo.email;
document.getElementById('phone').textContent = billingInfo.number;
document.getElementById('address').textContent = billingInfo.address;
document.getElementById('code').textContent = billingInfo.code;

function myFunction() {
  window.location.href = "Shop.html";
}





