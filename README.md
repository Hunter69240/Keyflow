# ⌨️ Key Flow

A **React Native Typing Speed Test App** that helps users practice typing, measure their **speed (WPM)**, and **accuracy**, while also storing and displaying previous test results.

---

## 🚀 Features

- 🏠 **Home Screen** – Navigate to start a new test or view previous results.  
- ⏱ **Typing Test** – Countdown timer with configurable duration (10s, 30s, 60s, 120s, 180s).  
- 📊 **Results Screen** – Displays accuracy, WPM, correct words, and input vs. target sentence.  
- 🗂 **Previous Tests** – Expandable cards showing past test results.  
- 🖼 **Responsive UI** – Works on both Android & iOS with responsive layouts.  

---

## 🛠 Tech Stack

- ⚛️ **React Native**  
- 📱 **React Navigation**  
- ⏳ **react-native-countdown-circle-timer**  
- 📊 **react-native-element-dropdown**  
- 🎨 **react-native-responsive-screen**  
- 🖼 **react-native-vector-icons**  

---

## 📂 Project Structure



---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Hunter69240/key-flow.git
   cd key-flow

2. Install Dependencies
    ```
    npm install
    
    or

    yarn install

3. Run the app
    ```
    npm start
    ```

# 🔧 Configuration

    Replace placeholders in API calls with your backend URL:

    1. PreviousTest.js

    fetch("{Your URL here}")

    2. ResultScreen.js

    fetch("{Your Url Here}", { method: "POST", ... })

# 📸 Screenshots

    ![Home](https://github.com/Hunter69240/Keyflow/blob/42364b6691a8bc4ea503155de80c9b19228e67ee/assets/Images/Home.jpg)


# ✨ Future Improvements

🔄 Add offline storage with AsyncStorage / SQLite

🌐 Sync results with backend database

🎨 Dark/Light theme support

🏆 Leaderboard integration


# 🙋‍♂️ Author
 - Aadish Somayaji

 - GitHub: [@Hunter69240](https://github.com/Hunter69240)

