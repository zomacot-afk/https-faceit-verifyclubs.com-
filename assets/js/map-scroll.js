/**
 * Скрипт для плавной бесконечной прокрутки карты справа налево
 * + управление scale и вертикальной позицией
 */

(function () {
    'use strict';

    let animationId = null;
    let scrollPosition = 0;

    let mapContainer = null;
    let mapWrapper = null;
    let mapSvg = null;

    let mapWidth = 0;
    let containerWidth = 0;

    let speed = 0.2;        // скорость прокрутки (px за кадр)
    let startOffset = 1500; // стартовый сдвиг по X

    let scale = 2;          // 🔥 масштаб карты
    let offsetY = 0;        // 🔥 сдвиг по вертикали (px)

    function init() {
        mapContainer = document.querySelector(
            '.absolute.inset-0.w-full.h-full.bg-\\[\\#0b0b0f\\].overflow-hidden'
        );

        if (!mapContainer) {
            const svg = document.querySelector('svg.rsm-svg');
            if (svg) {
                mapContainer = svg.closest('.absolute.inset-0.w-full.h-full');
            }
        }

        if (!mapContainer) {
            console.warn('Контейнер карты не найден');
            return;
        }

        mapWrapper =
            mapContainer.querySelector('.absolute.inset-0.flex.items-center.justify-center') ||
            mapContainer.querySelector('div');

        mapSvg =
            mapContainer.querySelector('svg.rsm-svg') ||
            mapContainer.querySelector('svg');

        if (!mapSvg || !mapWrapper) {
            console.warn('SVG карта или обертка не найдены');
            return;
        }

        setTimeout(() => {
            const svgRect = mapSvg.getBoundingClientRect();
            const containerRect = mapContainer.getBoundingClientRect();

            mapWidth = svgRect.width || 1200;
            containerWidth = containerRect.width || window.innerWidth;

            scrollPosition = mapWidth - startOffset;

            mapWrapper.style.willChange = 'transform';
            mapWrapper.style.transform = 'translateZ(0)';
            mapSvg.style.willChange = 'transform';

            startAnimation();
        }, 100);
    }

    function startAnimation() {
        if (animationId) return;

        function animate() {
            scrollPosition -= speed;

            if (mapWrapper) {
                mapWrapper.style.transform = `
                    translateX(${scrollPosition}px)
                    translateY(${offsetY}px)
                    scale(${scale})
                    translateZ(0)
                `;
            }

            if (scrollPosition <= -mapWidth) {
                scrollPosition = mapWidth - startOffset;
            }

            animationId = requestAnimationFrame(animate);
        }

        animate();
    }

    function stopAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    document.addEventListener('visibilitychange', () => {
        document.hidden ? stopAnimation() : startAnimation();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 🔧 Публичное API
    window.mapScroll = {
        start: startAnimation,
        stop: stopAnimation,

        setSpeed(newSpeed) {
            speed = newSpeed;
        },

        setStartOffset(offset) {
            startOffset = offset;
            scrollPosition = mapWidth - startOffset;
        },

        // 🔥 Масштаб
        setScale(value) {
            scale = value;
        },

        // 🔥 Вертикальный сдвиг
        setOffsetY(value) {
            offsetY = value;
        }
    };

})();
