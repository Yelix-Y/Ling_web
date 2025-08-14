// 关于我页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 技能条动画
    const skillAnimation = {
        bars: document.querySelectorAll('.skill__progress'),
        
        init() {
            this.observeSkills();
        },
        
        observeSkills() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillBar = entry.target;
                        const skillValue = skillBar.dataset.skill;
                        
                        // 添加动画延迟
                        setTimeout(() => {
                            skillBar.style.width = skillValue + '%';
                        }, 500);
                        
                        observer.unobserve(skillBar);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            this.bars.forEach(bar => {
                observer.observe(bar);
            });
        }
    };
    
    // 数字计数动画
    const counterAnimation = {
        counters: document.querySelectorAll('.highlight-number'),
        
        init() {
            this.observeCounters();
        },
        
        observeCounters() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        this.animateCounter(counter);
                        observer.unobserve(counter);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            this.counters.forEach(counter => {
                observer.observe(counter);
            });
        },
        
        animateCounter(element) {
            const finalValue = element.textContent;
            const isNumber = !isNaN(parseInt(finalValue));
            
            if (isNumber) {
                const endValue = parseInt(finalValue);
                let currentValue = 0;
                const increment = endValue / 50;
                const duration = 2000; // 2秒
                const stepTime = duration / 50;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= endValue) {
                        currentValue = endValue;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : '');
                }, stepTime);
            }
        }
    };
    
    // 时间线动画
    const timelineAnimation = {
        items: document.querySelectorAll('.timeline-item'),
        
        init() {
            this.observeTimeline();
        },
        
        observeTimeline() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // 添加延迟动画效果
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }, index * 200);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3
            });
            
            this.items.forEach((item, index) => {
                // 初始化样式
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
                item.style.transition = 'all 0.6s ease';
                
                observer.observe(item);
            });
        }
    };
    
    // 经验卡片动画
    const cardAnimation = {
        cards: document.querySelectorAll('.experience-card, .award-item'),
        
        init() {
            this.observeCards();
        },
        
        observeCards() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2
            });
            
            this.cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                
                observer.observe(card);
            });
        }
    };
    
    // 平滑滚动效果
    const smoothScroll = {
        init() {
            // 如果页面有锚点链接，添加平滑滚动
            const anchorLinks = document.querySelectorAll('a[href^="#"]');
            anchorLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };
    
    // 初始化所有动画和功能
    skillAnimation.init();
    counterAnimation.init();
    timelineAnimation.init();
    cardAnimation.init();
    smoothScroll.init();
    
    // 页面加载完成后的入场动画
    window.addEventListener('load', function() {
        const pageHeader = document.querySelector('.page-header');
        const aboutIntro = document.querySelector('.about-intro');
        
        if (pageHeader) {
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(-20px)';
            pageHeader.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                pageHeader.style.opacity = '1';
                pageHeader.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (aboutIntro) {
            aboutIntro.style.opacity = '0';
            aboutIntro.style.transform = 'translateY(20px)';
            aboutIntro.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                aboutIntro.style.opacity = '1';
                aboutIntro.style.transform = 'translateY(0)';
            }, 300);
        }
    });
});
