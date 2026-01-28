// Объект переводов
const translations = {
    ru: {
      // Header
      search: 'Поиск',
      registration: 'РЕГИСТРАЦИЯ',
      searchPlaceholder: 'Поиск игр, новостей, FAQ...',
      
      // Hero section
      heroTitle1: 'ВАША ВЕДУЩАЯ',
      heroTitle2: 'ПЛАТФОРМА ДЛЯ КИБЕРСПОРТА',
      heroText1: 'Станьте частью крупнейшего игрового сообщества в мире',
      heroText2: 'и играйте с более чем',
      heroText3: 'геймеров',
      
      // Features
      leaguesTitle: 'ЛИГИ И РЕЙТИНГИ',
      leaguesText: 'Играйте с единомышленниками и соревнуйтесь за призы',
      
      tournamentsTitle: 'ТУРНИРЫ',
      tournamentsText: 'Соревнуйтесь за реальные призы с друзьями и другими',
      
      statsTitle: 'СТАТИСТИКА',
      statsText: 'Отслеживайте свой прогресс и улучшайте свои навыки',
      
      anticheatTitle: 'АНТИЧИТ',
      anticheatText: 'Играйте в безопасной среде без читеров',
      
      // Advanced stats section
      advancedStatsTitle: 'Продвинутая статистика',
      advancedStatsText1: 'Отслеживайте свой прогресс и анализируйте игру с помощью',
      advancedStatsText2: 'детальной статистики',
      advancedStatsText3: 'Следите за своими достижениями, поднимаясь по рейтингу и улучшая свои навыки.',
      
      // Game modal labels
      genreLabel: 'Жанр:',
      releasedLabel: 'Выпущено:',
      learnMore: 'Подробнее',
      joinPlayers: 'Присоединяйтесь к миллионам игроков по всему миру',
      registrationModal: 'Регистрация',
      aboutGame: 'Об игре',
      
      // Search modal
      quickActions: 'Быстрые действия',
      createAccount: 'Создать аккаунт',
      createAccountDesc: 'Присоединяйтесь к FACEIT бесплатно',
      login: 'Войти',
      loginDesc: 'Войти в аккаунт',
      downloadClient: 'Скачать клиент',
      downloadClientDesc: 'Скачать клиент FACEIT',
      popularGames: 'Популярные игры',
      quickLinks: 'Быстрые ссылки',
      faqShort: 'Частые вопросы',
      navigation: 'навигация',
      open: 'открыть',
      categories: 'категории',
      close: 'закрыть',
      
      // Professional community section
      professionalCommunity: 'Профессиональное сообщество',
      professionalCommunityText1: 'Присоединяйтесь к сообществу из более чем',
      professionalCommunityText2: 'серьёзных геймеров со всего мира.',
      professionalCommunityText3: 'Играйте с единомышленниками, которые разделяют вашу страсть к соревновательным играм.',
      
      // Latest news section
      latestNews: 'Последние новости',
      latestNewsDesc: 'Следите за анонсами и обновлениями FACEIT',
      viewAll: 'Смотреть все',
      
      // Game descriptions
      cs2Description: 'На протяжении более двух десятилетий Counter-Strike предлагал элитный соревновательный опыт, сформированный миллионами игроков со всего мира. Counter-Strike 2 — бесплатное обновление CS:GO, знаменующее крупнейший технический скачок в истории Counter-Strike с реалистичным физически-корректным рендерингом и улучшенной сетевой частью.',
      dota2Description: 'Dota 2 — многопользовательская онлайн-арена (MOBA), где две команды по пять игроков соревнуются за уничтожение Древнего противника. С более чем 100 уникальными героями каждая игра предоставляет бесконечную стратегическую глубину и соревновательный азарт.',
      pubgDescription: 'PUBG — шутер «игрок против игрока», где до ста игроков сражаются в королевской битве. Игроки высаживаются на остров с парашютом и ищут оружие и снаряжение, чтобы убивать других, избегая при этом собственной гибели.',
      pubgMobileDescription: 'PUBG Mobile переносит интенсивный опыт королевской битвы на ваше мобильное устройство с потрясающей графикой и плавным геймплеем. Высаживайтесь на огромные поля боя со 100 игроками.',
      
      // Main content sections
      noCheatersTitle: 'Играй без читеров',
      noCheatersText1: 'FACEIT Anti-Cheat — лучший приватный античит в индустрии. Наша система гарантирует',
      noCheatersText2: 'меньше читеров',
      noCheatersText3: 'по сравнению с любым другим сервисом.',
      noCheatersText4: 'Более',
      noCheatersText5: 'читеров было забанено, обеспечивая честную игру для миллионов игроков.',
      
      realPrizesTitle: 'Выигрывай реальные призы',
      realPrizesText1: 'Участвуйте в турнирах и сражайтесь за',
      realPrizesText2: 'реальные призы',
      realPrizesText3: 'вместе с друзьями и другими игроками.',
      realPrizesText4: 'От денежных призов до игрового оборудования — каждый матч может стать вашим шансом на победу.',
      
      fairMatchmakingTitle: 'Честный подбор игроков',
      fairMatchmakingText1: 'Наша система',
      fairMatchmakingText2: 'лиг и рейтингов',
      fairMatchmakingText3: 'обеспечивает честные матчи с игроками вашего уровня.',
      fairMatchmakingText4: 'Играйте с единомышленниками и соревнуйтесь за призы в конкурентной среде.',
      
      // CTA section
      readyTitle: 'ГОТОВЫ ПОПРОБОВАТЬ FACEIT?',
      readyText: 'Соревнуйтесь с более чем 10 миллионами игроков прямо сейчас!',
      
      // Verification section
      verificationStatus: 'Статус заявки: На рассмотрении',
      verificationTime: 'Верификация занимает до 3х дней',
      verificationHours: 'Часы в CS2/Dota 2:',
      verificationLicense: 'Лицензия в CS2/Dota 2:',
      verificationBans: 'Баны в CS2/Dota 2:',
      verificationSteam: 'Ограничения Steam:',
      verificationBot: 'Проверка на бота:',
      waiting: 'Ожидание',
      verificationNotice: 'Обратите внимание: для участия в мероприятии необходимо убедиться что',
      verificationNoticeAll: 'все без исключения',
      verificationNoticeEnd: 'пункты выше выделены зеленым и отмечены галочкой.',
      backToHome: 'Вернуться на главную',
      
      // Footer
      footerTagline: 'Ваша ведущая платформа для киберспорта',
      about: 'О нас',
      bans: 'Баны',
      developers: 'Разработчикам',
      anticheat: 'Античит',
      support: 'Поддержка',
      press: 'Пресса',
      client: 'Клиент',
      faq: 'FAQ',
      stats: 'Статистика',
      jobs: 'Вакансии',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      
      // Registration modal
      registerViaSteam: 'ЗАРЕГИСТРИРУЙТЕСЬ ЧЕРЕЗ STEAM И ИГРАЙТЕ!',
      registrationAgreement: 'Регистрируясь в нашем сервисе, вы соглашаетесь с нашими ',
      and: ' и ',
      registrationModalDescription: 'Зарегистрируйтесь, чтобы присоединиться к нашей игровой платформе'
    },
    en: {
      // Header
      search: 'Search',
      registration: 'REGISTRATION',
      searchPlaceholder: 'Search games, news, FAQ...',
      
      // Hero section
      heroTitle1: 'YOUR LEADING',
      heroTitle2: 'ESPORTS PLATFORM',
      heroText1: 'Join the world\'s largest gaming community',
      heroText2: 'and play with more than',
      heroText3: 'gamers',
      
      // Features
      leaguesTitle: 'LEAGUES AND RANKINGS',
      leaguesText: 'Play with like-minded players and compete for prizes',
      
      tournamentsTitle: 'TOURNAMENTS',
      tournamentsText: 'Compete for real prizes with friends and other',
      
      statsTitle: 'STATISTICS',
      statsText: 'Track your progress and improve your skills',
      
      anticheatTitle: 'ANTI-CHEAT',
      anticheatText: 'Play in a safe environment without cheaters',
      
      // Advanced stats section
      advancedStatsTitle: 'Advanced Statistics',
      advancedStatsText1: 'Track your progress and analyze your game with',
      advancedStatsText2: 'detailed statistics',
      advancedStatsText3: 'Monitor your achievements as you climb the ranks and improve your skills.',
      
      // Game modal labels
      genreLabel: 'Genre:',
      releasedLabel: 'Released:',
      learnMore: 'Learn More',
      joinPlayers: 'Join millions of players worldwide',
      registrationModal: 'Registration',
      aboutGame: 'About the Game',
      
      // Search modal
      quickActions: 'Quick Actions',
      createAccount: 'Create Account',
      createAccountDesc: 'Join FACEIT for free',
      login: 'Login',
      loginDesc: 'Sign in to your account',
      downloadClient: 'Download Client',
      downloadClientDesc: 'Download FACEIT client',
      popularGames: 'Popular Games',
      quickLinks: 'Quick Links',
      faqShort: 'FAQ',
      navigation: 'navigation',
      open: 'open',
      categories: 'categories',
      close: 'close',
      
      // Professional community section
      professionalCommunity: 'Professional Community',
      professionalCommunityText1: 'Join a community of more than',
      professionalCommunityText2: 'serious gamers from around the world.',
      professionalCommunityText3: 'Play with like-minded players who share your passion for competitive gaming.',
      
      // Latest news section
      latestNews: 'Latest News',
      latestNewsDesc: 'Stay updated with FACEIT announcements and updates',
      viewAll: 'View All',
      
      // Game descriptions
      cs2Description: 'For over two decades, Counter-Strike has offered an elite competitive experience shaped by millions of players worldwide. Counter-Strike 2 is a free upgrade to CS:GO, marking the largest technical leap in Counter-Strike history with physically-based rendering and improved networking.',
      dota2Description: 'Dota 2 is a multiplayer online battle arena (MOBA) where two teams of five players compete to destroy the enemy Ancient. With over 100 unique heroes, each match offers endless strategic depth and competitive excitement.',
      pubgDescription: 'PUBG is a player-versus-player shooter where up to one hundred players fight in a battle royale. Players parachute onto an island and search for weapons and equipment to eliminate others while avoiding death themselves.',
      pubgMobileDescription: 'PUBG Mobile brings the intense battle royale experience to your mobile device with stunning graphics and smooth gameplay. Drop into massive battlefields with 100 players.',
      
      // Main content sections
      noCheatersTitle: 'Play without cheaters',
      noCheatersText1: 'FACEIT Anti-Cheat is the best private anti-cheat in the industry. Our system guarantees',
      noCheatersText2: 'fewer cheaters',
      noCheatersText3: 'compared to any other service.',
      noCheatersText4: 'More than',
      noCheatersText5: 'cheaters have been banned, ensuring fair play for millions of players.',
      
      realPrizesTitle: 'Win real prizes',
      realPrizesText1: 'Participate in tournaments and fight for',
      realPrizesText2: 'real prizes',
      realPrizesText3: 'with friends and other players.',
      realPrizesText4: 'From cash prizes to gaming equipment — every match can be your chance to win.',
      
      fairMatchmakingTitle: 'Fair matchmaking',
      fairMatchmakingText1: 'Our system of',
      fairMatchmakingText2: 'leagues and rankings',
      fairMatchmakingText3: 'ensures fair matches with players of your level.',
      fairMatchmakingText4: 'Play with like-minded players and compete for prizes in a competitive environment.',
      
      // CTA section
      readyTitle: 'READY TO TRY FACEIT?',
      readyText: 'Compete with more than 10 million players right now!',
      
      // Verification section
      verificationStatus: 'Application Status: Under Review',
      verificationTime: 'Verification takes up to 3 days',
      verificationHours: 'Hours in CS2/Dota 2:',
      verificationLicense: 'License in CS2/Dota 2:',
      verificationBans: 'Bans in CS2/Dota 2:',
      verificationSteam: 'Steam Restrictions:',
      verificationBot: 'Bot Check:',
      waiting: 'Waiting',
      verificationNotice: 'Please note: to participate in the event, you must ensure that',
      verificationNoticeAll: 'all without exception',
      verificationNoticeEnd: 'items above are highlighted in green and marked with a checkmark.',
      backToHome: 'Back to Home',
      
      // Footer
      footerTagline: 'Your leading esports platform',
      about: 'About',
      bans: 'Bans',
      developers: 'Developers',
      anticheat: 'Anti-Cheat',
      support: 'Support',
      press: 'Press',
      client: 'Client',
      faq: 'FAQ',
      stats: 'Statistics',
      jobs: 'Jobs',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      
      // Registration modal
      registerViaSteam: 'REGISTER VIA STEAM AND PLAY!',
      registrationAgreement: 'By registering on our service, you agree to our',
      and: ' and ',
      registrationModalDescription: 'Register to join our gaming platform'
    }
  };

  // Функция для определения языка браузера
  function getBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Проверяем, начинается ли язык с 'en' (en, en-US, en-GB и т.д.)
    if (browserLang.toLowerCase().startsWith('en')) {
      return 'en';
    }
    // По умолчанию русский
    return 'ru';
  }

