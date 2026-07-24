# 🍹 Velvet Pour

Атмосферный лендинг для коктейль-бара **Velvet Pour**, построенный на **React 19** и **Tailwind CSS v4**, с киношными анимациями на **GSAP**: разбитый на буквы заголовок, эффекты по скроллу, параллакс и кастомная карусель рецептов.

**🔗 Демо:** [cocktails-mojito.vercel.app](https://cocktails-mojito.vercel.app)

## 📸 Скриншоты

**Hero-секция** — крупный заголовок "MOJITO" с зернистой текстурой, тропическими листьями по краям и слоганом *"Sip the Spirit Summer"*

<img width="1920" height="1080" alt="hero" src="https://github.com/user-attachments/assets/6091c738-fffb-4834-aa10-415495b52d0b" />

**Галерея и статистика** — *"Where every Detail Matters — from muddle to garnish"*, рейтинг 4.5/5 и более 12 000 довольных клиентов

<img width="1919" height="1080" alt="gallery" src="https://github.com/user-attachments/assets/4da99fd7-4f38-4197-9ffd-fcd5fdea5569" />

**Секция "Made with Craft, Poured with Passion"** — крупный кадр бармена за работой

<img width="1920" height="1080" alt="craft" src="https://github.com/user-attachments/assets/1cb74604-55ea-4304-9bf5-34ae14235d42" />

**Карусель рецептов** — переключение между Classic Mojito, Raspberry Mojito, Violet Breeze и Curacao Mojito с описанием ингредиентов

<img width="1920" height="1080" alt="carousel" src="https://github.com/user-attachments/assets/63652c82-5f28-4336-b5f0-d29ed38ded80" />

## ✨ Возможности

- Split-text анимация заголовка "MOJITO" при загрузке страницы
- Скролл-триггеры (GSAP ScrollTrigger) для последовательного появления секций и фото
- Параллакс-эффекты и зернистая (grain) текстура фона в стиле премиум-бренда
- Навигация: Cocktails, About Us, The Art, Contact
- Блок с отзывами/статистикой (рейтинг, число клиентов)
- Кастомная анимированная карусель с рецептами коктейлей (переключение по клику/свайпу)
- Полностью адаптивная верстка на Tailwind CSS

## 🛠️ Стек технологий

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + `@gsap/react`
- [react-responsive](https://www.npmjs.com/package/react-responsive)
- ESLint

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/MeshBMW/mojito-cocktails.git
cd mojito-cocktails

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

Проект будет доступен по адресу `http://localhost:5173`.

### Другие команды

```bash
npm run build     # Сборка для продакшена
npm run preview   # Просмотр production-сборки локально
npm run lint      # Проверка кода линтером
```

## 📁 Структура проекта

```
mojito-cocktails/
├── constants/      # Константы и статические данные (тексты, списки коктейлей и т.д.)
├── public/         # Медиа файлы(картинки, видео, иконки)
├── src/            # Исходный код приложения (компоненты)
├── index.html
├── package.json
└── vite.config.js
```

## 📄 Лицензия

Проект создан в учебных/портфолио-целях.
