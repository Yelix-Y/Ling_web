// 联系我页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 联系表单处理
    const contactForm = {
        form: document.getElementById('contactForm'),
        
        init() {
            if (this.form) {
                this.bindEvents();
                this.setupValidation();
            }
        },
        
        bindEvents() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
            
            // 实时验证
            const inputs = this.form.querySelectorAll('.form-input, .form-select, .form-textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', () => {
                    this.clearError(input);
                });
            });
        },
        
        setupValidation() {
            // 为必填字段添加验证样式
            const requiredFields = this.form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const label = field.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.innerHTML = label.innerHTML.replace(' *', '') + ' <span style="color: #ef4444;">*</span>';
                }
            });
        },
        
        validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';
            
            // 必填验证
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = '此字段为必填项';
            }
            
            // 邮箱验证
            if (field.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = '请输入有效的邮箱地址';
                }
            }
            
            // 电话验证
            if (field.type === 'tel' && value) {
                const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = '请输入有效的电话号码';
                }
            }
            
            this.showFieldStatus(field, isValid, errorMessage);
            return isValid;
        },
        
        showFieldStatus(field, isValid, errorMessage) {
            // 移除现有的错误信息
            this.clearError(field);
            
            if (!isValid) {
                field.style.borderColor = '#ef4444';
                
                // 添加错误信息
                const errorDiv = document.createElement('div');
                errorDiv.className = 'field-error';
                errorDiv.style.color = '#ef4444';
                errorDiv.style.fontSize = '0.875rem';
                errorDiv.style.marginTop = '0.25rem';
                errorDiv.textContent = errorMessage;
                
                field.parentNode.appendChild(errorDiv);
            } else if (field.value.trim()) {
                field.style.borderColor = '#10b981';
            }
        },
        
        clearError(field) {
            field.style.borderColor = '#e5e7eb';
            const errorDiv = field.parentNode.querySelector('.field-error');
            if (errorDiv) {
                errorDiv.remove();
            }
        },
        
        validateForm() {
            const requiredFields = this.form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            
            return isValid;
        },
        
        handleSubmit() {
            if (!this.validateForm()) {
                this.showNotification('请检查并修正表单中的错误信息', 'error');
                return;
            }
            
            // 显示加载状态
            const submitBtn = this.form.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '发送中...';
            submitBtn.disabled = true;
            
            // 模拟表单提交
            setTimeout(() => {
                // 重置表单
                this.form.reset();
                
                // 清除所有验证样式
                const inputs = this.form.querySelectorAll('.form-input, .form-select, .form-textarea');
                inputs.forEach(input => {
                    this.clearError(input);
                });
                
                // 恢复按钮状态
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // 显示成功消息
                this.showNotification('感谢您的咨询！我们会在24小时内回复您。', 'success');
            }, 2000);
        },
        
        showNotification(message, type = 'success') {
            // 创建通知元素
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                opacity: 0;
                transform: translateX(100%);
                transition: all 0.3s ease;
                max-width: 400px;
            `;
            
            if (type === 'success') {
                notification.style.background = '#10b981';
            } else {
                notification.style.background = '#ef4444';
            }
            
            notification.textContent = message;
            document.body.appendChild(notification);
            
            // 显示动画
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateX(0)';
            }, 100);
            
            // 自动隐藏
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 5000);
        }
    };
    
    // FAQ 手风琴效果
    const faqAccordion = {
        items: document.querySelectorAll('.faq-item'),
        
        init() {
            this.bindEvents();
        },
        
        bindEvents() {
            this.items.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    this.toggleItem(item);
                });
            });
        },
        
        toggleItem(item) {
            const isActive = item.classList.contains('faq-item--active');
            
            // 关闭其他项目
            this.items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('faq-item--active');
                }
            });
            
            // 切换当前项目
            if (isActive) {
                item.classList.remove('faq-item--active');
            } else {
                item.classList.add('faq-item--active');
            }
        }
    };
    
    // 服务项目动画
    const serviceAnimation = {
        items: document.querySelectorAll('.service-item'),
        
        init() {
            this.observeItems();
        },
        
        observeItems() {
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
            
            this.items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'all 0.6s ease';
                
                observer.observe(item);
            });
        }
    };
    
    // 联系卡片动画
    const cardAnimation = {
        cards: document.querySelectorAll('.contact-card, .social-link-large'),
        
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
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';
                
                observer.observe(card);
            });
        }
    };
    
    // 初始化所有功能
    contactForm.init();
    faqAccordion.init();
    serviceAnimation.init();
    cardAnimation.init();
    
    // 页面加载完成后的入场动画
    window.addEventListener('load', function() {
        const pageHeader = document.querySelector('.page-header');
        
        if (pageHeader) {
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(-20px)';
            pageHeader.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                pageHeader.style.opacity = '1';
                pageHeader.style.transform = 'translateY(0)';
            }, 100);
        }
    });
});
