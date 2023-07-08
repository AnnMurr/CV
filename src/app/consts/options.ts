interface ListElementsData {
    title: string,
    class: string[],
    attributes: object[]
}
interface ProjectTextData {
    tag: string,
    name: string,
    title: string,
    text: string[],
    site: string,
    git: string
}

type  DetailsElement =  {
    title: string,
    text:  string[]
}

enum InformationBlockListData {
    'Name' = 'Hanna',
    'Age' = 25,
    'Originally from' = 'Belarus',
    'Live in' = 'Lithuania',
    'Education' = 'International Institute of Management and Business'
}
enum InformationBlockTextData {
    'text' = `I'm a passionate and dedicated  frontend developer with around 4 months of independent learning and 7 months of formal training experience.\n 
    I have learned html, css, JavaScript, TypeScript and I'm currently in the process of learning React.\n 
    I'm committed to continuously improving my skills and staying updated with emerging technologies in the frontend development field.\n
    I'm committed to continuous learning and growth in order to become a well-rounded frontend developer.\n
    I'm looking forward to get an opportunity to work on challenging projects that allow me to apply my expertise in JavaScript, TypeScript, and React.`
}

enum AttributesValue {
    html = 80,
    css = 80,
    less = 80,
    sass = 80,
    scss = 80,
    git = 50,
    js = 70,
    api = 70,
    ts = 40
}

const LIST_ELEMENTS: ListElementsData[] = [
    {
        title: 'HTML',
        class: ['progress-bar', 'html'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'CSS',
        class: ['progress-bar', 'css'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'Less',
        class: ['progress-bar', 'less'],
        attributes: [{'max': '100'}]

    },
    {
        title: 'Sass',
        class: ['progress-bar', 'sass'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'Scss',
        class: ['progress-bar', 'scss'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'Git',
        class: ['progress-bar', 'git'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'JavaScript',
        class: ['progress-bar', 'js'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'REST API',
        class: ['progress-bar', 'api'],
        attributes: [{'max': '100'}]
    },
    {
        title: 'TypeScript',
        class: ['progress-bar', 'ts'],
        attributes: [{'max': '100'}]
    },
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
    }
]

const PROJECT_TEXT: ProjectTextData[] = [
    {
        tag: 'work',
        name: '4Scopes',
        title: 'Team work project that is a prototype of Wildberries',
        text: ['Product cards are created dynamically from API.', 'Basket is created dynamicaly, basket items are saved in localStorage.', 'Authentication modals are created dynamicaly, user data store in API, user token is saved in SessionStorage.', 'Search & filters are implemented on the website.', 'All the pictures are created from API- there are footer-bar and footer-accordion in mobile version.'],
        site: 'https://4-scopes.netlify.app/',
        git: 'https://github.com/AnnMurr/wildberries_4scopes'
    },
    {
        tag: 'work',
        name: 'L.Miloris',
        title: 'Creted e-shop web-site using the following technologies: JS, LESS, REST API, Parcel',
        text: ['Basket - adding item to user\'s basket, count of items in it, sync with API (Users).', 'Authentication - log in, log out, sign up, sync with API (Users).', 'Product Cards - dynamically created product cards from API (Cards).', 'Implemented anumations using CSS keyframes + JS.', 'Mobile verison is not ready fully.'],
        site: 'https://main--l-miloris-perfume.netlify.app/',
        git: 'https://github.com/AnnMurr/Labos-Miloris'
    }
]

export { 
    LIST_ELEMENTS, 
    DETAILS_ELEMENTS_DATA, 
    PROJECT_TEXT, 
    InformationBlockListData, 
    InformationBlockTextData,
    AttributesValue
}