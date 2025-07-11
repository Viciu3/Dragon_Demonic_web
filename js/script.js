// Ждем, пока весь HTML документ будет загружен
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку гамбургер-меню
    const menuToggle = document.querySelector('.menu-toggle');
    // Находим основное навигационное меню
    const mainNavigation = document.getElementById('mainNavigation');

    // Добавляем слушатель события клика на кнопку гамбургер-меню
    menuToggle.addEventListener('click', function() {
        // Переключаем класс 'is-active' на самой кнопке
        // Это запустит CSS-анимацию гамбургера в "крестик"
        menuToggle.classList.toggle('is-active');

        // Переключаем класс 'is-open' на основном навигационном меню
        // Это запустит CSS-анимацию открытия/закрытия меню
        mainNavigation.classList.toggle('is-open');
    });

    // Опционально: Закрывать меню при клике на пункт меню (для мобильных)
    // Это улучшает UX, чтобы пользователь не нажимал кнопку закрытия после выбора пункта
    const navLinks = mainNavigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Проверяем, если меню открыто (на мобильных)
            if (mainNavigation.classList.contains('is-open')) {
                menuToggle.classList.remove('is-active');
                mainNavigation.classList.remove('is-open');
            }
        });
    });
});
