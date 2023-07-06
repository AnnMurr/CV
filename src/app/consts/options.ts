interface ListElementsData {
    title: string,
    class: string[],
    attributes: object[]
}

type  DetailsElement =  {
    title: string,
    text:  string[]
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

export { LIST_ELEMENTS, DETAILS_ELEMENTS_DATA }