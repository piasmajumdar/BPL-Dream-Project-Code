# 🏏 BPL Player Selection App

A dynamic and interactive **Bangladesh Premier League (BPL) Player Selection App** built using **React, Tailwind CSS, and DaisyUI**. This project simulates a real-world player drafting system with budget constraints and responsive UI updates.


---

## 📌 Features

- 🔄 Toggle between **Available Players** and **Selected Players**
- 💰 **Coin-based selection system** (budget management)
- 🧑‍🤝‍🧑 Select and remove players dynamically
- ⚡ Instant UI updates using React state
- 🔔 Notifications using **React Toastify**
- 📱 Fully responsive design with **Tailwind CSS + DaisyUI**

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **State Management:** React Hooks (`useState`)
- **Notifications:** React Toastify
- **Data Source:** Local JSON (API-like structure)

---

## 📚 What I Learned

- Setting up a React project with Tailwind & DaisyUI  
- Handling **dynamic data loading from JSON**  
- Building reusable UI components (player cards)  
- Managing **state and data flow across components**  
- Implementing **props drilling & lifting state up**  
- Creating **real-time UI updates based on user actions**  
- Using `filter()` for removing selected items  
- Integrating third-party libraries (Toastify)  
- Deploying a React application  

---

## 🧠 Core Logic

```javascript
setSelectedPlayers([...selectedPlayers, player]);
setCoin(coin - player.price);
