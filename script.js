document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 1;
    const slides = document.querySelectorAll('.home-hero-style');
    const totalSlides = slides.length;

    // 색상 단계 설정
    const gradientColors = [
        '#ffd82b', '#ffc822', '#ffb81a', '#ffa812', '#ff980a', 
    '#ff8a00', '#ff7a10', '#ff6a20', '#ff5a30', '#ff4a40', 
    '#ff3a50', '#ff2a60', '#ff1a70', '#ff0a80', '#e60092', 
    '#cc009f', '#b300ac', '#9900b9', '#8000c6', '#6600d3', 
    '#4d00e0', '#3300ed', '#1a00fa', '#0000ff', '#0000e6', 
    '#0000cc', '#0000b3', '#000099', '#000080', '#000066', 
    '#00004d', '#000033', '#00001a', '#000014', '#000010', 
    '#00000c', '#000008', '#000004', '#000000'         
    ];

    const pageIndicator = document.querySelector('.page-indicator');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.add('hide'));
        slides.forEach(slide => slide.classList.remove('active'));

        const currentSlide = slides[index - 1];
        currentSlide.classList.remove('hide');
        currentSlide.classList.add('active');

        updatePageIndicator(index);
        updateFontAndPadding(currentSlide, index);
        updateBackground(index);
    }

    function nextSlide() {
        currentIndex = (currentIndex % totalSlides) + 1;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 2 + totalSlides) % totalSlides + 1;
        showSlide(currentIndex);
    }

    function updatePageIndicator(index) {
        const currentPage = slides[index - 1].getAttribute('data-page');
        pageIndicator.textContent = currentPage;
    }

    function updateFontAndPadding(slide, index) {
        let fontSize = 2.6 + (index - 1) * 0.03;
        if (fontSize > 5.6) fontSize = 5.6;

        let lineHeightRatio = 1.4 + (index - 1) * 0.004;
        if (lineHeightRatio > 1.6) lineHeightRatio = 1.6;

        const padding = 50 - (index - 1) * 5;
        const adjustedPadding = Math.max(padding, 1);

        slide.style.fontSize = `${fontSize}vw`;
        slide.style.lineHeight = `${(fontSize * lineHeightRatio).toFixed(2)}vw`;
        slide.style.padding = `0 ${adjustedPadding}vw`;
    }

    function updateBackground(index) {
        const body = document.body;

        const colorIndex = Math.min(index - 1, gradientColors.length - 1);
        body.style.backgroundColor = gradientColors[colorIndex];
        body.style.color = '#fff';
    }

    // 초기 슬라이드 표시
    showSlide(currentIndex);

    // 클릭 이벤트 설정
    document.querySelector('#left-area').addEventListener('click', previousSlide);
    document.querySelector('#right-area').addEventListener('click', nextSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    // 인덱스 51~55의 요소 선택
    const elements = document.querySelectorAll('.home-hero-style.hide[data-index="50"], .home-hero-style.hide[data-index="51"], .home-hero-style.hide[data-index="52"], .home-hero-style.hide[data-index="53"]');
    
    // 각 요소에 빠른 깜빡임 클래스 추가
    elements.forEach(element => {
        element.classList.add('fast-blink'); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 인덱스 51~55의 요소 선택
    const elements = document.querySelectorAll('.home-hero-style.hide[data-index="53"]');
    
    // 각 요소에 빠른 깜빡임 클래스 추가
    elements.forEach(element => {
        element.classList.add('fast-blink3'); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 인덱스 51~55의 요소 선택
    const elements = document.querySelectorAll('.home-hero-style.hide[data-index="54"], .home-hero-style.hide[data-index="55"]');
    
    // 각 요소에 빠른 깜빡임 클래스 추가
    elements.forEach(element => {
        element.classList.add('fast-blink2'); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.home-hero-style.hide[data-index="62"]');
    
    elements.forEach(element => {
        element.classList.add('smooth'); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.querySelector('.home-hero-style.hide[data-index="123"]');
    
    if (targetElement) {
        // 기존 스타일 초기화
        targetElement.style.fontSize = '';
        targetElement.style.lineHeight = '';
        targetElement.style.fontWeight = 'bold'; // 굵게
    } else {
        console.error('Element with data-index="123" not found.');
    }
});

