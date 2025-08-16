# 🛒 Online Shop — Frontend  

## 📌 Project Overview  
This project is a **front-end of an online shop built with React**.  
It provides a modern and responsive user interface for browsing products, managing a shopping cart, and placing orders.  

The goal of the project is to demonstrate skills in **React, state management, routing, and API integration**.  

---

## 🚀 Features  
- Product catalog with search and filtering  
- Product details page  
- Shopping cart (add/remove items, quantity update)  
- Checkout page (form validation included)  
- Responsive design (desktop & mobile)  

---

## 🛠️ Tech Stack  
- **React** — UI library  
- **React Router** — navigation  
- **Context API / Zustand / Redux** — state management  
- **Tailwind CSS / MUI / Chakra UI** — styling  
- **Axios / Fetch API** — API requests  

---

## 📂 Project Structure  
```plaintext
src/
 ├── assets/          # Зображення, іконки, шрифти
 ├── components/      # Повторно використовувані UI-компоненти (Button, Navbar, ProductCard)
 ├── context/         # Глобальний state (Context API / Zustand / Redux)
 ├── hooks/           # Кастомні React hooks (useCart, useAuth)
 ├── pages/           # Сторінки (Home, Product, Cart, Checkout, NotFound)
 ├── services/        # API-запити (axios/fetch), робота з backend
 ├── styles/          # Глобальні стилі, Tailwind config або SCSS
 ├── utils/           # Хелпери та утиліти (форматування цін, валідація)
 ├── App.jsx          # Основний компонент додатку
 ├── index.js         # Точка входу в React
 └── router.js        # Налаштування React Router

## ▶️ Installation & Usage  
```bash
# Clone repo
git clone https://github.com/username/react-shoes-shop.git

# Go to project folder
cd react-shoes-shop

# Install dependencies
npm install

# Start dev server
npm start