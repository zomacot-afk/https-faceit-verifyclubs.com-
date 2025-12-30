/**
 * Скрипт для управления модальным окном регистрации
 * Открывает модальное окно при клике на любую кнопку "Регистрация"
 */

(function() {
    'use strict';

    // Находим элементы модального окна
    // Ищем backdrop по классу и позиции (fixed inset-0)
    const modalBackdrop = document.querySelector('.fixed.inset-0.z-50.cursor-pointer');
    // Ищем dialog по role
    const modalDialog = document.querySelector('div[role="dialog"]');
    const closeButton = modalDialog ? modalDialog.querySelector('button[aria-label="Close"]') : null;

    // Функция для открытия модального окна
    function openModal() {
        if (!modalBackdrop || !modalDialog) return;

        // Показываем модальное окно
        modalBackdrop.style.display = 'block';
        modalBackdrop.setAttribute('data-state', 'open');
        modalBackdrop.style.pointerEvents = 'auto';
        modalBackdrop.setAttribute('aria-hidden', 'false');

        modalDialog.style.display = 'block';
        modalDialog.setAttribute('data-state', 'open');
        modalDialog.style.pointerEvents = 'auto';

        // Блокируем прокрутку body
        document.body.style.overflow = 'hidden';

        // Анимация появления
        requestAnimationFrame(() => {
            modalBackdrop.style.opacity = '1';
            modalDialog.style.opacity = '1';
            modalDialog.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    // Функция для закрытия модального окна
    function closeModal() {
        if (!modalBackdrop || !modalDialog) return;

        // Анимация исчезновения
        modalBackdrop.style.opacity = '0';
        modalDialog.style.opacity = '0';
        modalDialog.style.transform = 'translate(-50%, -50%) scale(0.95)';

        setTimeout(() => {
            modalBackdrop.style.display = 'none';
            modalBackdrop.setAttribute('data-state', 'closed');
            modalBackdrop.style.pointerEvents = 'none';
            modalBackdrop.setAttribute('aria-hidden', 'true');

            modalDialog.style.display = 'none';
            modalDialog.setAttribute('data-state', 'closed');
            modalDialog.style.pointerEvents = 'none';

            // Разблокируем прокрутку body
            document.body.style.overflow = '';
        }, 200);
    }

    // Инициализация
    function init() {
        // Скрываем модальное окно по умолчанию
        if (modalBackdrop && modalDialog) {
            modalBackdrop.style.display = 'none';
            modalBackdrop.style.opacity = '0';
            modalBackdrop.style.transition = 'opacity 0.2s ease';
            modalBackdrop.setAttribute('data-state', 'closed');
            modalBackdrop.setAttribute('aria-hidden', 'true');

            modalDialog.style.display = 'none';
            modalDialog.style.opacity = '0';
            modalDialog.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            modalDialog.style.transform = 'translate(-50%, -50%) scale(0.95)';
            modalDialog.setAttribute('data-state', 'closed');
        }

        // Находим все кнопки с текстом "Регистрация" или "РЕГИСТРАЦИЯ"
        // ИСКЛЮЧАЕМ кнопки внутри модальных окон игр (они обрабатываются отдельно в game-modals.js)
        const allButtons = document.querySelectorAll('button');
        const registrationButtons = [];

        allButtons.forEach(button => {
            // Проверяем, не находится ли кнопка внутри модального окна игры
            const isInGameModal = button.closest('div[role="dialog"]:not(#radix-_r_0_)');
            if (isInGameModal) {
                return; // Пропускаем кнопки внутри модальных окон игр
            }

            const text = button.textContent.trim().toUpperCase();
            if (text === 'РЕГИСТРАЦИЯ' || text === 'REGISTRATION' || text.includes('РЕГИСТРАЦИЯ')) {
                registrationButtons.push(button);
            }
        });

        // Также ищем span с текстом "Регистрация" внутри кликабельных элементов
        // ИСКЛЮЧАЕМ span внутри модальных окон игр и карточек игр
        const allSpans = document.querySelectorAll('span');
        allSpans.forEach(span => {
            // Проверяем, не находится ли span внутри модального окна игры
            const isInGameModal = span.closest('div[role="dialog"]:not(#radix-_r_0_)');
            if (isInGameModal) {
                return; // Пропускаем span внутри модальных окон игр
            }

            // Проверяем, не находится ли span внутри карточки игры
            const isInGameCard = span.closest('.relative.cursor-pointer.flex.flex-col.items-center') ||
                                span.closest('.relative.cursor-pointer.rounded-lg.overflow-hidden.transition-all.duration-200.ease-out.group');
            if (isInGameCard) {
                return; // Пропускаем span внутри карточек игр (они обрабатываются в game-modals.js)
            }

            const text = span.textContent.trim();
            if (text === 'Регистрация' || text === 'РЕГИСТРАЦИЯ') {
                // Находим родительский кликабельный элемент
                let parent = span.parentElement;
                while (parent && parent !== document.body) {
                    // Не добавляем обработчик, если родитель - карточка игры
                    if (parent.classList.contains('relative') && 
                        (parent.classList.contains('cursor-pointer') && 
                         (parent.classList.contains('flex') || parent.classList.contains('rounded-lg')))) {
                        break; // Это карточка игры, пропускаем
                    }
                    
                    if (parent.classList.contains('cursor-pointer') || 
                        parent.tagName === 'BUTTON' || 
                        parent.onclick !== null ||
                        parent.getAttribute('onclick')) {
                        registrationButtons.push(parent);
                        break;
                    }
                    parent = parent.parentElement;
                }
            }
        });

        // Удаляем дубликаты
        const uniqueButtons = [...new Set(registrationButtons)];

        // Добавляем обработчики для всех кнопок регистрации
        uniqueButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openModal();
            });
        });

        // Закрытие по клику на фон
        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', function(e) {
                if (e.target === modalBackdrop) {
                    closeModal();
                }
            });
        }

        // Закрытие по клику на кнопку закрытия
        if (closeButton) {
            closeButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeModal();
            });
        }

        // Закрытие по нажатию ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalDialog && modalDialog.getAttribute('data-state') === 'open') {
                closeModal();
            }
        });

        console.log(`Найдено кнопок регистрации: ${uniqueButtons.length}`);
    }

    // Запуск при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Экспорт функции для глобального использования
    window.openRegistrationModal = openModal;

})();

