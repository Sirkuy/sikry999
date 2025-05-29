// 等待DOM内容加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动动画效果
    window.addEventListener('scroll', revealOnScroll);
    
    // 初始执行一次，处理首屏内容
    revealOnScroll();
    
    // 为导航链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');

            // Ignore placeholders like '#' that have no target element
            if (!targetSelector || targetSelector === '#') {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 滚动显示动画
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}



// 添加导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.classList.remove('shadow');
        navbar.style.backgroundColor = '';
    }
});

// 为卡片添加悬停效果
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});
