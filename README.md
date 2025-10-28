# Overview
By following this streamlined guide, users should be able to set up and run your Vuestic UI project on a Windows and Linux machine with ease. If you have any specific configurations or additional setup steps unique to your project, consider adding them to this guide to further assist users.

Please make sure you have completed the [JustAskDavidB](https://github.com/inDevelopme/justaskdavidb) orientation before attempting to contribute to this repository.

## 📝 Additional Notes

* **Vue Version**: This project uses Vue 3, as Vuestic UI is compatible with Vue.js 3.0.
* **Customization**: Vuestic UI offers extensive customization options. Refer to the [Vuestic UI Configuration Guide](https://ui.vuestic.dev/getting-started/configuration-guide) for more details.
* **Component Examples**: Explore the [Vuestic UI Kitchensink](https://ui.vuestic.dev/getting-started/kitchensink/) to see examples of all components.

## 🛠️ Installation Guide for Windows Users (Using npm & GitHub Desktop)

### Step 1: Install GitHub Desktop

**Download and Install GitHub Desktop**:

   * Visit the [GitHub Desktop download page](https://desktop.github.com/).
   * Click **Download for Windows (64bit)**.
   * Once the installer is downloaded, open it and follow the on-screen instructions to complete the installation.
   * After installation, launch GitHub Desktop.
   * If you have a GitHub account, sign in to GitHub Desktop. If not, you can create one during this process.

For more detailed instructions, refer to the [GitHub Desktop installation guide](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop).

---

### Step 2: Clone the Repository Using GitHub Desktop

1. In GitHub Desktop, go to **File** > **Clone Repository**.
2. In the **URL** tab, enter the repository URL: `https://github.com/inDevelopme/justaskdavidb-vuestic-ui`.
3. Choose a local path where you want to clone the repository.
4. Click **Clone**.

This will copy the repository to your local machine.

---

### Step 3: Install Node.js (includes NPM)

1. Visit the [Node.js download page](https://nodejs.org/).
2. Click on the **LTS** (Long Term Support) version for Windows to download the installer.
3. Run the downloaded installer.
4. Follow the prompts in the installer (accept the license agreement, click the **Next** button, and accept the default installation settings).
5. The installer will automatically install both Node.js and npm.
6. Open your terminal (Command Prompt, PowerShell, or Windows Terminal).
7. Run the following commands to verify the installations. You should see the version numbers for both Node.js and npm.

```
node -v
npm -v
```

---

### Step 4: Install Project Dependencies
This step installs all dependencies listed in the `package.json` file.

1. Open your terminal (Command Prompt, PowerShell, or Windows Terminal).
2. Navigate to the cloned project directory. For example:  
```cd path\to\justaskdavidb-vuestic-ui ```
3. Install the necessary packages using npm:
```
npm install
```

---

### Step 5: Run the Development Server

Start the development server to view your application:

```
npm run dev
```

By default, the application will be accessible at `http://localhost:3000`.

---

## Getting Started with Ubuntu

These instructions were tested using Zorin 17. Please let me know if you have issues with running them for your linux machine. 

### Prepation: System Preperation

We are first going to prepare your system. This will make sure your system pull in the latest packages + install the required essential web development tools and git

**Installation and Update**  

```
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential curl git
```

**Validation**  

`git --version`

### 1. Implementation: Setup Node.JS
We are now going to install Node.JS on our machine.  

**Installation**  

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Validation**  

```
node -v
npm -v
```

### 2. Implementation: Clone Repository  

You can make a local copy of the repository to play with -OR- you can fork your own and then perform the following step clone activity.  

```
git clone https://github.com/inDevelopme/justaskdavidb-vuestic-ui.git
cd justaskdavidb-vuestic-ui
```

### 3. Implementation: Setup Node Package Manager (NPM)

**Installation**  
We want a verbose output of npm so we can make sure its doing something while we wait.  
`npm install --verbose`

**Validation**  
You can confirm that everything was installed successfully: `npm run`  

You should get the following output  
>>>
  dev
    vite
  build
    vite build
  preview
    vite preview
  test:unit
    vitest
  test:e2e
    playwright test
  test:e2e:dev
    start-server-and-test 'vite dev --port 4173' http://localhost:4173 'cypress open --e2e'
  lint
    eslint . --fix
>>>  

### 4. Implementation: Setup Playwright

Node allows for end-to-end testing using Playwright.

**Installation**  
`npx playwright install`

**Validation**
`npx playwright --version`


### Validation: Completeness

Now make sure all the following commands work. At the current moment. All programs should run without issue except for playwright. Playwright will run but will fail validation.  

**Run app server locally:** `npm run dev`  
**Run compiler for static files:** `npm run build`  
**Run unit tests locally:** `npm run test:unit`  
**Run end-to-end test suite locally:** `npx playwright --version`  
**Run code analyer:** `npm run lint`  



