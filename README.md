<div style="text-align: center; font-size:25px">
<h1> Covid19 Global Rates </h1>
</div>


<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [🚀Live demo](#live-demo)
    - [📹Video presentation](#video)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Available Scripts](#scripts)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)
- [🔎 Learn more](#learn-more)


# 📖 "Covid-19 Global Rates" <a name="about-project"></a>
Web application that allows the user to see the Covid-19 statistics from different countries around the world.
The app has 3 pages:
<ul>
  <li>
    The home: where you can see a list of the continents with their respective image, name, and total cases. Also, there is a search input where you can type the country’s name and go directly to its detailed information.
  </li>
  <li>
    The countries: when you click on any continent, the countries pages display a list of all the countries of that continent. Each country counts with its name, flag, and total cases.
  </li>
  <li>
    The details: when you click on any country the details page displays the population, total cases, deaths, and recovered.
  </li>
</ul>

> The design was taken from [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio), according to the [Creative Commons license](https://creativecommons.org/licenses/by-nc/4.0/) of the design for more details move to the [Acknowledgements](#🙏-acknowledgments) section


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>CSS</summary>
  <ul>
    <li>The <a href="https://github.com/microverseinc/curriculum-html-css/blob/main/html5.md">CSS</a> is used to provide the design in the whole page.</li>
  </ul>
</details>

<details>
  <summary>Linters</summary>
  <ul>
    <li>The <a href="https://github.com/microverseinc/linters-config/tree/master/react-redux">Linters</a> are tools that help us to check and solve the errors in the code</li>
    This project count with two linters: 
    <ul>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </ul>
</details>

<details>
  <summary>React</summary>
  <ul>
      <li>This project was build with <a href="https://github.com/facebook/create-react-app">Create React App.</a></li>
      <li>This project uses <a href="https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store">Redux Toolkit</a></li>
    </ul>
</details>

<details>
  <summary>API</summary>
  <ul>
      <li>This project use <a href="https://disease.sh">Disease.sh</a> to fetch the data.</li>
    </ul>
</details>


## Key Features <a name="key-features"></a>

- **SPA**
- **Simple interface**
- **React App**
- **React Router**
- **Redux Toolkit**
- **Implementation of `react-redux`**
- **Test with Jest & React Test Library**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live demo <a name="live-demo">

[Live demo](https://covid19-global-rates.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📹 Video presentation <a name="video">

[Video](https://youtu.be/7ly1jqwjF8U)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.


### Prerequisites

In order to run this project you need:
- **To have a Git in your device** : this is in order to clone and modify this project.
- **To have a code editor** :  such as VS code, Atom or another that you would like to use.
- **To have a web local server such as XAMPP** : this is in with the purpose of you will be able to watch the changes you make in the project.
- **Have basic knowledge about HTML, CSS and JSX** in order to understand the code and be able to modify the elements you want.
- **Count with Node.js in your device** due to it is a tool needed to run the linters


### Setup

Clone this repository to your desired folder:

- Clone this repo on your local device you need to open Git Bash and paste the link with the command
```sh
  cd my-folder-name
  $ git clone https://github.com/AndreaM2429/react-capstone
```


### Install

In order can run the linters tools you need use the following commands in your local work environment:

```sh
npm install i
```
**Note:** About the live server server you need to run the following command inside the project.
```
npm start
```

### Usage

Now you are able to modify the files in the `src/`, but be careful just modify them, the rest are for the funcionality of the app so **NOT MODIFY THEM**.


### Run tests

To see the linter errors run the following codes for:

`npm run test`

- CSS

```sh
 npx stylelint "**/*.{css,scss}"
  
 To fix the errors add --fix
```

- JS

```sh
 npx eslint "**/*.{js,jsx}"
  
 To fix the errors add --fix
```


### Available Scripts <a name="scripts"></a>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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


### Deployment

To deploy this project by someone who isn't the owner is prohibit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Author <a name="authors"></a>

👤 **Andrea Manuel**

- GitHub: [@AndreaM2429](https://github.com/AndreaM2429)
- Twitter: [@twitter](https://twitter.com/AndreaManuelOr1)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/andrea-manuel-2b075026a/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] **Made a more complex disaign and implement animations**


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/) and add your thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project you could clone the repo and work with it or do the changes in a new branch. Also you could let a message with your thoughts

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I’m not the original author of the design, it was taken from Nelson Sakwa on Behance, I take the fonts, color, and layout from his [Ballhead App (Free PSDs)](https://www.behance.net/gallery/31579789/Ballhead-App-%28Free-PSDs%29). I want to thank him, so please go to [his profile](https://www.behance.net/sakwadesignstudio) and support the original designer.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Learn More <a name="learn-more"></a>

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

