/* CSS 重置和基础样式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Arial', 'Helvetica', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

/* 容器样式 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* 导航栏样式 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: all 0.3s ease;
}

.navbar__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.navbar__logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar__logo a:hover {
    color: #6366f1;
}

.navbar__menu {
    display: flex;
}

.navbar__list {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.navbar__link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
}

.navbar__link:hover,
.navbar__link--active {
    color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
}

/* 汉堡菜单样式 */
.navbar__toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
}

.navbar__toggle-bar {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

/* 英雄区域样式 */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.hero__bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
}

.hero__content {
    text-align: center;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
    animation: fadeInUp 1s ease-out;
}

.hero__title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero__subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero__cta {
    background: #6366f1;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.hero__cta:hover {
    background: #5855eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

/* 通用section样式 */
.section__title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
    position: relative;
}

.section__title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #6366f1;
    margin: 1rem auto;
    border-radius: 2px;
}

.section__subtitle {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* 作品集样式 */
.portfolio {
    padding: 6rem 0;
    background: #f8fafc;
}

.portfolio__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.portfolio__item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.portfolio__item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.portfolio__image-container {
    position: relative;
    overflow: hidden;
}

.portfolio__image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.portfolio__item:hover .portfolio__image {
    transform: scale(1.1);
}

.portfolio__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 102, 241, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio__item:hover .portfolio__overlay {
    opacity: 1;
}

.portfolio__info {
    text-align: center;
    color: white;
    padding: 1rem;
}

.portfolio__title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.portfolio__category {
    font-size: 1rem;
    opacity: 0.9;
}

/* 关于我样式 */
.about {
    padding: 6rem 0;
}

.about__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
}

.about__image-container {
    text-align: center;
}

.about__image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.about__title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
}

.about__description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 1.5rem;
}

/* 技能样式 */
.about__skills {
    margin-top: 2rem;
}

.about__skills-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #333;
}

.skill__item {
    margin-bottom: 1.5rem;
}

.skill__name {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
}

.skill__bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    overflow: hidden;
}

.skill__progress {
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 4px;
    width: 0;
    transition: width 1s ease-out;
}

/* 联系我样式 */
.contact {
    padding: 6rem 0;
    background: #f8fafc;
}

.contact__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 2rem;
}

.contact__title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
}

.contact__item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.contact__icon {
    font-size: 1.2rem;
    margin-right: 1rem;
    width: 30px;
}

.contact__text {
    color: #666;
}

/* 社交媒体链接 */
.social__links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #6366f1;
    color: white;
    text-decoration: none;
    border-radius: 50%;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social__link:hover {
    background: #5855eb;
    transform: translateY(-3px);
}

/* 表单样式 */
.contact__form {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form__group {
    margin-bottom: 1.5rem;
}

.form__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
}

.form__input,
.form__textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form__input:focus,
.form__textarea:focus {
    outline: none;
    border-color: #6366f1;
}

.form__textarea {
    resize: vertical;
    min-height: 120px;
}

.form__submit {
    width: 100%;
    background: #6366f1;
    color: white;
    border: none;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-weight: 500;
}

.form__submit:hover {
    background: #5855eb;
}

/* 页脚样式 */
.footer {
    background: #1f2937;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

.footer__text {
    color: #9ca3af;
}

/* 模态窗口样式 */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    animation: fadeIn 0.3s ease;
}

.modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__image {
    width: 100%;
    max-height: 60vh;
    object-fit: cover;
}

.modal__info {
    padding: 2rem;
}

.modal__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

.modal__description {
    color: #666;
    line-height: 1.6;
}

/* 动画效果 */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    /* 导航栏移动端适配 */
    .navbar__menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 70px);
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: left 0.3s ease;
        padding-top: 2rem;
    }

    .navbar__menu--active {
        left: 0;
    }

    .navbar__list {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        text-align: center;
    }

    .navbar__link {
        display: block;
        padding: 1rem;
        font-size: 1.1rem;
    }

    .navbar__toggle {
        display: flex;
    }

    /* 汉堡菜单动画 */
    .navbar__toggle--active .navbar__toggle-bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .navbar__toggle--active .navbar__toggle-bar:nth-child(2) {
        opacity: 0;
    }

    .navbar__toggle--active .navbar__toggle-bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    /* 英雄区域移动端适配 */
    .hero__title {
        font-size: 2rem;
    }

    .hero__subtitle {
        font-size: 1rem;
    }

    .hero__cta {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
    }

    /* 作品集网格移动端适配 */
    .portfolio__grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    /* 关于我移动端适配 */
    .about__content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }

    /* 联系我移动端适配 */
    .contact__content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    /* 模态窗口移动端适配 */
    .modal__content {
        max-width: 95%;
        max-height: 85%;
    }

    .modal__info {
        padding: 1rem;
    }
}

@media screen and (max-width: 480px) {
    .section__title {
        font-size: 2rem;
    }

    .hero__title {
        font-size: 1.8rem;
    }

    .portfolio__grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .about__image {
        max-width: 300px;
    }
}

/* 平板端适配 */
@media screen and (min-width: 769px) and (max-width: 1024px) {
    .portfolio__grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about__content {
        gap: 3rem;
    }

    .contact__content {
        gap: 3rem;
    }
}
