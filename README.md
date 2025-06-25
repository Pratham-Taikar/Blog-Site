# 📖 Blog-Site 🚀

A clean, modern, and fully functional blog website built with **HTML, CSS, JavaScript**, and **Firebase Authentication**.  
Users can **sign in with Google**, create blog posts with images, and securely access a dashboard to manage their content.

---

## 📸 Features

- 🌑 Clean Dark Mode UI
- 📝 Add blog posts with:
  - Title
  - Date
  - Description
  - Image Upload (displayed instantly)
- 🔒 Firebase Google Authentication
- 📤 Secure user login with Google popup
- 🚪 Logout functionality
- 🔐 Auth-protected Dashboard (unauthenticated users redirected to login)
- 🔄 Blog posts displayed dynamically using LocalStorage
- 🌐 Firebase Modular SDK (v10) via ES6 module imports

---

## ⚙️ Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6 Modules)**
- **Firebase (v10 Modular SDK)**
  - Authentication (Google Sign-In)
- **LocalStorage (for post data storage)**

---

## 📦 Project Setup & Usage

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pratham-Taikar/Blog-Site.git
````

---

### 2️⃣ Host Locally

You can run this by:

* Opening `login.html` with `Live Server` (VS Code extension), or
* Running a basic HTTP server (like Python’s `http.server`) if needed:

```bash
python -m http.server
```

---

### 3️⃣ Firebase Setup

* Create a **Firebase project** at [https://console.firebase.google.com](https://console.firebase.google.com)

* Go to **Authentication > Sign-in Method**

* Enable **Google Sign-In**

* Go to **Authentication > Settings**

* Under **Authorized Domains**, click **Add Domain** and add:

  ```
  127.0.0.1
  localhost
  ```

* Get your **Firebase SDK config keys** and replace them in `login.html` and `dashboard.html` scripts under:

```javascript
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-AUTH-DOMAIN",
  ...
};
```

---

### 4️⃣ Test Google Authentication

* Open `login.html`
* Click **Sign in with Google**
* Accept OAuth popup (ensure domain is authorized in Firebase)
* Redirect to `index.html` on success
* Now open `dashboard.html`
* Only authenticated users can access it, else auto-redirects to login

---

## 🚀 Git Setup Tips (Common Issues Solved)

### Set upstream for first-time push:

```bash
git push --set-upstream origin main
```

### If remote branch has changes:

```bash
git pull origin main --rebase
git push
```

### To force push (use cautiously):

```bash
git push --force
```

---

## 💡 Error Resolved: Firebase OAuth Domain Not Authorized

When testing locally, Firebase throws:

```
Info: The current domain is not authorized for OAuth operations...
```

✅ **Solution**:
Go to **Firebase Console > Authentication > Settings > Authorized Domains** and add:

```
127.0.0.1
localhost
```

---

## 📝 Project Structure

```
Blog-Site/
│
├── index.html
├── login.html
├── dashboard.html
├── style.css
├── dashboard.css
├── /images/
└── README.md
```

---

## 💡 Inspiration

This project’s concept, layout simplicity, and card-style blog-post design were inspired by the clean reading experience of [**Medium.com**](https://medium.com).
A huge thanks to Medium for setting a high standard for clean, content-first web layouts.

---

## 📌 Author

**Pratham Taikar**
[GitHub Profile](https://github.com/Pratham-Taikar)

---

## 📜 License

This project is licensed for educational and personal portfolio use only.

```

---
