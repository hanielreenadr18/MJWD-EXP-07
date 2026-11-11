# EXPERIMENT 7: FRAME-BASED LAYOUT USING REACT COMPONENTS

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To develop a simple frame-based webpage layout using React components, consisting of a Header, Sidebar, Content area, and Footer.

## 2. ALGORITHM

1. Start the React application.
2. Create reusable Header, Sidebar, Content, and Footer components.
3. Add the application title inside the Header component.
4. Add navigation items inside the Sidebar component.
5. Add the main information inside the Content component.
6. Add copyright information inside the Footer component.
7. Import all four components into App.jsx.
8. Arrange Sidebar and Content using CSS Flexbox.
9. Apply styles for Header, Sidebar, Content, and Footer.
10. Run the application and verify the frame-like layout.

## 3. PROJECT STRUCTURE

```text
Experiment_07/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Sidebar.jsx
        ├── Content.jsx
        └── Footer.jsx
```

## 4. PROGRAMS

### Program 1: Header.jsx

**Location:** `src/components/Header.jsx`

```jsx
function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

export default Header;
```

### Program 2: Sidebar.jsx

**Location:** `src/components/Sidebar.jsx`

```jsx
function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>
      <ul>
        <li>Home</li>
        <li>Students</li>
        <li>Courses</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
```

### Program 3: Content.jsx

**Location:** `src/components/Content.jsx`

```jsx
function Content() {
  return (
    <main className="content">
      <h2>Welcome to Student Management System</h2>

      <p>
        This is the main content area of the React application.
      </p>

      <p>
        React components can be arranged together
        to create different webpage layouts.
      </p>
    </main>
  );
}

export default Content;
```

### Program 4: Footer.jsx

**Location:** `src/components/Footer.jsx`

```jsx
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

export default Footer;
```

### Program 5: App.jsx

**Location:** `src/App.jsx`

```jsx
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main">
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default App;
```

### Program 6: App.css

**Location:** `src/App.css`

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f4f7fb;
  color: #1f2937;
}

#root {
  width: 100%;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  color: white;
  padding: 24px;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 30px;
}

.main {
  display: flex;
  flex: 1;
  min-height: 430px;
}

.sidebar {
  width: 230px;
  background: white;
  padding: 28px 20px;
  border-right: 1px solid #e5e7eb;
}

.sidebar h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #1e3a8a;
}

.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar li {
  padding: 12px 14px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #475569;
  font-weight: 500;
}

.content {
  flex: 1;
  padding: 45px;
  background: #f8fafc;
}

.content h2 {
  margin-top: 0;
  color: #1d4ed8;
  font-size: 28px;
}

.content p {
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
}

.footer {
  background: #1e293b;
  color: white;
  text-align: center;
  padding: 16px;
}

.footer p {
  margin: 0;
}
```

### Program 7: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Program 8: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_07 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Verify that the Header, Sidebar, Content, and Footer are displayed correctly.

## 6. BUILD CHECK

```bash
npm run build
```

## 7. OUTPUT

<img width="819" height="453" alt="image" src="https://github.com/user-attachments/assets/22d9753f-7b32-4186-b960-6debbffbc63f" />


## 8. OBSERVATION

The webpage is divided into four clear sections: Header, Sidebar, Content, and Footer. The Sidebar and Content area are arranged side by side using Flexbox, while the Header and Footer span the page width.

## 9. RESULT

Thus, a frame-like webpage layout was successfully created using reusable React components and CSS Flexbox.
