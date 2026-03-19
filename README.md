<div align="center">

# بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ

### *Bismillahir Rahmanir Rahim*
**In the Name of Allah, the Most Gracious, the Most Merciful**

---

# السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللّٰهِ وَبَرَكَاتُهُ

### *Assalamu'alaikum warahmatullahi wabarakatuh*
**May the peace, mercy, and blessings of Allah be with you**

---

<img src="https://img.shields.io/badge/MPA-BankFi%20UI-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="BankFi UI">

# <span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">🌟 BankFi - Mobile Banking UI</span>

> **<span style="background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">A modern, full-featured mobile banking UI demo built with React Native</span>**

<br/>

<div>

![React Native](https://img.shields.io/badge/React%20Native-0.70.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React](https://img.shields.io/badge/React-18.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-1.9.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Navigation](https://img.shields.io/badge/React%20Navigation-6-6B4EFF?style=for-the-badge&logo=reactrouter&logoColor=white)
![Android](https://img.shields.io/badge/Android-Supported-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-Supported-000000?style=for-the-badge&logo=apple&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=github)

</div>

<br/>

<div>

### 🚀 [Features](#-features) • 📧 [Contact](#-contact) • ⭐ [Star Repo](#project-statistics)

</div>

---

</div>
A **polished, production-ready mobile banking UI** designed to showcase onboarding, account, and transaction flows. Built with React Native and local assets. This repo is UI-only and uses mock data.

#### ✅ What Makes This Special

<table>
<tr>
<td>

**Mobile Excellence**
- ⚡ Smooth React Native UI
- 📱 Pixel-perfect layouts
- ✨ Consistent design system
- 🧭 Custom navigation flow

</td>
<td>

**Features & Functionality**
- 💳 Card management flows
- 💸 Transfers & payments
- 🔔 Notifications & activity
- 📊 Statistics dashboards

</td>
<td>

**Design & UX**
- 🌈 Rich visuals & assets
- 🎛️ Reusable components
- 🧩 Clean information architecture
- ♿ Accessible-friendly UI

</td>
</tr>
</table>

---

## <span style="background: linear-gradient(90deg, #ffa751 0%, #ffe259 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">✨ Features</span>

<table>
<tr>
<td width="33%">

### 🧭 **Core Flows**
- ✔️ Onboarding
- ✔️ Sign in / sign up
- ✔️ OTP confirmation
- ✔️ Reset password
- ✔️ Profile & settings

</td>
<td width="33%">

### 💳 **Banking UI**
- ✔️ Dashboard overview
- ✔️ Cards menu & details
- ✔️ Deposits & loans
- ✔️ Transaction history
- ✔️ Notifications

</td>
<td width="33%">

### 💸 **Payments**
- ✔️ IBAN payments
- ✔️ Mobile payments
- ✔️ Top-up flows
- ✔️ Invoice creation
- ✔️ Success/failed states

</td>
</tr>
</table>

<details>
<summary><b>📊 Advanced UI Sections (Click to expand)</b></summary>

#### 🎨 **Visual System**
- 🖼️ Local images & backgrounds
- 🎯 Custom SVG icon set
- 🧵 Typography with Mulish
- 💡 Themed colors in constants

#### 🧭 **Navigation**
- 🧱 Stack-based flows
- 🔀 Custom bottom tabs
- 🗺️ Screen routing via `screenNames`

#### 🗃️ **State & Data**
- 📦 Redux Toolkit store
- 🧪 Local mock data
- 🔁 UI state for tabs

</details>

---

## 🚀 **<span style="background: linear-gradient(90deg, #00d2fc 0%, #3a7bd5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Tech Stack</span>**

<details open>
<summary><b>⚙️ Full Technology Stack (Click to expand)</b></summary>

### 🎯 Core Technologies

```
┌─ Framework & Runtime
│  ├─ React Native 0.70.6
│  ├─ React 18.1
│  └─ Node.js 16
│
├─ Navigation
│  ├─ @react-navigation/native
│  └─ @react-navigation/stack
│
├─ State Management
│  ├─ Redux Toolkit
│  └─ React Redux
│
├─ UI & Utilities
│  ├─ react-native-svg
│  ├─ react-native-screens
│  ├─ react-native-safe-area-context
│  └─ react-native-linear-gradient
│
└─ Development Tools
   ├─ Metro bundler
   ├─ ESLint
   └─ Jest
```

### 📦 Key Dependencies

| Category | Package | Purpose |
|----------|---------|---------|
| **UI Framework** | `react-native@0.70.6` | Mobile UI framework |
| **UI Library** | `react@18.1` | Component rendering |
| **Navigation** | `@react-navigation/native` | App navigation |
| **State** | `@reduxjs/toolkit` | State management |
| **Icons** | `react-native-svg` | SVG icon rendering |
| **Safe Area** | `react-native-safe-area-context` | Device safe areas |

</details>

---

## 📁 Project Structure

```
bankfi/
├── android/                      # Android native project
├── ios/                          # iOS native project
├── src/
│   ├── assets/                   # Images and backgrounds
│   ├── components/               # Reusable UI components
│   ├── constants/                # Theme, screen names, mock data
│   ├── fonts/                    # Mulish fonts
│   ├── navigation/               # Stack and tab navigation
│   ├── screens/                  # All app screens
│   ├── store/                    # Redux slices and store
│   └── svg/                      # SVG icon components
├── __tests__/                    # Jest tests
├── App.js                        # App entry component
├── index.js                      # React Native entry
├── package.json                  # Dependencies & scripts
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have these installed:

```bash
Node.js 16  •  npm  •  Git
Android Studio + Android SDK  •  JDK 11
```

**Verify versions:**
```bash
node --version
npm --version
```

### 🔧 Installation & Setup

#### Step 1️⃣ Clone Repository
```bash
git clone https://github.com/Moparapairayat/BankFi.git
cd BankFi
```

#### Step 2️⃣ Install Dependencies
```bash
npm install
```

### ▶️ Running the Project

**Start Metro bundler:**
```bash
npm start
```

**Run Android:**
```bash
npm run android
```

If using a physical device:
```bash
adb reverse tcp:8081 tcp:8081
```

**Run iOS (macOS only):**
```bash
npm run ios
```

---

## 🎨 Customization Guide

### 🎯 Theme & Branding

Edit `src/constants/theme.js`:
```javascript
export const COLORS = {
  primary: "#5B4EFF",
  bgColor: "#F6F6F8",
  mainDark: "#1E1E1E",
};
```

### 📝 Content Customization

Edit `src/constants/dummyData.js` to update mock content.

### ✨ Add New Screens

1. Create a new screen in `src/screens/YourScreen.js`.
2. Export it in `src/screens/index.js`.
3. Add a name in `src/constants/screenNames.js`.
4. Register in `src/navigation/StackNavigator.js`.

---

## 🚀 Deployment

### 🔥 Android Build

**Debug APK:**
```bash
cd android
./gradlew assembleDebug
```

**Release AAB (Play Store):**
```bash
cd android
./gradlew bundleRelease
```

### 🍎 iOS Build (macOS only)

Open `ios/app.xcodeproj` in Xcode and build for a device or archive for release.

---

## 📜 Available Scripts

<table>
<tr>
<td>

| Command | Purpose |
|---------|---------|
| `npm start` | Start Metro bundler |
| `npm run android` | Build and install Android |
| `npm run ios` | Run iOS simulator |
| `npm test` | Run tests |
| `npm run lint` | Run ESLint |

</td>
</tr>
</table>

---

## 🤝 Contributing

We ❤️ contributions! Here's how:

### 📝 Process

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create** a feature branch: `git checkout -b feature/awesome-feature`
4. **Make** your changes
5. **Commit**: `git commit -m "feat: add awesome feature"`
6. **Push**: `git push origin feature/awesome-feature`
7. **Submit** a Pull Request

### 📏 Code Standards

- ✅ Use **JavaScript**
- ✅ Follow **ESLint** rules
- ✅ Keep components **focused**
- ✅ Write meaningful **commit messages**

---

## 📄 License

**MIT License** - Full commercial and private use permitted

<table>
<tr>
<td width="50%">

✅ **You Can**
- Use commercially
- Modify code
- Distribute copies
- Private use

</td>
<td width="50%">

📋 **You Must**
- Include license
- State changes
- Acknowledge author

</td>
</tr>
</table>

See [LICENSE](./LICENSE) file for complete details.

---

## <span style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">📧 Contact</span>

<div align="center">

### 🌍 **Let's Connect & Collaborate**

**Reach out across multiple channels:**

---

#### 🌐 **Global Presence**

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Support@moparapairayat.com)
[![Global Website](https://img.shields.io/badge/🌍%20Global-moparapairayat.com-000000?style=for-the-badge)](https://moparapairayat.com)
[![UK Website](https://img.shields.io/badge/🇬🇧%20UK-moparapairayat.uk-000000?style=for-the-badge)](https://moparapairayat.uk)
[![BD Website](https://img.shields.io/badge/🇧🇩%20Bangladesh-moparapairayat.bd-000000?style=for-the-badge)](https://moparapairayat.bd)
[![SA Website](https://img.shields.io/badge/🇸🇦%20Saudi%20Arabia-moparapairayat.sa-000000?style=for-the-badge)](https://moparapairayat.sa)
[![TR Website](https://img.shields.io/badge/🇹🇷%20Turkey-moparapairayat.tr-000000?style=for-the-badge)](https://moparapairayat.tr)

---

### 📍 **Regional Contact Hubs**

<table>
<tr>
<td align="center">

**🌍 Global**
- [moparapairayat.com](https://moparapairayat.com)
- 📧 [Support@moparapairayat.com](mailto:Support@moparapairayat.com)
- Int'l clients & services

</td>
<td align="center">

**🇬🇧 United Kingdom**
- [moparapairayat.uk](https://moparapairayat.uk)
- 📧 [Support@moparapairayat.uk](mailto:Support@moparapairayat.uk)
- UK-based services

</td>
<td align="center">

**🇧🇩 Bangladesh**
- [moparapairayat.bd](https://moparapairayat.bd)
- 📧 [Support@moparapairayat.bd](mailto:Support@moparapairayat.bd)
- Regional operations

</td>
<td align="center">

**🇸🇦 Saudi Arabia**
- [moparapairayat.sa](https://moparapairayat.sa)
- 📧 [Support@moparapairayat.sa](mailto:Support@moparapairayat.sa)
- ME & regional reach

</td>
<td align="center">

**🇹🇷 Turkey**
- [moparapairayat.tr](https://moparapairayat.tr)
- 📧 [Support@moparapairayat.tr](mailto:Support@moparapairayat.tr)
- Turkish & EU services

</td>
</tr>
</table>

---

### 💼 **Quick Links**

<table>
<tr>
<td>

| Platform | Link |
|----------|------|
| 📧 **Email** | [Support@moparapairayat.com](mailto:Support@moparapairayat.com) |
| 🌐 **Portfolio** | [Live Demo](https://sultan-personal-portfolio-islamic.vercel.app/) |
| 💼 **GitHub** | [Moparapairayat](https://github.com/Moparapairayat) |
| 🔗 **LinkedIn** | [Profile](https://linkedin.com/in/your-profile) |

</td>
</tr>
</table>

---

### 📧 **Official Business Emails**

**Always Active for Contracts & Inquiries:**

<table>
<tr>
<td width="50%">

[Moparapairayat@gmail.com](mailto:Moparapairayat@gmail.com)
→ General contracts

</td>
<td width="50%">

[Moparapairayatbd@gmail.com](mailto:Moparapairayatbd@gmail.com)
→ Bangladesh inquiries

</td>
</tr>
</table>

---

### 💬 **WhatsApp Project Inquiry Lines**

<table>
<tr>
<td align="center">

**🇺🇸 Personal Projects**
[+1 724-315-5810](https://wa.me/17243155810)

</td>
<td align="center">

**💼 Corporate/Large**
[+1 719-680-2913](https://wa.me/17196802913)

</td>
</tr>
<tr>
<td align="center">

**🤖 ML & AML**
[+8801955000704](https://wa.me/8801955000704)

</td>
<td align="center">

**🔒 Security & Servers**
[+8801305868621](https://wa.me/8801305868621)

</td>
</tr>
</table>

---

### 🚀 **Let's Build Something Great Together!**

Whether you have a project idea, need consultation, or just want to connect, reach out through any channel above.

</div>

---

## 📊 Project Statistics

<div align="center">

<table>
<tr>
<td>

⭐ **Stars**
Show your support!

</td>
<td>

🍴 **Forks**
Your contributions

</td>
<td>

👥 **Contributors**
Building together

</td>
<td>

📈 **Growth**
Join the community!

</td>
</tr>
</table>

**[Give a Star ⭐](#project-statistics) if you found this helpful!**

---

### Made with ❤️ by **MOPARA PAIR AYAT**

*Crafting digital excellence, one project at a time.*

---

**[⬆ Back to Top](#bankfi---mobile-banking-ui)**

</div>
