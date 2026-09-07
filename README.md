# 🌐 ScholarForge  
A unified learning ecosystem built with the MERN stack — combining education, mentorship, and developer growth through three interconnected brands:

- **ScholarForge** — Main platform  
- **MentorBridge** — Mentorship network  
- **CodeClimb** — Developer skill‑building hub  

This project features a modern F‑layout homepage, responsive design, and a custom hero background blending gradient, code interface, and tech textures.

---

## 🚀 Features

### 🧩 ScholarForge (Main Platform)
- Central landing page with F‑pattern layout  
- Custom hero background image  
- Responsive design (mobile‑first)  
- Clean typography using Inter  
- Modular component structure  

### 🔗 MentorBridge
- Dedicated brand card  
- Focus on mentor–student connections  
- CTA for onboarding  

### 💻 CodeClimb
- Developer‑focused brand card  
- CTA for coding pathway access  

---

## 🛠️ Tech Stack

### **Frontend**
- React  
- Chakra UI / CSS Modules  
- Responsive grid + F‑layout  
- Custom background image  

### **Backend**
- Node.js  
- Express  
- MongoDB  
- Mongoose models (Project, User, etc.)

### **Other**
- GitHub Pages / GoDaddy domain support  
- Modular folder structure  
- Reusable components  

---

## 📁 Project Structure

root/
│── public/
│   └── images/
│       └── herobg.jpg
│
│── src/
│   ├── components/
│   │   ├── ScholarForgeLayout.jsx
│   │   ├── Hero.jsx
│   │   └── BrandCard.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── ScholarForgeLayout.css
│   │
│   └── App.jsx
│
└── server/
├── models/
│   └── Project.js
├── routes/
└── server.js

---

## 🎨 Hero Background

The hero section uses a custom blended background combining:

- Gradient  
- Coding interface  
- Futuristic tech texture  

Placed in:

Used in CSS:

```css
.hero {
  background-image: url('/images/herobg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
📦 Installation
Clone the repo:
git clone https://github.com/YOUR-USERNAME/scholarforge.git
cd scholarforge

Install dependencies:
npm install

Start the frontend:
npm run dev

Start the backend:
npm run server

🌍 Deployment
This project supports deployment via:
• GitHub Pages (frontend)
• GoDaddy domain (DNS → GitHub Pages)
• Render / Railway / Vercel (backend API)
---
🤝 Contributing
Contributions are welcome!
Feel free to open issues or submit pull requests.
---
📜 License
This project is licensed under the MIT License.
---
🧑‍💻 Author
Lauren — Creator of ScholarForge Ecosystem
Supervisor @ Buchanan Technologies
MERN Developer | Python | Cybersecurity