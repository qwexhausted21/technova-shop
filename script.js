// Инициализация корзины при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Обработчики кнопок "В корзину" (на главной и в каталоге)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Если это ссылка
            const productId = btn.dataset.id;
            addToCart(productId);
        });
    });
});

function getCart() {
    return JSON.parse(localStorage.getItem('technova_cart')) || [];
}

function addToCart(productId) {
    let cart = getCart();
    cart.push(productId);
    localStorage.setItem('technova_cart', JSON.stringify(cart));
    updateCartCount();
    
    // Простая анимация уведомления
    alert('Товар добавлен в корзину!');
}

function updateCartCount() {
    const cart = getCart();
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.textContent = cart.length;
        // Скрываем счетчик, если пусто
        countElement.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}