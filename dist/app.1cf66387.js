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
  var year = new Date();
  var age = (year.getFullYear() - 1998).toString();
  return age;
}
exports.getAge = getAge;
},{}],"src/app/consts/options.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttributesValue = exports.InformationBlockTextData = exports.InformationBlockListData = exports.PROJECT_TEXT = exports.DETAILS_ELEMENTS_DATA = exports.LIST_ELEMENTS = void 0;
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
  InformationBlockTextData["text"] = "I'm a passionate and dedicated  frontend developer with around 4 months of independent learning and 7 months of formal training experience.\n \n    I have learned html, css, JavaScript, TypeScript and I'm currently in the process of learning React.\n \n    I'm committed to continuously improving my skills and staying updated with emerging technologies in the frontend development field.\n\n    I'm committed to continuous learning and growth in order to become a well-rounded frontend developer.\n\n    I'm looking forward to get an opportunity to work on challenging projects that allow me to apply my expertise in JavaScript, TypeScript, and React.";
})(InformationBlockTextData || (exports.InformationBlockTextData = InformationBlockTextData = {}));
var AttributesValue;
(function (AttributesValue) {
  AttributesValue[AttributesValue["html"] = 80] = "html";
  AttributesValue[AttributesValue["css"] = 80] = "css";
  AttributesValue[AttributesValue["less"] = 80] = "less";
  AttributesValue[AttributesValue["sass"] = 80] = "sass";
  AttributesValue[AttributesValue["scss"] = 80] = "scss";
  AttributesValue[AttributesValue["git"] = 50] = "git";
  AttributesValue[AttributesValue["js"] = 70] = "js";
  AttributesValue[AttributesValue["api"] = 70] = "api";
  AttributesValue[AttributesValue["ts"] = 40] = "ts";
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
}];
exports.DETAILS_ELEMENTS_DATA = DETAILS_ELEMENTS_DATA;
var PROJECT_TEXT = [{
  tag: 'work',
  name: '4Scopes',
  title: 'Team work project that is a prototype of Wildberries',
  text: ['Product cards are created dynamically from API.', 'Basket is created dynamicaly, basket items are saved in localStorage.', 'Authentication modals are created dynamicaly, user data store in API, user token is saved in SessionStorage.', 'Search & filters are implemented on the website.', 'All the pictures are created from API- there are footer-bar and footer-accordion in mobile version.'],
  site: 'https://4-scopes.netlify.app/',
  git: 'https://github.com/AnnMurr/wildberries_4scopes'
}, {
  tag: 'work',
  name: 'L.Miloris',
  title: 'Creted e-shop web-site using the following technologies: JS, LESS, REST API, Parcel',
  text: ['Basket - adding item to user\'s basket, count of items in it, sync with API (Users).', 'Authentication - log in, log out, sign up, sync with API (Users).', 'Product Cards - dynamically created product cards from API (Cards).', 'Implemented anumations using CSS keyframes + JS.', 'Mobile verison is not ready fully.'],
  site: 'https://main--l-miloris-perfume.netlify.app/',
  git: 'https://github.com/AnnMurr/Labos-Miloris'
}];
exports.PROJECT_TEXT = PROJECT_TEXT;
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
  skills.append((0, createHeaading_1.createHeading)('Skills'), (0, createDubleLine_1.createDubleLine)(), createSkillsList(), createDetailsWrapper(), createDetailsItemsWrapper());
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
  var githubLink = reateLinkOnGithub(github);
  links.append(webSiteLink, githubLink);
  return links;
}
function createLinkOnWebsite(webSite) {
  var webSiteLink = document.createElement('a');
  webSiteLink.classList.add('btn', 'btn_rainbow');
  webSiteLink.href = webSite;
  return webSiteLink;
}
function reateLinkOnGithub(github) {
  var githubLink = document.createElement('a');
  githubLink.classList.add('btn', 'btn_small');
  githubLink.href = github;
  var githubImg = document.createElement('img');
  githubImg.src = 'https://lh3.googleusercontent.com/pw/AIL4fc-UoXaHT_YT66yKvhb8rqlXLiYFcn9D1ImWRZ_efF9Eb0i1sEDak0Ur1CPojPc7BEa7U7oJbLQDoVGwhHazYEGhgOI37jc3TR8bEfp2s4ElNlTrUNKAfBw0K5l4p4Bc8utSOtXmj_4x88U2AZnraCQ=w40-h40-s-no?authuser=0';
  githubImg.alt = 'github';
  var githubImgBlack = document.createElement('img');
  githubImgBlack.src = 'https://lh3.googleusercontent.com/pw/AIL4fc9e7WaexPKfy7-2FMzoWa2J0Xq1kVJD90rPUEC5sCYqYH1jsVBCa-gPruhZYhRSHRY9r--dFCr6fWHTveireq7y91L-QvImfjOIri8G7MMZ51FqlMUS9AHxUfyCEcBjaY7ixSm3xC7_aic5UUsciLs=w40-h40-s-no?authuser=0';
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
  image.src = 'https://lh3.googleusercontent.com/pw/AIL4fc-pNOCpiypvfkByr6Rhv7KpPbfbzB9g5dg0eBOYqrwMOuJDZy9Wr7_dxCT5e3O3jZft02JQHT2BV62Cqo3HVuCrk53h34TxJDgIFd7evzQkWo_O9YME1ThAcJdO6hKlXnIa54dqak-RYtmRzHHqlmQ-nGWTtMDYeeLFrkyneJbmQTZ9hMhlKRyloxQG__t1tU7roTichLl2876B9_RpUhIQrJ-b_xyJSzJFZETeNa_DUM1LcNXiK4bVO0tML8HdMHIiI9o3euZEEgVe6HyBig08pKgBSKocoSgki93PNXIP7bor45lMX727xOs385HWpAfOExWMgs5Ia7oIs86KMSULpKjkWs2AgHzOTfLr7E0d0_bSivsBU01xAxmwraEeZvROKldijy-6YKdFAjlSGHVM6J63djtcvmemnLgj5XW-0F-_TBJFakqpezs8cZkRxGhzuGAILnj6ViWIcM0grJj4LQ7vm6iH1-qRVjM_TT5EJv7c-0dxA20kiR5wbtFAG4Kbo2YG7A8FlRPeDFH_ZlcWhJWtS5PkVmNqeRapwpp0hs8cI9puN-8d1xiJZGyHB5Rocigloyv7RZQp4tXyCXybmhANEQtJOh3wC15yr_6nXPamtqYKckBqfBqOy3sz5a7wZzxbePaGpXvCpIWKlpw1s5d1li9THWL5he33bQN1UhITtc3OXbWEyBhUwZCh_To994zfz5snK-ipUiMzcY6Q8fMdkbiw14vPAQ7tZ6zToFzCMuJOpK-ORtYH5UZk_AsFbAqYoQMU7wZ1Bh2xuVyo8CgsIVjLxvhrgxFcGjU7chpqT5ZU9oNY5WExbIgcZ2sC5aQpKzBZgg9mLDW5Lq5jPpQ9nFo4uZq6DdF0JlXGwDtFrc8GzIcvPjsPWKfPpyKDQ25ozR3Wz8Y7WpbZ=w540-h614-s-no?authuser=0';
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65514" + '/');
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