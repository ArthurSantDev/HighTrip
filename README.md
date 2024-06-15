# HightTrip
This is a project I did to better understand how to use the Nest Js framework, how folders are organized, what I can and cannot delete, etc. I took the liberty of improving some specific points that I felt were missing in the original version, such as some responsive sizes, for example.


## Stack used
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 


## Features
- Front End structured in Next.JS
- Reusable Typescript components made from props
- Tailwind to create styles quickly and efficiently
- Mobile responsive UX/UI design
- Constants file for creating easy-to-maintain sections and footers


## Learnings
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) This was my first contact with Frameworkl Next.js and I was able to see that it offers a robust development environment with automatic page reloading and TypeScript support, which speeds up the development and debugging process. Including automatic optimization features, such as optimized image loading, page pre-rendering and code splitting, which help to greatly improve application performance. It provides the ability to create internal APIs within the Next.js application, which is useful for manipulating data without the need to configure a separate backend. And finally, what I actually used most in this project, the creation of static pages generated at construction time (SSG) and dynamic pages that can be updated with each request (ISR), making the Framework quite versatile and complete in my opinion.


## Installation
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
#### tailwind.config.js
```bash
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
#### postcss.config.js
```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
#### ./styles/globals.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
#### pages/_app.js
```bash
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```


## Screenshots
![Desktop1](https://github.com/ArthurSantDev/HighTrip/assets/159972613/2c2bd050-b7d9-44e4-a980-3c9abfe9ed5c)

![Desktop2](https://github.com/ArthurSantDev/HighTrip/assets/159972613/43e906ac-85f1-44d6-98ad-6364c258cfff)

![Desktop3](https://github.com/ArthurSantDev/HighTrip/assets/159972613/6fbd87b3-3284-415c-8934-3a81c27bb22e)

![Desktop4](https://github.com/ArthurSantDev/HighTrip/assets/159972613/adecdded-d426-4540-9bad-6bf3ed00c6be)

![Desktop5](https://github.com/ArthurSantDev/HighTrip/assets/159972613/e78f9447-2b78-44f2-93a5-d44acc1ed38c)

![Desktop6](https://github.com/ArthurSantDev/HighTrip/assets/159972613/328d786b-3c24-4337-8580-a9db6a4f8391)

![I1](https://github.com/ArthurSantDev/HighTrip/assets/159972613/f4320e8c-8dd6-446a-aec7-27a811d37580)
![I2](https://github.com/ArthurSantDev/HighTrip/assets/159972613/9b78ea98-e605-4453-adc5-81d4eb54c165)
![I3](https://github.com/ArthurSantDev/HighTrip/assets/159972613/75e30425-749e-4bfe-922d-8ea5cf7dd9e4)

![I4](https://github.com/ArthurSantDev/HighTrip/assets/159972613/bc1477b3-bcb8-4365-a2d6-749e14902a84)
![I5](https://github.com/ArthurSantDev/HighTrip/assets/159972613/79c42a12-e63c-4443-b614-179612a3df66)
![I6](https://github.com/ArthurSantDev/HighTrip/assets/159972613/c8737f3a-058f-46fc-9673-afdcbe32db75)