// Функция для получения сохраненного языка из localStorage
function getSavedLanguage() {
    try {
      return localStorage.getItem('faceit-language');
    } catch (e) {
      return null;
    }
  }

// Функция для сохранения языка в localStorage
function saveLanguage(lang) {
    try {
      localStorage.setItem('faceit-language', lang);
    } catch (e) {
      // Игнорируем ошибки localStorage
    }
  }

// Определяем начальный язык: сначала проверяем localStorage, потом язык браузера
let currentLanguage = getSavedLanguage() || getBrowserLanguage();

// Функция для перевода текста
function translatePage(lang) {
    if (!lang || !translations[lang]) {
      return; // Если язык не поддерживается, выходим
    }
    
    currentLanguage = lang;
    saveLanguage(lang); // Сохраняем выбор в localStorage
    const t = translations[lang];
    
    // Обновляем все элементы с data-translate атрибутом
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (t[key]) {
        if (element.tagName === 'INPUT' && element.type === 'text') {
          element.placeholder = t[key];
        } else {
          element.textContent = t[key];
        }
      }
    });
    
    // Обновляем элементы с data-translate-html для HTML контента
    document.querySelectorAll('[data-translate-html]').forEach(element => {
      const key = element.getAttribute('data-translate-html');
      if (t[key]) {
        element.innerHTML = t[key];
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Применяем язык после загрузки DOM
    translatePage(currentLanguage);

    const languageBtn = document.getElementById('language-selector-btn');
    const languageMenu = document.getElementById('language-menu');
    const languageIcon = document.getElementById('language-selector-icon');

    if (!languageBtn || !languageMenu) {
      console.warn('Language selector elements not found');
      return;
    }

    // Обновляем текст кнопки выбора языка в соответствии с текущим языком
    const btnText = languageBtn.querySelector('span');
    if (btnText) {
      btnText.textContent = currentLanguage === 'en' ? 'English' : 'Pусский';
    }

    // Обновляем активное состояние в меню
    const initialLanguageButtons = languageMenu.querySelectorAll('button');
    initialLanguageButtons.forEach(button => {
      const buttonText = button.querySelector('span').textContent.trim();
      if ((currentLanguage === 'en' && buttonText === 'English') || 
          (currentLanguage === 'ru' && buttonText === 'Pусский')) {
        button.classList.add('bg-white/5');
        // Добавляем галочку
        const checkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkIcon.setAttribute('viewBox', '0 0 24 24');
        checkIcon.setAttribute('fill', 'none');
        checkIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        checkIcon.setAttribute('class', 'w-5 h-5 text-white');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('d', 'M20.707 7.707L9 19.414l-5.707-5.707 1.414-1.414L9 16.586 19.293 6.293l1.414 1.414z');
        path.setAttribute('fill', 'currentColor');
        checkIcon.appendChild(path);
        button.appendChild(checkIcon);
      }
    });

    // Функция для переключения видимости меню
    function toggleLanguageMenu() {
      const isOpen = !languageMenu.classList.contains('hidden');
      
      if (isOpen) {
        // Закрываем меню
        languageMenu.style.opacity = '0';
        languageMenu.style.transform = 'translateY(10px) scale(0.95)';
        setTimeout(() => {
          languageMenu.classList.add('hidden');
        }, 200);
        languageIcon.style.transform = 'rotate(0deg)';
        languageBtn.setAttribute('aria-expanded', 'false');
      } else {
        // Открываем меню
        languageMenu.classList.remove('hidden');
        setTimeout(() => {
          languageMenu.style.opacity = '1';
          languageMenu.style.transform = 'translateY(0px) scale(1)';
        }, 10);
        languageIcon.style.transform = 'rotate(180deg)';
        languageBtn.setAttribute('aria-expanded', 'true');
      }
    }

    // Обработчик клика на кнопку
    languageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleLanguageMenu();
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
      if (!languageMenu.contains(e.target) && !languageBtn.contains(e.target)) {
        if (!languageMenu.classList.contains('hidden')) {
          languageMenu.style.opacity = '0';
          languageMenu.style.transform = 'translateY(10px) scale(0.95)';
          setTimeout(() => {
            languageMenu.classList.add('hidden');
          }, 200);
          languageIcon.style.transform = 'rotate(0deg)';
          languageBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Обработчики для кнопок выбора языка
    const languageButtons = languageMenu.querySelectorAll('button');
    languageButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const selectedLanguage = this.querySelector('span').textContent.trim();
        
        // Определяем язык
        let lang = 'ru';
        if (selectedLanguage === 'English') {
          lang = 'en';
        }
        
        // Переводим страницу
        translatePage(lang);
        
        // Обновляем текст на кнопке
        const btnText = languageBtn.querySelector('span');
        if (btnText) {
          btnText.textContent = selectedLanguage;
        }

        // Обновляем активное состояние
        languageButtons.forEach(btn => {
          btn.classList.remove('bg-white/5');
          const svg = btn.querySelector('svg');
          if (svg) svg.remove();
        });
        this.classList.add('bg-white/5');
        
        // Добавляем галочку к выбранному языку
        const checkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        checkIcon.setAttribute('viewBox', '0 0 24 24');
        checkIcon.setAttribute('fill', 'none');
        checkIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        checkIcon.setAttribute('class', 'w-5 h-5 text-white');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('d', 'M20.707 7.707L9 19.414l-5.707-5.707 1.414-1.414L9 16.586 19.293 6.293l1.414 1.414z');
        path.setAttribute('fill', 'currentColor');
        checkIcon.appendChild(path);
        this.appendChild(checkIcon);

        // Закрываем меню
        toggleLanguageMenu();
      });
    });
  });
