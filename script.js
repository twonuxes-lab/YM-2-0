// 1. ПРЕЛОАДЕР
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// 2. АНИМАЦИЯ ПЕЧАТНОЙ МАШИНКИ
const textToType = "ТВОЯ ВТОРАЯ ЖИЗНЬ";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Скорость печати
    }
}

// Запускаем печать после загрузки прелоадера
setTimeout(typeText, 1200);

// 3. ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК САЙТА
function navigateTo(sectionName) {
    document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const targetPage = document.getElementById('page-' + sectionName);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.scrollTop = 0; 
    }

    const activeNav = document.getElementById('nav-' + sectionName);
    if (activeNav) activeNav.classList.add('active');
    
    // Если переходим на главную, перезапускаем печать
    if (sectionName === 'home') {
        typingElement.textContent = "";
        charIndex = 0;
        typeText();
    }
}

// 4. ПЕРЕКЛЮЧЕНИЕ ВНУТРИ "ОБ ИГРЕ"
function switchAboutTab(tabId, btnElement) {
    document.querySelectorAll('.about-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.about-tab').forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
    
    document.querySelector('.about-content-area').scrollTop = 0;
}

// 5. ПЕРЕКЛЮЧЕНИЕ ОС В СКАЧИВАНИИ
function switchOS(osName, btnElement) {
    document.querySelectorAll('.os-tab').forEach(tab => tab.classList.remove('active'));
    btnElement.classList.add('active');

    const pcBlock = document.getElementById('os-pc');
    const mobileBlock = document.getElementById('os-mobile');

    if (osName === 'pc') {
        pcBlock.style.display = 'grid';
        mobileBlock.style.display = 'none';
    } else {
        pcBlock.style.display = 'none';
        mobileBlock.style.display = 'grid';
    }
}

// 6. МОБИЛЬНОЕ МЕНЮ
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

function closeMobileMenu() {
    burgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
}

// 7. МОДАЛЬНЫЕ ОКНА
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});