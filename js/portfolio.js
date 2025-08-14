// 作品集页面功能
document.addEventListener('DOMContentLoaded', function() {
    // 作品集筛选功能
    const portfolioFilter = {
        tabs: document.querySelectorAll('.filter-tab'),
        cards: document.querySelectorAll('.portfolio-card'),
        
        init() {
            this.bindEvents();
        },
        
        bindEvents() {
            this.tabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    const category = e.target.dataset.category;
                    this.filterPortfolio(category);
                    this.setActiveTab(e.target);
                });
            });
        },
        
        filterPortfolio(category) {
            this.cards.forEach(card => {
                const cardCategory = card.dataset.category;
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    // 添加显示动画
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        },
        
        setActiveTab(activeTab) {
            this.tabs.forEach(tab => {
                tab.classList.remove('filter-tab--active');
            });
            activeTab.classList.add('filter-tab--active');
        }
    };
    
    // 初始化作品集筛选
    portfolioFilter.init();
    
    // 作品详情模态窗口功能
    window.openPortfolioModal = function(projectId) {
        const modal = document.getElementById('portfolioDetailModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalCategory = document.getElementById('modalCategory');
        const modalDescription = document.getElementById('modalDescription');
        const modalDetails = document.getElementById('modalDetails');
        
        // 项目数据
        const projectData = {
            'brand1': {
                image: 'https://placeholder.co/800x600/ff6b6b/ffffff?text=现代品牌标识设计详情',
                title: '现代品牌标识设计',
                category: '品牌设计',
                description: '为一家创新科技公司打造的现代品牌标识系统，体现了企业的创新精神和专业形象。',
                details: `
                    <h4>项目概述</h4>
                    <p>客户是一家专注于人工智能解决方案的科技公司，需要一套完整的品牌视觉识别系统。</p>
                    
                    <h4>设计理念</h4>
                    <p>以简约几何形状为基础，融入科技感元素，传达创新、专业、可信赖的品牌形象。</p>
                    
                    <h4>应用范围</h4>
                    <ul>
                        <li>品牌标识设计</li>
                        <li>名片设计</li>
                        <li>信头纸设计</li>
                        <li>网站UI设计</li>
                        <li>宣传册设计</li>
                    </ul>
                    
                    <h4>项目成果</h4>
                    <p>新的品牌形象帮助客户在市场上建立了强烈的视觉识别度，品牌知名度提升了40%。</p>
                `
            },
            'brand2': {
                image: 'https://placeholder.co/800x600/e74c3c/ffffff?text=餐厅品牌设计详情',
                title: '精品餐厅品牌设计',
                category: '品牌设计',
                description: '融合传统与现代元素的餐厅品牌设计，营造温馨优雅的用餐氛围。',
                details: `
                    <h4>项目背景</h4>
                    <p>为一家主营传统中式菜肴的精品餐厅设计完整的品牌视觉系统。</p>
                    
                    <h4>设计挑战</h4>
                    <p>如何在传统文化底蕴与现代审美之间找到平衡点，既要体现中式文化的深厚内涵，又要符合现代消费者的审美需求。</p>
                    
                    <h4>解决方案</h4>
                    <ul>
                        <li>采用传统印章艺术作为设计灵感</li>
                        <li>运用现代简约的视觉语言</li>
                        <li>选择温暖的色彩搭配</li>
                        <li>设计专属的中文字体</li>
                    </ul>
                `
            },
            // 可以继续添加更多项目数据...
        };
        
        const project = projectData[projectId];
        if (project) {
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalTitle.textContent = project.title;
            modalCategory.textContent = project.category;
            modalDescription.textContent = project.description;
            modalDetails.innerHTML = project.details;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };
    
    // 关闭模态窗口
    const modal = document.getElementById('portfolioDetailModal');
    const modalClose = document.getElementById('modalClose');
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // 点击模态窗口外部关闭
    modal?.addEventListener('click', function(e) {
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
});
