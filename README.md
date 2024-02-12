# Currency Calculator in React.js

### **Description**

Currency Calculator is a demo project of a currency converter made in **React.js** library. After you open the App it will fetch the current rates data from outside API. You can easily type in the amount of PLN (polish złoty), choose between many different currencies from API, then just click **"Calculate"** button and the magic will happen. My application will give you the result. There is also actual time prompt in the upper right corner of the app window and currency exchange current date over the calculate button.

### **[Currency Calculator - App link](https://traczoskar.github.io/currency_calculator_react/)**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- easily converts PLN up to amount of "10.000.000.000"
- you can choose the currency between many different currencies from all over world (downloaded from outside API)
- actual time and date is prompt in the upper right corner of app
- current date of downloaded exchange rates over the calculate button
- animated app logo
- animated and interactive button
- animated result
- app is adapted to be responsive on mobile devices
- error handling: rendered special window if any error occurs
- loading animated window while data is fetched

**Below you can see how it looks on desktop:**

![App design](/app_start.png)

## How to use?

1. Enter the amount that you want to exchange in the first input window "**Amount in PLN:**".
2. Choose the currency from listed in select window below.
3. Click the animated button "**Calculate**".
4. Your data is being processed and calculated.
5. Below the button app will render a white window with your result:

- **first** - amount you entered in PLN
- **second** - info
- **third** - your result in currency you've choosen

**The App with loading window and rendered result:**

![App design](/currency_calculator_gif.gif)

**Error handling while data isn't fetched properly**

![App design](/currency_calculator_gif_error.gif)

## Used technologies and conventions

- **React.js:** Components, JSX, React DOM rendering
- **React Hooks:** useState, useEffect, useRef
- **CustomHooks**
- **Create React App**
- **Axios**
- **npm**
- **Node.js**
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
- **JS ES6 Features:** (arrays, methods, spread syntax, objects, arrow functions, immutabililty, merging, JS Modules)

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
