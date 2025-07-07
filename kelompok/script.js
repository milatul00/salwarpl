document.addEventListener('DOMContentLoaded', function () {
  // search
  const searchBtn = document.getElementById('search-btn');
  const productcards = document.querySelectorAll('.product-card');
  const searchBox = document.getElementById('search-box');

  searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchBox.style.display = (searchBox.style.display === 'none') ? 'inline-block' : 'none';
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function () {
    const keyword = searchInput.value.toLowerCase();

    productcards.forEach(card => {
      const title = card.querySelector('h5').textContent.toLowerCase();
      card.style.display = title.includes(keyword) ? 'block' : 'none';
    });
  });


  // keranjang
const cart = [];
const buyButtons = document.querySelectorAll('.add-to-cart');
const cartBtn = document.getElementById('shopping-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartList = document.getElementById('cart-list');

// Log awal
console.log('Script keranjang dimuat');
console.log('Jumlah tombol beli ditemukan:', buyButtons.length);

// Tambah produk ke keranjang
buyButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    const productCard = button.closest('.product-card');
    const name = productCard.querySelector('h5').textContent;
    const price = productCard.querySelector('.fw-bold').textContent;

    cart.push({ name, price });

    console.log(`Produk ditambahkan: ${name} - ${price}`);
    console.log('Isi keranjang sekarang:', cart);

    alert(`${name} telah ditambahkan ke keranjang!`);
  });
});

// Tampilkan keranjang saat ikon diklik
cartBtn.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('Tombol keranjang diklik');
  console.log('Isi keranjang saat ini:', cart);

  cartItemsContainer.style.display =
    cartItemsContainer.style.display === 'none' ? 'block' : 'none';

  cartList.innerHTML = '';

  const emptyCartMsg = document.getElementById('empty-cart-msg');
if (cart.length === 0) {
  emptyCartMsg.style.display = 'block';
} else {
  emptyCartMsg.style.display = 'none';
}

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartList.appendChild(li);
  });

  console.log('Item berhasil ditampilkan di list');
});
});
