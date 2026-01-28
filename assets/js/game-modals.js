/**
 * Скрипт для управления модальными окнами игр
 * Открывает модальное окно игры при клике на карточку
 * Кнопка регистрации внутри модального окна игры закрывает его и открывает окно регистрации
 */

(function() {
    'use strict';

    const registrationModalBackdrop = document.querySelector('.fixed.inset-0.z-50.cursor-pointer');
    const registrationModal = document.querySelector('div[role="dialog"]#radix-_r_0_');

    // Маппинг игр к их модальным окнам (используем текущие ID из HTML)
    const gameModals = {
        'cs2': 'modal_cs2',
        'dota2': 'modal_dota2',
        'pubg': 'modal_pubg',
        'rust': 'radix-_r_i_',  // Временно, пока не обновим ID
        'apex': 'radix-_r_o_',
        'deadlock': 'radix-_r_r_',
        'valorant': 'radix-_r_u_',
        'league': 'radix-_r_11_',
        'brawlstars': 'radix-_r_14_',
        'pubg_mobile': 'radix-_r_17_'
    };

    // Функция для открытия модального окна игры
    function openGameModal(gameId) {
        let modal = null;
        const modalId = gameModals[gameId];
        
        // Пытаемся найти по ID
        if (modalId) {
            modal = document.getElementById(modalId);
        }
        
        // Если не нашли по ID, ищем по заголовку
        if (!modal) {
            const gameTitles = {
                'cs2': 'Counter-Strike 2',
                'dota2': 'Defense of the Ancients 2',
                'pubg': 'PlayerUnknown\'s Battlegrounds',
                'rust': 'Rust',
                'apex': 'Apex Legends',
                'deadlock': 'Deadlock',
                'valorant': 'Valorant',
                'league': 'League of Legends',
                'brawlstars': 'Brawl Stars',
                'pubg_mobile': 'PUBG Mobile'
            };
            
            const title = gameTitles[gameId];
            if (title) {
                const allModals = document.querySelectorAll('div[role="dialog"]:not(#radix-_r_0_)');
                allModals.forEach(m => {
                    const h2 = m.querySelector('h2');
                    if (h2 && h2.textContent.trim() === title) {
                        modal = m;
                    }
                });
            }
        }
        
        if (!modal) return;

        // Создаем backdrop если его нет
        let backdrop = document.querySelector('.game-modal-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'game-modal-backdrop fixed inset-0 z-40 bg-black/90 cursor-pointer';
            backdrop.style.cssText = 'display: none; opacity: 0; transition: opacity 0.2s ease;';
            document.body.appendChild(backdrop);

            // Закрытие по клику на backdrop
            backdrop.addEventListener('click', function(e) {
                if (e.target === backdrop) {
                    closeGameModal();
                }
            });
        }

        // Показываем backdrop
        backdrop.style.display = 'block';
        requestAnimationFrame(() => {
            backdrop.style.opacity = '1';
        });

        // Показываем модальное окно
        modal.style.display = 'grid';
        modal.setAttribute('data-state', 'open');
        modal.style.pointerEvents = 'auto';
        
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Блокируем прокрутку
        document.body.style.overflow = 'hidden';

        // Находим кнопку закрытия и добавляем обработчик
        const closeBtn = modal.querySelector('button[aria-label="Close"]');
        if (closeBtn) {
            closeBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeGameModal();
            };
        }

        // Находим кнопку регистрации внутри модального окна игры
        const regButton = Array.from(modal.querySelectorAll('button')).find(btn => {
            const text = btn.textContent.trim().toUpperCase();
            return text === 'РЕГИСТРАЦИЯ' || text === 'REGISTRATION';
        });
        
        if (regButton) {
            // Удаляем все предыдущие обработчики, чтобы избежать конфликтов
            const newRegButton = regButton.cloneNode(true);
            regButton.parentNode.replaceChild(newRegButton, regButton);
            
            // Добавляем наш обработчик
            newRegButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                closeGameModal();
                // Открываем окно регистрации после закрытия модального окна игры
                setTimeout(() => {
                    if (window.openRegistrationModal) {
                        window.openRegistrationModal();
                    } else {
                        openRegistrationModal();
                    }
                }, 200);
            }, true); // Используем capture phase для приоритета
        }
    }

    // Функция для закрытия модального окна игры
    function closeGameModal() {
        const backdrop = document.querySelector('.game-modal-backdrop');
        const openModals = document.querySelectorAll('div[role="dialog"][data-state="open"]:not(#radix-_r_0_)');

        // Закрываем все открытые модальные окна игр
        openModals.forEach(modal => {
            modal.style.opacity = '0';
            modal.style.transform = 'translate(-50%, -50%) scale(0.95)';
            
            setTimeout(() => {
                modal.style.display = 'none';
                modal.setAttribute('data-state', 'closed');
                modal.style.pointerEvents = 'none';
            }, 200);
        });

        // Скрываем backdrop
        if (backdrop) {
            backdrop.style.opacity = '0';
            setTimeout(() => {
                backdrop.style.display = 'none';
            }, 200);
        }

        // Разблокируем прокрутку
        document.body.style.overflow = '';
    }

    // Функция для открытия окна регистрации
    function openRegistrationModal() {
        // Используем глобальную функцию из modal-registration.js если она доступна
        if (window.openRegistrationModal) {
            window.openRegistrationModal();
            return;
        }

        // Иначе открываем напрямую
        if (!registrationModalBackdrop || !registrationModal) return;

        registrationModalBackdrop.style.display = 'block';
        registrationModalBackdrop.setAttribute('data-state', 'open');
        registrationModalBackdrop.style.pointerEvents = 'auto';
        registrationModalBackdrop.setAttribute('aria-hidden', 'false');

        registrationModal.style.display = 'block';
        registrationModal.setAttribute('data-state', 'open');
        registrationModal.style.pointerEvents = 'auto';

        requestAnimationFrame(() => {
            registrationModalBackdrop.style.opacity = '1';
            registrationModal.style.opacity = '1';
            registrationModal.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        document.body.style.overflow = 'hidden';
    }

    // Инициализация
    function init() {
        // Скрываем все модальные окна игр по умолчанию
        // Находим все модальные окна игр (не окно регистрации)
        const allGameModals = document.querySelectorAll('div[role="dialog"]:not(#radix-_r_0_)');
        allGameModals.forEach(modal => {
            modal.style.display = 'none';
            modal.style.opacity = '0';
            modal.style.transform = 'translate(-50%, -50%) scale(0.95)';
            modal.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            modal.setAttribute('data-state', 'closed');
            modal.style.pointerEvents = 'none';
        });

        // Находим карточки игр и добавляем обработчики
        // Большие карточки (CS2, DOTA2, PUBG)
        const bigCards = document.querySelectorAll('.relative.cursor-pointer.flex.flex-col.items-center');
        bigCards.forEach(card => {
            const title = card.querySelector('h3');
            if (title) {
                const gameName = title.textContent.trim().toLowerCase();
                let gameId = null;

                if (gameName.includes('cs2') || gameName.includes('counter-strike')) {
                    gameId = 'cs2';
                } else if (gameName.includes('dota')) {
                    gameId = 'dota2';
                } else if (gameName.includes('pubg') && !gameName.includes('mobile')) {
                    gameId = 'pubg';
                }

                if (gameId) {
                    card.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        openGameModal(gameId);
                    }, true); // Используем capture phase для приоритета
                }
            }
        });

        // Маленькие карточки игр
        const smallCards = document.querySelectorAll('.relative.cursor-pointer.rounded-lg.overflow-hidden.transition-all.duration-200.ease-out.group');
        smallCards.forEach(card => {
            const img = card.querySelector('img[alt]');
            if (img) {
                const alt = img.getAttribute('alt').toLowerCase();
                let gameId = null;

                if (alt.includes('rust')) {
                    gameId = 'rust';
                } else if (alt.includes('apex')) {
                    gameId = 'apex';
                } else if (alt.includes('deadlock')) {
                    gameId = 'deadlock';
                } else if (alt.includes('valorant')) {
                    gameId = 'valorant';
                } else if (alt.includes('league')) {
                    gameId = 'league';
                } else if (alt.includes('brawl')) {
                    gameId = 'brawlstars';
                } else if (alt.includes('pubg') && alt.includes('mobile')) {
                    gameId = 'pubg_mobile';
                }

                if (gameId) {
                    card.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        openGameModal(gameId);
                    }, true); // Используем capture phase для приоритета
                }
            }
        });

        // Закрытие по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('div[role="dialog"][data-state="open"]:not(#radix-_r_0_)');
                if (openModal) {
                    closeGameModal();
                }
            }
        });
    }

    // Запуск при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Экспорт функций для глобального использования
    window.openGameModal = openGameModal;
    window.closeGameModal = closeGameModal;

})();

