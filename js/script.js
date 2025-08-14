// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');
    const navLinks = document.querySelectorAll('.navbar__link');
    const viewPortfolioBtn = document.getElementById('viewPortfolio');
    const skillBars = document.querySelectorAll('.skill__progress');
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    const modal = document.getElementById('portfolioModal');
    const modalClose = document.getElementById('modalClose');
    const contactForm = document.getElementById('contactForm');

    // === 轮播图功能 ===
    const carousel = {
        slides: document.querySelectorAll('.carousel__slide'),
        indicators: document.querySelectorAll('.carousel__indicator'),
        prevBtn: document.getElementById('carouselPrev'),
        nextBtn: document.getElementById('carouselNext'),
        currentSlide: 0,
        totalSlides: 3,
        autoPlayTimer: null,
        autoPlayInterval: 8000, // 8秒自动切换

        // 初始化轮播
        init() {
            this.bindEvents();
            this.startAutoPlay();
        },

        // 绑定事件
        bindEvents() {
            // 检查按钮是否存在，避免错误
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.goToPrevSlide();
                });
            }

            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.goToNextSlide();
                });
            }

            // 指示器点击事件
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.goToSlide(index);
                });
            });

            // 键盘控制支持
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    this.goToPrevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.goToNextSlide();
                }
            });

            // 鼠标悬停时暂停自动播放
            const carouselContainer = document.querySelector('.carousel');
            if (carouselContainer) {
                carouselContainer.addEventListener('mouseenter', () => {
                    this.stopAutoPlay();
                });

                carouselContainer.addEventListener('mouseleave', () => {
                    this.startAutoPlay();
                });
            }
        },

        // 切换到指定幻灯片
        goToSlide(slideIndex) {
            // 移除当前活动状态
            this.slides[this.currentSlide].classList.remove('carousel__slide--active');
            this.indicators[this.currentSlide].classList.remove('carousel__indicator--active');

            // 更新当前幻灯片索引
            this.currentSlide = slideIndex;

            // 添加新的活动状态
            this.slides[this.currentSlide].classList.add('carousel__slide--active');
            this.indicators[this.currentSlide].classList.add('carousel__indicator--active');

            // 重新启动自动播放
            this.restartAutoPlay();
        },

        // 上一张幻灯片
        goToPrevSlide() {
            const prevIndex = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
            this.goToSlide(prevIndex);
        },

        // 下一张幻灯片
        goToNextSlide() {
            const nextIndex = this.currentSlide === this.totalSlides - 1 ? 0 : this.currentSlide + 1;
            this.goToSlide(nextIndex);
        },

        // 开始自动播放
        startAutoPlay() {
            this.autoPlayTimer = setInterval(() => {
                this.goToNextSlide();
            }, this.autoPlayInterval);
        },

        // 停止自动播放
        stopAutoPlay() {
            if (this.autoPlayTimer) {
                clearInterval(this.autoPlayTimer);
                this.autoPlayTimer = null;
            }
        },

        // 重新启动自动播放
        restartAutoPlay() {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    };

    // 初始化轮播组件（仅在首页存在轮播元素时）
    if (document.querySelector('.carousel')) {
        carousel.init();
    }

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = '#0D132D';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = '#0D132D';
            navbar.style.boxShadow = 'none';
        }
    });

    // 移动端汉堡菜单切换
    mobileMenu.addEventListener('click', function() {
        navbarMenu.classList.toggle('navbar__menu--active');
        mobileMenu.classList.toggle('navbar__toggle--active');
    });

    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是外部链接（指向其他HTML文件），允许默认行为
            if (href.endsWith('.html') || href.startsWith('http')) {
                // 关闭移动端菜单
                navbarMenu.classList.remove('navbar__menu--active');
                mobileMenu.classList.remove('navbar__toggle--active');
                return; // 允许默认的页面跳转
            }
            
            // 只有锚点链接才阻止默认行为并进行页面内滚动
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // 移除所有活动状态
                navLinks.forEach(l => l.classList.remove('navbar__link--active'));
                // 添加当前活动状态
                this.classList.add('navbar__link--active');

                // 获取目标section
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // 平滑滚动到目标section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // 关闭移动端菜单
                navbarMenu.classList.remove('navbar__menu--active');
                mobileMenu.classList.remove('navbar__toggle--active');
            }
        });
    });

    // 查看作品按钮点击事件
    if (viewPortfolioBtn) {
        viewPortfolioBtn.addEventListener('click', function() {
            // 跳转到作品集页面
            window.location.href = 'portfolio.html';
        });
    }

    // 轮播中的其他按钮点击事件
    const viewPortfolioBtn2 = document.getElementById('viewPortfolio2');
    const viewPortfolioBtn3 = document.getElementById('viewPortfolio3');

    if (viewPortfolioBtn2) {
        viewPortfolioBtn2.addEventListener('click', function() {
            window.location.href = 'portfolio.html';
        });
    }

    if (viewPortfolioBtn3) {
        viewPortfolioBtn3.addEventListener('click', function() {
            window.location.href = 'portfolio.html';
        });
    }

    // 滚动时高亮当前导航项
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar__link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('navbar__link--active'));
                if (navLink) {
                    navLink.classList.add('navbar__link--active');
                }
            }
        });
    });

    // 技能条动画 (使用Intersection Observer)
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill__progress');
                skillBars.forEach(bar => {
                    const skillValue = bar.getAttribute('data-skill');
                    bar.style.width = skillValue + '%';
                });
            }
        });
    }, {
        threshold: 0.5
    });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        skillObserver.observe(aboutSection);
    }

    // 作品集项目点击事件 (模态窗口)
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const image = this.querySelector('.portfolio__image');
            const title = this.querySelector('.portfolio__title');
            const category = this.querySelector('.portfolio__category');
            
            if (image && title && category) {
                // 设置模态窗口内容
                document.getElementById('modalImage').src = image.src;
                document.getElementById('modalImage').alt = image.alt;
                document.getElementById('modalTitle').textContent = title.textContent;
                document.getElementById('modalDescription').textContent = 
                    `这是一个${category.textContent}项目，展示了专业的设计技巧和创意思维。项目注重细节，力求在视觉效果和功能性之间达到完美平衡。`;
                
                // 显示模态窗口
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });

    // 关闭模态窗口
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 点击模态窗口背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ESC键关闭模态窗口
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 联系表单提交
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // 表单验证
        if (!name || !email || !subject || !message) {
            alert('请填写所有必填字段！');
            return;
        }

        if (!isValidEmail(email)) {
            alert('请输入有效的邮箱地址！');
            return;
        }

        // 模拟表单提交 (实际项目中需要连接到后端)
        const submitBtn = this.querySelector('.form__submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;

        // 模拟网络请求延迟
        setTimeout(() => {
            alert('消息发送成功！我会尽快回复您。');
            this.reset(); // 重置表单
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // 邮箱验证函数
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 页面加载动画
    const animateElements = document.querySelectorAll('.portfolio__item, .about__content, .contact__content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // 为动画元素设置初始状态
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // 平滑滚动兼容性处理
    function smoothScrollTo(target) {
        const targetPosition = target.offsetTop - 70; // 减去导航栏高度
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // 防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 节流函数
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 使用节流优化滚动事件
    const throttledScrollHandler = throttle(function() {
        // 滚动相关的逻辑已经在上面实现
    }, 16); // 约60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // 页面加载完成后的初始化
    console.log('设计师作品集网站加载完成！');
    
    // 可以在这里添加更多初始化逻辑
    // 例如：加载动画、数据获取等
});

// 工具函数：获取元素距离顶部的距离
function getElementTop(element) {
    let top = 0;
    while (element) {
        top += element.offsetTop;
        element = element.offsetParent;
    }
    return top;
}

// 工具函数：检查元素是否在视口中
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 懒加载图片函数
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 如果需要懒加载，调用此函数
// lazyLoadImages();
