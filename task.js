// Получаем все элементы с классом "tab"
const tabs = document.querySelectorAll('.tab');

// Получаем все элементы с классом "tab__content"
const tabContents = document.querySelectorAll('.tab__content');

// Добавляем обработчик события клика на каждую вкладку
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Удаляем класс "tab_active" у всех вкладок
        tabs.forEach((t) => {
            t.classList.remove('tab_active');
        });

        // Добавляем класс "tab_active" только текущей вкладке
        tab.classList.add('tab_active');

        // Удаляем класс "tab__content_active" у всех блоков с содержимым
        tabContents.forEach((content) => {
            content.classList.remove('tab__content_active');
        });

        // Добавляем класс "tab__content_active" только блоку с соответствующим индексом
        tabContents[index].classList.add('tab__content_active');
    });
});