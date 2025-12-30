// Управление модальным окном поиска
document.addEventListener('DOMContentLoaded', function() {
  const searchButtons = document.querySelectorAll('.search-button');
  const searchModal = document.getElementById('searchModal');
  const searchModalOverlay = document.getElementById('searchModalOverlay');
  const searchModalClose = document.getElementById('searchModalClose');
  const searchInput = searchModal?.querySelector('input[type="text"]');

  // Функция открытия модального окна
  function openSearchModal() {
    if (searchModal && searchModalOverlay) {
      searchModal.classList.remove('hidden');
      searchModalOverlay.classList.remove('hidden');
      
      // Анимация появления
      setTimeout(() => {
        searchModalOverlay.style.opacity = '1';
        searchModal.style.opacity = '1';
        searchModal.style.transform = 'translateY(0px)';
      }, 10);
      
      // Фокус на поле ввода
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 100);
      }
      
      // Блокировка прокрутки body
      document.body.style.overflow = 'hidden';
    }
  }

  // Функция закрытия модального окна
  function closeSearchModal() {
    if (searchModal && searchModalOverlay) {
      // Анимация исчезновения
      searchModalOverlay.style.opacity = '0';
      searchModal.style.opacity = '0';
      searchModal.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        searchModal.classList.add('hidden');
        searchModalOverlay.classList.add('hidden');
      }, 200);
      
      // Разблокировка прокрутки body
      document.body.style.overflow = '';
    }
  }

  // Открытие по клику на кнопки поиска
  searchButtons.forEach(button => {
    button.addEventListener('click', openSearchModal);
  });

  // Закрытие по клику на кнопку закрытия
  if (searchModalClose) {
    searchModalClose.addEventListener('click', closeSearchModal);
  }

  // Закрытие по клику на фон (overlay)
  if (searchModalOverlay) {
    searchModalOverlay.addEventListener('click', function(e) {
      if (e.target === searchModalOverlay) {
        closeSearchModal();
      }
    });
  }

  // Закрытие по нажатию Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
      closeSearchModal();
    }
  });

  // Открытие по комбинации Ctrl+K или Cmd+K
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('hidden')) {
        openSearchModal();
      } else {
        closeSearchModal();
      }
    }
  });
});

