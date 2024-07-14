# 💵 Currency Calculator in React.js ♻️

### 📝&nbsp; **Description**

Currency Calculator is a currency converter made in **React.js** library. After you open the App it will fetch the current rates data from outside API. You can easily type in the amount of PLN (polish złoty), choose between many different currencies from API, then just click **"Calculate"** button and the magic will happen. My application will give you the result. There is also actual time prompt in the upper right corner of the app window and currency exchange current date over the calculate button.

### 🚀&nbsp; **[Currency Calculator - App link](https://traczoskar.github.io/currency_calculator_react/)** &nbsp; 👈

## 🌟&nbsp; Features

- 🔄 easily converts PLN up to amount of "10.000.000.000"
- 🌍 you can choose the currency between many different currencies from all over the world (downloaded from outside API)
- 🕒 actual time and date is prompt in the upper right corner of app
- 📅 current date of downloaded exchange rates over the calculate button
- 🎉 animated app logo
- 🎨 animated and interactive button
- 🎇 animated result
- 📱 app is adapted to be responsive on mobile devices
- ❌ error handling: rendered special window if any error occurs
- ⏳ loading animated window while data is fetched

**Below you can see how it looks on desktop:**

![App design](/github/app_start.png)

## 🤔&nbsp; How to use?

1. Enter the amount that you want to exchange in the first input window "**Amount in PLN:**".
2. Choose the currency from listed in select window below.
3. Click the animated button "**Calculate**".
4. Your data is being processed and calculated.
5. Below the button app will render a white window with your result:

- **first** - amount you entered in PLN
- **second** - info
- **third** - your result in currency you've choosen

**The App with loading window and rendered result:**

![App design](/github/currency_calculator_gif.gif)

**Error handling while data isn't fetched properly**

![App design](/github/currency_calculator_gif_error.gif)

## 🛠️&nbsp; Used technologies and conventions

![React](https://camo.githubusercontent.com/31b08faa61951179c95f91d42f8ce1b56012e80fa6e269d23221031d1b13fd0d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d626c61636b)
![TypeScript](https://img.shields.io/badge/TypeScript-222222.svg?style=for-the-badge&logo=typescript&logoColor=3178C6)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![styled-components](https://img.shields.io/badge/styled_components-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![CustomHooks](https://img.shields.io/badge/CustomHooks-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![Create React App](https://img.shields.io/badge/Create_React_App-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-56A9FA.svg?style=for-the-badge&logo=axios&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E.svg?style=for-the-badge&logo=babel&logoColor=black)
![Error handling](https://img.shields.io/badge/Error_handling-FF5733.svg?style=for-the-badge&logo=error&logoColor=white)
![JS Async](https://img.shields.io/badge/JS_Async-6E4A7E.svg?style=for-the-badge&logo=javascript&logoColor=white)
![BEM](https://img.shields.io/badge/BEM-2B2B2B.svg?style=for-the-badge&logo=css3&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![normalize.css](https://img.shields.io/badge/normalize.css-00BCD4.svg?style=for-the-badge&logo=css3&logoColor=white)
![media queries](https://img.shields.io/badge/media_queries-4CAF50.svg?style=for-the-badge&logo=css3&logoColor=white)

- **React.js:** Components, JSX, React DOM rendering
- **React Hooks:** useState, useEffect, useRef
- **TypeScript**
- **styled-components**
- **CustomHooks**
- **Create React App**
- **Axios**
- **npm**
- **Babel**
- **Error handling:** try...catch / throw / and other conditions
- **JS Async:** asynchronous functions, Promises, data fetching, setInterval, setTimeOut
- **BEM**convention
- **camelCase** class and functions naming
- **CSS:** Grid and Flex
- **CSS:** Animations and transitions, keyframes
- **CSS:** (normalize.css) applied
- **CSS:** (border-box: box-sizing) applied
- **CSS:** media queries
- **JS ES6 Features:** (destructuring, spread syntax, objects, arrow functions, immutabililty, merging, JS Modules)

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
