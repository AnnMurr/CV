import { getAge } from "../core/helpers/getAge"

interface ListElementsData {
    title: string,
    class: string[],
    attributes: object[]
}
interface ProjectTextData {
    tag: string,
    name: string,
    title: string,
    info?: string,
    text: string[],
    site: string,
    git: string
}

type DetailsElement = {
    title: string,
    text: string[]
}

interface CertificationsData {
    title: string,
    subTitle: string,
    link: string,
    textLink: string,
    icon: string
}

const InformationBlockListData = {
    'Name': 'Hanna',
    'Age': getAge(),
    'Originally from': 'Belarus',
    'Live in': 'Lithuania',
    'Education': 'International Institute of Management and Business'
}

enum InformationBlockTextData {
    'text' = `
    I am a beginner frontend developer with experience in creating responsive and visually appealing websites. I have strong skills in HTML, CSS (including Less, Sass, and SCSS), and JavaScript, as well as experience with TypeScript for safe development. I can create RESTful APIs and integrate them into web applications, and I am skilled in using Redux Toolkit for effective state management.
    I also have experience with building and optimizing web resources using Webpack and Parcel. I am familiar with server-side development using Node.js and working with MongoDB. Using Figma, I implement UI/UX designs into code. I always strive to improve my skills and knowledge in frontend development and I am interested in new technologies.`
}

enum AttributesValue {
    html = 90,
    css = 90,
    less = 90,
    sass = 90,
    scss = 90,
    git = 50,
    js = 80,
    api = 70,
    ts = 70,
    react = 85,
    parcel = 70,
    webpack = 50,
    redux = 50,
    nodeJs = 40
}

