// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/app/core/helpers/getAge.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAge = void 0;
function getAge() {
  var birthDate = new Date("1998-05-30");
  var currentDate = new Date();
  var ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
  var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  var age = Math.floor(ageInYears).toString();
  return age;
}
exports.getAge = getAge;
},{}],"src/app/consts/options.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttributesValue = exports.InformationBlockTextData = exports.SERTIFICATIONS_DATA = exports.InformationBlockListData = exports.PROJECT_TEXT = exports.DETAILS_ELEMENTS_DATA = exports.LIST_ELEMENTS = void 0;
var getAge_1 = require("../core/helpers/getAge");
var InformationBlockListData = {
  'Name': 'Hanna',
  'Age': (0, getAge_1.getAge)(),
  'Originally from': 'Belarus',
  'Live in': 'Lithuania',
  'Education': 'International Institute of Management and Business'
};
exports.InformationBlockListData = InformationBlockListData;
var InformationBlockTextData;
(function (InformationBlockTextData) {
  InformationBlockTextData["text"] = "I'm a passionate and dedicated frontend developer with around 6 months \n    of independent learning and 8 months of formal training experience. I have learned \n    HTML, CSS, JavaScript, TypeScript, and React, along with other related front-end technologies \n    and frameworks. I'm committed to continuously improving my skills and staying updated with \n    emerging technologies in the frontend development field. I'm committed to continuous learning \n    and growth in order to become a well-rounded frontend developer. I'm looking forward to get an \n    opportunity to work on challenging projects that allow me to apply my expertise.";
})(InformationBlockTextData || (exports.InformationBlockTextData = InformationBlockTextData = {}));
var AttributesValue;
(function (AttributesValue) {
  AttributesValue[AttributesValue["html"] = 90] = "html";
  AttributesValue[AttributesValue["css"] = 90] = "css";
  AttributesValue[AttributesValue["less"] = 90] = "less";
  AttributesValue[AttributesValue["sass"] = 90] = "sass";
  AttributesValue[AttributesValue["scss"] = 90] = "scss";
  AttributesValue[AttributesValue["git"] = 50] = "git";
  AttributesValue[AttributesValue["js"] = 80] = "js";
  AttributesValue[AttributesValue["api"] = 70] = "api";
  AttributesValue[AttributesValue["ts"] = 80] = "ts";
  AttributesValue[AttributesValue["react"] = 85] = "react";
  AttributesValue[AttributesValue["parcel"] = 70] = "parcel";
  AttributesValue[AttributesValue["webpack"] = 60] = "webpack";
  AttributesValue[AttributesValue["redux"] = 60] = "redux";
  AttributesValue[AttributesValue["parsel"] = 70] = "parsel";
  AttributesValue[AttributesValue["nodeJs"] = 50] = "nodeJs";
})(AttributesValue || (exports.AttributesValue = AttributesValue = {}));
var LIST_ELEMENTS = [{
  title: 'HTML',
  class: ['progress-bar', 'html'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'CSS',
  class: ['progress-bar', 'css'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Less',
  class: ['progress-bar', 'less'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Sass',
  class: ['progress-bar', 'sass'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Scss',
  class: ['progress-bar', 'scss'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Git',
  class: ['progress-bar', 'git'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'JavaScript',
  class: ['progress-bar', 'js'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'REST API',
  class: ['progress-bar', 'api'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'TypeScript',
  class: ['progress-bar', 'ts'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'React',
  class: ['progress-bar', 'react'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Parcel',
  class: ['progress-bar', 'parcel'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Webpack',
  class: ['progress-bar', 'webpack'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Redux',
  class: ['progress-bar', 'redux'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Parcel',
  class: ['progress-bar', 'parcel'],
  attributes: [{
    'max': '100'
  }]
}, {
  title: 'Node.js',
  class: ['progress-bar', 'nodeJs'],
  attributes: [{
    'max': '100'
  }]
}];
exports.LIST_ELEMENTS = LIST_ELEMENTS;
var DETAILS_ELEMENTS_DATA = [{
  title: 'HTML',
  text: ['Creating semantic HTML markup.', 'Knowledge of essential HTML tags and their usage.', 'Working with forms and input elements.', 'Understanding the DOM structure and interacting with it using JavaScript.', 'Familiarity with common HTML attributes and properties.']
}, {
  title: 'CSS',
  text: ['Applying styles to elements using CSS selectors and properties.', 'Positioning elements and managing their layout.', 'Working with animations and transitions.', 'Using media queries to create responsive designs.']
}, {
  title: "Less\nSass/Scss",
  text: ['Utilizing the Sass/SCSS preprocessor to simplify CSS authoring.', 'Using variables to store values and reusable styles.', 'Creating mixins for generating repetitive CSS code.', 'Nesting rules and using nested selectors.', 'Importing and using style files using the @import directive.', 'Leveraging templates in Sass/SCSS to generate repetitive or modular styles.']
}, {
  title: "Git",
  text: ['Proficient in using Git for version control and collaboration.', 'Familiarity with common Git commands like init, clone, add, commit, push, pull, and merge.', 'Understanding branching and merging strategies.', 'Collaborating with team members using.', 'Creating and initializing Git repositories.', 'Cloning and forking repositories.']
}, {
  title: "JavaScript",
  text: ['Understanding of JavaScript syntax, data types, variables, operators, and control structures.', 'Proficiency in using functions, loops, conditional statements, and error handling.', 'Knowledge of scope, hoisting, closures, and the event loop.', 'Experience in dynamically manipulating the Document Object Model (DOM) using JavaScript.', 'I created, modify, and removed HTML elements and attributes.', 'Understanding of event handling, event listeners, and DOM traversal methods.', 'Proficiency in working with JavaScript objects, creating and accessing properties and methods.', 'Knowledge of object-oriented programming concepts.', 'Experience in using array methods to manipulate and iterate over arrays.']
}, {
  title: "REST API",
  text: ['Proficiency in using the Fetch API to make HTTP requests and interact with RESTful APIs.', 'Knowledge of handling different types of requests such as GET, POST, PUT, DELETE.', 'Understanding of handling request headers, query parameters, and request payloads.', 'Experience in asynchronously retrieving data from REST APIs and updating the UI with the fetched data.', 'Usage of Promises or async/await to handle asynchronous operations and manage API responses.', 'Knowledge of handling API errors and implementing error handling mechanisms.']
}, {
  title: "TypeScript",
  text: ['Understanding of TypeScript syntax, features, and benefits.', 'Ability to define and enforce data types for variables, functions, and objects.', 'Knowledge of using interfaces, classes, and modules to create modular and scalable code structures.']
}, {
  title: "React",
  text: ['Creating and structuring reusable components.', 'Understanding JSX syntax.', 'State and props: Managing component data.', 'Hooks: Using useState, useEffect, and others.', 'Working with React Router.']
}, {
  title: "Node.js",
  text: ['Proficient in building server-side applications using Node.js.', 'Experience with core Node.js modules and npm packages.', 'Creating RESTful APIs using frameworks like Express.js.', 'Utilizing templating engines such as EJS, for server-side rendering.']
}];
exports.DETAILS_ELEMENTS_DATA = DETAILS_ELEMENTS_DATA;
var PROJECT_TEXT = [{
  tag: 'work',
  name: 'European-Herald',
  title: 'Created news web-site using the following technologies: React, TypeScript, REST API, Redux, and other libraries.',
  text: ['The site features news cards that are dynamically fetched from an API.', 'Users can utilize search, filtering, and pagination features to easily find news articles of interest.', 'A search functionality has been implemented by iterating through data in Redux, filtering through API requests with filtering parameters, and pagination using dedicated functions.', 'A user registration system has been implemented, with user data stored in an API. Upon logging in, user data is retrieved from the API and stored in Redux, while the authentication token is saved in localStorage. Users can bookmark articles and update their profile settings.', 'Additionally, the website includes a weather information section. Weather data is obtained using the user\'s geolocation, and then weather information is retrieved via an API.', 'Users can also customize the site\'s theme to adapt it to their preferences.'],
  site: 'https://annmurr.github.io/European-Herald/dist/',
  git: 'https://github.com/AnnMurr/European-Herald'
}, {
  tag: 'work',
  name: 'Oven_Opera',
  title: 'Designed a pizza website using the following technologies: JavaScript, SCSS, REST API, and Webpack.',
  text: ['Product cards are dynamically generated using an API.', 'Users can add selected products to their cart. Afterward, they can proceed to place an order by filling out the corresponding form.', 'Functionality for entering promo codes is available to receive discounts based on specific conditions.', 'There is an option to create a custom pizza using an interactive builder.'],
  site: 'https://annmurr.github.io/Oven_Opera/dist/',
  git: 'https://github.com/AnnMurr/Oven_Opera'
}, {
  tag: 'work',
  name: 'L.Miloris',
  title: 'Created e-shop web-site using the following technologies: JS, LESS, REST API, Webpack.',
  text: ['Basket - adding item to user\'s basket, count of items in it, sync with API (Users).', 'Authentication - log in, log out, sign up, sync with API (Users).', 'Product Cards - dynamically created product cards from API (Cards).', 'Implemented anumations using CSS keyframes + JS.'],
  site: 'https://main--l-miloris-perfume.netlify.app/',
  git: 'https://github.com/AnnMurr/Labos-Miloris'
}, {
  tag: 'work',
  name: 'MessChat',
  title: 'Created chat website using the following technologies: React, Node.js and other libraries.',
  text: ['Designed a chat-based website featuring real-time user presence.', 'Implementation of a server with socket-based data transmission for efficient message exchange.', 'Interactive website interface with animations, allowing users to generate unique links for accessing the chat.', 'Personalized entry into the chat with options to choose usernames and emojis.', 'Capabilities for sharing links to invite others to join the chat.'],
  site: 'https://main--mess-chat.netlify.app/',
  git: 'https://github.com/AnnMurr/MesRoom'
}];
exports.PROJECT_TEXT = PROJECT_TEXT;
var SERTIFICATIONS_DATA = [{
  title: 'FrontEnd Developer',
  subTitle: 'TeachMeSkills',
  link: 'https://drive.google.com/file/d/1mD7Ax1Q-3gHF3i_Pj7gUGTJ6f86HevHr/view?usp=sharing',
  textLink: 'certificate',
  icon: 'https://i.imgur.com/mftjVFI.png'
}, {
  title: 'JavaScript for beginners',
  subTitle: 'Stepik',
  link: 'https://stepik.org/cert/1641877?lang=en',
  textLink: 'certificate',
  icon: 'https://i.imgur.com/mUADYJ0.png'
}, {
  title: 'English',
  subTitle: 'Skillbox',
  link: 'https://drive.google.com/file/d/1ceIo8AXoIip0c5VZbZh0UW9vos_am-Vt/view?usp=sharing',
  textLink: 'certificate',
  icon: 'https://i.imgur.com/QLi5MWB.png'
}];
exports.SERTIFICATIONS_DATA = SERTIFICATIONS_DATA;
},{"../core/helpers/getAge":"src/app/core/helpers/getAge.ts"}],"src/app/core/helpers/createDubleLine.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDubleLine = void 0;
function createDubleLine() {
  var dubleLine = document.createElement('div');
  dubleLine.classList.add('duble-line');
  var line = document.createElement('span');
  line.classList.add('line');
  var subLine = document.createElement('span');
  subLine.classList.add('line', 'line_sub');
  dubleLine.append(line, subLine);
  return dubleLine;
}
exports.createDubleLine = createDubleLine;
},{}],"src/app/core/helpers/createHeaading.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeading = void 0;
function createHeading(text) {
  var skillsHeading = document.createElement('div');
  skillsHeading.classList.add('heading');
  var skillsHeadingText = document.createElement('h3');
  skillsHeadingText.textContent = text;
  skillsHeading.append(skillsHeadingText);
  return skillsHeading;
}
exports.createHeading = createHeading;
},{}],"src/app/core/skills.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSkilsWrapper = void 0;
var options_1 = require("../consts/options");
var createDubleLine_1 = require("./helpers/createDubleLine");
var createHeaading_1 = require("./helpers/createHeaading");
var infoWrapper = document.querySelector('.info__wrapper');
function createSkilsWrapper() {
  var skills = document.createElement('div');
  skills.classList.add('skills');
  skills.append((0, createHeaading_1.createHeading)('Skills'), (0, createDubleLine_1.createDubleLine)(), createSkillsList(), createDetailsWrapper(), createDetailsItemsWrapper(), createCertificationsWrapper());
  infoWrapper === null || infoWrapper === void 0 ? void 0 : infoWrapper.append(skills);
}
exports.createSkilsWrapper = createSkilsWrapper;
function createSkillsList() {
  var list = document.createElement('ul');
  list.classList.add('skills__list');
  createListElement(list);
  return list;
}
function createListElement(list) {
  var slillsList = list;
  options_1.LIST_ELEMENTS.forEach(function (option) {
    var listItem = document.createElement('li');
    var listTitle = document.createElement('span');
    var progressBar = document.createElement('progress');
    option.title && option.title.length > 0 && (listTitle.textContent = option.title);
    if (option.class && Array.isArray(option.class)) {
      option.class.forEach(function (element) {
        progressBar.classList.add(element);
      });
    }
    if (option.attributes && Array.isArray(option.attributes)) {
      option.attributes.forEach(function (attribute) {
        var _a = Object.entries(attribute)[0],
          key = _a[0],
          value = _a[1];
        progressBar.setAttribute(key, value);
      });
    }
    listItem.append(listTitle, progressBar);
    slillsList.appendChild(listItem);
  });
}
function createDetailsWrapper() {
  var details = document.createElement('div');
  details.classList.add('skills__details');
  details.append((0, createHeaading_1.createHeading)('Details'), (0, createDubleLine_1.createDubleLine)());
  return details;
}
function createDetailsItemsWrapper() {
  var items = document.createElement('div');
  items.classList.add('skills__details-items');
  createDetailsItem(items);
  return items;
}
function createDetailsItem(items) {
  options_1.DETAILS_ELEMENTS_DATA.forEach(function (option) {
    var item = document.createElement('div');
    item.classList.add('details-item');
    var itemTitle = document.createElement('div');
    itemTitle.classList.add('details-item__title');
    var itemTitleText = document.createElement('h4');
    var itemList = document.createElement('ul');
    itemList.classList.add('details-item__text');
    option.title && (itemTitleText.textContent = option.title);
    if (option.text && Array.isArray(option.text)) {
      option.text.forEach(function (item) {
        var itemListText = document.createElement('li');
        itemListText.textContent = item;
        itemList.append(itemListText);
      });
    }
    itemTitle.appendChild(itemTitleText);
    item.append(itemTitle, itemList);
    items.append(item);
  });
}
function createCertificationsWrapper() {
  var certifications = document.createElement('div');
  certifications.classList.add('skills__certifications');
  certifications.append((0, createHeaading_1.createHeading)('Licenses & Certifications'), (0, createDubleLine_1.createDubleLine)(), createBloksWrap());
  return certifications;
}
function createBloksWrap() {
  var blocks = document.createElement('div');
  blocks.classList.add('certifications__blocks');
  createBlockCertifications(blocks);
  return blocks;
}
function createBlockCertifications(wrap) {
  var wrapper = wrap;
  options_1.SERTIFICATIONS_DATA.forEach(function (item) {
    var blockCertifications = document.createElement('div');
    blockCertifications.classList.add('certifications-block');
    var list = createBlockListCertifications();
    list.append(createBlockTitle(item.title), createBlockSubitle(item.subTitle), createBlockLink(item.link, item.textLink));
    blockCertifications.append(createBlockIcon(item.icon), list);
    wrapper.append(blockCertifications);
  });
}
function createBlockListCertifications() {
  var wrap = document.createElement('div');
  wrap.classList.add('certifications-block-list');
  return wrap;
}
function createBlockTitle(text) {
  var inner = document.createElement('div');
  var title = document.createElement('h4');
  inner.classList.add('certifications-block__title');
  title.textContent = text;
  inner.append(title);
  return inner;
}
function createBlockSubitle(text) {
  var inner = document.createElement('div');
  var subTitle = document.createElement('h5');
  inner.classList.add('certifications-block__subTitle');
  subTitle.textContent = text;
  inner.append(subTitle);
  return inner;
}
function createBlockLink(value, text) {
  var inner = document.createElement('div');
  var link = document.createElement('a');
  inner.classList.add('certifications-block__link');
  link.text = text;
  link.href = value;
  inner.append(link);
  return inner;
}
function createBlockIcon(link) {
  var inner = document.createElement('div');
  var image = document.createElement('img');
  inner.classList.add('certifications-block__image');
  image.src = link;
  inner.append(image);
  return inner;
}
},{"../consts/options":"src/app/consts/options.ts","./helpers/createDubleLine":"src/app/core/helpers/createDubleLine.ts","./helpers/createHeaading":"src/app/core/helpers/createHeaading.ts"}],"src/app/core/projects.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWorkWrapper = void 0;
var createDubleLine_1 = require("./helpers/createDubleLine");
var createHeaading_1 = require("./helpers/createHeaading");
var options_1 = require("../consts/options");
var infoWrapper = document.querySelector('.info__wrapper');
function createprojectWrapper() {
  var project = document.createElement('div');
  project.classList.add('project');
  return project;
}
function createWorkWrapper() {
  var project = createprojectWrapper();
  options_1.PROJECT_TEXT.forEach(function (item) {
    var work = document.createElement('div');
    work.classList.add(item.tag);
    work.append(createWorkDeskription(item.name, item.title, item.text), createProjectLinks(item.site, item.git));
    project.append(work);
  });
  infoWrapper === null || infoWrapper === void 0 ? void 0 : infoWrapper.append(project);
}
exports.createWorkWrapper = createWorkWrapper;
function createWorkDeskription(name, title, text) {
  var deskription = document.createElement('div');
  deskription.classList.add('work__description');
  deskription.append((0, createHeaading_1.createHeading)(name), (0, createDubleLine_1.createDubleLine)(), createWorkInner(title, text));
  return deskription;
}
function createWorkText(wrapper, title, text) {
  var workTitle = createWorkTitle();
  var workList = createWorkList();
  var workTitleText = document.createElement('h5');
  title && (workTitleText.textContent = title);
  if (text && Array.isArray(text)) {
    text.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.textContent = item;
      workList.append(listItem);
    });
  }
  workTitle.append(workTitleText);
  wrapper.append(workTitle, workList);
}
function createWorkInner(title, text) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('work__inner');
  createWorkText(wrapper, title, text);
  return wrapper;
}
function createWorkTitle() {
  var workTitle = document.createElement('div');
  workTitle.classList.add('work__title');
  return workTitle;
}
function createWorkList() {
  var workList = document.createElement('ul');
  workList.classList.add('work__list');
  return workList;
}
function createProjectLinks(webSite, github) {
  var links = document.createElement('div');
  links.classList.add('work__links');
  var webSiteLink = createLinkOnWebsite(webSite);
  var githubLink = createLinkOnGithub(github);
  links.append(webSiteLink, githubLink);
  return links;
}
function createLinkOnWebsite(webSite) {
  var webSiteLink = document.createElement('a');
  webSiteLink.classList.add('btn', 'btn_rainbow');
  webSiteLink.href = webSite;
  return webSiteLink;
}
function createLinkOnGithub(github) {
  var githubLink = document.createElement('a');
  githubLink.classList.add('btn', 'btn_small');
  githubLink.href = github;
  var githubImg = document.createElement('img');
  githubImg.src = 'https://i.imgur.com/66hBQXq.png';
  githubImg.alt = 'github';
  var githubImgBlack = document.createElement('img');
  githubImgBlack.src = 'https://i.imgur.com/c9qVXSW.png';
  githubImgBlack.alt = 'github';
  githubLink.append(githubImg, githubImgBlack);
  return githubLink;
}
},{"./helpers/createDubleLine":"src/app/core/helpers/createDubleLine.ts","./helpers/createHeaading":"src/app/core/helpers/createHeaading.ts","../consts/options":"src/app/consts/options.ts"}],"src/app/core/about.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAboutWrapper = void 0;
var options_1 = require("../consts/options");
var options_2 = require("../consts/options");
var infoWrapper = document.querySelector('.info__wrapper');
function createAboutWrapper() {
  var aboutWrapper = document.createElement('div');
  aboutWrapper.classList.add('about');
  aboutWrapper.append(createInformationBlock(), createImageBlock());
  infoWrapper === null || infoWrapper === void 0 ? void 0 : infoWrapper.append(aboutWrapper);
}
exports.createAboutWrapper = createAboutWrapper;
function createInformationBlock() {
  var informationWrapper = document.createElement('div');
  informationWrapper.classList.add('information');
  informationWrapper.append(createInformationList(), createArticle());
  return informationWrapper;
}
function createInformationList() {
  var list = document.createElement('ul');
  list.classList.add('information__list');
  for (var elem in options_1.InformationBlockListData) {
    var item = document.createElement('li');
    var key = document.createElement('span');
    key.textContent = elem;
    var value = document.createElement('span');
    value.textContent = options_1.InformationBlockListData[elem];
    item.append(key, value);
    list.append(item);
  }
  return list;
}
function createArticle() {
  var article = document.createElement('div');
  article.classList.add('information__article');
  var articleText = document.createElement('p');
  articleText.textContent = options_2.InformationBlockTextData.text;
  article.append(articleText);
  return article;
}
function createImageBlock() {
  var imageWrapper = document.createElement('div');
  imageWrapper.classList.add('about__image');
  var image = document.createElement('img');
  image.src = 'https://i.imgur.com/O1L4z83.png';
  image.alt = 'My photo';
  image.loading = 'eager';
  imageWrapper.append(image);
  return imageWrapper;
}
},{"../consts/options":"src/app/consts/options.ts"}],"src/app/storage/themeStorage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeStore = void 0;
var ThemeStore = /** @class */function () {
  function ThemeStore() {}
  ThemeStore.setStorage = function (value) {
    localStorage.setItem('theme', value);
  };
  ThemeStore.getStorage = function () {
    return localStorage.getItem('theme');
  };
  return ThemeStore;
}();
exports.ThemeStore = ThemeStore;
},{}],"src/app/core/theme.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTheme = void 0;
var themeStorage_1 = require("../storage/themeStorage");
var elements = document.querySelectorAll('.theme');
var toggleThemeButtonText = document.querySelector('.theme-text');
function toggleTheme() {
  var storage = themeStorage_1.ThemeStore.getStorage();
  if (storage === 'dark-theme') {
    themeStorage_1.ThemeStore.setStorage('light-theme');
    toggleThemeButtonText && (toggleThemeButtonText.textContent = 'Dark Theme');
    elements.forEach(function (element) {
      element.classList.add('white-theme');
    });
  } else {
    themeStorage_1.ThemeStore.setStorage('dark-theme');
    toggleThemeButtonText && (toggleThemeButtonText.textContent = 'Light Theme');
    elements.forEach(function (element) {
      element.classList.remove('white-theme');
    });
  }
}
exports.toggleTheme = toggleTheme;
function checkTheme() {
  var storage = themeStorage_1.ThemeStore.getStorage();
  if (storage === 'light-theme') {
    elements.forEach(function (element) {
      element.classList.add('white-theme');
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  return checkTheme();
});
},{"../storage/themeStorage":"src/app/storage/themeStorage.ts"}],"src/app/core/cards.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var skills_1 = require("./skills");
var projects_1 = require("./projects");
var about_1 = require("./about");
var theme_1 = require("./theme");
var btns = document.querySelectorAll('.card__flip');
var info = document.getElementById('info');
var infoWrapper = document.querySelector('.info__wrapper');
var footer = document.querySelector('.footer');
var _a = Array.from(btns),
  skills = _a[0],
  settings = _a[1],
  projects = _a[2],
  about = _a[3];
