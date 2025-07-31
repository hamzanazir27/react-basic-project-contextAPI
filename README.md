## 🌓 React Theme Toggle App

This project demonstrates how to manage global state in a React app using **Context API**, specifically for **theme switching** between **light** and **dark** modes.

---

### 🚀 Features

- ✅ Light and Dark theme toggle
- ✅ Global state management using React Context API
- ✅ Tailwind CSS for responsive and modern UI
- ✅ Dark mode support using latest Tailwind `@custom-variant` (v4)

---

### 🛠️ Tech Stack

- **React**
- **Tailwind CSS (v4)**
- **Vite**
- **React Context API**

---

### 📁 Folder Structure

```
src/
├── App.jsx               // Main component
├── App.css              // Tailwind directives
├── components/
│   ├── Card.jsx         // Product card UI
│   └── ThemeBtn.jsx     // Theme toggle switch
├── contexts/
│   └── contxt.js        // Theme context (provider + hook)
```

---

### ⚙️ Tailwind Dark Mode Setup (v4+)

Tailwind now uses CSS-first custom variant:

```css
/* App.css */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *)); /* Required for dark mode */
```

---

### 📦 Installation

```bash
npm install
npm run dev
```

---

### 📚 What I Learned

- How to create and use React Context API to manage global state
- How to toggle themes using state (`useState`)
- How to update the HTML `<html>` tag to apply dark mode
- Tailwind's new dark mode setup using `@custom-variant`
- How to access context in any component using `useContext`

---

### 🌐 Live Preview

_(Add your deployed link here if available)_

---

### 🧠 Author's Note

This project helped me understand React Context API in a real-world use case. I now feel confident managing state globally without prop-drilling.