const LIST_ELEMENTS: ListElementsData[] = [
    {
        title: 'HTML',
        class: ['progress-bar', 'html'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'CSS',
        class: ['progress-bar', 'css'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Less',
        class: ['progress-bar', 'less'],
        attributes: [{ 'max': '100' }]

    },
    {
        title: 'Sass',
        class: ['progress-bar', 'sass'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Scss',
        class: ['progress-bar', 'scss'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Git',
        class: ['progress-bar', 'git'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'JavaScript',
        class: ['progress-bar', 'js'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'REST API',
        class: ['progress-bar', 'api'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'TypeScript',
        class: ['progress-bar', 'ts'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'React',
        class: ['progress-bar', 'react'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Parcel',
        class: ['progress-bar', 'parcel'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Webpack',
        class: ['progress-bar', 'webpack'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Redux Toolkit',
        class: ['progress-bar', 'redux'],
        attributes: [{ 'max': '100' }]
    },
    {
        title: 'Node.js',
        class: ['progress-bar', 'nodeJs'],
        attributes: [{ 'max': '100' }]
    }
]

const DETAILS_ELEMENTS_DATA: DetailsElement[] = [
    {
        title: 'HTML',
        text: ['Creating semantic HTML markup.', 'Knowledge of essential HTML tags and their usage.', 'Working with forms and input elements.', 'Understanding the DOM structure and interacting with it using JavaScript.', 'Familiarity with common HTML attributes and properties.']
    },
    {
        title: 'CSS',
        text: ['Applying styles to elements using CSS selectors and properties.', 'Positioning elements and managing their layout.', 'Working with animations and transitions.', 'Using media queries to create responsive designs.']
    },
    {
        title: `Less\nSass/Scss`,
        text: ['Utilizing the Sass/SCSS preprocessor to simplify CSS authoring.', 'Using variables to store values and reusable styles.', 'Creating mixins for generating repetitive CSS code.', 'Nesting rules and using nested selectors.', 'Importing and using style files using the @import directive.', 'Leveraging templates in Sass/SCSS to generate repetitive or modular styles.']
    },
    {
        title: `Git`,
        text: ['Proficient in using Git for version control and collaboration.', 'Familiarity with common Git commands like init, clone, add, commit, push, pull, and merge.', 'Understanding branching and merging strategies.', 'Collaborating with team members using.', 'Creating and initializing Git repositories.', 'Cloning and forking repositories.']
    },
    {
        title: `JavaScript`,
        text: ['Understanding of JavaScript syntax, data types, variables, operators, and control structures.', 'Proficiency in using functions, loops, conditional statements, and error handling.', 'Knowledge of scope, hoisting, closures, and the event loop.', 'Experience in dynamically manipulating the Document Object Model (DOM) using JavaScript.', 'I created, modify, and removed HTML elements and attributes.', 'Understanding of event handling, event listeners, and DOM traversal methods.', 'Proficiency in working with JavaScript objects, creating and accessing properties and methods.', 'Knowledge of object-oriented programming concepts.', 'Experience in using array methods to manipulate and iterate over arrays.']
    },
    {
        title: `REST API`,
        text: ['Proficiency in using the Fetch API to make HTTP requests and interact with RESTful APIs.', 'Knowledge of handling different types of requests such as GET, POST, PUT, DELETE.', 'Understanding of handling request headers, query parameters, and request payloads.', 'Experience in asynchronously retrieving data from REST APIs and updating the UI with the fetched data.', 'Usage of Promises or async/await to handle asynchronous operations and manage API responses.', 'Knowledge of handling API errors and implementing error handling mechanisms.']
    },
    {
        title: `TypeScript`,
        text: ['Understanding of TypeScript syntax, features, and benefits.', 'Ability to define and enforce data types for variables, functions, and objects.', 'Knowledge of using interfaces, classes, and modules to create modular and scalable code structures.']
    },
    {
        title: `React`,
        text: ['Creating and structuring reusable components.', 'Understanding JSX syntax.', 'State and props: Managing component data.', 'Hooks: Using useState, useEffect, and others.', 'Working with React Router.']
    },
    {
        title: `Node.js`,
        text: ['Proficient in building server-side applications using Node.js.', 'Experience with core Node.js modules and npm packages.', 'Creating RESTful APIs using frameworks like Express.js.', 'Utilizing templating engines such as EJS, for server-side rendering.']
    },
]

const PROJECT_TEXT: ProjectTextData[] = [
    {
        tag: 'work',
        name: 'CashFlow',
        title: 'A budget management website developed using: React, TypeScript, REST API, Redux, MUI, and other libraries.',
        info: 'Due to the use of Render\'s free plan, the server may "sleep" after periods of inactivity, causing a delay on the first request after the idle time. After the initial request, the server operates without delays.',
        text: [
            'Authentication via Firebase and MongoDB: Implemented user authentication with email/password and Google OAuth, securely managing user data across Firebase and MongoDB.',
            'Expense and Income Management: Developed functionality for users to track, add, and manage their income and expenses.',
            'Comprehensive Statistics: Provided detailed statistics for all financial data, with filtering options by day, week, month, year, or custom date ranges.',
            'Income and Expense Charts: Created visual representations of financial data using dynamic charts.',
            'Budget Planning: Implemented tools for users to create, manage, and track their financial planning goals.',
            'User Settings and Customization: Enabled users to personalize account settings, including site themes, preferred currency, and custom chart colors.',
            'State Management with Redux: Utilized Redux for managing application state and handling asynchronous data fetching from both the backend server and MocAPI.'
        ],
        site: 'https://cash-flow-budget.netlify.app',
        git: 'https://github.com/AnnMurr/CashFlow'
    },
    {
        tag: 'work',
        name: 'European-Herald',
        title: 'Created news website using the following technologies: React, TypeScript, REST API, Redux, and other libraries.',
        text: [
            'The site features news cards that are dynamically fetched from an API.',
            'Users can utilize search, filtering, and pagination features to easily find news articles of interest.',
            'A search functionality has been implemented by iterating through data in Redux, filtering through API requests with filtering parameters, and pagination using dedicated functions.',
            'A user registration system has been implemented, with user data stored in an API. Upon logging in, user data is retrieved from the API and stored in Redux, while the authentication token is saved in localStorage. Users can bookmark articles and update their profile settings.',
            'Additionally, the website includes a weather information section. Weather data is obtained using the user\'s geolocation, and then weather information is retrieved via an API.',
            'Users can also customize the site\'s theme to adapt it to their preferences.'
        ],
        site: 'https://annmurr.github.io/European-Herald/dist/',
        git: 'https://github.com/AnnMurr/European-Herald'
    },
    {
        tag: 'work',
        name: 'Oven_Opera',
        title: 'A pizza delivery website designed using: JavaScript, SCSS, REST API, and Webpack.',
        text: [
            'Product cards are dynamically generated using an API.',
            'Users can add selected products to their cart. Afterward, they can proceed to place an order by filling out the corresponding form.',
            'Functionality for entering promo codes is available to receive discounts based on specific conditions.',
            'There is an option to create a custom pizza using an interactive builder.'],
        site: 'https://annmurr.github.io/Oven_Opera/dist/',
        git: 'https://github.com/AnnMurr/Oven_Opera'
    },
    {
        tag: 'work',
        name: 'MessChat',
        title: 'Created chat website using the following technologies: React, Node.js and other libraries.',
        info: 'Due to the use of Render\'s free plan, the server may "sleep" after periods of inactivity, causing a delay on the first request after the idle time. After the initial request, the server operates without delays.',
        text: [
            'Designed a chat-based website featuring real-time user presence.',
            'Implementation of a server with socket-based data transmission for efficient message exchange.',
            'Interactive website interface with animations, allowing users to generate unique links for accessing the chat.',
            'Personalized entry into the chat with options to choose usernames and emojis.',
            'Capabilities for sharing links to invite others to join the chat.'
        ],
        site: 'https://main--mess-chat.netlify.app/',
        git: 'https://github.com/AnnMurr/MesRoom'
    },
]

const SERTIFICATIONS_DATA: CertificationsData[] = [
    {
        title: 'FrontEnd Developer',
        subTitle: 'TeachMeSkills',
        link: 'https://drive.google.com/file/d/1mD7Ax1Q-3gHF3i_Pj7gUGTJ6f86HevHr/view?usp=sharing',
        textLink: 'certificate',
        icon: 'https://i.imgur.com/mftjVFI.png'
    },
    {
        title: 'JavaScript for beginners',
        subTitle: 'Stepik',
        link: 'https://stepik.org/cert/1641877?lang=en',
        textLink: 'certificate',
        icon: 'https://i.imgur.com/mUADYJ0.png'
    },
    {
        title: 'English',
        subTitle: 'Skillbox',
        link: 'https://drive.google.com/file/d/1ceIo8AXoIip0c5VZbZh0UW9vos_am-Vt/view?usp=sharing',
        textLink: 'certificate',
        icon: 'https://i.imgur.com/QLi5MWB.png'
    },
]

export {
    LIST_ELEMENTS,
    DETAILS_ELEMENTS_DATA,
    PROJECT_TEXT,
    InformationBlockListData,
    SERTIFICATIONS_DATA,
    InformationBlockTextData,
    AttributesValue
}