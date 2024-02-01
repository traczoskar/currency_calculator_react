# Currency Calculator in React.js

### **Description**

Currency Calculator is a demo project of a currency converter made in **React.js** library. You can easily type in the amount of PLN (polish złoty), choose between 3 different and the most popular currencies, then just click "*Calculat*e" button and the magic will happen. My application will give you result in one of three currencies that you've choosen.

### **[Currency Calculator - App link](https://traczoskar.github.io/currency_calculator_react/)**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- easily converts PLN up to amount of "10.000.000.000"
- you can choose the currency between **EUR / GBP / USD**
- animated app logo
- animated and interactive button
- animated country flag in the result window
- app is adapted to be responsive on mobile devices

For now the calculator works only one way: calculating PLN to other three currencies. In future some more advanced features will be added.

**Below you can see how it looks on desktop:**

![App design](/app_start.png)

## How to use?

1. Enter the amount that you want to exchange in the first input window "**Amount in PLN:**".
2. Choose the currency from listed in select window below. You can pick one of **EUR / USD / GBP**.
3. Click the animated button "**Calculate**".
4. Your data is being processed and calculated.
5. Below the button app will render a white window with your result:

- **first** - amount you entered in PLN
- **second** - info
- **third** - your result in currency you've choosen
- **fourth** - a country flag of the currency

**The App with rendered result:**

![App design](/currency_calculator_gif.gif)

## Used technologies and conventions

- **React.js:** Components, JSX, React DOM rendering
- **Create React App**
- **npm**
- **Node.js**
- **Babel**
- **BEM**convention
- **camelCase** class and functions naming
- **CSS:** Grid and Flex
- **CSS:** Animations and transitions
- **CSS:** (normalize.css) applied
- **CSS:** (border-box: box-sizing) applied
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