btns.forEach(function (element) {
  element.addEventListener('click', function (event) {
    if (event.target === skills) {
      infoWrapper && (infoWrapper.innerHTML = '');
      (0, skills_1.createSkilsWrapper)();
      info && (info.style.display = 'block');
      footer && (footer.style.display = 'block');
      scrollToInfo();
    } else if (event.target === projects) {
      infoWrapper && (infoWrapper.innerHTML = '');
      (0, projects_1.createWorkWrapper)();
      info && (info.style.display = 'block');
      footer && (footer.style.display = 'block');
      scrollToInfo();
    } else if (event.target === about) {
      infoWrapper && (infoWrapper.innerHTML = '');
      (0, about_1.createAboutWrapper)();
      info && (info.style.display = 'block');
      footer && (footer.style.display = 'block');
      scrollToInfo();
    } else if (event.target === settings) {
      (0, theme_1.toggleTheme)();
    }
  });
});
function scrollToInfo() {
  var infoSection = document.getElementById('info');
  if (infoSection) {
    var infoSectionTop = infoSection.getBoundingClientRect().top;
    var scrollStep_1 = infoSectionTop / 20;
    var scrollCount_1 = 0;
    var scrollAnimation_1 = function scrollAnimation_1() {
      window.scrollBy(0, scrollStep_1);
      scrollCount_1++;
      if (scrollCount_1 >= 20) {
        return;
      }
      requestAnimationFrame(scrollAnimation_1);
    };
    scrollAnimation_1();
  }
}
},{"./skills":"src/app/core/skills.ts","./projects":"src/app/core/projects.ts","./about":"src/app/core/about.ts","./theme":"src/app/core/theme.ts"}],"src/app/core/animation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var options_1 = require("../consts/options");
function setProgressBarValues() {
  var progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(function (progress) {
    var progressClass = progress.classList[1];
    var attributeValue = options_1.AttributesValue[progressClass];
    attributeValue && progress.setAttribute('value', "".concat(attributeValue));
  });
}
function handleScroll() {
  var skillsSection = document.getElementById('info');
  if (skillsSection) {
    var skillsSectionTop = skillsSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (skillsSectionTop < windowHeight) {
      setProgressBarValues();
    }
  }
}
window.addEventListener('scroll', handleScroll);
setTimeout(function () {
  return handleScroll();
}, 300);
},{"../consts/options":"src/app/consts/options.ts"}],"src/app/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./core/cards.ts");
require("./core/skills.ts");
require("./core/animation.ts");
require("./core/projects.ts");
require("./core/about.ts");
require("./core/theme.ts");
},{"./core/cards.ts":"src/app/core/cards.ts","./core/skills.ts":"src/app/core/skills.ts","./core/animation.ts":"src/app/core/animation.ts","./core/projects.ts":"src/app/core/projects.ts","./core/about.ts":"src/app/core/about.ts","./core/theme.ts":"src/app/core/theme.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63572" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/app/index.ts"], null)
//# sourceMappingURL=/app.1cf66387.js.map