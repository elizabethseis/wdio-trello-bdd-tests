# WDIO Trello BDD Tests

This project contains **WebdriverIO** (WDIO) **end-to-end tests** for **Trello** using **Cucumber BDD**.

---

## 🚀 Project Setup

### Prerequisites
- **Node.js** (v16 or later)
- **npm** (v8 or later)
- **Chrome, Firefox, Safari** browsers installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/elizabethseis/wdio-trello-bdd-tests.git
   ```
2. Navigate into the project directory:
   ```bash
   cd wdio-trello-bdd-tests
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## 🔥 Run Tests

### Run all tests in Chrome (headless mode)
```bash
npx wdio run wdio.conf.js --headless
```

### Run tests in different browsers
- **Chrome:**  
  ```bash
  npx wdio run wdio.conf.js --browser chrome
  ```
- **Firefox:**  
  ```bash
  npx wdio run wdio.conf.js --browser firefox
  ```

### Run tests in parallel (2 instances)
```bash
npx wdio run wdio.conf.js --workers 2
```


---

## 📂 Project Structure
```
wdio-trello-bdd-tests/
│── node_modules/              # Dependencies (ignored in Git)
│── test/
│   ├── features/              # Gherkin Feature Files
│   │   ├── board_management.feature
│   │   ├── card_management.feature
│   │   ├── list_management.feature
│   │   ├── user_authentication.feature
│   │   ├── user_profile.feature
│   │   ├── workspace_settings.feature
│   ├── hooks/                 # Hooks (Before/After Scenarios)
│   │   ├── globalHooks.js
│   ├── pages/                 # Page Objects (Selectors & Methods)
│   │   ├── AuthenticationPage.js
│   │   ├── BoardManagementPage.js
│   │   ├── CardManagementPage.js
│   │   ├── HomePage.js
│   │   ├── ListManagementPage.js
│   │   ├── ManageProfilePage.js
│   │   ├── WorkspaceSettingsPage.js
│   ├── step-definitions/       # Step Definitions (Cucumber Steps)
│   │   ├── boardManagementSteps.js
│   │   ├── cardManagementSteps.js
│   │   ├── listManagementSteps.js
│   │   ├── userAuthenticationSteps.js
│   │   ├── userProfileSteps.js
│   │   ├── workspaceSettingsSteps.js
│   ├── utils/                 # Utility files (e.g., Test Data)
│   │   ├── testData.js
│── .gitignore                  # Files/Folders to Ignore in Git
│── package-lock.json            # Auto-generated dependency lock file
│── package.json                 # Dependencies & Scripts
│── wdio.conf.js                 # WDIO Configuration
│── README.md                    # Project Documentation
```
