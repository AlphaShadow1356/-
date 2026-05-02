// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Пример: инициализация слайдера, если он есть на странице
    const heroSlider = document.querySelector('.hero-slider'); // Предполагается, что есть секция с таким классом
    if (heroSlider) {
        // Здесь код для работы слайдера (например, с использованием библиотеки Swiper.js или на чистом JS)
        console.log('Hero slider initialized');
    }

    // Пример: раскрывающийся список для преимуществ
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling; // Предполагается, что контент идет после кнопки
            content.classList.toggle('visible');
            this.classList.toggle('active'); // Для изменения вида кнопки
        });
    });
});
