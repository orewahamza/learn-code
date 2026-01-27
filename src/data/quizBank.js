// Comprehensive Quiz Bank - Questions organized by course and level
// Each level has unique questions with progressive difficulty

export const QUIZ_BANK = {
  'javascript': {
    1: [ // Level 1: Variables (let, const) - Easy
      { id: 1, question: "Which keyword declares a variable that cannot be reassigned?", options: ["var", "let", "const", "static"], correctAnswer: 2, explanation: "`const` declares a constant that cannot be reassigned after initialization." },
      { id: 2, question: "What is the default value of an uninitialized variable?", options: ["null", "0", "undefined", "''"], correctAnswer: 2, explanation: "Uninitialized variables in JavaScript have the value `undefined`." },
      { id: 3, question: "Which keyword has block scope?", options: ["var", "let", "function", "global"], correctAnswer: 1, explanation: "`let` and `const` have block scope, while `var` has function scope." },
      { id: 4, question: "Can you redeclare a variable using `let` in the same scope?", options: ["Yes", "No", "Only in strict mode", "Only with numbers"], correctAnswer: 1, explanation: "You cannot redeclare a variable with `let` in the same scope - it causes an error." },
      { id: 5, question: "What happens if you use a `const` variable before declaring it?", options: ["Returns undefined", "ReferenceError", "Returns null", "Works fine"], correctAnswer: 1, explanation: "`const` and `let` are in a 'temporal dead zone' before declaration." }
    ],
    2: [ // Level 2: Data types - Easy/Medium
      { id: 1, question: "Which is NOT a primitive data type in JavaScript?", options: ["string", "number", "array", "boolean"], correctAnswer: 2, explanation: "Array is an object, not a primitive. Primitives are: string, number, boolean, null, undefined, symbol, bigint." },
      { id: 2, question: "What does `typeof null` return?", options: ["'null'", "'undefined'", "'object'", "'boolean'"], correctAnswer: 2, explanation: "This is a historical bug in JavaScript - `typeof null` returns 'object'." },
      { id: 3, question: "How do you check if a value is NaN?", options: ["value === NaN", "isNaN(value)", "value == NaN", "typeof value"], correctAnswer: 1, explanation: "Use `isNaN()` or `Number.isNaN()` because NaN !== NaN in JavaScript." },
      { id: 4, question: "What is the result of `typeof undefined`?", options: ["'null'", "'undefined'", "'object'", "'void'"], correctAnswer: 1, explanation: "`typeof undefined` correctly returns the string 'undefined'." },
      { id: 5, question: "Which creates a Symbol?", options: ["new Symbol('id')", "Symbol('id')", "symbol('id')", "#id"], correctAnswer: 1, explanation: "Symbols are created with `Symbol()` without the `new` keyword." }
    ],
    3: [ // Level 3: Operators - Medium
      { id: 1, question: "What does `===` check?", options: ["Value only", "Type only", "Value and type", "Reference"], correctAnswer: 2, explanation: "Strict equality `===` checks both value AND type without type coercion." },
      { id: 2, question: "What is `5 + '5'` in JavaScript?", options: ["10", "'55'", "55", "Error"], correctAnswer: 1, explanation: "JavaScript coerces the number to string and concatenates: '55'." },
      { id: 3, question: "What does the `??` operator do?", options: ["Logical OR", "Nullish coalescing", "Optional chaining", "Bitwise"], correctAnswer: 1, explanation: "Nullish coalescing `??` returns right side only if left is null/undefined." },
      { id: 4, question: "What is `!!'hello'`?", options: ["true", "false", "'hello'", "Error"], correctAnswer: 0, explanation: "Double negation `!!` converts to boolean. Non-empty strings are truthy." },
      { id: 5, question: "What does `?.` operator do?", options: ["Ternary check", "Optional chaining", "Spread values", "Rest parameter"], correctAnswer: 1, explanation: "Optional chaining `?.` safely accesses nested properties without errors." }
    ],
    4: [ // Level 4: Conditional statements - Medium
      { id: 1, question: "Which value is falsy in JavaScript?", options: ["'false'", "[]", "0", "{}"], correctAnswer: 2, explanation: "0 is falsy. Empty strings, null, undefined, NaN, and false are also falsy." },
      { id: 2, question: "What does the ternary operator return?", options: ["Always boolean", "One of two values", "Three values", "Nothing"], correctAnswer: 1, explanation: "Ternary `condition ? value1 : value2` returns one of two values." },
      { id: 3, question: "Can switch statements use strings?", options: ["No, only numbers", "Yes", "Only with parseInt", "Only in ES6"], correctAnswer: 1, explanation: "Switch statements can compare any type including strings." },
      { id: 4, question: "What happens without `break` in switch?", options: ["Error", "Fall-through to next case", "Returns undefined", "Exits function"], correctAnswer: 1, explanation: "Without break, execution 'falls through' to subsequent cases." },
      { id: 5, question: "Which is correct for multiple conditions?", options: ["if...else if...else", "if...elif...else", "if...elseif...else", "if...or...else"], correctAnswer: 0, explanation: "JavaScript uses `else if` (two words) for multiple conditions." }
    ],
    5: [ // Level 5: Loops - Medium
      { id: 1, question: "Which loop runs at least once?", options: ["for", "while", "do...while", "for...in"], correctAnswer: 2, explanation: "do...while checks the condition after running, so it always runs once." },
      { id: 2, question: "What does `continue` do in a loop?", options: ["Exits the loop", "Skips to next iteration", "Pauses execution", "Restarts loop"], correctAnswer: 1, explanation: "`continue` skips the rest of the current iteration and moves to the next." },
      { id: 3, question: "Which loop is best for iterating object keys?", options: ["for", "for...of", "for...in", "forEach"], correctAnswer: 2, explanation: "`for...in` iterates over enumerable property names (keys) of an object." },
      { id: 4, question: "What does `for...of` iterate over?", options: ["Object keys", "Iterable values", "Indexes only", "Properties"], correctAnswer: 1, explanation: "`for...of` iterates over iterable values like arrays, strings, Maps." },
      { id: 5, question: "Can you use `break` in a `forEach`?", options: ["Yes", "No", "Only with return", "Only in arrow functions"], correctAnswer: 1, explanation: "`break` doesn't work in forEach. Use for/for...of or throw an exception." }
    ],
    6: [ // Level 6: Functions - Medium/Hard
      { id: 1, question: "What is a callback function?", options: ["A recursive function", "A function passed to another function", "An arrow function", "An IIFE"], correctAnswer: 1, explanation: "A callback is a function passed as an argument to be called later." },
      { id: 2, question: "What does an IIFE do?", options: ["Creates a class", "Runs immediately when defined", "Delays execution", "Creates a promise"], correctAnswer: 1, explanation: "Immediately Invoked Function Expression runs as soon as it's defined." },
      { id: 3, question: "Arrow functions have their own `this`?", options: ["Yes", "No", "Only in classes", "Only when named"], correctAnswer: 1, explanation: "Arrow functions inherit `this` from their enclosing scope." },
      { id: 4, question: "What are default parameters?", options: ["Required params", "Params with preset values", "Rest params", "Spread params"], correctAnswer: 1, explanation: "Default parameters have fallback values if no argument is passed." },
      { id: 5, question: "What is function hoisting?", options: ["Moving to end", "Moving to top of scope", "Making private", "Optimization"], correctAnswer: 1, explanation: "Function declarations are hoisted to the top of their scope." }
    ],
    7: [ // Level 7: Arrays - Medium/Hard  
      { id: 1, question: "Which method adds to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: 0, explanation: "`push()` adds to end, `unshift()` to start. `pop()` and `shift()` remove." },
      { id: 2, question: "What does `splice()` return?", options: ["Modified array", "Removed elements", "New length", "Boolean"], correctAnswer: 1, explanation: "`splice()` modifies the original array and returns removed elements." },
      { id: 3, question: "Which creates a new array from filtering?", options: ["find()", "filter()", "some()", "every()"], correctAnswer: 1, explanation: "`filter()` returns a new array with elements passing the test." },
      { id: 4, question: "What does `map()` return?", options: ["Boolean", "Single value", "New array", "Original array"], correctAnswer: 2, explanation: "`map()` returns a new array with each element transformed." },
      { id: 5, question: "What does `reduce()` do?", options: ["Shrinks array", "Accumulates to single value", "Removes duplicates", "Sorts elements"], correctAnswer: 1, explanation: "`reduce()` processes elements to produce a single accumulated value." }
    ],
    8: [ // Level 8: Objects - Hard
      { id: 1, question: "How do you create an object?", options: ["new Object()", "{}", "Object.create()", "All of these"], correctAnswer: 3, explanation: "All three are valid ways to create objects in JavaScript." },
      { id: 2, question: "What does `Object.keys()` return?", options: ["Values array", "Keys array", "Entries array", "Boolean"], correctAnswer: 1, explanation: "`Object.keys()` returns an array of the object's own property names." },
      { id: 3, question: "What is object destructuring?", options: ["Deleting an object", "Extracting properties into variables", "Cloning objects", "Converting to array"], correctAnswer: 1, explanation: "Destructuring extracts values: `const {name} = obj;`" },
      { id: 4, question: "What does spread operator do with objects?", options: ["Deepens object", "Shallow copies properties", "Compares objects", "Stringifies"], correctAnswer: 1, explanation: "Spread `{...obj}` creates a shallow copy of object properties." },
      { id: 5, question: "What is `Object.freeze()` for?", options: ["Makes object immutable", "Clones deeply", "Converts to JSON", "Deletes properties"], correctAnswer: 0, explanation: "`Object.freeze()` prevents adding, removing, or modifying properties." }
    ],
    9: [ // Level 9: Array & object methods - Hard
      { id: 1, question: "What does `flat()` do?", options: ["Sorts array", "Flattens nested arrays", "Removes nulls", "Reverses"], correctAnswer: 1, explanation: "`flat()` creates a new array with sub-arrays flattened to specified depth." },
      { id: 2, question: "What does `Object.entries()` return?", options: ["Keys only", "Values only", "Key-value pairs", "Object copy"], correctAnswer: 2, explanation: "`Object.entries()` returns array of [key, value] pairs." },
      { id: 3, question: "Which finds first matching element?", options: ["filter()", "find()", "some()", "indexOf()"], correctAnswer: 1, explanation: "`find()` returns the first element matching the condition." },
      { id: 4, question: "What does `every()` return?", options: ["First match", "All matches", "Boolean", "Count"], correctAnswer: 2, explanation: "`every()` returns true if ALL elements pass the test." },
      { id: 5, question: "How to merge objects?", options: ["Object.merge()", "Object.assign()", "Object.concat()", "Object.combine()"], correctAnswer: 1, explanation: "`Object.assign(target, source)` or spread `{...a, ...b}` merges objects." }
    ],
    10: [ // Level 10: Scope & hoisting - Hard
      { id: 1, question: "What is lexical scope?", options: ["Runtime scope", "Scope determined by position in code", "Global only", "Function only"], correctAnswer: 1, explanation: "Lexical scope is determined by where code is written, not where it runs." },
      { id: 2, question: "What is a closure?", options: ["Ended function", "Function retaining outer scope", "Private class", "Module export"], correctAnswer: 1, explanation: "A closure is a function that remembers its lexical scope even when executed elsewhere." },
      { id: 3, question: "Are `let` and `const` hoisted?", options: ["No", "Yes, but in TDZ", "Only const", "Only let"], correctAnswer: 1, explanation: "They're hoisted but in Temporal Dead Zone until declared." },
      { id: 4, question: "What is the TDZ?", options: ["Error type", "Time before variable is declared", "Debugging zone", "Testing area"], correctAnswer: 1, explanation: "Temporal Dead Zone is the period where let/const exist but can't be accessed." },
      { id: 5, question: "Does `var` have block scope?", options: ["Yes", "No, function scope", "Only in strict mode", "Only in ES6"], correctAnswer: 1, explanation: "`var` is function-scoped, not block-scoped like let/const." }
    ],
    11: [ // Level 11: DOM manipulation
      { id: 1, question: "How to select an element by ID?", options: ["querySelector('#id')", "getElementById('id')", "Both work", "getElement('id')"], correctAnswer: 2, explanation: "Both `getElementById()` and `querySelector('#id')` select by ID." },
      { id: 2, question: "What does `innerHTML` do?", options: ["Returns text only", "Gets/sets HTML content", "Adds attributes", "Creates elements"], correctAnswer: 1, explanation: "`innerHTML` gets or sets the HTML markup inside an element." },
      { id: 3, question: "How to create a new element?", options: ["new Element()", "document.create()", "document.createElement()", "Element.new()"], correctAnswer: 2, explanation: "`document.createElement('tag')` creates a new HTML element." },
      { id: 4, question: "What does `appendChild()` do?", options: ["Removes child", "Adds element as last child", "Replaces child", "Clones element"], correctAnswer: 1, explanation: "`appendChild()` adds a node as the last child of a parent." },
      { id: 5, question: "What is `querySelectorAll`?", options: ["Returns first match", "Returns all matches as NodeList", "Returns array", "Returns HTMLCollection"], correctAnswer: 1, explanation: "`querySelectorAll()` returns a static NodeList of all matching elements." }
    ],
    12: [ // Level 12: Events
      { id: 1, question: "What is event bubbling?", options: ["Event goes to parent", "Event goes to children", "Event stops", "Event repeats"], correctAnswer: 0, explanation: "Bubbling: event propagates from target up through ancestors." },
      { id: 2, question: "How to stop event bubbling?", options: ["event.stop()", "event.stopPropagation()", "event.prevent()", "event.cancel()"], correctAnswer: 1, explanation: "`stopPropagation()` prevents the event from bubbling up." },
      { id: 3, question: "What does `preventDefault()` do?", options: ["Stops bubbling", "Prevents default browser action", "Removes listener", "Delays event"], correctAnswer: 1, explanation: "`preventDefault()` stops the default action like form submission." },
      { id: 4, question: "What is event delegation?", options: ["Remove events", "Add listener to parent for children", "Clone events", "Async events"], correctAnswer: 1, explanation: "Delegation uses one parent listener to handle events on children." },
      { id: 5, question: "What does `addEventListener` third param do?", options: ["Nothing", "Sets capture/options", "Callback", "Element"], correctAnswer: 1, explanation: "Third param can be options object or boolean for capture phase." }
    ],
    13: [ // Level 13: ES6+ features
      { id: 1, question: "What are template literals?", options: ["HTML templates", "Strings with backticks and expressions", "CSS templates", "JSON format"], correctAnswer: 1, explanation: "Template literals use backticks and allow embedded expressions with `${}`." },
      { id: 2, question: "What is destructuring?", options: ["Removing properties", "Extracting values into variables", "Cloning", "Deleting"], correctAnswer: 1, explanation: "Destructuring extracts values from arrays/objects into distinct variables." },
      { id: 3, question: "What does the spread operator do?", options: ["Compresses data", "Expands iterables", "Deletes elements", "Sorts arrays"], correctAnswer: 1, explanation: "Spread `...` expands iterables into individual elements." },
      { id: 4, question: "What are rest parameters?", options: ["Delay params", "Collect remaining args into array", "Optional params", "Default params"], correctAnswer: 1, explanation: "Rest `...args` collects remaining arguments into an array." },
      { id: 5, question: "What is a class in ES6?", options: ["New data type", "Syntactic sugar for prototypes", "Module system", "Strict mode"], correctAnswer: 1, explanation: "ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance." }
    ],
    14: [ // Level 14: Asynchronous JS
      { id: 1, question: "What is a Promise?", options: ["Synchronous operation", "Object representing eventual completion/failure", "Callback function", "Timer"], correctAnswer: 1, explanation: "A Promise represents the eventual result of an asynchronous operation." },
      { id: 2, question: "What states can a Promise have?", options: ["start, end", "pending, fulfilled, rejected", "open, closed", "sync, async"], correctAnswer: 1, explanation: "Promise states: pending (initial), fulfilled (success), rejected (failure)." },
      { id: 3, question: "What does `async` keyword do?", options: ["Blocks execution", "Makes function return a Promise", "Creates callback", "Delays code"], correctAnswer: 1, explanation: "`async` makes a function return a Promise automatically." },
      { id: 4, question: "What does `await` do?", options: ["Runs code faster", "Pauses until Promise resolves", "Creates Promise", "Catches errors"], correctAnswer: 1, explanation: "`await` pauses async function execution until Promise settles." },
      { id: 5, question: "What is `Promise.all()` for?", options: ["First to resolve", "Wait for all to resolve", "Race promises", "Chain promises"], correctAnswer: 1, explanation: "`Promise.all()` waits for all promises and returns array of results." }
    ],
    15: [ // Level 15: Error handling
      { id: 1, question: "What catches errors in sync code?", options: ["if/else", "try/catch", "Promise.catch", "callbacks"], correctAnswer: 1, explanation: "`try/catch` catches synchronous errors in the try block." },
      { id: 2, question: "When does `finally` run?", options: ["Only on error", "Only on success", "Always after try/catch", "Never"], correctAnswer: 2, explanation: "`finally` always runs regardless of try/catch outcome." },
      { id: 3, question: "How to create custom error?", options: ["new Error('msg')", "throw 'error'", "Error.create()", "Both A and B work"], correctAnswer: 3, explanation: "Both `new Error()` and `throw 'string'` work, but Error object is better." },
      { id: 4, question: "How to catch async errors with await?", options: ["Regular try/catch", "Only .catch()", "Cannot catch", "Special syntax"], correctAnswer: 0, explanation: "Regular try/catch works with await inside async functions." },
      { id: 5, question: "What is error propagation?", options: ["Errors spread to users", "Uncaught errors bubble up", "Errors logged", "Errors hidden"], correctAnswer: 1, explanation: "Uncaught errors propagate up the call stack until handled." }
    ],
    16: [ // Level 16: Modules
      { id: 1, question: "What is ES6 module syntax for export?", options: ["module.exports", "export default/export", "exports.name", "define()"], correctAnswer: 1, explanation: "ES6 uses `export default` and named `export` syntax." },
      { id: 2, question: "How to import default export?", options: ["import {x} from", "import x from", "require()", "include()"], correctAnswer: 1, explanation: "Default exports: `import name from './module'` (no braces)." },
      { id: 3, question: "How to import named exports?", options: ["import x from", "import {x} from", "require({x})", "import all"], correctAnswer: 1, explanation: "Named exports: `import { name } from './module'` (with braces)." },
      { id: 4, question: "What is dynamic import?", options: ["import at top", "import() returns Promise", "require.async", "lazy import"], correctAnswer: 1, explanation: "`import()` dynamically loads modules and returns a Promise." },
      { id: 5, question: "Can you rename imports?", options: ["No", "Yes, with `as`", "Only defaults", "Only named"], correctAnswer: 1, explanation: "Use `as` to rename: `import { x as y } from './module'`." }
    ],
    17: [ // Level 17: Browser APIs
      { id: 1, question: "What is localStorage?", options: ["Server storage", "Persistent browser storage", "Session only", "Memory cache"], correctAnswer: 1, explanation: "localStorage persists data in the browser until explicitly cleared." },
      { id: 2, question: "What is fetch() for?", options: ["DOM queries", "HTTP requests", "File system", "Events"], correctAnswer: 1, explanation: "`fetch()` makes HTTP requests and returns a Promise." },
      { id: 3, question: "What does `JSON.parse()` do?", options: ["Object to string", "String to object", "Validate JSON", "Create JSON file"], correctAnswer: 1, explanation: "`JSON.parse()` converts JSON string to JavaScript object." },
      { id: 4, question: "How does `setTimeout` work?", options: ["Blocks thread", "Schedules callback after delay", "Runs immediately", "Loops code"], correctAnswer: 1, explanation: "`setTimeout` schedules a function to run after specified milliseconds." },
      { id: 5, question: "What is the Geolocation API?", options: ["Maps library", "Browser API for user location", "GPS hardware", "Server API"], correctAnswer: 1, explanation: "Geolocation API accesses user's geographical position with permission." }
    ],
    18: [ // Level 18: Performance
      { id: 1, question: "What is debouncing?", options: ["Faster execution", "Delay until pauses", "Run immediately", "Skip calls"], correctAnswer: 1, explanation: "Debouncing waits until a pause in events before executing." },
      { id: 2, question: "What is throttling?", options: ["Run every X ms max", "Run all calls", "Skip first call", "Delay all calls"], correctAnswer: 0, explanation: "Throttling limits execution to at most once per specified time period." },
      { id: 3, question: "What is lazy loading?", options: ["Slow code", "Load resources on demand", "Preload everything", "Cache data"], correctAnswer: 1, explanation: "Lazy loading defers loading resources until they're needed." },
      { id: 4, question: "What is requestAnimationFrame?", options: ["Video API", "Optimized animation timing", "Canvas method", "CSS animation"], correctAnswer: 1, explanation: "`requestAnimationFrame` syncs animations with browser refresh rate." },
      { id: 5, question: "What are Web Workers?", options: ["Server threads", "Background JS threads", "Service workers", "DOM workers"], correctAnswer: 1, explanation: "Web Workers run JavaScript in background threads without blocking UI." }
    ]
  },

  'python': {
    1: [ // Syntax & indentation
      { id: 1, question: "What defines a code block in Python?", options: ["Curly braces", "Indentation", "Parentheses", "Keywords"], correctAnswer: 1, explanation: "Python uses indentation (whitespace) to define code blocks." },
      { id: 2, question: "What character starts a comment?", options: ["//", "#", "/*", "--"], correctAnswer: 1, explanation: "Python uses `#` for single-line comments." },
      { id: 3, question: "How do you print in Python 3?", options: ["print 'hello'", "print('hello')", "echo('hello')", "console.log()"], correctAnswer: 1, explanation: "Python 3 uses `print()` as a function with parentheses." },
      { id: 4, question: "Is Python case-sensitive?", options: ["Yes", "No", "Only for variables", "Only for functions"], correctAnswer: 0, explanation: "Python is case-sensitive: `Name` and `name` are different." },
      { id: 5, question: "What ends a Python statement?", options: ["Semicolon required", "Newline", "Period", "Colon"], correctAnswer: 1, explanation: "Python statements end with a newline. Semicolons are optional." }
    ],
    2: [ // Variables & types
      { id: 1, question: "How do you declare a variable?", options: ["var x = 5", "int x = 5", "x = 5", "let x = 5"], correctAnswer: 2, explanation: "Python has dynamic typing - just assign: `x = 5`." },
      { id: 2, question: "What is `type(42)`?", options: ["<class 'integer'>", "<class 'int'>", "<class 'number'>", "int"], correctAnswer: 1, explanation: "`type()` returns `<class 'int'>` for integers." },
      { id: 3, question: "How to convert string to int?", options: ["int('5')", "(int)'5'", "Integer('5')", "parse('5')"], correctAnswer: 0, explanation: "`int('5')` converts the string '5' to integer 5." },
      { id: 4, question: "What is a boolean in Python?", options: ["true/false", "True/False", "TRUE/FALSE", "1/0 only"], correctAnswer: 1, explanation: "Python booleans are capitalized: `True` and `False`." },
      { id: 5, question: "Can variables change type?", options: ["No", "Yes, Python is dynamically typed", "Only with casting", "Only strings"], correctAnswer: 1, explanation: "Python is dynamically typed - variables can hold any type." }
    ],
    3: [ // Operators
      { id: 1, question: "What does `//` do?", options: ["Comment", "Floor division", "Regular division", "Double slash operator"], correctAnswer: 1, explanation: "`//` performs floor division, returning the integer part." },
      { id: 2, question: "What is `**` operator?", options: ["Multiplication", "Exponentiation", "Pointer", "Comment"], correctAnswer: 1, explanation: "`**` is the power operator: `2**3` equals 8." },
      { id: 3, question: "What does `%` return?", options: ["Percentage", "Remainder", "Division", "Modulus symbol"], correctAnswer: 1, explanation: "Modulo `%` returns the remainder of division." },
      { id: 4, question: "What is `and` in Python?", options: ["Bitwise AND", "Logical AND", "String concatenation", "Assignment"], correctAnswer: 1, explanation: "Python uses `and`, `or`, `not` for logical operations." },
      { id: 5, question: "What does `is` check?", options: ["Equality", "Same object identity", "Type", "Instance"], correctAnswer: 1, explanation: "`is` checks if two variables reference the same object." }
    ],
    4: [ // Conditions
      { id: 1, question: "What is the syntax for if statement?", options: ["if (x): ", "if x:", "if x then", "if (x) {"], correctAnswer: 1, explanation: "Python uses `if condition:` with colon, no parentheses required." },
      { id: 2, question: "What keyword is used for else-if?", options: ["else if", "elseif", "elif", "elsif"], correctAnswer: 2, explanation: "Python uses `elif` for else-if conditions." },
      { id: 3, question: "What values are falsy?", options: ["0, '', [], None, False", "Only False", "Only 0 and False", "Only None"], correctAnswer: 0, explanation: "Falsy: False, None, 0, '', [], {}, set()." },
      { id: 4, question: "What is ternary expression syntax?", options: ["x if cond else y", "cond ? x : y", "if cond then x else y", "x when cond else y"], correctAnswer: 0, explanation: "Python ternary: `value_if_true if condition else value_if_false`." },
      { id: 5, question: "Can you nest conditions?", options: ["No", "Yes", "Maximum 3 levels", "Only with functions"], correctAnswer: 1, explanation: "Conditions can be nested, but keep code readable." }
    ],
    5: [ // Loops
      { id: 1, question: "How to loop through a range?", options: ["for i in range(5)", "for(i=0;i<5;i++)", "foreach i in 5", "loop i to 5"], correctAnswer: 0, explanation: "`for i in range(5)` iterates from 0 to 4." },
      { id: 2, question: "What does `range(2, 8, 2)` produce?", options: ["2,4,6", "2,4,6,8", "2,3,4,5,6,7", "2,8,2"], correctAnswer: 0, explanation: "range(start, stop, step) gives 2, 4, 6 (stop is exclusive)." },
      { id: 3, question: "What does `enumerate()` return?", options: ["Just values", "Index and value pairs", "Just indexes", "Dictionary"], correctAnswer: 1, explanation: "`enumerate()` returns tuples of (index, value)." },
      { id: 4, question: "What is a list comprehension?", options: ["List documentation", "Compact list creation syntax", "List sorting", "List merging"], correctAnswer: 1, explanation: "List comprehension: `[x*2 for x in range(5)]` creates [0,2,4,6,8]." },
      { id: 5, question: "What does `break` do?", options: ["Pauses loop", "Exits loop entirely", "Skips iteration", "Restarts loop"], correctAnswer: 1, explanation: "`break` immediately exits the innermost loop." }
    ],
    6: [ // Functions
      { id: 1, question: "How do you define a function?", options: ["function name():", "def name():", "func name():", "fn name():"], correctAnswer: 1, explanation: "Python uses `def function_name():` to define functions." },
      { id: 2, question: "What is *args?", options: ["Pointer", "Arbitrary positional arguments", "Required args", "Keyword args"], correctAnswer: 1, explanation: "`*args` collects extra positional arguments as a tuple." },
      { id: 3, question: "What is **kwargs?", options: ["Double pointer", "Arbitrary keyword arguments", "Default values", "Named tuple"], correctAnswer: 1, explanation: "`**kwargs` collects extra keyword arguments as a dictionary." },
      { id: 4, question: "What is a lambda function?", options: ["Named function", "Anonymous one-line function", "Recursive function", "Generator"], correctAnswer: 1, explanation: "Lambda: `lambda x: x*2` is an anonymous function." },
      { id: 5, question: "What does `return` without a value return?", options: ["0", "False", "None", "Empty string"], correctAnswer: 2, explanation: "`return` without a value returns `None`." }
    ],
    7: [ // Lists, tuples, sets
      { id: 1, question: "How to create an empty list?", options: ["list[]", "[]", "{}", "()"], correctAnswer: 1, explanation: "Empty list: `[]` or `list()`." },
      { id: 2, question: "What is a tuple?", options: ["Mutable list", "Immutable sequence", "Dictionary type", "Set type"], correctAnswer: 1, explanation: "Tuples are immutable sequences: `(1, 2, 3)`." },
      { id: 3, question: "Can sets have duplicates?", options: ["Yes", "No", "Only strings", "Only numbers"], correctAnswer: 1, explanation: "Sets automatically remove duplicates." },
      { id: 4, question: "How to add to a set?", options: ["set.push()", "set.add()", "set.append()", "set.insert()"], correctAnswer: 1, explanation: "Use `add()` for single elements, `update()` for multiple." },
      { id: 5, question: "How to access last list element?", options: ["list[last]", "list[-1]", "list[len-1]", "list.last()"], correctAnswer: 1, explanation: "Negative indexing: `list[-1]` gets the last element." }
    ],
    8: [ // Dictionaries
      { id: 1, question: "How to create a dictionary?", options: ["{'key': 'value'}", "dict['key']='value'", "[key: value]", "dict(key=value) or {}"], correctAnswer: 3, explanation: "Both `{'k': 'v'}` and `dict(k='v')` create dictionaries." },
      { id: 2, question: "How to safely get a value?", options: ["dict[key]", "dict.get(key)", "dict.value(key)", "dict.fetch(key)"], correctAnswer: 1, explanation: "`get()` returns None instead of error if key missing." },
      { id: 3, question: "How to get all keys?", options: ["dict.keys()", "dict.allKeys()", "dict.keySet()", "keys(dict)"], correctAnswer: 0, explanation: "`dict.keys()` returns a view of all keys." },
      { id: 4, question: "How to check if key exists?", options: ["dict.has(key)", "key in dict", "dict.contains(key)", "dict.exists(key)"], correctAnswer: 1, explanation: "Use `key in dict` to check key existence." },
      { id: 5, question: "How to merge dictionaries (3.9+)?", options: ["dict1 + dict2", "dict1 | dict2", "merge(dict1, dict2)", "dict1.merge(dict2)"], correctAnswer: 1, explanation: "Python 3.9+ uses `|` operator: `dict1 | dict2`." }
    ],
    9: [ // File handling
      { id: 1, question: "How to open a file for reading?", options: ["open('file', 'r')", "file.open('r')", "read('file')", "File('file')"], correctAnswer: 0, explanation: "`open('filename', 'r')` opens for reading. 'r' is default." },
      { id: 2, question: "What is the `with` statement for?", options: ["Loops", "Auto-closes resources", "Conditions", "Imports"], correctAnswer: 1, explanation: "`with open()` automatically closes the file when done." },
      { id: 3, question: "How to read entire file as string?", options: ["file.read()", "file.readAll()", "file.content()", "file.text()"], correctAnswer: 0, explanation: "`read()` reads entire file content as a string." },
      { id: 4, question: "How to read file line by line?", options: ["for line in file", "file.lines()", "file.readLines()", "file.each()"], correctAnswer: 0, explanation: "Files are iterable: `for line in file:` reads lines." },
      { id: 5, question: "What mode is 'a'?", options: ["All", "Append", "Archive", "ASCII"], correctAnswer: 1, explanation: "'a' mode appends to the file without overwriting." }
    ],
    10: [ // Exceptions
      { id: 1, question: "How to catch all exceptions?", options: ["except:", "except Exception:", "Both work", "catch all:"], correctAnswer: 2, explanation: "Both `except:` and `except Exception:` catch all. Latter is preferred." },
      { id: 2, question: "How to raise an exception?", options: ["throw Error", "raise Exception", "error()", "exception()"], correctAnswer: 1, explanation: "Use `raise ExceptionType('message')` to raise exceptions." },
      { id: 3, question: "What is `finally` for?", options: ["Final value", "Cleanup code that always runs", "Last exception", "Final iteration"], correctAnswer: 1, explanation: "`finally` block always executes, even after exceptions." },
      { id: 4, question: "What is the parent of all exceptions?", options: ["Error", "Exception", "BaseException", "Throwable"], correctAnswer: 2, explanation: "`BaseException` is the root, but catch `Exception` for user errors." },
      { id: 5, question: "Can you have multiple except blocks?", options: ["No", "Yes", "Maximum 3", "Only with else"], correctAnswer: 1, explanation: "Multiple except blocks can handle different exception types." }
    ],
    11: [ // Modules & packages
      { id: 1, question: "How to import a module?", options: ["#include module", "using module", "import module", "require module"], correctAnswer: 2, explanation: "Python uses `import module_name` to import modules." },
      { id: 2, question: "How to import specific function?", options: ["import func from mod", "from mod import func", "mod.import(func)", "use mod.func"], correctAnswer: 1, explanation: "Use `from module import function` for specific imports." },
      { id: 3, question: "What is `__name__`?", options: ["File name", "Module name or '__main__'", "Function name", "Class name"], correctAnswer: 1, explanation: "`__name__` is '__main__' when run directly, module name when imported." },
      { id: 4, question: "What is a package?", options: ["ZIP file", "Directory with __init__.py", "Single module", "Compiled code"], correctAnswer: 1, explanation: "A package is a directory with `__init__.py` containing modules." },
      { id: 5, question: "How to install packages?", options: ["python install", "pip install", "package install", "import install"], correctAnswer: 1, explanation: "`pip install package_name` installs from PyPI." }
    ],
    12: [ // Virtual environments
      { id: 1, question: "What creates a virtual environment?", options: ["python env", "python -m venv name", "pip venv", "virtualenv only"], correctAnswer: 1, explanation: "`python -m venv env_name` creates a virtual environment." },
      { id: 2, question: "Why use virtual environments?", options: ["Faster code", "Isolated dependencies per project", "Required by Python", "Smaller files"], correctAnswer: 1, explanation: "Virtual environments isolate project dependencies." },
      { id: 3, question: "How to activate on Windows?", options: ["source/bin/activate", "env\\Scripts\\activate", "activate env", ".\\activate"], correctAnswer: 1, explanation: "Windows: `env\\Scripts\\activate` activates the venv." },
      { id: 4, question: "What is requirements.txt?", options: ["Code file", "List of dependencies", "Documentation", "Config file"], correctAnswer: 1, explanation: "`requirements.txt` lists project dependencies for `pip install -r`." },
      { id: 5, question: "How to deactivate venv?", options: ["exit", "deactivate", "quit", "stop"], correctAnswer: 1, explanation: "Simply type `deactivate` to exit the virtual environment." }
    ],
    13: [ // OOP
      { id: 1, question: "How to define a class?", options: ["class Name:", "Class Name:", "def class Name:", "new class Name:"], correctAnswer: 0, explanation: "Use `class ClassName:` to define a class." },
      { id: 2, question: "What is `self`?", options: ["The class", "The current instance", "A keyword", "Parent class"], correctAnswer: 1, explanation: "`self` refers to the current instance of the class." },
      { id: 3, question: "What is `__init__`?", options: ["Destructor", "Constructor method", "Static method", "Private method"], correctAnswer: 1, explanation: "`__init__` is the constructor, called when creating an instance." },
      { id: 4, question: "How to inherit from a class?", options: ["class Child extends Parent:", "class Child(Parent):", "class Child inherits Parent:", "class Child : Parent:"], correctAnswer: 1, explanation: "Use `class Child(Parent):` for inheritance." },
      { id: 5, question: "What is a dunder method?", options: ["Error method", "Double underscore special method", "Debug method", "Undefined method"], correctAnswer: 1, explanation: "Dunder methods like `__str__`, `__len__` are special Python methods." }
    ],
    14: [ // Async basics
      { id: 1, question: "What keyword defines async function?", options: ["async", "await", "defer", "promise"], correctAnswer: 0, explanation: "Use `async def function_name():` for async functions." },
      { id: 2, question: "What does `await` do?", options: ["Creates coroutine", "Waits for coroutine result", "Runs sync code", "Catches errors"], correctAnswer: 1, explanation: "`await` pauses until the awaitable completes and returns result." },
      { id: 3, question: "What library runs async code?", options: ["async", "asyncio", "await", "threading"], correctAnswer: 1, explanation: "`asyncio` is Python's built-in async library." },
      { id: 4, question: "What is a coroutine?", options: ["Regular function", "Function that can pause/resume", "Thread", "Process"], correctAnswer: 1, explanation: "Coroutines are functions that can pause and resume execution." },
      { id: 5, question: "How to run async main?", options: ["main()", "asyncio.run(main())", "await main()", "run(main)"], correctAnswer: 1, explanation: "`asyncio.run(main())` runs the async main function." }
    ],
    15: [ // Testing
      { id: 1, question: "What is Python's built-in test framework?", options: ["pytest", "unittest", "jest", "mocha"], correctAnswer: 1, explanation: "`unittest` is Python's built-in testing framework." },
      { id: 2, question: "What does `assert` do?", options: ["Prints value", "Raises error if False", "Returns boolean", "Logs message"], correctAnswer: 1, explanation: "`assert condition` raises AssertionError if condition is False." },
      { id: 3, question: "What is a test fixture?", options: ["Bug fix", "Setup/teardown for tests", "Test result", "Coverage report"], correctAnswer: 1, explanation: "Fixtures set up preconditions and clean up after tests." },
      { id: 4, question: "What is mocking?", options: ["Making fun of code", "Replacing objects with fakes", "Copying tests", "Documentation"], correctAnswer: 1, explanation: "Mocking replaces real objects with controlled fake versions." },
      { id: 5, question: "How to run pytest?", options: ["python test", "pytest", "run tests", "test.py"], correctAnswer: 1, explanation: "Simply run `pytest` in terminal to discover and run tests." }
    ],
    16: [ // Deployment basics
      { id: 1, question: "What is WSGI?", options: ["Web framework", "Web Server Gateway Interface", "Windows Server", "Web Socket"], correctAnswer: 1, explanation: "WSGI is the standard interface between web servers and Python apps." },
      { id: 2, question: "What is Gunicorn?", options: ["Framework", "Python WSGI HTTP server", "Database", "IDE"], correctAnswer: 1, explanation: "Gunicorn is a production WSGI server for Python web apps." },
      { id: 3, question: "What is a Procfile?", options: ["Profile", "Heroku process definition", "Configuration", "Package file"], correctAnswer: 1, explanation: "Procfile tells Heroku how to run your application." },
      { id: 4, question: "What is Docker used for?", options: ["Documentation", "Containerizing applications", "Testing", "Debugging"], correctAnswer: 1, explanation: "Docker packages apps with dependencies in containers." },
      { id: 5, question: "What ENV vars are for?", options: ["Code variables", "Environment-specific config", "Error variables", "Export variables"], correctAnswer: 1, explanation: "Environment variables store configuration like secrets and settings." }
    ]
  },

  'html': {
    1: [ // Document structure
      { id: 1, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], correctAnswer: 0, explanation: "HTML = HyperText Markup Language for creating web pages." },
      { id: 2, question: "What is the root element of HTML?", options: ["<body>", "<head>", "<html>", "<document>"], correctAnswer: 2, explanation: "`<html>` is the root element containing all other elements." },
      { id: 3, question: "What goes in the <head>?", options: ["Main content", "Metadata, title, links", "Navigation", "Footer"], correctAnswer: 1, explanation: "<head> contains metadata, <title>, CSS links, and scripts." },
      { id: 4, question: "What declares HTML5?", options: ["<html5>", "<!DOCTYPE html>", "<doctype>", "<?html?>"], correctAnswer: 1, explanation: "`<!DOCTYPE html>` declares the document as HTML5." },
      { id: 5, question: "What is the <meta charset>?", options: ["CSS style", "Character encoding", "Meta description", "Viewport"], correctAnswer: 1, explanation: "`<meta charset='UTF-8'>` sets character encoding for the document." }
    ],
    2: [ // Text & media
      { id: 1, question: "Which is the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<h0>"], correctAnswer: 1, explanation: "`<h1>` is the largest heading, `<h6>` is the smallest." },
      { id: 2, question: "How to make text bold?", options: ["<bold>", "<b> or <strong>", "<thick>", "<heavy>"], correctAnswer: 1, explanation: "`<b>` for bold, `<strong>` for important (also bold)." },
      { id: 3, question: "How to insert an image?", options: ["<img src=''>", "<image href=''>", "<picture src=''>", "<img href=''>"], correctAnswer: 0, explanation: "`<img src='path' alt='description'>` inserts images." },
      { id: 4, question: "What is the alt attribute for?", options: ["Styling", "Alternative text for accessibility", "Alignment", "Animation"], correctAnswer: 1, explanation: "`alt` provides text description for screen readers and when image fails to load." },
      { id: 5, question: "How to embed video?", options: ["<video src=''>", "<movie>", "<media>", "<vid>"], correctAnswer: 0, explanation: "`<video src='path' controls>` embeds video with controls." }
    ],
    3: [ // Links & lists
      { id: 1, question: "How to create a hyperlink?", options: ["<link href=''>", "<a href=''>", "<url>", "<hyperlink>"], correctAnswer: 1, explanation: "`<a href='url'>text</a>` creates a hyperlink." },
      { id: 2, question: "What opens link in new tab?", options: ["target='_new'", "target='_blank'", "newtab='true'", "open='new'"], correctAnswer: 1, explanation: "`target='_blank'` opens the link in a new tab/window." },
      { id: 3, question: "What creates an unordered list?", options: ["<list>", "<ul>", "<ol>", "<unlist>"], correctAnswer: 1, explanation: "`<ul>` creates unordered (bulleted) list, `<ol>` ordered (numbered)." },
      { id: 4, question: "What is a list item tag?", options: ["<item>", "<li>", "<list-item>", "<litem>"], correctAnswer: 1, explanation: "`<li>` defines a list item inside `<ul>` or `<ol>`." },
      { id: 5, question: "How to create email link?", options: ["href='email:...'", "href='mailto:...'", "href='mail:...'", "email='...'"], correctAnswer: 1, explanation: "`href='mailto:email@example.com'` creates an email link." }
    ],
    4: [ // Forms
      { id: 1, question: "What tag creates a form?", options: ["<input>", "<form>", "<submit>", "<formdata>"], correctAnswer: 1, explanation: "`<form action='' method=''>` wraps form elements." },
      { id: 2, question: "What creates a text input?", options: ["<text>", "<textfield>", "<input type='text'>", "<textbox>"], correctAnswer: 2, explanation: "`<input type='text'>` creates a single-line text input." },
      { id: 3, question: "How to create a submit button?", options: ["<submit>", "<input type='submit'>", "<button>Submit</button>", "Both B and C"], correctAnswer: 3, explanation: "Both `<input type='submit'>` and `<button>` can submit forms." },
      { id: 4, question: "What creates a dropdown?", options: ["<dropdown>", "<select>", "<options>", "<list>"], correctAnswer: 1, explanation: "`<select>` with `<option>` elements creates a dropdown." },
      { id: 5, question: "What is the `name` attribute for?", options: ["Display name", "Identifies data when submitted", "CSS class", "JavaScript ID"], correctAnswer: 1, explanation: "`name` attribute identifies the form field in submitted data." }
    ],
    5: [ // Semantic HTML
      { id: 1, question: "What is the <header> tag for?", options: ["Page header/intro content", "Head section", "Title only", "Logo only"], correctAnswer: 0, explanation: "`<header>` contains introductory content or navigation." },
      { id: 2, question: "What is <nav> for?", options: ["Any links", "Navigation links section", "Navbar styling", "Anchor only"], correctAnswer: 1, explanation: "`<nav>` defines a section of navigation links." },
      { id: 3, question: "What is <main> for?", options: ["CSS main", "Main unique content", "Most important div", "First section"], correctAnswer: 1, explanation: "`<main>` contains the main content unique to the page." },
      { id: 4, question: "What is <article> for?", options: ["News only", "Self-contained content", "Blog posts only", "Comments"], correctAnswer: 1, explanation: "`<article>` is for self-contained, independently distributable content." },
      { id: 5, question: "What is <footer> for?", options: ["Copyright only", "Footer content for section/page", "Last div", "Bottom margin"], correctAnswer: 1, explanation: "`<footer>` contains footer information for its nearest ancestor." }
    ],
    6: [ // Accessibility
      { id: 1, question: "What is ARIA?", options: ["A font", "Accessible Rich Internet Applications", "Animation library", "API"], correctAnswer: 1, explanation: "ARIA provides attributes to enhance accessibility for screen readers." },
      { id: 2, question: "Why use semantic HTML?", options: ["SEO only", "Accessibility and SEO", "Styling", "Performance"], correctAnswer: 1, explanation: "Semantic HTML improves accessibility, SEO, and code readability." },
      { id: 3, question: "What is aria-label for?", options: ["Visible label", "Accessible name for element", "CSS label", "Form label"], correctAnswer: 1, explanation: "`aria-label` provides an accessible name for screen readers." },
      { id: 4, question: "What does <label> do for forms?", options: ["Styling", "Associates text with form controls", "Validation", "Placeholder"], correctAnswer: 1, explanation: "`<label>` associates descriptive text with form inputs for accessibility." },
      { id: 5, question: "What is tabindex for?", options: ["Tab styling", "Keyboard navigation order", "Tab count", "Table index"], correctAnswer: 1, explanation: "`tabindex` controls keyboard focus order for accessibility." }
    ]
  },

  'css': {
    1: [ // Level 1: Basics
      { id: 1, question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], correctAnswer: 1, explanation: "CSS stands for Cascading Style Sheets." },
      { id: 2, question: "Which HTML tag is used to define an internal style sheet?", options: ["<script>", "<css>", "<style>", "<link>"], correctAnswer: 2, explanation: "The <style> tag is used for internal CSS." },
      { id: 3, question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "{body:color=black;}", "body:color=black;", "body {color=black;}"], correctAnswer: 0, explanation: "CSS syntax uses 'selector {property: value;}'." },
      { id: 4, question: "How do you insert a comment in a CSS file?", options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "// this is a comment //"], correctAnswer: 1, explanation: "CSS comments are wrapped in /* */." },
      { id: 5, question: "Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "surface-color"], correctAnswer: 2, explanation: "background-color sets the background color of an element." }
    ],
    2: [ // Level 2: Selectors
      { id: 1, question: "How do you select an element with id 'demo'?", options: ["#demo", ".demo", "demo", "*demo"], correctAnswer: 0, explanation: "# selects by ID." },
      { id: 2, question: "How do you select elements with class 'test'?", options: ["#test", "test", ".test", "*test"], correctAnswer: 2, explanation: ". selects by class." },
      { id: 3, question: "How do you select all p elements inside a div?", options: ["div p", "div.p", "div + p", "div > p"], correctAnswer: 0, explanation: "The space is the descendant selector." },
      { id: 4, question: "What is the universal selector?", options: ["#", ".", "*", "&"], correctAnswer: 2, explanation: "* selects all elements." },
      { id: 5, question: "Which selector has the highest specificity?", options: ["Class selector", "ID selector", "Element selector", "Universal selector"], correctAnswer: 1, explanation: "ID selectors are more specific than classes or elements." }
    ],
    3: [ // Level 3: Box Model
      { id: 1, question: "What is the correct order of the box model from inside out?", options: ["Content, Border, Padding, Margin", "Content, Padding, Border, Margin", "Content, Margin, Padding, Border", "Border, Padding, Content, Margin"], correctAnswer: 1, explanation: "Box model: Content -> Padding -> Border -> Margin." },
      { id: 2, question: "Which property adds space inside an element?", options: ["margin", "border", "padding", "spacing"], correctAnswer: 2, explanation: "Padding is the space between content and border." },
      { id: 3, question: "Which property adds space outside an element?", options: ["padding", "margin", "border", "gap"], correctAnswer: 1, explanation: "Margin is the space outside the border." },
      { id: 4, question: "What does `box-sizing: border-box` do?", options: ["Adds border to box", "Includes padding and border in width/height", "Removes margin", "Makes box square"], correctAnswer: 1, explanation: "border-box makes width/height include padding and border." },
      { id: 5, question: "Which property controls visibility of content that exceeds dimensions?", options: ["visibility", "display", "overflow", "clip"], correctAnswer: 2, explanation: "overflow handles content larger than the box." }
    ],
    4: [ // Level 4: Layout
      { id: 1, question: "Which display value allows elements to sit side-by-side?", options: ["block", "inline", "none", "fixed"], correctAnswer: 1, explanation: "inline and inline-block allow elements on the same line." },
      { id: 2, question: "Which position value keeps an element relative to its normal position?", options: ["static", "absolute", "fixed", "relative"], correctAnswer: 3, explanation: "relative positions an element relative to its original spot." },
      { id: 3, question: "Which position value removes an element from the flow and positions it relative to its nearest positioned ancestor?", options: ["relative", "absolute", "fixed", "sticky"], correctAnswer: 1, explanation: "absolute positioning is relative to the nearest non-static ancestor." },
      { id: 4, question: "What does z-index do?", options: ["Zooms element", "Controls stack order along z-axis", "Sets width", "Adjusts transparency"], correctAnswer: 1, explanation: "z-index determines which element is on top of others." },
      { id: 5, question: "Which position keeps an element fixed even while scrolling?", options: ["relative", "absolute", "fixed", "static"], correctAnswer: 2, explanation: "fixed positioning is relative to the viewport." }
    ],
    5: [ // Level 5: Flexbox
      { id: 1, question: "How do you start using Flexbox?", options: ["display: box", "display: flex", "flex: 1", "position: flex"], correctAnswer: 1, explanation: "display: flex turns an element into a flex container." },
      { id: 2, question: "Which property aligns items along the main axis?", options: ["align-items", "justify-content", "flex-direction", "align-content"], correctAnswer: 1, explanation: "justify-content aligns along the main axis (usually horizontal)." },
      { id: 3, question: "How do you change the flex axis to vertical?", options: ["flex-axis: vertical", "flex-direction: column", "display: column", "align-items: middle"], correctAnswer: 1, explanation: "flex-direction: column stacks items vertically." },
      { id: 4, question: "Which property aligns items along the cross axis?", options: ["justify-content", "align-items", "flex-wrap", "flex-flow"], correctAnswer: 1, explanation: "align-items aligns items along the cross axis." },
      { id: 5, question: "What does `flex-grow: 1` do?", options: ["Makes item bigger", "Allows item to grow and fill available space", "Makes font larger", "Adds margin"], correctAnswer: 1, explanation: "flex-grow allows a flex item to expand to take up space." }
    ],
    6: [ // Level 6: Grid
      { id: 1, question: "Which property defines a 3-column grid?", options: ["grid-columns: 3", "grid-template-columns: 1fr 1fr 1fr", "display: columns-3", "grid-template-rows: 3"], correctAnswer: 1, explanation: "grid-template-columns defines the columns." },
      { id: 2, question: "What does the 'fr' unit stand for in CSS Grid?", options: ["Fixed Row", "Fractional unit", "Frame Rate", "Front"], correctAnswer: 1, explanation: "fr is a fractional unit representing a portion of available space." },
      { id: 3, question: "Which property defines the space between grid items?", options: ["margin", "padding", "gap", "spacing"], correctAnswer: 2, explanation: "gap (or grid-gap) sets space between rows/columns." },
      { id: 4, question: "How do you make an item span 2 columns?", options: ["grid-column: span 2", "grid-row: 2", "span: 2", "column-width: 2"], correctAnswer: 0, explanation: "grid-column handles item spanning across columns." },
      { id: 5, question: "Difference between auto-fit and auto-fill?", options: ["No difference", "auto-fit collapses empty tracks", "auto-fill is faster", "auto-fit is only for rows"], correctAnswer: 1, explanation: "auto-fit collapses tracks that have no items, auto-fill keeps them." }
    ],
    7: [ // Level 7: Responsive Design
      { id: 1, question: "What is a media query used for?", options: ["Playing videos", "Applying styles based on device characteristics like width", "Querying a database", "Formatting text"], correctAnswer: 1, explanation: "Media queries allow different styles for different screens." },
      { id: 2, question: "Which viewport meta tag is standard for mobile responsiveness?", options: ["width=device-width", "initial-scale=1", "Both of these", "user-scalable=no"], correctAnswer: 2, explanation: "Both width=device-width and initial-scale=1 are fundamental for responsive sites." },
      { id: 3, question: "What is the difference between em and rem?", options: ["em is bigger", "rem is relative to root font-size, em is relative to parent", "em is for mobile only", "rem is fixed size"], correctAnswer: 1, explanation: "rem (root em) is relative to the <html> font size." },
      { id: 4, question: "What does 'Mobile First' design mean?", options: ["Designing mobile apps first", "Starting styles for mobile and adding complexity with media queries for larger screens", "Only supporting mobile", "Buying a phone first"], correctAnswer: 1, explanation: "Mobile-first means basic styles are for mobile, media queries override for desktop." },
      { id: 5, question: "How to make an image responsive to its container?", options: ["width: 100%; height: auto;", "width: fixed;", "display: block;", "margin: auto;"], correctAnswer: 0, explanation: "width: 100% and height: auto ensuring images scale without distortion." }
    ],
    8: [ // Level 8: Advanced
      { id: 1, question: "How do you define a CSS variable?", options: ["$var: red;", "var-color: red;", "--my-color: red;", "@color: red;"], correctAnswer: 2, explanation: "CSS variables start with double dashes --." },
      { id: 2, question: "How do you use a CSS variable?", options: ["$var", "var(--my-color)", "get(--my-color)", "use(--my-color)"], correctAnswer: 1, explanation: "Use the var() function to access custom properties." },
      { id: 3, question: "What does `!important` do?", options: ["Makes text bold", "Overrides all other specificity rules", "Logs an error", "Highlights code"], correctAnswer: 1, explanation: "!important gives a property the highest priority." },
      { id: 4, question: "What is a pseudo-element?", options: ["A false element", "Selectors like ::before and ::after", "Hover effect", "Class name"], correctAnswer: 1, explanation: "Pseudo-elements allow styling specific parts of an element (like before it)." },
      { id: 5, question: "Which property is used for CSS animations?", options: ["transition", "animate", "animation", "motion"], correctAnswer: 2, explanation: "animation property combined with @keyframes creates animations." }
    ]
  },

  'react': {
    1: [ // Level 1: Fundamentals
      { id: 1, question: "What is React?", options: ["A programming language", "A JavaScript library for building UI", "A database", "A CSS framework"], correctAnswer: 1, explanation: "React is a JS library created by Facebook for user interfaces." },
      { id: 2, question: "What is JSX?", options: ["A CSS extension", "JavaScript XML - allows HTML in JS", "A new JS version", "A database query"], correctAnswer: 1, explanation: "JSX stands for JavaScript XML, allowing HTML-like syntax in JS." },
      { id: 3, question: "Who developed React?", options: ["Google", "Microsoft", "Facebook", "Twitter"], correctAnswer: 2, explanation: "React was developed and is maintained by Meta (Facebook)." },
      { id: 4, question: "What is a component in React?", options: ["A variable", "A reusable piece of UI", "A CSS class", "A database table"], correctAnswer: 1, explanation: "Components are the building blocks of React applications." },
      { id: 5, question: "What tool is commonly used to create a new React app?", options: ["npm run app", "create-react-app", "make-react", "react-start"], correctAnswer: 1, explanation: "create-react-app (CRA) is a popular tool (though Vite is now preferred)." }
    ],
    2: [ // Level 2: Components
      { id: 1, question: "What are props?", options: ["Private state", "Short for properties - data passed to components", "CSS properties", "Global variables"], correctAnswer: 1, explanation: "Props are used to pass data from parent to child components." },
      { id: 2, question: "Are props read-only?", options: ["Yes", "No", "Only in class components", "Only in functional components"], correctAnswer: 0, explanation: "Props are immutable; a component should never modify its own props." },
      { id: 3, question: "What are the two main types of components?", options: ["Static and Dynamic", "Hard and Soft", "Functional and Class", "Simple and Complex"], correctAnswer: 2, explanation: "React features both Class components and Functional components." },
      { id: 4, question: "How do you pass a prop named 'title' to a component?", options: ["<MyComp title='Hello' />", "<MyComp props='Hello' />", "<MyComp set:title='Hello' />", "MyComp('Hello')"], correctAnswer: 0, explanation: "Props are passed like HTML attributes." },
      { id: 5, question: "What is a 'Fragment'?", options: ["A broken component", "A way to group multiple elements without adding an extra DOM node", "A CSS trick", "A small piece of state"], correctAnswer: 1, explanation: "<React.Fragment> or <> allows returning multiple elements." }
    ],
    3: [ // Level 3: State
      { id: 1, question: "What is React State?", options: ["The government", "A way to store data that changes over time within a component", "A permanent database", "The document title"], correctAnswer: 1, explanation: "State is local data that triggers re-renders when updated." },
      { id: 2, question: "Which hook is used for state in functional components?", options: ["useEffect", "useContext", "useState", "useMemo"], correctAnswer: 2, explanation: "useState is the core hook for managing state." },
      { id: 3, question: "What does useState return?", options: ["A single value", "An array with current state and a setter function", "An object", "A promise"], correctAnswer: 1, explanation: "useState returns [state, setState]." },
      { id: 4, question: "Why should you never modify state directly (e.g., state.count = 1)?", options: ["It's illegal", "It won't trigger a re-render", "It breaks CSS", "It deletes the component"], correctAnswer: 1, explanation: "Direct mutation bypasses React's rendering cycle. Always use the setter." },
      { id: 5, question: "What is 'lifting state up'?", options: ["Moving state to a higher-level parent to share it between siblings", "Deleting state", "Uploading state to a server", "Making state public"], correctAnswer: 0, explanation: "Lifting state up is the standard way to share data between child components." }
    ],
    4: [ // Level 4: Events
      { id: 1, question: "How do you handle a click event in React?", options: ["onclick='...' ", "onClick={handleClick}", "handleClick()", "on-click={...}"], correctAnswer: 1, explanation: "React uses camelCase for events and passes a function reference." },
      { id: 2, question: "What is a 'Synthetic Event'?", options: ["A fake event", "React's cross-browser wrapper around native events", "An automated test", "A custom event"], correctAnswer: 1, explanation: "SyntheticEvent ensures events work identically across all browsers." },
      { id: 3, question: "How to prevent default form submission?", options: ["return false", "e.preventDefault()", "stop()", "break"], correctAnswer: 1, explanation: "e.preventDefault() stops the browser's default form logic." },
      { id: 4, question: "What is the best way to pass an argument to an event handler?", options: ["onClick={handler(arg)}", "onClick={() => handler(arg)}", "onClick=handler:arg", "It's not possible"], correctAnswer: 1, explanation: "Use an arrow function to delay execution until the click occurs." },
      { id: 5, question: "Does React event handler need 'this' binding in functional components?", options: ["Yes", "No", "Only if exported", "Only for clicks"], correctAnswer: 1, explanation: "Functional components don't have 'this'; arrow functions or regular functions work natively." }
    ],
    5: [ // Level 5: Hooks
      { id: 1, question: "What are React Hooks?", options: ["CSS selectors", "Functions that let you 'hook into' React state and lifecycle features", "Database triggers", "API endpoints"], correctAnswer: 1, explanation: "Hooks (introduced in 16.8) allow state in functional components." },
      { id: 2, question: "What is a 'Rule of Hooks'?", options: ["Only call hooks at the top level", "Only call hooks from React functions", "Both A and B", "Names must start with 'get'"], correctAnswer: 2, explanation: "Hooks must be top-level and in React functions (or custom hooks)." },
      { id: 3, question: "What does useEffect do?", options: ["Updates state", "Handles side effects like data fetching or DOM updates", "Creates components", "Styles elements"], correctAnswer: 1, explanation: "useEffect replaces lifecycles like componentDidMount/Update." },
      { id: 4, question: "What happens if useEffect has an empty dependency array []?", options: ["It runs every render", "It runs only once on mount", "It never runs", "It causes an error"], correctAnswer: 1, explanation: "An empty array means the effect doesn't depend on any values, so it runs once." },
      { id: 5, question: "What is useMemo used for?", options: ["Memoizing expensive calculations", "Storing data", "Managing forms", "Networking"], correctAnswer: 0, explanation: "useMemo caches a value to avoid expensive repeated calculations." }
    ],
    6: [ // Level 6: Rendering
      { id: 1, question: "What is 'Conditional Rendering'?", options: ["Rendering based on a boolean value or expression", "Rendering the same thing always", "Slow rendering", "Rendering in order"], correctAnswer: 0, explanation: "Using if/else or && to show different UI based on conditions." },
      { id: 2, question: "Why is the 'key' prop important when rendering lists?", options: ["For styling", "To help React identify which items have changed, added, or removed", "To count items", "It's not important"], correctAnswer: 1, explanation: "Keys provide stable identities for items in a list for performance." },
      { id: 3, question: "Can you use 0 as a key?", options: ["Yes, but it's not ideal for dynamic lists", "No", "Only for one item", "Only for strings"], correctAnswer: 0, explanation: "Array index can be a key but causes issues if the list is re-sorted or items are deleted." },
      { id: 4, question: "What is the Virtual DOM?", options: ["The real browser DOM", "A lightweight representation of the real DOM in memory", "A 3D model", "Server-side HTML"], correctAnswer: 1, explanation: "React updates the Virtual DOM first, then 'diffs' with the real DOM for efficiency." },
      { id: 5, question: "What is 'Prop Drilling'?", options: ["Using a drill", "Passing data through many levels of components to reach a deep child", "Optimizing code", "Injecting data"], correctAnswer: 1, explanation: "Prop drilling is when intermediary components pass props they don't use to their children." }
    ],
    7: [ // Level 7: Context
      { id: 1, question: "What is the Context API?", options: ["A way to style apps", "A way to share values between components without passing props manually", "A logging tool", "A database"], correctAnswer: 1, explanation: "Context solves the 'prop drilling' problem for global data." },
      { id: 2, question: "Which hook consumes a Context value?", options: ["useEffect", "useContext", "useState", "useProvider"], correctAnswer: 1, explanation: "useContext(MyContext) retrieves the current value." },
      { id: 3, question: "What wraps components to provide a value?", options: ["<Context.Value>", "<Context.Provider>", "<Context.Wrapper>", "<Context.Set>"], correctAnswer: 1, explanation: "The Provider component establishes the scope for context values." },
      { id: 4, question: "Is Context a replacement for state management libraries like Redux?", options: ["Yes, always", "No, but it covers many simple use cases", "Context is better than Redux", "Context is only for themes"], correctAnswer: 1, explanation: "Context is great for sharing data, but libraries like Redux/Zustand offer more for complex states." },
      { id: 5, question: "When should you NOT use Context?", options: ["For user data", "For frequent, high-performance updates that affect many components", "For theme colors", "For localization"], correctAnswer: 1, explanation: "Every update to Context triggers a re-render of all consumers, which can be slow for high-frequency data." }
    ],
    8: [ // Level 8: Performance
      { id: 1, question: "What does React.memo do?", options: ["Saves a note", "Prevents a component from re-rendering if its props hasn't changed", "Speeds up internet", "Compresses images"], correctAnswer: 1, explanation: "React.memo is a High Order Component for memoizing components." },
      { id: 2, question: "What is 'Code Splitting'?", options: ["Writing small files", "Breaking code into chunks to load only when needed", "Deleting unused code", "Sharing code"], correctAnswer: 1, explanation: "Code splitting reduces initial bundle size by lazy-loading modules." },
      { id: 3, question: "What hook helps memoize callback functions?", options: ["useMemo", "useCallback", "useEffect", "useRef"], correctAnswer: 1, explanation: "useCallback prevents re-creating functions on every render." },
      { id: 4, question: "What is 'Lazy Loading' in React?", options: ["Slow development", "Loading components only when required (e.g., in a route)", "Skipping tests", "Using less CPU"], correctAnswer: 1, explanation: "React.lazy allows rendering dynamic imports as regular components." },
      { id: 5, question: "What is the purpose of useRef?", options: ["To re-render components", "To persist values between renders without triggering re-renders", "To fetch data", "To style components"], correctAnswer: 1, explanation: "useRef stores mutable values or DOM references without causing updates." }
    ],
    9: [ // Level 9: Architecture
      { id: 1, question: "What is a 'Custom Hook'?", options: ["A hook made by Meta", "A function starting with 'use' that calls other hooks", "A bug in React", "A CSS class"], correctAnswer: 1, explanation: "Custom hooks allow extracting and reusing logic across components." },
      { id: 2, question: "What is the difference between Container and Presentational components?", options: ["No difference", "Container handles logic, Presentational handles UI", "Container is for CSS", "Presentational is older"], correctAnswer: 1, explanation: "This pattern separates data fetching/logic from visual layout." },
      { id: 3, question: "What is 'Higher Order Component' (HOC)?", options: ["A tall component", "A function that takes a component and returns a new component", "A main component", "A component with state"], correctAnswer: 1, explanation: "HOCs are patterns for reusing component logic." },
      { id: 4, question: "What is a 'Portal'?", options: ["A game", "Rendering a child into a different DOM node outside the parent tree", "A navigation link", "A secure API"], correctAnswer: 1, explanation: "Portals are useful for modals, tooltips, and overlays." },
      { id: 5, question: "What is 'Strict Mode'?", options: ["A fast mode", "A tool for highlighting potential problems in an application", "A private mode", "A paid feature"], correctAnswer: 1, explanation: "<React.StrictMode> helps developers find side-effect issues and deprecated APIs." }
    ]
  },

  'nodejs': {
    1: [ // Level 1: Basics
      { id: 1, question: "What is Node.js?", options: ["A programming language", "A JavaScript runtime built on Chrome's V8 engine", "A browser", "A database engine"], correctAnswer: 1, explanation: "Node.js allows JS to run on the server, outside the browser." },
      { id: 2, question: "Is Node.js single-threaded?", options: ["Yes", "No", "Only on Windows", "Only for networking"], correctAnswer: 0, explanation: "Node.js uses a single-threaded event loop architecture." },
      { id: 3, question: "What is npm?", options: ["Node Personal Manager", "Node Package Manager", "New Process Manager", "Node Programming Method"], correctAnswer: 1, explanation: "npm is the default package manager and registry for Node.js." },
      { id: 4, question: "What does package.json do?", options: ["Stores code", "Stores project metadata and dependency list", "Styles the app", "Compiles JS"], correctAnswer: 1, explanation: "package.json defines project settings, scripts, and libraries." },
      { id: 5, question: "Who created Node.js?", options: ["Brendan Eich", "Ryan Dahl", "Guido van Rossum", "James Gosling"], correctAnswer: 1, explanation: "Ryan Dahl created Node.js in 2009." }
    ],
    2: [ // Level 2: Modules
      { id: 1, question: "What is 'CommonJS'?", options: ["A news site", "The module system used in Node.js (require/module.exports)", "A standard for browsers", "A library"], correctAnswer: 1, explanation: "Node's native module system is CommonJS." },
      { id: 2, question: "How to import a module in Node (CommonJS)?", options: ["import x from 'y'", "require('y')", "include('y')", "using y"], correctAnswer: 1, explanation: "require() is the function for importing modules." },
      { id: 3, question: "What does `module.exports` do?", options: ["Deletes a module", "Makes a module's content accessible to other files", "Imports a file", "Logs data"], correctAnswer: 1, explanation: "module.exports exposes pieces of code for the require() function." },
      { id: 4, question: "Which module is used for file system operations?", options: ["file", "fs", "system", "io"], correctAnswer: 1, explanation: "The 'fs' module provides APIs for interacting with files." },
      { id: 5, question: "Which module extracts info from file paths?", options: ["url", "os", "path", "route"], correctAnswer: 2, explanation: "The 'path' module provides utilities for working with file and directory paths." }
    ],
    3: [ // Level 3: Event Loop
      { id: 1, question: "What is the 'Event Loop'?", options: ["A loop in a game", "The mechanism that allows Node to perform non-blocking I/O operations", "A continuous for loop", "A design pattern"], correctAnswer: 1, explanation: "The event loop is the secret behind Node.js scalability and performance." },
      { id: 2, question: "What does 'Non-blocking I/O' mean?", options: ["Operations cannot be blocked", "Code keeps running while I/O operations happen in the background", "I/O is very slow", "Only one I/O at a time"], correctAnswer: 1, explanation: "Node won't wait for a file read or network request to finish before moving to the next line." },
      { id: 3, question: "What are 'Callbacks'?", options: ["Phone calls", "Functions passed as arguments to be executed after another function finishes", "Recursive calls", "Errors"], correctAnswer: 1, explanation: "Callbacks were the primary way to handle asynchronous code in early Node versions." },
      { id: 4, question: "What is 'Callback Hell'?", options: ["A slow server", "Many nested callbacks that make code hard to read", "An infinite loop", "A memory leak"], correctAnswer: 1, explanation: "Deeply nested code caused by multiple async operations is called callback hell." },
      { id: 5, question: "How to simplify complex async code in modern Node?", options: ["More callbacks", "Async/Await with Promises", "Threads", "Global variables"], correctAnswer: 1, explanation: "Async/Await provides a synchronous look to asynchronous code." }
    ],
    4: [ // Level 4: HTTP
      { id: 1, question: "Which built-in module creates a web server?", options: ["server", "www", "http", "socket"], correctAnswer: 2, explanation: "The 'http' module can create a server with .createServer()." },
      { id: 2, question: "What is the default port for HTTP?", options: ["21", "22", "80", "443"], correctAnswer: 2, explanation: "HTTP uses port 80, mentre HTTPS uses 443." },
      { id: 3, question: "What does HTTP status code 404 mean?", options: ["Success", "Internal Server Error", "Not Found", "Unauthorized"], correctAnswer: 2, explanation: "404 indicates the requested resource was not found on the server." },
      { id: 4, question: "What is the 'Request Body'?", options: ["The user's computer", "Data sent from the client to the server (e.g., in a POST request)", "The server's response", "The URL"], correctAnswer: 1, explanation: "The body contains the actual data being sent (JSON, form data, etc.)." },
      { id: 5, question: "What are 'HTTP Headers'?", options: ["Page titles", "Metadata sent with requests and responses (e.g., Content-Type)", "The top of the screen", "The server's name"], correctAnswer: 1, explanation: "Headers provide context about the request/response." }
    ],
    5: [ // Level 5: Express
      { id: 1, question: "What is Express.js?", options: ["A fast Node version", "A minimal and flexible web application framework for Node.js", "A database wrapper", "A testing tool"], correctAnswer: 1, explanation: "Express is the most popular framework for building Node servers." },
      { id: 2, question: "What is 'Middleware' in Express?", options: ["Software between two computers", "Functions that have access to request, response, and next function", "A database", "CSS for servers"], correctAnswer: 1, explanation: "Middleware processes requests before they reach the final handler." },
      { id: 3, question: "What does `app.use()` do?", options: ["Starts the app", "Registers middleware", "Logs users in", "Sends a file"], correctAnswer: 1, explanation: "app.use() is the method for installing middleware globally or on specific routes." },
      { id: 4, question: "What are 'Route Parameters' (e.g., /user/:id)?", options: ["Dynamic parts of a URL captured by Express", "Static URLs", "Query strings", "Headers"], correctAnswer: 0, explanation: "Parameters allow creating dynamic endpoints like `/product/123`." },
      { id: 5, question: "How to send a JSON response in Express?", options: ["res.send(json)", "res.json(data)", "res.write(data)", "res.body = data"], correctAnswer: 1, explanation: "res.json() automatically sets the Content-Type and stringifies the data." }
    ],
    6: [ // Level 6: APIs
      { id: 1, question: "What is a 'REST API'?", options: ["An API that rests", "An architectural style for designing networked applications", "A specific library", "A database type"], correctAnswer: 1, explanation: "REST (Representational State Transfer) uses standard HTTP methods." },
      { id: 2, question: "What does 'CRUD' stand for?", options: ["Create, Read, Update, Delete", "Clean, Run, Use, Deploy", "Call, Receive, Use, Data", "Code, Review, Update, Debug"], correctAnswer: 0, explanation: "CRUD represents the four basic operations for persistent storage." },
      { id: 3, question: "What is JSON?", options: ["A JS function", "JavaScript Object Notation - a lightweight data-interchange format", "A type of server", "A CSS preprocessor"], correctAnswer: 1, explanation: "JSON is the standard format for modern API communication." },
      { id: 4, question: "What is 'CORS'?", options: ["A type of error", "Cross-Origin Resource Sharing", "A database engine", "A routing method"], correctAnswer: 1, explanation: "CORS is a security feature that controls which domains can access your API." },
      { id: 5, question: "How do you handle query strings in Express (e.g., ?page=1)?", options: ["req.body", "req.params", "req.query", "req.url"], correctAnswer: 2, explanation: "req.query contains the key-value pairs from the URL search string." }
    ],
    7: [ // Level 7: Auth
      { id: 1, question: "What is 'Authentication'?", options: ["Verifying who a user is", "Verifying what a user can do", "Verifying the server's speed", "Verifying database integrity"], correctAnswer: 0, explanation: "Authentication is about identity (Login)." },
      { id: 2, question: "What is 'Authorization'?", options: ["Verifying who a user is", "Verifying what a user can do (permissions)", "Verifying the user's name", "Verifying email"], correctAnswer: 1, explanation: "Authorization is about permissions (Access Control)." },
      { id: 3, question: "What is a 'JWT' (JSON Web Token)?", options: ["A database record", "A secure way to transmit information between parties as a JSON object", "A type of password", "A login form"], correctAnswer: 1, explanation: "JWTs are commonly used for stateless session management." },
      { id: 4, question: "What is 'Password Hashing'?", options: ["Converting password to a fixed-length string of characters", "Hiding the password", "Sending password via email", "Encrypting it with a key"], correctAnswer: 0, explanation: "Hashing is a one-way process (using bcrypt) to store passwords securely." },
      { id: 5, question: "What is a 'Salt' in hashing?", options: ["A seasoning", "A random string added to passwords before hashing to prevent rainbow table attacks", "A key for encryption", "A type of error"], correctAnswer: 1, explanation: "Salting ensures identical passwords have unique hashes." }
    ],
    8: [ // Level 8: Deployment
      { id: 1, question: "What are 'Environment Variables'?", options: ["Code variables", "Config values stored outside the code (e.g., DB URLs, API keys)", "Variables for the user", "Local variables"], correctAnswer: 1, explanation: "ENV variables keep secrets and configurations out of version control." },
      { id: 2, question: "What is PM2?", options: ["A database", "A process manager for Node.js", "A programming language", "A text editor"], correctAnswer: 1, explanation: "PM2 keeps your application alive in a production environment." },
      { id: 3, question: "How to access environment variables in Node?", options: ["env.get()", "process.env.VARNAME", "getVar(VARNAME)", "system.env"], correctAnswer: 1, explanation: "The process.env object holds all environment variables." },
      { id: 4, question: "What is a 'Reverse Proxy' (e.g., Nginx)?", options: ["A slow server", "A server that sits in front of your Node app to handle requests and security", "A type of database", "A code library"], correctAnswer: 1, explanation: "Nginx or Apache act as gatekeepers for Node/Express apps." },
      { id: 5, question: "What does 'Scaling' mean?", options: ["Making code small", "Increasing capacity to handle more users", "Rotating images", "Measuring files"], correctAnswer: 1, explanation: "Scaling can be vertical (more power) or horizontal (more servers)." }
    ]
  },

  'sql': {
    1: [ // Level 1: Basics
      { id: 1, question: "What does SQL stand for?", options: ["Structured Query Language", "Strong Question Language", "Structured Question Layout", "Standard Query List"], correctAnswer: 0, explanation: "SQL is Structured Query Language." },
      { id: 2, question: "Which command shows all data from a table named 'Users'?", options: ["GET * FROM Users", "SELECT * FROM Users", "SHOW Users", "LIST Users"], correctAnswer: 1, explanation: "SELECT * FROM table_name is the standard syntax." },
      { id: 3, question: "What is a 'Database'?", options: ["A single file", "An organized collection of structured data", "A programming language", "A web server"], correctAnswer: 1, explanation: "A database stores data efficiently for retrieval." },
      { id: 4, question: "What is a 'Table'?", options: ["A list of numbers", "A collection of data in rows and columns", "A furniture item", "A type of query"], correctAnswer: 1, explanation: "Relational databases store data in tables." },
      { id: 5, question: "Which SQL clause is used to extract only those records that fulfill a specified condition?", options: ["WHERE", "SELECT", "ORDER BY", "FROM"], correctAnswer: 0, explanation: "WHERE filters results." }
    ],
    2: [ // Level 2: CRUD
      { id: 1, question: "Which command is used to add new data to a database?", options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"], correctAnswer: 1, explanation: "INSERT INTO table_name VALUES (...) adds rows." },
      { id: 2, question: "Which command is used to modify existing data?", options: ["CHANGE", "MODIFY", "UPDATE", "SET"], correctAnswer: 2, explanation: "UPDATE table_name SET col=val WHERE condition." },
      { id: 3, question: "Which command removes data from a table?", options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"], correctAnswer: 1, explanation: "DELETE FROM removes rows. DROP removes the table itself." },
      { id: 4, question: "What is the difference between DELETE and TRUNCATE?", options: ["No difference", "TRUNCATE is faster and removes all rows without logging individual deletions", "DELETE removes the table", "TRUNCATE only works for numbers"], correctAnswer: 1, explanation: "TRUNCATE reset identity and is faster than DELETE for large tables." },
      { id: 5, question: "How do you select only the 'FirstName' column from 'Persons' table?", options: ["SELECT FirstName FROM Persons", "EXTRACT FirstName", "GET FirstName Persons", "SELECT FirstName"], correctAnswer: 0, explanation: "Specify column names after SELECT." }
    ],
    3: [ // Level 3: Filtering
      { id: 1, question: "How do you sort results in SQL?", options: ["SORT BY", "ORDER BY", "ARRANGE", "GROUP BY"], correctAnswer: 1, explanation: "ORDER BY col_name (ASC/DESC) sorts results." },
      { id: 2, question: "What is the default sort order of ORDER BY?", options: ["Descending", "Ascending", "Random", "Numerical"], correctAnswer: 1, explanation: "Ascending (lowest to highest) is the default." },
      { id: 3, question: "Which keyword returns only different values?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"], correctAnswer: 1, explanation: "SELECT DISTINCT col_name returns unique values only." },
      { id: 4, question: "How to select records with 'Price' between 10 and 20?", options: ["BETWEEN 10 AND 20", "IN (10, 20)", "RANGE 10-20", "LIMIT 10, 20"], correctAnswer: 0, explanation: "BETWEEN is inclusive for ranges." },
      { id: 5, question: "Which operator matches a pattern?", options: ["MATCH", "LIKE", "SEARCH", "REGEXP"], correctAnswer: 1, explanation: "LIKE with wildcards (% for multiple char, _ for single) matches patterns." }
    ],
    4: [ // Level 4: Joins
      { id: 1, question: "What is a JOIN?", options: ["Connecting to server", "Combining rows from two or more tables based on a related column", "Merging two databases", "Deleting duplicates"], correctAnswer: 1, explanation: "JOINS relate data across tables." },
      { id: 2, question: "Which join returns all records when there is a match in either table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correctAnswer: 3, explanation: "FULL OUTER JOIN includes all rows from both tables." },
      { id: 3, question: "Which join returns only matching records from both tables?", options: ["INNER JOIN", "CROSS JOIN", "NATURAL JOIN", "LEFT JOIN"], correctAnswer: 0, explanation: "INNER JOIN is the most common, returning common records." },
      { id: 4, question: "What is the 'ON' keyword for?", options: ["Turning on the database", "Specifying the join condition (e.g., table1.id = table2.id)", "Starting a query", "Setting a limit"], correctAnswer: 1, explanation: "ON defines how tables are matched." },
      { id: 5, question: "What does a LEFT JOIN do?", options: ["Merges columns", "Returns all rows from left table + matches from right", "Only returns left table", "Deletes right table"], correctAnswer: 1, explanation: "LEFT JOIN ensures every row in the 'left' table appears, even if no match exists on the right." }
    ],
    5: [ // Level 5: Aggregation
      { id: 1, question: "Which function returns the number of rows?", options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"], correctAnswer: 1, explanation: "COUNT(*) counts all rows." },
      { id: 2, question: "Which clause groups rows that have the same values?", options: ["GROUP BY", "ORDER BY", "HAVING", "CLUSTER"], correctAnswer: 0, explanation: "GROUP BY is used with aggregate functions like COUNT/SUM." },
      { id: 3, question: "How to filter groups after GROUP BY?", options: ["WHERE", "HAVING", "GROUP WHERE", "FILTER"], correctAnswer: 1, explanation: "HAVING is like WHERE but for groups." },
      { id: 4, question: "Which function calculates the average?", options: ["MEAN()", "AVG()", "MID()", "CENTRAL()"], correctAnswer: 1, explanation: "AVG(column) ignores NULL values." },
      { id: 5, question: "Which function returns the highest value?", options: ["TOP()", "HIGH()", "MAX()", "UPPER()"], correctAnswer: 2, explanation: "MAX(column) finds the largest value." }
    ],
    6: [ // Level 6: Constraints
      { id: 1, question: "What is a 'PRIMARY KEY'?", options: ["The first column", "A unique identifier for each row", "An encryption key", "The table name"], correctAnswer: 1, explanation: "Primary keys must be unique and NOT NULL." },
      { id: 2, question: "What is a 'FOREIGN KEY'?", options: ["A key from another country", "A field in one table that refers to the PRIMARY KEY in another", "A backup key", "A guest key"], correctAnswer: 1, explanation: "Foreign keys enforce referential integrity between tables." },
      { id: 3, question: "What does 'NOT NULL' ensure?", options: ["Value must be 0", "Column cannot have a NULL value", "Column can be empty", "Column must be string"], correctAnswer: 1, explanation: "NOT NULL forces a column to always have a value." },
      { id: 4, question: "What is the 'UNIQUE' constraint?", options: ["Ensures all values in a column are different", "Makes table unique", "Only for IDs", "Ensures values are odd"], correctAnswer: 0, explanation: "UNIQUE prevents duplicate entries in a column." },
      { id: 5, question: "What does 'DEFAULT' constraint do?", options: ["Restores settings", "Sets a fallback value if no value is specified", "Makes column optional", "Deletes the row"], correctAnswer: 1, explanation: "DEFAULT provides a value when one isn't provided during INSERT." }
    ],
    7: [ // Level 7: Transactions
      { id: 1, question: "What is a 'Transaction'?", options: ["Paying for a database", "A sequence of operations performed as a single logical unit", "Sending data over internet", "A type of join"], correctAnswer: 1, explanation: "Transactions ensure data consistency (All-or-Nothing)." },
      { id: 2, question: "What does 'COMMIT' do?", options: ["Saves changes permanently", "Undo changes", "Logs an error", "Starts a query"], correctAnswer: 0, explanation: "COMMIT finalizes the transaction." },
      { id: 3, question: "What does 'ROLLBACK' do?", options: ["Saves changes", "Undo the transaction and return to previous state", "Restarts the server", "Deletes the logs"], correctAnswer: 1, explanation: "ROLLBACK reverts changes if an error occurs." },
      { id: 4, question: "What does 'ACID' stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Cleanliness, Integrity, Data", "Auto, Command, Index, Delete", "Always Correct In Database"], correctAnswer: 0, explanation: "ACID properties guarantee reliable database transactions." },
      { id: 5, question: "What is 'Isolation Level'?", options: ["How many users can log in", "How transaction integrity is visible to other users/transactions", "Firewall settings", "Number of tables"], correctAnswer: 1, explanation: "Isolation levels (Read Committed, Serializable, etc.) control concurrency side effects." }
    ]
  },

  'java': {
    1: [ // Level 1: JVM & Syntax
      { id: 1, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Model", "Just View Memory"], correctAnswer: 0, explanation: "JVM executes Java bytecode." },
      { id: 2, question: "Is Java a Platform Independent language?", options: ["No", "Yes", "Only on Windows", "Only through browsers"], correctAnswer: 1, explanation: "Java is 'Write Once, Run Anywhere' thanks to bytecode and JVM." },
      { id: 3, question: "Which is the main entry point of a Java program?", options: ["start()", "main()", "init()", "Run()"], correctAnswer: 1, explanation: "public static void main(String[] args) is the entry point." },
      { id: 4, question: "What is the filename extension for Java source code?", options: [".class", ".java", ".js", ".jar"], correctAnswer: 1, explanation: ".java is for source, .class is for compiled bytecode." },
      { id: 5, question: "What is the purpose of the 'javac' command?", options: ["Run the program", "Compile Java source code into bytecode", "Install Java", "Debug Java"], correctAnswer: 1, explanation: "javac is the Java Compiler." }
    ],
    2: [ // Level 2: Variables & Types
      { id: 1, question: "Which is a primitive data type in Java?", options: ["String", "Integer", "int", "Array"], correctAnswer: 2, explanation: "Primitive types like int, char, boolean start with lowercase. Object wrappers like String start with uppercase." },
      { id: 3, question: "Size of 'int' in Java?", options: ["8-bit", "16-bit", "32-bit", "64-bit"], correctAnswer: 2, explanation: "int is a 32-bit signed two's complement integer." },
      { id: 2, question: "How to declare a constant in Java?", options: ["const", "final", "static", "stable"], correctAnswer: 1, explanation: "final variables cannot be changed once assigned." },
      { id: 4, question: "What is 'type casting'?", options: ["Converting one data type to another", "Deleting a variable", "Printing a variable", "Naming a variable"], correctAnswer: 0, explanation: "Casting can be implicit (widening) or explicit (narrowing)." },
      { id: 5, question: "Value of uninitialized 'int' instance variable?", options: ["null", "0", "undefined", "garbage value"], correctAnswer: 1, explanation: "Instance numeric variables default to 0. Local variables must be initialized." }
    ],
    3: [ // Level 3: Control Flow
      { id: 1, question: "Which statement is used to exit a loop?", options: ["continue", "break", "return", "exit"], correctAnswer: 1, explanation: "break exits the innermost loop." },
      { id: 2, question: "What does 'continue' do?", options: ["Stop program", "Skip to next iteration of loop", "Exit loop", "Repeat loop from start"], correctAnswer: 1, explanation: "continue skips the rest of the current loop body." },
      { id: 3, question: "Can a switch statement use Strings?", options: ["No", "Yes (since Java 7)", "Only in Java 17", "Only for enums"], correctAnswer: 1, explanation: "Java 7 added support for String in switch." },
      { id: 4, question: "Syntax for a for-each loop in Java?", options: ["for (int x in list)", "foreach (x : list)", "for (int x : list)", "for (x to list)"], correctAnswer: 2, explanation: "The enhanced for loop uses a colon." },
      { id: 5, question: "Difference between while and do-while?", options: ["No difference", "do-while runs at least once", "while runs at least once", "do-while is faster"], correctAnswer: 1, explanation: "do-while checks condition after execution." }
    ],
    4: [ // Level 4: Methods
      { id: 1, question: "How to call a static method?", options: ["Using 'new' keyword", "Using the Class name", "Using an instance", "You can't call it"], correctAnswer: 1, explanation: "Static methods belong to the class, not instances." },
      { id: 2, question: "What does 'void' mean?", options: ["Function returns null", "Function returns nothing", "Function is empty", "Function is private"], correctAnswer: 1, explanation: "void indicates no return value." },
      { id: 3, question: "What is 'Method Overloading'?", options: ["Methods with same name but different parameters", "Method with too much code", "Calling a method repeatedly", "Overriding parent method"], correctAnswer: 0, explanation: "Overloading allows multiple methods with same name if signatures differ." },
      { id: 4, question: "What is a 'Return Type'?", options: ["The name of method", "The type of value the method sends back", "The speed of method", "Argument type"], correctAnswer: 1, explanation: "Methods must declare what type they return." },
      { id: 5, question: "What are 'Parameters' in a method?", options: ["Return values", "Variables passed into the method", "Static variables", "Method names"], correctAnswer: 1, explanation: "Parameters act as placeholders for incoming data." }
    ],
    5: [ // Level 5: Arrays
      { id: 1, question: "How to get length of array 'myArr'?", options: ["myArr.length()", "myArr.size", "myArr.length", "len(myArr)"], correctAnswer: 2, explanation: "In Java, length is a property of arrays, not a method." },
      { id: 2, question: "Index of the first element?", options: ["-1", "0", "1", "First"], correctAnswer: 1, explanation: "Java arrays are 0-indexed." },
      { id: 3, question: "What happens if you access index outside array size?", options: ["IndexOutOfBoundsException", "NegativeArraySizeException", "NullPointerException", "Returns null"], correctAnswer: 0, explanation: "ArrayIndexOutOfBoundsException is thrown at runtime." },
      { id: 4, question: "How to declare a 2D array?", options: ["int[] array", "int[][] array", "int[2] array", "Array<Array> array"], correctAnswer: 1, explanation: "[][] denotes 2 dimensions." },
      { id: 5, question: "Are Java arrays fixed size?", options: ["No, they grow", "Yes, size is set at creation", "Only for strings", "Only in old versions"], correctAnswer: 1, explanation: "Standard arrays have fixed length. Use ArrayList for dynamic size." }
    ],
    6: [ // Level 6: OOP Principles
      { id: 1, question: "What are the four pillars of OOP?", options: ["Inheritance, Encapsulation, Polymorphism, Abstraction", "Coding, Testing, Debugging, Deploying", "Classes, Objects, Methods, Variables", "HTML, CSS, JS, SQL"], correctAnswer: 0, explanation: "These are the fundamental principles of Object-Oriented Programming." },
      { id: 2, question: "What is 'Inheritance'?", options: ["Hiding data", "A mechanism where one class acquires properties of another", "Creating objects", "Running multiple threads"], correctAnswer: 1, explanation: "Keyword 'extends' is used for inheritance." },
      { id: 3, question: "What is 'Encapsulation'?", options: ["Making code run fast", "Bundling data and methods into a single unit and restricting access", "Inheriting from parents", "Using static methods"], correctAnswer: 1, explanation: "Encapsulation uses private variables and public getters/setters." },
      { id: 4, question: "Difference between Abstract Class and Interface?", options: ["No difference", "Abstract class can have state/constructors; Interface is a contract (usually stateless)", "Interface is for UI", "Abstract class is faster"], correctAnswer: 1, explanation: "Interfaces are more lean; Abstract classes are better for shared base logic." },
      { id: 5, question: "What is 'Polymorphism'?", options: ["Many shapes/forms - same interface, different implementations", "Hiding code", "One class only", "Deleting objects"], correctAnswer: 0, explanation: "Method overriding is a form of runtime polymorphism." }
    ],
    7: [ // Level 7: Collections
      { id: 1, question: "Which interface does 'ArrayList' implement?", options: ["Set", "Map", "List", "Queue"], correctAnswer: 2, explanation: "ArrayList is a dynamic array implementation of List." },
      { id: 2, question: "Difference between List and Set?", options: ["No difference", "List allows duplicates, Set is unique", "Set is faster", "List is for strings only"], correctAnswer: 1, explanation: "Set prevents duplicate elements." },
      { id: 3, question: "Which collection uses key-value pairs?", options: ["ArrayList", "HashSet", "HashMap", "Vector"], correctAnswer: 2, explanation: "HashMap stores mappings of keys to values." },
      { id: 4, question: "What is 'Iterator'?", options: ["A loop", "An object used to traverse collections", "A search algorithm", "A types of array"], correctAnswer: 1, explanation: "Iterators allow removing elements while traversing safetly." },
      { id: 5, question: "Which collection is synchronized (Thread-safe)?", options: ["ArrayList", "Vector", "HashMap", "HashSet"], correctAnswer: 1, explanation: "Vector is synchronized; ArrayList is not (but has higher performance in single thread)." }
    ],
    8: [ // Level 8: Exception Handling
      { id: 1, question: "Which keyword is used to handle exceptions?", options: ["catch", "try", "Both A and B", "guard"], correctAnswer: 2, explanation: "We use try blocks with one or more catch blocks." },
      { id: 2, question: "When does the 'finally' block execute?", options: ["Only if error occurs", "Only if no error", "Always, regardless of error", "Never"], correctAnswer: 2, explanation: "finally is used for cleanup (closing files/db)." },
      { id: 3, question: "Difference between Error and Exception?", options: ["Same thing", "Errors are unrecoverable system issues (e.g. OutOfMemory); Exceptions are catchable app issues", "Exception is worse", "Error is for syntax"], correctAnswer: 1, explanation: "Apps should generally catch Exceptions, not Errors." },
      { id: 4, question: "What is a 'Checked Exception'?", options: ["Verified at runtime", "Verified at compile time (must be caught/declared)", "Syntax error", "Arithmetic error"], correctAnswer: 1, explanation: "IOException is a common checked exception." },
      { id: 5, question: "Which keyword is used to explicitly throw an exception?", options: ["throws", "throw", "error", "catch"], correctAnswer: 1, explanation: "Use 'throw new MyException()' inside a method." }
    ],
    9: [ // Level 9: File I/O
      { id: 1, question: "Which package is used for basic file handling?", options: ["java.util", "java.io", "java.lang", "java.net"], correctAnswer: 1, explanation: "java.io contains File, Reader, Writer, etc." },
      { id: 2, question: "What is 'Stream' in I/O?", options: ["A river", "A sequence of data flowing from source to destination", "A netflix feature", "A loop"], correctAnswer: 1, explanation: "Byte streams and Character streams are used for reading/writing." },
      { id: 3, question: "Which class is used to read text from a character-input stream?", options: ["FileInputStream", "BufferedReader", "Writer", "Scan"], correctAnswer: 1, explanation: "BufferedReader is efficient for reading text." },
      { id: 4, question: "What is 'Serialization'?", options: ["Ordering data", "Converting object state into a byte stream", "Naming files", "Deleting objects"], correctAnswer: 1, explanation: "Serialization allows saving objects or sending them over network." },
      { id: 5, question: "Interface required for Serialization?", options: ["Serializable", "Cloneable", "Externalizable", "Storable"], correctAnswer: 0, explanation: "A Marker Interface with no methods." }
    ],
    10: [ // Level 10: Multithreading
      { id: 1, question: "Two ways to create a thread in Java?", options: ["Extending Thread class or implementing Runnable interface", "Using loops", "Calling start()", "Importing net package"], correctAnswer: 0, explanation: "Runnable is generally preferred over extending Thread." },
      { id: 2, question: "Which method starts thread execution?", options: ["run()", "start()", "init()", "execute()"], correctAnswer: 1, explanation: "Calling start() creates a new thread and calls run()." },
      { id: 3, question: "What is 'Synchronization'?", options: ["Making code fast", "Controlling access of multiple threads to shared resources", "Naming threads", "Stopping threads"], correctAnswer: 1, explanation: "The 'synchronized' keyword prevents thread interference and memory consistency errors." },
      { id: 4, question: "What is 'Deadlock'?", options: ["Fast thread", "Situation where two or more threads are blocked forever, waiting for each other", "Thread completion", "Error in logs"], correctAnswer: 1, explanation: "Deadlock is a common concurrency bug." },
      { id: 5, question: "What does 'volatile' keyword do?", options: ["Deletes variable", "Ensures variable value is always read from main memory, not thread cache", "Makes variable constant", "Increases speed"], correctAnswer: 1, explanation: "volatile ensures visibility of changes across threads." }
    ],
    11: [ // Level 11: Streams & Lambdas
      { id: 1, question: "What is a 'Lambda Expression'?", options: ["A complex formula", "An anonymous function (block of code) that can be passed as argument", "A new class type", "A type of loop"], correctAnswer: 1, explanation: "Introduced in Java 8 to support functional programming." },
      { id: 2, question: "What is a 'Functional Interface'?", options: ["Interface with nested classes", "Interface with exactly one abstract method", "A large interface", "Interface for UI"], correctAnswer: 1, explanation: "Annotated with @FunctionalInterface (e.g. Runnable, Callable)." },
      { id: 3, question: "What is the 'Stream API' used for?", options: ["Watching movies", "Processing collections of objects in a functional style", "Input Output", "Database connection"], correctAnswer: 1, explanation: "Streams allow filter/map/reduce operations on collections." },
      { id: 4, question: "Which one is an intermediate operation in Stream?", options: ["collect()", "filter()", "forEach()", "count()"], correctAnswer: 1, explanation: "Intermediate operations return a new stream; terminal operations return a result." },
      { id: 5, question: "What does 'Optional' class solve?", options: ["Speed issues", "NullPointerException", "Naming conflicts", "Memory leaks"], correctAnswer: 1, explanation: "Optional provides a container to handle null values more elegantly." }
    ],
    12: [ // Level 12: Maven/Gradle
      { id: 1, question: "What are Maven and Gradle?", options: ["Programming languages", "Build automation and dependency management tools", "Testing frameworks", "Text editors"], correctAnswer: 1, explanation: "They manage libraries and handle compilation/packaging." },
      { id: 2, question: "Main configuration file for Maven?", options: ["build.gradle", "pom.xml", "settings.json", "maven.config"], correctAnswer: 1, explanation: "Project Object Model (POM) file." },
      { id: 3, question: "What is a 'Dependency'?", options: ["A bug", "An external library needed by the project", "A variable", "A person"], correctAnswer: 1, explanation: "Tools like Maven fetch these from remote repositories." },
      { id: 4, question: "Where does Maven store downloaded jars?", options: ["Local Repository (~/.m2)", "In the project folder", "On the Desktop", "In System32"], correctAnswer: 0, explanation: "Maven caches libraries in the local .m2 folder." },
      { id: 5, question: "Which tool uses Groovy or Kotlin for configuration?", options: ["Maven", "Gradle", "Ant", "NPM"], correctAnswer: 1, explanation: "Gradle's build scripts are written in DSL (Groovy/Kotlin)." }
    ]
  },

  'typescript': {
    1: [ // Level 1: JS Fundamentals
      { id: 1, question: "What is TypeScript?", options: ["A new browser", "A typed superset of JavaScript that compiles to plain JS", "A CSS framework", "A separate language from JS"], correctAnswer: 1, explanation: "TS adds types to JS to catch errors early." },
      { id: 2, question: "Can a browser run .ts files directly?", options: ["Yes", "No", "Only Chrome", "Only Safari"], correctAnswer: 1, explanation: "Browsers only run JS; TS must be compiled (transpiled)." },
      { id: 3, question: "Who developed TypeScript?", options: ["Google", "Microsoft", "Facebook", "Amazon"], correctAnswer: 1, explanation: "Microsoft created TypeScript and Anders Hejlsberg is the lead architect." },
      { id: 4, question: "How to compile a TS file?", options: ["tsc filename.ts", "node filename.ts", "run filename.ts", "compile filename.ts"], correctAnswer: 0, explanation: "tsc is the TypeScript Compiler command." },
      { id: 5, question: "Why use TypeScript?", options: ["Better performance", "Catch errors at development time and better IDE support", "Shorter code", "Makes code run in background"], correctAnswer: 1, explanation: "Static typing provides safety and better tooling." }
    ],
    2: [ // Level 2: Type Annotations
      { id: 1, question: "Correct syntax for assigning a type to a variable?", options: ["let x: number = 5;", "let x number = 5;", "let x = 5: number;", "number x = 5;"], correctAnswer: 0, explanation: "Variable name followed by colon and type." },
      { id: 2, question: "What is the 'any' type?", options: ["A specific number", "Disables type checking for that variable", "An array type", "A boolean"], correctAnswer: 1, explanation: "any allows a variable to hold any value (escape hatch)." },
      { id: 3, question: "What is 'Type Inference'?", options: ["TS guessing the type based on assigned value", "Reading code out loud", "Manually typing every line", "A type of error"], correctAnswer: 0, explanation: "If you assign 'hello', TS infers the type as string." },
      { id: 4, question: "How to define a union type (variable can be string or number)?", options: ["let val: string & number", "let val: string | number", "let val: string, number", "let val: [string, number]"], correctAnswer: 1, explanation: "Pipe symbol | is for Unions." },
      { id: 5, question: "What is 'void' in TS functions?", options: ["Function returns null", "Function doesn't return a value", "Function is recursive", "Function is broken"], correctAnswer: 1, explanation: "Used for functions that perform an action but don't return data." }
    ],
    3: [ // Level 3: Interfaces
      { id: 1, question: "What is an Interface?", options: ["A GUI", "A way to define the 'shape' of an object", "A type of class", "A variable"], correctAnswer: 1, explanation: "Interfaces describe properties and methods an object should have." },
      { id: 2, question: "How to make a property optional in an interface?", options: ["Using *", "Using ?", "Using !", "Using _"], correctAnswer: 1, explanation: "propName?: type makes it optional." },
      { id: 3, question: "Can an interface extend another interface?", options: ["No", "Yes, using 'extends' keyword", "Only with classes", "Only with types"], correctAnswer: 1, explanation: "Interfaces support single or multiple inheritance." },
      { id: 4, question: "How to make a property immutable in an interface?", options: ["const", "final", "readonly", "static"], correctAnswer: 2, explanation: "readonly properties can only be assigned during initialization." },
      { id: 5, question: "Difference between Interface and Type alias?", options: ["They are identical", "Interfaces are extendable and better for objects; Types can handle unions/primitives", "Type is faster", "Interface is for JS only"], correctAnswer: 1, explanation: "Interfaces are generally better for public APIs and object shapes." }
    ],
    4: [ // Level 4: Generics
      { id: 1, question: "What are Generics?", options: ["Basic types", "Reusable components that work with a variety of types", "Generic variables", "Common libraries"], correctAnswer: 1, explanation: "Generics allow passing types as arguments (e.g. <T>)." },
      { id: 2, question: "Symbol typically used for a generic type?", options: ["G", "T", "X", "Any"], correctAnswer: 1, explanation: "T stands for Type, though any name works." },
      { id: 3, question: "How to restrict a Generic type to only objects with 'length'?", options: ["<T extends {length: number}>", "<T = length>", "<T in length>", "<Generic length>"], correctAnswer: 0, explanation: "Using constraints with extends." },
      { id: 4, question: "Benefit of Generics?", options: ["Faster runtime", "Type safety while maintaining reusability", "Smaller files", "Easier syntax"], correctAnswer: 1, explanation: "Allows building flexible, type-safe components like Arrays/Promises." },
      { id: 5, question: "Can a function have multiple generic parameters?", options: ["No", "Yes, e.g. <T, U>", "Only in classes", "Only in interfaces"], correctAnswer: 1, explanation: "You can use as many as needed." }
    ],
    5: [ // Level 5: Enums
      { id: 1, question: "What is an Enum?", options: ["A number type", "A way to define a set of named constants", "An array", "A loop"], correctAnswer: 1, explanation: "Enums make code more readable (e.g. Status.Active)." },
      { id: 2, question: "Default starting value for Numeric Enums?", options: ["-1", "0", "1", "null"], correctAnswer: 1, explanation: "Items auto-increment from 0." },
      { id: 3, question: "Can Enums have string values?", options: ["No, only numbers", "Yes", "Only in latest version", "Only for hex colors"], correctAnswer: 1, explanation: "String enums are useful for clearer debugging/logging." },
      { id: 4, question: "What is a 'const Enum'?", options: ["A constant variable", "An enum that is removed during compilation to reduce bundle size", "A read-only enum", "A global enum"], correctAnswer: 1, explanation: "Const enums are completely inlined into the code." },
      { id: 5, question: "What is Reverse Mapping in enums?", options: ["Going backwards in array", "Getting member name from member value (numeric enums only)", "Rotating the enum", "Deleting the enum"], correctAnswer: 1, explanation: "Enum[0] gives 'ItemName'." }
    ],
    6: [ // Level 6: Type Narrowing
      { id: 1, question: "What is Type Narrowing?", options: ["Making fonts small", "Process of refining a wider type to a more specific one", "Deleting types", "Converting to string"], correctAnswer: 1, explanation: "Refining types using conditionals/guards." },
      { id: 2, question: "Which operator checks if a property exists on an object?", options: ["has", "exists", "in", "with"], correctAnswer: 2, explanation: "'property' in object checks for existence." },
      { id: 3, question: "Which operator narrows based on Class type?", options: ["typeof", "instanceof", "is", "as"], correctAnswer: 1, explanation: "instanceof checks the prototype chain." },
      { id: 4, question: "What is an 'Assertion' using 'as'?", options: ["Deleting a type", "Telling the compiler to treat a value as a specific type", "Checking a value", "A loop"], correctAnswer: 1, explanation: "Force TS to see something e.g. 'canvas as HTMLCanvasElement'." },
      { id: 5, question: "What is a Type Guard function?", options: ["A secure function", "A function that returns a boolean and has a 'type predicate' (val is Typed)", "A class constant", "A validation library"], correctAnswer: 1, explanation: "Custom guards use 'parameterName is Type' syntax." }
    ],
    7: [ // Level 7: Modules
      { id: 1, question: "Syntax for exporting a type?", options: ["export type X = ...", "type X export", "share type X", "public type X"], correctAnswer: 0, explanation: "Types and Interfaces can be exported just like values." },
      { id: 2, question: "How to import only the type (Type-Only Import)?", options: ["import {X} from ...", "import type {X} from ...", "import {X: type} from ...", "get type X from ..."], correctAnswer: 1, explanation: "Type-only imports help compiler and avoid side effects." },
      { id: 3, question: "What is 'Declaration Merging'?", options: ["Fusing files", "TS merging two separate declarations with same name into one definition", "Combining objects", "Deleting duplicates"], correctAnswer: 1, explanation: "Used mainly with interfaces to extend existing definitions." },
      { id: 4, question: "What are '.d.ts' files?", options: ["Data files", "Declaration files containing only type information", "Documentation", "Deployment scripts"], correctAnswer: 1, explanation: "These provide types for existing JS libraries." },
      { id: 5, question: "What is 'Namespace'?", options: ["A file name", "An internal module used to group related code", "A variable scope", "A server setting"], correctAnswer: 1, explanation: "Namespaces were older TS way to organize code, now rarely used for modern modules." }
    ],
    8: [ // Level 8: Tooling
      { id: 1, question: "What is the config file for TypeScript?", options: ["ts.config", "tsconfig.json", "typescript.json", "compiler.json"], correctAnswer: 1, explanation: "tsconfig.json defines compiler options and project root." },
      { id: 2, question: "What does 'strict' mode do in tsconfig?", options: ["Enables all strict type checking options", "Makes compilation faster", "Saves battery", "Enables JS only"], correctAnswer: 0, explanation: "Recommended for all new projects for maximum safety." },
      { id: 3, question: "What is 'noImplicitAny'?", options: ["Throws error if 'any' type is used implicitly", "Allows any type", "Disables types", "Logs warnings"], correctAnswer: 0, explanation: "Forces developer to specify types when they can't be inferred." },
      { id: 4, question: "Which tool is commonly used with TS for linting?", options: ["TSLint (deprecated)", "ESLint", "Prettier", "Babel"], correctAnswer: 1, explanation: "ESLint is now the standard for both JS and TS linting." },
      { id: 5, question: "What does 'Target' in tsconfig specify?", options: ["The user", "The version of JavaScript for output (e.g. ES5, ESNext)", "The file name", "The server destination"], correctAnswer: 1, explanation: "Target determines what JS your TS becomes." }
    ]
  },

  'mongodb': {
    1: [ // Level 1: Intro & NoSQL
      { id: 1, question: "What type of database is MongoDB?", options: ["Relational", "Document-oriented (NoSQL)", "Graph", "Key-Value"], correctAnswer: 1, explanation: "MongoDB stores data in flexible, JSON-like documents." },
      { id: 2, question: "What format does MongoDB use to store data?", options: ["XML", "BSON", "CSV", "SQL"], correctAnswer: 1, explanation: "BSON is a binary representation of JSON-like documents." },
      { id: 3, question: "What is a 'Collection' in MongoDB?", options: ["A table", "A group of MongoDB documents", "A database", "A row"], correctAnswer: 1, explanation: "Collections are analogous to tables in RDBMS." },
      { id: 4, question: "What is a 'Document' in MongoDB?", options: ["A text file", "A record in a collection", "A group of collections", "A database"], correctAnswer: 1, explanation: "Documents are the basic unit of data in MongoDB." },
      { id: 5, question: "Is MongoDB schema-less?", options: ["No", "Yes, documents in a collection can have different fields", "Only on Linux", "Only for strings"], correctAnswer: 1, explanation: "MongoDB is dynamic, allowing flexible schemas." }
    ],
    2: [ // Level 2: Documents & Collections
      { id: 1, question: "What is the primary key field in MongoDB by default?", options: ["_id", "id", "pk", "key"], correctAnswer: 0, explanation: "_id is the unique identifier for every document." },
      { id: 2, question: "Can a document contain another document (Nesting)?", options: ["No", "Yes", "Only in latest version", "Only for arrays"], correctAnswer: 1, explanation: "MongoDB supports embedded documents for better performance/structure." },
      { id: 3, question: "What is the default size limit for a BSON document?", options: ["1MB", "16MB", "64MB", "No limit"], correctAnswer: 1, explanation: "BSON documents are capped at 16MB." },
      { id: 4, question: "How to create a new collection in MongoDB shell?", options: ["create collection name", "db.createCollection('name')", "new Collection('name')", "init name"], correctAnswer: 1, explanation: "Collections are usually created implicitly on first insert, but this command works explicitly." },
      { id: 5, question: "What is 'GridFS'?", options: ["A CSS tool", "A specification for storing large files (over 16MB) in MongoDB", "A cloud service", "A backup tool"], correctAnswer: 1, explanation: "GridFS chunks large files across multiple documents." }
    ],
    3: [ // Level 3: CRUD Operations
      { id: 1, question: "Command to insert one document?", options: ["insert()", "insertOne()", "add()", "push()"], correctAnswer: 1, explanation: "db.collection.insertOne({}) is the standard modern method." },
      { id: 2, question: "Which command updates a document?", options: ["change()", "update()", "updateOne()", "modify()"], correctAnswer: 2, explanation: "updateOne() or updateMany() are used for modifications." },
      { id: 3, question: "What does the $set operator do?", options: ["Sets a timer", "Updates the value of a field without replacing the document", "Deletes a field", "Sets a limit"], correctAnswer: 1, explanation: "$set allows partial updates of specific fields." },
      { id: 4, question: "Command to delete all documents matching a criteria?", options: ["removeOne()", "delete()", "deleteMany()", "drop()"], correctAnswer: 2, explanation: "deleteMany() clears all matching records." },
      { id: 5, question: "What is the result of db.collection.find() with no arguments?", options: ["Error", "Returns first document", "Returns all documents in the collection", "Returns collection name"], correctAnswer: 2, explanation: "An empty find() acts like SELECT *." }
    ],
    4: [ // Level 4: Querying
      { id: 1, question: "Which operator matches values greater than a certain value?", options: ["$gt", "$me", "$more", "$upper"], correctAnswer: 0, explanation: "$gt stands for Greater Than." },
      { id: 2, question: "How to find documents where 'age' is in [20, 30, 40]?", options: ["{age: [20, 30, 40]}", "{age: {$in: [20, 30, 40]}}", "{age: {$contains: ...}}", "{age: {$inside: ...}}"], correctAnswer: 1, explanation: "$in checks for occurrences in an array." },
      { id: 3, question: "What does the .limit() method do?", options: ["Increases RAM", "Specifies maximum number of documents to return", "Sets expiry time", "Resets the query"], correctAnswer: 1, explanation: "limit() restricts result set size." },
      { id: 4, question: "How to sort results in descending order for 'score'?", options: ["sort({score: -1})", "sort({score: 0})", "sort({score: 1})", "descending('score')"], correctAnswer: 0, explanation: "-1 is for descending, 1 for ascending." },
      { id: 5, question: "What is 'Projection' in MongoDB?", options: ["Showing onto a screen", "Selecting only specific fields to return from a query", "Scaling the database", "Mapping data"], correctAnswer: 1, explanation: "Projection (second argument in find) limits the fields returned (e.g. {name: 1, _id: 0})." }
    ],
    5: [ // Level 5: Schemas & Validation
      { id: 1, question: "Does MongoDB support server-side schema validation?", options: ["No", "Yes, using JSON Schema", "Only in Atlas", "Only for numbers"], correctAnswer: 1, explanation: "MongoDB supports 'validator' using JSON Schema during collection creation." },
      { id: 2, question: "What happens if a document fails validation during insert?", options: ["Stored anyway", "MongoDB rejects the write with an error", "Field is deleted", "Database crashes"], correctAnswer: 1, explanation: "Validation prevents invalid data from entering based on defined rules." },
      { id: 3, question: "What is 'Partial Filter Expression' in validation?", options: ["Validating half a file", "Applying validation rules only to documents matching a criteria", "Faster validation", "Deleting documents"], correctAnswer: 1, explanation: "Allows targeting only specific subsets of data for validation." },
      { id: 4, question: "What is Mongoose?", options: ["A wild animal", "An ODM (Object Data Modeling) library for MongoDB and Node.js", "A direct driver", "A management UI"], correctAnswer: 1, explanation: "Mongoose provides a structured way to handle schemas in JS." },
      { id: 5, question: "Difference between 'strict' and 'flexible' validation?", options: ["Strict is for paid users", "Strict errors out; flexible only logs warnings", "Flexible is faster", "Strict is only for integers"], correctAnswer: 1, explanation: "validationLevel: 'strict' vs 'moderate' controls behavior." }
    ],
    6: [ // Level 6: Indexes
      { id: 1, question: "Why are indexes used in MongoDB?", options: ["To use more disk space", "To improve query performance", "To encrypt data", "To group documents"], correctAnswer: 1, explanation: "Indexes allow MongoDB to find documents without scanning the entire collection." },
      { id: 2, question: "Which command creates an index?", options: ["initIndex()", "createIndex()", "newIndex()", "addIndex()"], correctAnswer: 1, explanation: "db.collection.createIndex({field: 1}) creates an ascending index." },
      { id: 3, question: "What is a 'TTL Index'?", options: ["Total Time Index", "Time-To-Live index - automatically deletes documents after a time", "Temporary Index", "Top Tier Long index"], correctAnswer: 1, explanation: "Useful for sessions, logs, and temporary data." },
      { id: 4, question: "What is a 'Compound Index'?", options: ["An index on multiple fields", "A secret index", "An index for strings only", "A nested index"], correctAnswer: 0, explanation: "e.g. indexing {lastName: 1, firstName: 1}." },
      { id: 5, question: "Penalty of having too many indexes?", options: ["Database gets smaller", "Write operations (insert/update) become slower", "Queries become slower", "No penalty"], correctAnswer: 1, explanation: "Every write must also update the indexes." }
    ],
    7: [ // Level 7: Aggregation Framework
      { id: 1, question: "What is the Aggregation Pipeline?", options: ["A file system", "A framework for data processing and transformation", "A type of join", "A backup stream"], correctAnswer: 1, explanation: "It processes documents through stages (match, group, sort, etc.)." },
      { id: 2, question: "Which stage filters documents?", options: ["$match", "$filter", "$find", "$where"], correctAnswer: 0, explanation: "$match is the aggregation equivalent of WHERE." },
      { id: 3, question: "Which stage groups values together?", options: ["$collect", "$group", "$sum", "$aggregate"], correctAnswer: 1, explanation: "$group calculates aggregates (counts, sums) by a key." },
      { id: 4, question: "What does the $unwind stage do?", options: ["Compresses data", "Deconstructs an array field from input documents into separate documents", "Deletes arrays", "Sorts items"], correctAnswer: 1, explanation: "$unwind is used when you need to process individual elements of an array." },
      { id: 5, question: "Which stage performs a left-outer join to another collection?", options: ["$join", "$lookup", "$connect", "$merge"], correctAnswer: 1, explanation: "$lookup allows relating documents from different collections." }
    ],
    8: [ // Level 8: Replication & Sharding
      { id: 1, question: "What is a 'Replica Set'?", options: ["A set of backups", "A group of MongoDB instances that maintain the same data set for high availability", "A testing environment", "Multiple databases in one"], correctAnswer: 1, explanation: "Provides redundancy and automatic failover." },
      { id: 2, question: "What is the role of the 'Primary' node in a replica set?", options: ["Read only", "Handles all write operations", "Stores logs only", "Optional node"], correctAnswer: 1, explanation: "Only one nodes receives writes; changes are then synced to secondaries." },
      { id: 3, question: "What is 'Sharding'?", options: ["Cleaning data", "Horizontal scaling - distributing data across multiple machines", "Vertical scaling", "Creating new tables"], correctAnswer: 1, explanation: "Sharding allows MongoDB to handle massive data sets beyond one server's capacity." },
      { id: 4, question: "What is a 'Shard Key'?", options: ["A password", "The field used to determine which shard a document belongs to", "A unique ID", "The name of shard"], correctAnswer: 1, explanation: "A good shard key is vital for balanced data distribution." },
      { id: 5, question: "What does 'High Availability' mean?", options: ["System is very expensive", "System remains operational even if hardware/software failure occurs", "System is fast", "System is updated frequently"], correctAnswer: 1, explanation: "Replica sets achieve this by electing a new primary if the current one fails." }
    ],
    9: [ // Level 9: Driver & Mongoose
      { id: 1, question: "How does Node.js connect to MongoDB?", options: ["Via HTTP", "Using the 'mongodb' native driver", "Using SQL commands", "It can't"], correctAnswer: 1, explanation: "The driver allows JS to send commands via the MongoDB Wire Protocol." },
      { id: 2, question: "What is a Mongoose 'Schema'?", options: ["A design document", "A configuration object defining document structure and defaults", "A database engine", "A CSS file"], correctAnswer: 1, explanation: "Schemas bring structure to the schema-less MongoDB." },
      { id: 3, question: "What is a 'Middleware' (Pre/Post) in Mongoose?", options: ["Server software", "Functions that run before or after an operation (like save)", "An API", "A database"], correctAnswer: 1, explanation: "Useful for password hashing or logging changes." },
      { id: 4, question: "What is 'Virtuals' in Mongoose?", options: ["3D documents", "Properties not persisted in DB but accessible on document (e.g. fullName)", "Cloud databases", "Fake data"], correctAnswer: 1, explanation: "Created from existing fields at runtime." },
      { id: 5, question: "How to populate referenced documents in Mongoose?", options: ["use()", "populate()", "fill()", "join()"], correctAnswer: 1, explanation: "populate() replaces IDs with the actual document from the referenced collection." }
    ],
    10: [ // Level 10: Security
      { id: 1, question: "What is RBAC in MongoDB?", options: ["Running Backup At Command", "Role-Based Access Control", "Relational Base Access", "Random Base Connection"], correctAnswer: 1, explanation: "RBAC ensures users only have the permissions they need." },
      { id: 2, question: "What is 'Encryption at Rest'?", options: ["Encrypting when computer sleeps", "Encrypting data stored on disk", "Encrypting during network transfer", "Hidden data"], correctAnswer: 1, explanation: "Protects data even if physical hardware is stolen." },
      { id: 3, question: "What is the 'TLS/SSL' for in MongoDB?", options: ["Faster speed", "Encrypting data in transit over the network", "Testing", "Scaling"], correctAnswer: 1, explanation: "Ensures communication between client and server is private." },
      { id: 4, question: "Should you run MongoDB on the public internet without a firewall?", options: ["Yes, it is secure by default", "No, it should restricted to known IPs", "Only if password is long", "Only on port 80"], correctAnswer: 1, explanation: "Exposed databases are high-priority targets for ransomware." },
      { id: 5, question: "What is 'Auditing'?", options: ["Speed test", "Tracking and logging all database activity for compliance/security", "Deleting old logs", "Counting records"], correctAnswer: 1, explanation: "Helps investigations after a security incident." }
    ]
  },

  'c': {
    1: [ // Level 1: Intro & Syntax
      { id: 1, question: "Who created the C programming language?", options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correctAnswer: 0, explanation: "Dennis Ritchie created C at Bell Labs in the early 1970s." },
      { id: 2, question: "Is C a compiled or interpreted language?", options: ["Compiled", "Interpreted", "Both", "Depends on OS"], correctAnswer: 0, explanation: "C code must be compiled into machine-readable binaries." },
      { id: 3, question: "Which symbol terminates a statement in C?", options: [":", ".", ";", "!"], correctAnswer: 2, explanation: "Semi-colons are mandatory after most statements in C." },
      { id: 4, question: "What is the standard function for printing in C?", options: ["print()", "cout <<", "printf()", "console.log()"], correctAnswer: 2, explanation: "printf() is part of stdio.h." },
      { id: 5, question: "Which header file is needed for input/output?", options: ["conio.h", "math.h", "stdio.h", "stdlib.h"], correctAnswer: 2, explanation: "stdio.h stands for Standard Input/Output." }
    ],
    2: [ // Level 2: Data Types & Variables
      { id: 1, question: "Which is the smallest integer type in C?", options: ["int", "short", "char", "long"], correctAnswer: 2, explanation: "char is typically 1 byte (8 bits) in C." },
      { id: 2, question: "What is the size of an 'int' on a 32-bit system?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], correctAnswer: 2, explanation: "Standard int is usually 4 bytes on modern architectures." },
      { id: 3, question: "How to declare a constant in C?", options: ["const", "#define", "Both A and B", "final"], correctAnswer: 2, explanation: "Both the 'const' keyword and #define preprocessor macro work." },
      { id: 4, question: "What is a 'float' used for?", options: ["Big numbers", "Decimal numbers (floating point)", "Whole numbers", "Text"], correctAnswer: 1, explanation: "float represents single-precision fractional numbers." },
      { id: 5, question: "Can a 'char' store a small number?", options: ["No, only text", "Yes, chars are small integers in memory", "Only positive numbers", "Only zero"], correctAnswer: 1, explanation: "A char can store values typically from -128 to 127." }
    ],
    3: [ // Level 3: Operators
      { id: 1, question: "What does the ++ operator do?", options: ["Addition", "Increment value by 1", "Square the number", "Decrement by 1"], correctAnswer: 1, explanation: "x++ or ++x increases x by 1." },
      { id: 2, question: "What is the result of 5 % 2 in C?", options: ["2.5", "2", "1", "0"], correctAnswer: 2, explanation: "Modulo (%) returns the remainder of integer division." },
      { id: 3, question: "Which operator is used for logical 'AND'?", options: ["&", "&&", "AND", "|"], correctAnswer: 1, explanation: "& is bitwise AND, && is logical AND." },
      { id: 4, question: "What does the 'sizeof' operator return?", options: ["Value of variable", "Memory address", "Size of variable/type in bytes", "Length of string"], correctAnswer: 2, explanation: "sizeof is used for memory allocation and buffer management." },
      { id: 5, question: "Which has higher precedence: * or +?", options: ["+", "*", "Same", "Depends on parentheses"], correctAnswer: 1, explanation: "Multiplication/Division happens before Addition/Subtraction (PEMDAS/BODMAS)." }
    ],
    4: [ // Level 4: Control Flow
      { id: 1, question: "Which loop is guaranteed to run at least once?", options: ["for", "while", "do-while", "None"], correctAnswer: 2, explanation: "do-while checks condition at the end." },
      { id: 2, question: "What does 'break' do in a switch case?", options: ["Exits the program", "Exits the switch statement", "Jumps to default case", "Pauses execution"], correctAnswer: 1, explanation: "Without break, execution 'falls through' to the next case." },
      { id: 3, question: "What is the 'else if' syntax in C?", options: ["elif", "else if", "elseif", "other if"], correctAnswer: 1, explanation: "C uses two separate words: else if." },
      { id: 4, question: "Can a for loop be empty (e.g. for(;;))?", options: ["No", "Yes, it creates an infinite loop", "Only in Linux", "Only with pointers"], correctAnswer: 1, explanation: "for(;;) is a common idiom for infinite loops." },
      { id: 5, question: "What is the ternary operator?", options: ["if/else", "? :", "switch", "while"], correctAnswer: 1, explanation: "condition ? true_val : false_val." }
    ],
    5: [ // Level 5: Functions
      { id: 1, question: "What is a 'Prototype' in C?", options: ["A beta version of app", "A function declaration before usage", "A type of class", "A comment"], correctAnswer: 1, explanation: "Prototypes tell the compiler about function signature." },
      { id: 2, question: "What does 'return 0' normally mean in main()?", options: ["Program failed", "Program finished successfully", "Reset system", "Function is recurring"], correctAnswer: 1, explanation: "0 usually denotes success in the C exit status convention." },
      { id: 3, question: "What is 'Scope'?", options: ["A lens", "The visibility and lifetime of a variable", "A library", "Function name"], correctAnswer: 1, explanation: "Local variables are only visible inside their block." },
      { id: 4, question: "What is 'Recursion'?", options: ["Repeating code with loops", "A function calling itself", "Using pointers", "Multiple return values"], correctAnswer: 1, explanation: "Recursive functions must have a base case to avoid infinite calls." },
      { id: 5, question: "What does 'static' do to a local variable in a function?", options: ["Makes it public", "Persists its value across multiple function calls", "Deletes it", "Makes it constant"], correctAnswer: 1, explanation: "Static local variables are initialized only once." }
    ],
    6: [ // Level 6: Arrays
      { id: 1, question: "How to access the 5th element of array 'arr'?", options: ["arr[5]", "arr(5)", "arr[4]", "arr.5"], correctAnswer: 2, explanation: "Arrays are 0-indexed, so 5th element is index 4." },
      { id: 2, question: "What is the last character in a C string?", options: ["\\n", "0", "\\0 (null terminator)", "SPACE"], correctAnswer: 2, explanation: "C strings are arrays of characters ending in \\0." },
      { id: 3, question: "Can you change the size of a C array after declaration?", options: ["Yes", "No, fixed size", "Only if it is a float array", "Using size() method"], correctAnswer: 1, explanation: "Static arrays have constant size. Use dynamic memory for varying sizes." },
      { id: 4, question: "What is a 2D array?", options: ["Array under array", "A table (matrix) with rows and columns", "Double size array", "Array of strings only"], correctAnswer: 1, explanation: "int arr[3][3] creates a 3x3 grid." },
      { id: 5, question: "What does 'array name' act as in most expressions?", options: ["An integer", "A pointer to the first element", "A function", "A total sum"], correctAnswer: 1, explanation: "Array decay: 'arr' evaluates to the address of arr[0]." }
    ],
    7: [ // Level 7: Pointers (Basics)
      { id: 1, question: "What is a pointer?", options: ["A finger", "A variable that stores the memory address of another variable", "A type of loop", "A large number"], correctAnswer: 1, explanation: "Pointers 'point' to where data is stored in RAM." },
      { id: 2, question: "Symbol used to get address of a variable?", options: ["*", "&", "@", "addr"], correctAnswer: 1, explanation: "&x gives the address of x." },
      { id: 3, question: "Symbol used to 'dereference' a pointer (get value at address)?", options: ["&", "*", "!", "->"], correctAnswer: 1, explanation: "*ptr retrieves the data stored at the address pointed to." },
      { id: 4, question: "What is a NULL pointer?", options: ["A pointer to zero", "A pointer that points to nothing", "An error", "A deleted pointer"], correctAnswer: 1, explanation: "Used to indicate that the pointer is uninitialized or invalid." },
      { id: 5, question: "How to declare a pointer to an integer?", options: ["int ptr;", "int *ptr;", "int addr ptr;", "*int ptr;"], correctAnswer: 1, explanation: "Placement of * indicates pointer type." }
    ],
    8: [ // Level 8: Pointers (Advanced)
      { id: 1, question: "What is 'Pointer Arithmetic'?", options: ["Adding two addresses", "Adding/subtracting integers to/from pointers based on type size", "Math on values", "Calculating RAM size"], correctAnswer: 1, explanation: "ptr++ moves the pointer to the next element of its type." },
      { id: 2, question: "What is a pointer to a pointer?", options: ["A mistake", "A variable that stores address of another pointer", "Faster pointer", "Array"], correctAnswer: 1, explanation: "Declared as **ptr; useful for multi-dimensional dynamic arrays." },
      { id: 3, question: "What is 'Void Pointer'?", options: ["Broken pointer", "Generic pointer that can point to any data type", "Pointer to 0", "Empty pointer"], correctAnswer: 1, explanation: "void* must be cast to a specific type before dereferencing." },
      { id: 4, question: "What does 'ptr->field' mean?", options: ["Comparison", "Short for (*ptr).field (accessing struct member via pointer)", "Pointer addition", "Error"], correctAnswer: 1, explanation: "Arrow operator simplify pointer-to-struct access." },
      { id: 5, question: "What is a 'Dangling Pointer'?", options: ["Swing pointer", "A pointer that points to memory that has been freed", "A pointer to RAM", "Unused pointer"], correctAnswer: 1, explanation: "Using dangling pointers leads to undefined behavior." }
    ],
    9: [ // Level 9: Memory Management
      { id: 1, question: "Which function allocates memory on the HEAP?", options: ["malloc()", "alloc()", "new()", "create()"], correctAnswer: 0, explanation: "malloc() stands for Memory Allocation." },
      { id: 2, question: "Which function releases heap memory?", options: ["delete()", "free()", "remove()", "clear()"], correctAnswer: 1, explanation: "Always free() what you malloc() to avoid leaks." },
      { id: 3, question: "What is a 'Memory Leak'?", options: ["RAM is broken", "Program fails to release heap memory that is no longer needed", "Hard drive error", "Slow CPU"], correctAnswer: 1, explanation: "Leaks eventually consume all available memory." },
      { id: 4, question: "Difference between malloc() and calloc()?", options: ["malloc() is faster", "calloc() initializes memory to zero; malloc() leaves garbage", "Same thing", "malloc() is for integers"], correctAnswer: 1, explanation: "calloc(n, size) allocates and clears memory." },
      { id: 5, question: "What does realloc() do?", options: ["Refreshes RAM", "Changes the size of previously allocated memory block", "Deletes data", "Copies memory"], correctAnswer: 1, explanation: "Attempts to resize the block or moves it to a new location." }
    ],
    10: [ // Level 10: Structs & Unions
      { id: 1, question: "What is a 'struct'?", options: ["A shortcut", "User-defined data type that groups different types", "An array", "A loop"], correctAnswer: 1, explanation: "Structs allow complex data representation (e.g. Person {name, age})." },
      { id: 2, question: "Which keyword defines a struct?", options: ["structure", "type", "struct", "class"], correctAnswer: 2, explanation: "struct variableName { ... };" },
      { id: 3, question: "Difference between struct and union?", options: ["No difference", "Struct members have their own memory; Union members share the same memory", "Union is faster", "Struct is older"], correctAnswer: 1, explanation: "Unions are used to save memory when only one member is used at a time." },
      { id: 4, question: "What is 'typedef'?", options: ["Defining types", "Creating an alias for an existing type", "Deleting a type", "Function name"], correctAnswer: 1, explanation: "Commonly used with structs to avoid writing 'struct' keyword every time." },
      { id: 5, question: "Size of a union in memory?", options: ["Sum of all members", "Size of its largest member", "Fixed 4 bytes", "Depends on OS"], correctAnswer: 1, explanation: "Since members share space, the union needs to be only as large as the biggest one." }
    ],
    11: [ // Level 11: File I/O
      { id: 1, question: "What is 'FILE*' type used for?", options: ["Strings", "File pointer for tracking open files", "Binary numbers", "Integers"], correctAnswer: 1, explanation: "The standard way to handle files in C." },
      { id: 2, question: "Function to open a file?", options: ["open()", "fopen()", "startFile()", "useFile()"], correctAnswer: 1, explanation: "fopen('path', 'mode') returns a FILE pointer." },
      { id: 3, question: "What does 'w' mode do in fopen?", options: ["Read only", "Write (overwrites existing file)", "Append", "Write only if missing"], correctAnswer: 1, explanation: "Overwrites; use 'a' for appending." },
      { id: 4, question: "Function to close an open file?", options: ["stop()", "close()", "fclose()", "end()"], correctAnswer: 2, explanation: "fclose() ensures buffers are flushed and file handles released." },
      { id: 5, question: "Difference between fprintf() and printf()?", options: ["fprintf is faster", "fprintf writes to a specific file stream; printf to stdout", "printf is for strings", "Same thing"], correctAnswer: 1, explanation: "fprintf(file_ptr, '...') allows writing to files." }
    ]
  },

  'csharp': {
    1: [ // Level 1: Intro & .NET
      { id: 1, question: "Which company developed C#?", options: ["Apple", "Microsoft", "Oracle", "Sun Microsystems"], correctAnswer: 1, explanation: "Microsoft launched C# as part of the .NET initiative in 2000." },
      { id: 2, question: "What is CLR in .NET?", options: ["Common Loop Runner", "Common Language Runtime - executes C# code", "Class Library Root", "Current Local Run"], correctAnswer: 1, explanation: "The CLR handles memory, garbage collection, and security." },
      { id: 3, question: "C# is an Evolution of which languages?", options: ["Basic", "C and C++", "Python", "Javascript"], correctAnswer: 1, explanation: "C# takes inspiration from C, C++, and Java." },
      { id: 4, question: "What does Managed Code mean?", options: ["Coded by a manager", "Code executed by the CLR with automatic memory management", "Encrypted code", "Compiled code"], correctAnswer: 1, explanation: "Unmanaged code (like C++) does not have runtime memory management." },
      { id: 5, question: "Filename extension for C# code?", options: [".cs", ".cp", ".csharp", ".net"], correctAnswer: 0, explanation: ".cs is the standard extension." }
    ],
    2: [ // Level 2: Variables & Types
      { id: 1, question: "Which is a Value Type in C#?", options: ["string", "class", "int", "interface"], correctAnswer: 2, explanation: "Structs and enums are value types; classes and strings are reference types." },
      { id: 2, question: "What does 'var' keyword do?", options: ["Makes variable global", "Implicitly types a local variable based on initialization", "Deletes type check", "Used for variant type"], correctAnswer: 1, explanation: "Compiler determines the type at compile time." },
      { id: 3, question: "Is C# strongly typed?", options: ["No", "Yes", "Only for classes", "Only in old versions"], correctAnswer: 1, explanation: "C# enforces strict type checking." },
      { id: 4, question: "Difference between 'double' and 'decimal'?", options: ["decimal is for math", "decimal has lower range but higher precision (ideal for money)", "double is slower", "No difference"], correctAnswer: 1, explanation: "Always use decimal for financial calculations." },
      { id: 5, question: "What is 'Boxing'?", options: ["Putting code in boxes", "Converting a value type to a reference type (object)", "Packaging an app", "Deleting memory"], correctAnswer: 1, explanation: "Unboxing is the reverse: object to value type." }
    ],
    3: [ // Level 3: Control Flow
      { id: 1, question: "Which loop is designed for iterating through collections/arrays?", options: ["for", "while", "foreach", "repeat"], correctAnswer: 2, explanation: "foreach (var item in collection) is safe and readable." },
      { id: 2, question: "What symbol is used for string interpolation in C#?", options: ["&", "$", "@", "#"], correctAnswer: 1, explanation: "$'Value: {variable}' replaces old String.Format." },
      { id: 3, question: "What does the 'break' statement do?", options: ["Crashes the app", "Exits the innermost loop or switch", "Next iteration", "Ends the function"], correctAnswer: 1, explanation: "Immediately terminates loop execution." },
      { id: 4, question: "What is the 'switch expression' (since C# 8)?", options: ["A new loop", "A concise way to return a value from a switch", "A regex tool", "A boolean"], correctAnswer: 1, explanation: "e.g. var color = num switch { 1 => 'Red', _ => 'Black'};" },
      { id: 5, question: "Can you use 'goto' in C#?", options: ["No, it's removed", "Yes, but discouraged", "Only for loops", "Only in scripts"], correctAnswer: 1, explanation: "goto exists but generally leads to 'spaghetti code'." }
    ],
    4: [ // Level 4: Classes & Objects
      { id: 1, question: "Default access modifier if none is specified in a class?", options: ["public", "private", "protected", "internal"], correctAnswer: 1, explanation: "Members are private by default; Top-level classes are internal." },
      { id: 2, question: "What is a 'Constructor'?", options: ["Code builder", "Method called when an instance is created", "Class name", "Static method"], correctAnswer: 1, explanation: "Constructors initialize object state." },
      { id: 3, question: "What is 'this' keyword?", options: ["The parent class", "Refers to the current instance of the class", "A static shortcut", "A variable name"], correctAnswer: 1, explanation: "Useful when parameters and fields have same name." },
      { id: 4, question: "How to define a 'Property' in C# for a private field?", options: ["get; set;", "property(val)", "value.set", "public field"], correctAnswer: 0, explanation: "Auto-implemented properties: public int Age { get; set; }" },
      { id: 5, question: "What is a 'namespace'?", options: ["Variable name", "A container used to organize classes and avoid naming conflicts", "Memory location", "Class library"], correctAnswer: 1, explanation: "e.g. System.Collections." }
    ],
    5: [ // Level 5: Inheritance & Polymorphism
      { id: 1, question: "Keyword to inherit from a class in C#?", options: ["extends", "inherits", ": (colon)", "using"], correctAnswer: 2, explanation: "class Dog : Animal { ... }" },
      { id: 2, question: "What does 'virtual' keyword do?", options: ["Makes class fake", "Allows a method to be overridden in a derived class", "Makes method static", "Makes it private"], correctAnswer: 1, explanation: "You can't override a non-virtual method." },
      { id: 3, question: "Keyword used to override a virtual method?", options: ["overload", "override", "new", "virtual"], correctAnswer: 1, explanation: "Explicitly states that this method replaces the base implementation." },
      { id: 4, question: "Does C# support Multiple Inheritance of classes?", options: ["Yes", "No", "Only through pointers", "Only via files"], correctAnswer: 1, explanation: "A class can inherit from only one base class, but many interfaces." },
      { id: 5, question: "What is an 'abstract' class?", options: ["A small class", "A class that cannot be instantiated and must be inherited", "A class with no code", "A library class"], correctAnswer: 1, explanation: "Abstract classes provide a base template." }
    ],
    6: [ // Level 6: Interfaces & Structs
      { id: 1, question: "What is an 'Interface' in C#?", options: ["A GUI", "A contract specifying members a class must implement", "A static class", "Base class"], correctAnswer: 1, explanation: "Interfaces only define 'what', not 'how' (usually)." },
      { id: 2, question: "Convention for naming interfaces?", options: ["Starts with 'A'", "Starts with 'I'", "Starts with 'Inter'", "No convention"], correctAnswer: 1, explanation: "e.g. IRepository, IComparable." },
      { id: 3, question: "Difference between class and struct?", options: ["No difference", "Class is reference type (heap); struct is value type (stack)", "Struct is faster always", "Class is for web only"], correctAnswer: 1, explanation: "Structs are better for small, immutable data structures." },
      { id: 4, question: "Can a struct inherit from a class?", options: ["Yes", "No", "Only if static", "Only if private"], correctAnswer: 1, explanation: "Structs cannot inherit, but can implement interfaces." },
      { id: 5, question: "What is 'Partial Class'?", options: ["Broken class", "Splitting a class definition across multiple files", "Class with half code", "Temporary class"], correctAnswer: 1, explanation: "Keyword 'partial' is used for code generation scenarios." }
    ],
    7: [ // Level 7: Generics & Collections
      { id: 1, question: "Benefit of using List<T> over ArrayList?", options: ["Faster development", "Type safety and avoiding boxing/unboxing", "Smaller memory", "Better CSS integration"], correctAnswer: 1, explanation: "Generics provide compile-time safety and better performance." },
      { id: 2, question: "Which collection stores unique items only?", options: ["List", "HashSet", "Dictionary", "Stack"], correctAnswer: 1, explanation: "HashSet<T> uses hashes to ensure uniqueness." },
      { id: 3, question: "What is a Dictionary<TKey, TValue>?", options: ["A book of words", "A collection of key-value pairs for fast lookup", "A types of array", "A list of strings"], correctAnswer: 1, explanation: "Analogous to Map in Java or Object/Map in JS." },
      { id: 4, question: "What does 'T' represent in List<T>?", options: ["Time", "A generic type parameter", "Total", "Target"], correctAnswer: 1, explanation: "The specific type is provided when the list is created." },
      { id: 5, question: "Which collection is LIFO?", options: ["List", "Queue", "Stack", "Array"], correctAnswer: 2, explanation: "Stack (Last-In, First-Out). Queue is FIFO." }
    ],
    8: [ // Level 8: LINQ Basics
      { id: 1, question: "What does LINQ stand for?", options: ["Line Integration Query", "Language-Integrated Query", "Language Interface Net", "Link Inquiry"], correctAnswer: 1, explanation: "LINQ allows querying collections using a C# syntax similar to SQL." },
      { id: 2, question: "Which LINQ method filters a collection?", options: ["Select", "Where", "Sort", "Find"], correctAnswer: 1, explanation: "collection.Where(x => condition) filters items." },
      { id: 3, question: "What does .Select() do?", options: ["Highlights items", "Transforms each element into a new form (mapping)", "Deletes items", "Picks first item"], correctAnswer: 1, explanation: "Select is used for projection." },
      { id: 4, question: "What is 'Deferred Execution' in LINQ?", options: ["Slow running", "Queries only execute when the results are iterated (e.g. via foreach/ToList)", "Running later in day", "Error catching"], correctAnswer: 1, explanation: "The query definition doesn't fetch data immediately." },
      { id: 5, question: "Difference between .First() and .FirstOrDefault()?", options: ["No difference", "First() throws error if no items; FirstOrDefault() returns null/default", "First is faster", "First is only for strings"], correctAnswer: 1, explanation: "FirstOrDefault is safer for potentially empty lists." }
    ],
    9: [ // Level 9: Async/Await (TPL)
      { id: 1, question: "What is the purpose of async/await?", options: ["Making code synchronous", "Handling asynchronous tasks without blocking the main/UI thread", "Running code faster", "Parallel loops"], correctAnswer: 1, explanation: "Crucial for responsive UI and scalable server apps." },
      { id: 2, question: "What type must an async method return?", options: ["void (usually discouraged)", "Task or Task<T>", "int", "var"], correctAnswer: 1, explanation: "Task represents an ongoing operation." },
      { id: 3, question: "What happens if you don't 'await' an async call?", options: ["Error", "The method continues immediately, task runs in background", "Program freezes", "System restart"], correctAnswer: 1, explanation: "This is 'Fire and Forget', which can lead to unpredictable behavior." },
      { id: 4, question: "Common naming convention for async methods?", options: ["Start-prefix", "-Async suffix", "No convention", "Init-prefix"], correctAnswer: 1, explanation: "e.g. GetDataAsync()." },
      { id: 5, question: "What is 'Task.WhenAll'?", options: ["Run all tasks one by one", "Wait for all provided tasks to complete in parallel", "Stop all tasks", "Only run first task"], correctAnswer: 1, explanation: "Efficiently handles multiple concurrent operations." }
    ]
  },

  'php': {
    1: [ // Level 1: Intro & Syntax
      { id: 1, question: "What does PHP stand for?", options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Hypertext Processor", "Programmable HTML Processor"], correctAnswer: 1, explanation: "PHP is a recursive acronym." },
      { id: 2, question: "PHP scripts are executed on the...?", options: ["Client (Browser)", "Server", "Database", "Local machine only"], correctAnswer: 1, explanation: "PHP is a server-side scripting language." },
      { id: 3, question: "Which tag is used to start PHP code?", options: ["<script>", "<?php", "<?php ?>", "<php>"], correctAnswer: 1, explanation: "PHP code blocks start with <?php." },
      { id: 4, question: "Which character starts a variable name in PHP?", options: ["&", "#", "$", "@"], correctAnswer: 2, explanation: "All variables in PHP start with a dollar sign $." },
      { id: 5, question: "How to end a PHP statement?", options: [".", ";", "New line", "None needed"], correctAnswer: 1, explanation: "Semicolons are required to end statements." }
    ],
    2: [ // Level 2: Variables & Types
      { id: 1, question: "Which function outputs text in PHP?", options: ["echo", "print", "Both echo and print", "show"], correctAnswer: 2, explanation: "Both echo and print are used for output." },
      { id: 2, question: "Is PHP case-sensitive for variables?", options: ["No", "Yes", "Only for globals", "Only for strings"], correctAnswer: 1, explanation: "$x and $X are different variables." },
      { id: 3, question: "How to get the length of a string?", options: ["len()", "str_len()", "strlen()", "count()"], correctAnswer: 2, explanation: "strlen() is the standard string length function." },
      { id: 4, question: "What is 'Loose Typing' in PHP?", options: ["Code is hard to read", "You don't have to declare data types", "Variables can change types automatically", "Both B and C"], correctAnswer: 3, explanation: "PHP is dynamically and loosely typed." },
      { id: 5, question: "Which data type is used for True/False?", options: ["Logic", "Boolean", "Bit", "Flag"], correctAnswer: 1, explanation: "Boolean stores true or false values." }
    ],
    3: [ // Level 3: Control Flow
      { id: 1, question: "Which operator is used for concatenation?", options: ["+", "&", ".", "|"], correctAnswer: 2, explanation: "PHP uses the dot (.) operator to join strings." },
      { id: 2, question: "What is the result of '1' + 1 in PHP?", options: ["'11'", "2", "Error", "1"], correctAnswer: 1, explanation: "PHP performs type coercion and adds them as numbers." },
      { id: 3, question: "Syntax for an 'if' statement?", options: ["if x=1", "if (x==1)", "if x:1", "if {x=1}"], correctAnswer: 1, explanation: "Standard C-style syntax." },
      { id: 4, question: "Which loop is used to iterate through arrays?", options: ["for", "while", "foreach", "loop"], correctAnswer: 2, explanation: "foreach ($array as $value) is the idiomatic way." },
      { id: 5, question: "What does the 'break' statement do?", options: ["Ends script", "Stops current loop iteration", "Exits the loop", "Starts debugger"], correctAnswer: 2, explanation: "Terminates the execution of for, foreach, while, do-while, or switch." }
    ],
    4: [ // Level 4: Functions
      { id: 1, question: "How to define a function in PHP?", options: ["func name()", "function name()", "def name()", "name() = function"], correctAnswer: 1, explanation: "Use the 'function' keyword." },
      { id: 2, question: "Are user-defined function names case-sensitive?", options: ["Yes", "No", "Only for constructors", "Only in old versions"], correctAnswer: 1, explanation: "In PHP, function names are case-insensitive, unlike variables." },
      { id: 3, question: "How to pass a variable by reference?", options: ["&variable", "$variable", "*variable", "ref variable"], correctAnswer: 0, explanation: "The ampersand (&) allows a function to modify the original variable." },
      { id: 4, question: "What are default arguments?", options: ["Required params", "Params with preset values if not provided", "Global params", "Array params"], correctAnswer: 1, explanation: "e.g. function test($name = 'User') { ... }" },
      { id: 5, question: "What does 'return' do?", options: ["Ends function and sends back a value", "Ends script", "Restarts function", "Logs an error"], correctAnswer: 0, explanation: "Exits the current function scope." }
    ],
    5: [ // Level 5: Arrays
      { id: 1, question: "What is an 'Indexed Array'?", options: ["Array with numeric keys", "Array with string keys", "Sorted array", "Empty array"], correctAnswer: 0, explanation: "Keys start at 0 by default." },
      { id: 2, question: "What is an 'Associative Array'?", options: ["Array with numeric keys", "Array with named keys (strings)", "Array of objects", "Multi-dimensional array"], correctAnswer: 1, explanation: "Keys can be meaningful strings (e.g. 'name' => 'John')." },
      { id: 3, question: "How to add an element to the end of an array?", options: ["$arr[] = val", "array_push($arr, val)", "Both work", "add($arr, val)"], correctAnswer: 2, explanation: "$arr[] is a shorthand for array_push." },
      { id: 4, question: "How to count array elements?", options: ["len($arr)", "count($arr)", "size($arr)", "total($arr)"], correctAnswer: 1, explanation: "count() is the standard function." },
      { id: 5, question: "How to sort an array alphabetically?", options: ["order()", "sort()", "arrange()", "alpha()"], correctAnswer: 1, explanation: "sort() sorts indexed arrays in ascending order." }
    ],
    6: [ // Level 6: Superglobals
      { id: 1, question: "What is $_GET used for?", options: ["Collecting data from a form with method='get'", "Sending emails", "Encryption", "Database queries"], correctAnswer: 0, explanation: "Used to collect data sent via URL parameters." },
      { id: 2, question: "What is $_POST used for?", options: ["Social media posts", "Collecting data from form with method='post'", "Static variables", "Cookies"], correctAnswer: 1, explanation: "Preferred for sensitive data as it doesn't show in URL." },
      { id: 3, question: "What is $_SESSION?", options: ["A temporary array", "Array holding session variables across multiple pages", "A database table", "User's browser name"], correctAnswer: 1, explanation: "Stores data on the server for a specific user." },
      { id: 4, question: "What is $_COOKIE?", options: ["A snack", "Variables stored in the client's browser", "Server settings", "Error log"], correctAnswer: 1, explanation: "Used to identify users and store preferences between visits." },
      { id: 5, question: "Which superglobal contains info about headers, paths, and script locations?", options: ["$_GLOBAL", "$_SERVER", "$_INFO", "$_ENV"], correctAnswer: 1, explanation: "Contains data like 'PHP_SELF', 'HTTP_HOST', etc." }
    ],
    7: [ // Level 7: OOP
      { id: 1, question: "How to create an object from a class 'Car'?", options: ["$obj = Car();", "$obj = new Car();", "$obj = create Car;", "new($obj, Car)"], correctAnswer: 1, explanation: "Use the 'new' keyword to instantiate classes." },
      { id: 2, question: "What is the constructor method in PHP?", options: ["init()", "construct()", "__construct()", "new()"], correctAnswer: 2, explanation: "Starts with double underscore." },
      { id: 3, question: "How to access an object property?", options: ["$obj.prop", "$obj->prop", "$obj['prop']", "$obj::prop"], correctAnswer: 1, explanation: "PHP uses the arrow operator (->) for instances." },
      { id: 4, question: "What is '$this'?", options: ["Global variable", "Refers to the current object instance", "A keyword for classes", "Null value"], correctAnswer: 1, explanation: "Used within class methods to access its own properties/methods." },
      { id: 5, question: "Inheritance keyword in PHP?", options: ["inherits", "extends", "parent", "implements"], correctAnswer: 1, explanation: "class Child extends Parent { ... }" }
    ],
    8: [ // Level 8: MySQL Integration
      { id: 1, question: "Which PHP extension is recommended for MySQL?", options: ["mysql", "mysqli or PDO", "db_mysql", "sql_connect"], correctAnswer: 1, explanation: "The old 'mysql' extension is deprecated/removed." },
      { id: 2, question: "What does PDO stand for?", options: ["PHP Data Objects", "Programmable Database Optimizer", "PHP Database Option", "Personal Data Organizer"], correctAnswer: 0, explanation: "A lightweight, consistent interface for accessing databases." },
      { id: 3, question: "How to prevent SQL Injection in PHP?", options: ["Use long passwords", "Use Prepared Statements", "Hide code", "Use HTTPS"], correctAnswer: 1, explanation: "Prepared statements separate SQL logic from data." },
      { id: 4, question: "Which function executes a query in MySQLi?", options: ["run_query()", "mysqli_query()", "exec()", "sql()"], correctAnswer: 1, explanation: "Standard procedural function for MySQLi." },
      { id: 5, question: "What is 'Fetch' in database context?", options: ["Retrieving data from a result set", "Deleting data", "Updating logs", "Connecting"], correctAnswer: 0, explanation: "e.g. mysqli_fetch_assoc()." }
    ],
    9: [ // Level 9: Security
      { id: 1, question: "What is XSS?", options: ["XML Service System", "Cross-Site Scripting", "Extended Style Sheet", "CSS error"], correctAnswer: 1, explanation: "Injecting malicious scripts into web pages." },
      { id: 2, question: "Function to sanitize HTML output?", options: ["clean()", "htmlspecialchars()", "strip()", "safe()"], correctAnswer: 1, explanation: "Converts special characters to HTML entities, preventing XSS." },
      { id: 3, question: "What is SQL Injection?", options: ["Injecting CSS", "Manipulating a SQL query via user input", "Adding data to DB", "A fast database"], correctAnswer: 1, explanation: "Serious security flaw allowing unauthorized DB access." },
      { id: 4, question: "Why should you hash passwords?", options: ["To make them longer", "To hide them from DB admins and in case of leaks", "To save space", "Required by PHP"], correctAnswer: 1, explanation: "Password hashing is a fundamental security practice (use password_hash())." },
      { id: 5, question: "What is CSRF?", options: ["Cross-Site Request Forgery", "Central Security Registry", "Client Server Request File", "CSS Resource"], correctAnswer: 0, explanation: "Tricking a victim into submitting a request they didn't intend to." }
    ],
    10: [ // Level 10: Composer & Frameworks
      { id: 1, question: "What is Composer?", options: ["A music tool", "Dependency manager for PHP", "PHP compiler", "Web server"], correctAnswer: 1, explanation: "Manages libraries and autoloading." },
      { id: 2, question: "Popular PHP framework based on MVC?", options: ["React", "Laravel", "Vue", "Express"], correctAnswer: 1, explanation: "Laravel is currently the most popular PHP framework." },
      { id: 3, question: "What is MVC?", options: ["Modern View Code", "Model-View-Controller", "Manage Variable Classes", "Module Version Check"], correctAnswer: 1, explanation: "Design pattern for separating logic, data, and UI." },
      { id: 4, question: "What is the 'vendor' folder?", options: ["Sales department", "Folder where Composer installs libraries", "Windows files", "Old code"], correctAnswer: 1, explanation: "Should generally be ignored by Git." },
      { id: 5, question: "Filename for Composer configuration?", options: ["composer.json", "package.json", "php.config", "libs.json"], correctAnswer: 0, explanation: "Lists dependencies and project info." }
    ]
  },

  'go': {
    1: [ // Level 1: Intro & Tooling
      { id: 1, question: "Who developed the Go language?", options: ["Microsoft", "Google", "Facebook", "Mozilla"], correctAnswer: 1, explanation: "Go (Golang) was created at Google in 2007." },
      { id: 2, question: "Command to run a Go file directly?", options: ["go build", "go run", "go start", "go execute"], correctAnswer: 1, explanation: "go run main.go compiles and executes immediately." },
      { id: 3, question: "Command to compile Go code into binary?", options: ["go run", "go build", "go compile", "go make"], correctAnswer: 1, explanation: "go build creates an executable file." },
      { id: 4, question: "Go is inspired by which language family?", options: ["Python", "C", "Lisp", "Java"], correctAnswer: 1, explanation: "Go is a statically typed, compiled language with C-like syntax." },
      { id: 5, question: "What is 'gofmt'?", options: ["Go compiler", "A tool for automatically formatting Go source code", "A library", "A debugger"], correctAnswer: 1, explanation: "Go has a strict style enforced by its own tools." }
    ],
    2: [ // Level 2: Variables & Types
      { id: 1, question: "How to declare a variable with type inference?", options: ["var x = 1", "x := 1", "x = 1", "Both A and B"], correctAnswer: 3, explanation: "var x = 1 and the short declaration x := 1 both work." },
      { id: 2, question: "Can a variable declared with := be used outside a function?", options: ["Yes", "No", "Only if exported", "Only for strings"], correctAnswer: 1, explanation: ":= is only for local (within function) scope." },
      { id: 3, question: "Zero value for an 'int'?", options: ["null", "0", "undefined", "-1"], correctAnswer: 1, explanation: "Uninitialized variables in Go get a default 'zero value'." },
      { id: 4, question: "Zero value for a 'string'?", options: ["null", "empty string \"\"", "undefined", "nil"], correctAnswer: 1, explanation: "In Go, strings are not nullable; their zero value is an empty string." },
      { id: 5, question: "How to declare a constant?", options: ["final x = 1", "const x = 1", "static x = 1", "readonly x = 1"], correctAnswer: 1, explanation: "Go uses the 'const' keyword." }
    ],
    3: [ // Level 3: Control Flow
      { id: 1, question: "Does Go have a 'while' loop?", options: ["Yes", "No, for is used for both for and while", "Only in old versions", "Only with specific imports"], correctAnswer: 1, explanation: "In Go, 'for' is the only looping construct." },
      { id: 2, question: "How to write an infinite loop in Go?", options: ["while(true) {}", "for true {}", "for {}", "loop {}"], correctAnswer: 2, explanation: "Empty for is the Go way for infinite loops." },
      { id: 3, question: "Are parentheses required for 'if' conditions?", options: ["Yes", "No", "Only for complex ones", "Only in functions"], correctAnswer: 1, explanation: "if x > 0 { ... } - no parentheses needed." },
      { id: 4, question: "What is the 'switch' behavior by default?", options: ["Fall-through to next case", "Break after case completion automatically", "Error if no break", "Infinite loop"], correctAnswer: 1, explanation: "Unlike C, Go breaks automatically; use 'fallthrough' keyword to override." },
      { id: 5, question: "How to iterate over a slice?", options: ["for each", "for i, v := range slice", "loop over slice", "for slice.next"], correctAnswer: 1, explanation: "The 'range' keyword is used for iteration." }
    ],
    4: [ // Level 4: Functions & Multiple Returns
      { id: 1, question: "Can a Go function return multiple values?", options: ["No", "Yes", "Only two values", "Only using pointers"], correctAnswer: 1, explanation: "Functions can return any number of values (e.g., result and error)." },
      { id: 2, question: "How to ignore a returned value?", options: ["null", "_ (blank identifier)", "skip", "void"], correctAnswer: 1, explanation: "The underscore is used to discard values you don't need." },
      { id: 3, question: "What is 'init()' function?", options: ["Entry point", "Function that runs automatically before main()", "Class constructor", "Module loader"], correctAnswer: 1, explanation: "Each package can have an init function for setup." },
      { id: 4, question: "What are 'Variadic Functions'?", options: ["Functions with changing names", "Functions that accept a variable number of arguments", "Recursive functions", "Functions return errors"], correctAnswer: 1, explanation: "Uses ellipsis syntax (e.g., nums ...int)." },
      { id: 5, question: "What is a 'Closure' in Go?", options: ["Ending a program", "An anonymous function that references variables from outside its body", "Closing a file", "Stopping a thread"], correctAnswer: 1, explanation: "Go has full support for anonymous functions and closures." }
    ],
    5: [ // Level 5: Structs & Interfaces
      { id: 1, question: "How to define a custom type like a record?", options: ["class", "struct", "object", "type"], correctAnswer: 1, explanation: "Go uses 'struct' to group fields." },
      { id: 2, question: "Does Go have classes?", options: ["Yes", "No, it uses structs and methods", "Only in Go 2.0", "Only for UI"], correctAnswer: 1, explanation: "Go is not traditionally object-oriented; it avoids inheritance." },
      { id: 3, question: "What is an 'Interface' in Go?", options: ["A GUI", "A set of method signatures", "A base class", "A library"], correctAnswer: 1, explanation: "A type satisfies an interface by implementing its methods." },
      { id: 4, question: "Is interface implementation explicit or implicit?", options: ["Explicit (keyword required)", "Implicit (no keyword, just implement the methods)", "Depends on OS", "Only via files"], correctAnswer: 1, explanation: "No 'implements' keyword needed - this is 'duck typing' at compile time." },
      { id: 5, question: "What is the 'empty interface' interface{}?", options: ["Interface with no code", "Can hold values of any type", "Same as void", "A bug"], correctAnswer: 1, explanation: "Since it has zero methods, every type satisfies it." }
    ],
    6: [ // Level 6: Pointers & Methods
      { id: 1, question: "Does Go support pointers?", options: ["No", "Yes", "Only for arrays", "Only in unsafe mode"], correctAnswer: 1, explanation: "Go has pointers, but no pointer arithmetic (like in C)." },
      { id: 2, question: "What is a 'Receiver' in Go?", options: ["A radio part", "The type a method is attached to (inside the function definition)", "A network listener", "A variable"], correctAnswer: 1, explanation: "e.g., func (u User) SayHello() { ... }" },
      { id: 3, question: "Difference between Value and Pointer receiver?", options: ["None", "Pointer receiver can modify the original struct; Value receiver works on a copy", "Value is faster", "Pointer is only for numbers"], correctAnswer: 1, explanation: "Pointer receivers (u *User) are used for mutation or performance (avoiding copies)." },
      { id: 4, question: "Can methods be added to non-struct types?", options: ["No", "Yes, to any type defined in the same package", "Only to integers", "Only to strings"], correctAnswer: 1, explanation: "e.g., you can define methods on `type MyInt int`." },
      { id: 5, question: "Symbol to get the address of a variable?", options: ["*", "&", "@", "addr"], correctAnswer: 1, explanation: "Same as C/C++: &x." }
    ],
    7: [ // Level 7: Concurrency
      { id: 1, question: "What are 'Goroutines'?", options: ["System threads", "Lightweight threads managed by the Go runtime", "Infinite loops", "Async functions"], correctAnswer: 1, explanation: "Started with the 'go' keyword (e.g., go myFunction())." },
      { id: 2, question: "What are 'Channels'?", options: ["TV stations", "Typed conduits to send and receive values between goroutines", "TCP sockets", "Database links"], correctAnswer: 1, explanation: "Channels are the primary way to synchronize goroutines ('Do not communicate by sharing memory...')." },
      { id: 3, question: "Symbol to send data to a channel?", options: ["<-", "->", "=>", "<<"], correctAnswer: 0, explanation: "ch <- value." },
      { id: 4, question: "What is the 'select' statement used for?", options: ["Picking a database", "Waiting on multiple channel operations", "Finding elements", "Switching threads"], correctAnswer: 1, explanation: "select blocks until one of its cases is ready to execute." },
      { id: 5, question: "Buffered vs Unbuffered Channels?", options: ["Buffered have limited capacity; Unbuffered block until both sender and receiver are ready", "No difference", "Buffered are slower", "Unbuffered are only for strings"], correctAnswer: 0, explanation: "Unbuffered channels provide stronger synchronization." }
    ],
    8: [ // Level 8: Error Handling & Modules
      { id: 1, question: "How are errors handled in Go?", options: ["try/catch", "Returning error as the last value from functions", "Global error handler", "Logging only"], correctAnswer: 1, explanation: "Explicit error checking (if err != nil) is the Go philosophy." },
      { id: 2, question: "What is 'panic'?", options: ["A fast function", "A way to stop normal execution when an unrecoverable error occurs", "A UI component", "A loop"], correctAnswer: 1, explanation: "Generally avoided in favor of regular error returns." },
      { id: 3, question: "What is 'defer'?", options: ["Fast execution", "Schedules a function call to run just before the current function returns", "Delays a promise", "Clears a variable"], correctAnswer: 1, explanation: "Great for cleanup tasks like closing files (e.g., defer f.Close())." },
      { id: 4, question: "What is 'Go Modules'?", options: ["Go libraries", "Dependency management system (go.mod)", "New Go compiler", "A plugin"], correctAnswer: 1, explanation: "Standard since Go 1.11 for managing external packages." },
      { id: 5, question: "What command initializes a new module?", options: ["go init", "go mod init <name>", "go new", "npm init"], correctAnswer: 1, explanation: "Creates the go.mod file." }
    ]
  },

  'vue': {
    1: [ // Level 1: Intro & Instance
      { id: 1, question: "What is Vue.js?", options: ["Backend framework", "Progressive JavaScript framework for building UI", "Database", "CSS library"], correctAnswer: 1, explanation: "Vue is a frontend framework created by Evan You." },
      { id: 2, question: "Main feature of Vue?", options: ["Manual DOM updates", "Reactivity and Component-based architecture", "Low performance", "SQL support"], correctAnswer: 1, explanation: "Vue automatically updates the UI when data changes." },
      { id: 3, question: "Who created Vue.js?", options: ["Google", "Evan You", "Facebook", "Microsoft"], correctAnswer: 1, explanation: "Evan You created it after working at Google on Angular." },
      { id: 4, question: "What is the 'Vue Instance'?", options: ["The whole browser", "The root object that manages a part of the page", "A single variable", "The CSS file"], correctAnswer: 1, explanation: "Created using createApp() in Vue 3." },
      { id: 5, question: "Vue 3 vs Vue 2 main architectural change?", options: ["No changes", "Introduction of Composition API", "Removing HTML", "Required paid license"], correctAnswer: 1, explanation: "Composition API allows better code organization in large components." }
    ],
    2: [ // Level 2: Template Syntax
      { id: 1, question: "What character is used for text interpolation (mustache syntax)?", options: ["{{ }}", "[[ ]]", "{ }", "( )"], correctAnswer: 0, explanation: "{{ message }} displays data." },
      { id: 2, question: "What is a 'Directive' in Vue?", options: ["A server command", "Special attributes starting with v- that apply reactive behavior to the DOM", "A CSS rule", "A JS function"], correctAnswer: 1, explanation: "e.g., v-if, v-for, v-on." },
      { id: 3, question: "Which directive binds an attribute to data?", options: ["v-bind", "v-link", "v-data", "v-set"], correctAnswer: 0, explanation: "Shorthand is colon (e.g., :href)." },
      { id: 4, question: "What does 'v-html' do?", options: ["Sets text only", "Outputs real HTML (renders tags)", "Styles HTML", "Validates HTML"], correctAnswer: 1, explanation: "Use carefully to avoid XSS." },
      { id: 5, question: "Shorthand for v-bind?", options: ["@", ":", "#", "&"], correctAnswer: 1, explanation: ":src is same as v-bind:src." }
    ],
    3: [ // Level 3: Data & Methods
      { id: 1, question: "In Vue 2/Options API, where do you define state?", options: ["methods", "data() function", "computed", "watch"], correctAnswer: 1, explanation: "data() returns the initial reactive state." },
      { id: 2, question: "Where do you define functions used in the template?", options: ["data", "methods", "functions", "actions"], correctAnswer: 1, explanation: "The 'methods' object holds component logic." },
      { id: 3, question: "How to access data property 'msg' inside a method?", options: ["msg", "this.msg", "data.msg", "Instance.msg"], correctAnswer: 1, explanation: "'this' refers to the component instance in Options API." },
      { id: 4, question: "What is the 'Composition API' replacement for data and methods?", options: ["The setup() function", "The init() function", "The create() function", "No replacement"], correctAnswer: 0, explanation: "setup() is the entry point for Composition API logic." },
      { id: 5, question: "How to make a variable reactive in Composition API?", options: ["Just declare it", "Using ref() or reactive()", "Using state()", "Using set()"], correctAnswer: 1, explanation: "ref is for primitives, reactive is for objects." }
    ],
    4: [ // Level 4: Computed & Watchers
      { id: 1, question: "What is a 'Computed Property'?", options: ["A math formula", "A reactive property derived from other data that is cached based on dependencies", "A static value", "A database query"], correctAnswer: 1, explanation: "Computed properties only re-evaluate when dependencies change." },
      { id: 2, question: "Difference between Computed and Methods?", options: ["No difference", "Computed is cached; Methods run every time they are called/rendered", "Methods are faster", "Computed is for CSS only"], correctAnswer: 1, explanation: "Use computed for expensive calculations derived from state." },
      { id: 3, question: "What is a 'Watcher' (v-watch)?", options: ["A debugger", "A function that runs when a specific data property changes", "A timer", "A security tool"], correctAnswer: 1, explanation: "Useful for performing async or expensive operations in response to data changes." },
      { id: 4, question: "Can a computed property have a setter?", options: ["No, read-only only", "Yes, you can define get() and set()", "Only in Vue 2", "Only for arrays"], correctAnswer: 1, explanation: "Setters allow modifying dependencies when the computed property is assigned." },
      { id: 5, question: "When to use a Watcher instead of Computed?", options: ["Always", "When you need to perform side effects (like API calls) or async tasks", "For simple math", "For joining strings"], correctAnswer: 1, explanation: "Computed should be 'pure' derivations." }
    ],
    5: [ // Level 5: Class & Style Bindings
      { id: 1, question: "How to dynamically toggle a CSS class 'active' based on 'isActive' boolean?", options: ["v-class='active'", ":class='active'", ":class=\"{ active: isActive }\"", "class='{{ isActive }}'"], correctAnswer: 2, explanation: "Object syntax allows easy toggling." },
      { id: 2, question: "Can you pass an array to :class?", options: ["No", "Yes, to apply multiple classes", "Only if it contains numbers", "Only in Vue 3"], correctAnswer: 1, explanation: "Array syntax can combine static and dynamic classes." },
      { id: 3, question: "How to bind inline styles?", options: [":style='{ color: activeColor }'", "v-style='color:red'", "style='{{ ... }}'", "style:active"], correctAnswer: 0, explanation: "Similar object syntax as classes but for CSS properties." },
      { id: 4, question: "What happens to vendor prefixes in :style?", options: ["You must add them manually", "Vue automatically adds them", "CSS doesn't need them", "N/A"], correctAnswer: 1, explanation: "Vue handles prefixing (like -webkit-) automatically." },
      { id: 5, question: "Can computed properties be used with :class?", options: ["No", "Yes, and it's a very common pattern", "Only for strings", "Only in production"], correctAnswer: 1, explanation: "Extracting complex logic into a computed property keeps templates clean." }
    ],
    6: [ // Level 6: Conditional Rendering
      { id: 1, question: "Which directive is used for conditional rendering?", options: ["v-show", "v-if", "Both v-if and v-show", "v-else-if only"], correctAnswer: 2, explanation: "v-if and v-show serve different purposes." },
      { id: 2, question: "Difference between v-if and v-show?", options: ["No difference", "v-if renders/unmounts from DOM; v-show toggles CSS display", "v-show is slower", "v-if is for mobile only"], correctAnswer: 1, explanation: "v-if has higher toggle costs; v-show has higher initial render costs." },
      { id: 3, question: "How to render an alternative if v-if fails?", options: ["v-not", "v-else", "else", "v-otherwise"], correctAnswer: 1, explanation: "v-else must immediately follow a v-if or v-else-if element." },
      { id: 4, question: "Can you use v-if on a <template> tag?", options: ["No", "Yes, to group items without adding an extra element", "Only in Vue 2", "Only for loops"], correctAnswer: 1, explanation: "Handy for conditionally rendering multiple elements." },
      { id: 5, question: "What is the 'v-cloak' directive?", options: ["Invisible CSS", "Keeps the element hidden until the Vue instance is ready", "Encryption", "A design pattern"], correctAnswer: 1, explanation: "Prevents 'flash of uncompiled content'." }
    ],
    7: [ // Level 7: List Rendering
      { id: 1, question: "Which directive renders a list?", options: ["v-each", "v-list", "v-for", "v-map"], correctAnswer: 2, explanation: "v-for renders items based on an array or object." },
      { id: 2, question: "Required syntax for v-for?", options: ["v-for='item in items'", "v-for='items as item'", "v-for='item index items'", "v-for='items(item)'"], correctAnswer: 0, explanation: "Standard loop syntax." },
      { id: 3, question: "Why is :key important in v-for?", options: ["For CSS", "To help Vue track identity and optimize updates", "To count items", "N/A"], correctAnswer: 1, explanation: "Always use unique keys for performance and state stability." },
      { id: 4, question: "Can you iterate over an object with v-for?", options: ["No", "Yes, (value, key, index)", "Only (value)", "Only if it is a Map"], correctAnswer: 1, explanation: "Vue supports object iteration natively." },
      { id: 5, question: "What happens if you use v-if and v-for on the same element?", options: ["Works fine", "Discouraged (v-if has higher priority in Vue 3)", "v-for has priority", "Calculates both together"], correctAnswer: 1, explanation: "It's best to use a computed property or wrapper to avoid confusion." }
    ],
    8: [ // Level 8: Event Handling
      { id: 1, question: "Which directive listens to DOM events?", options: ["v-listen", "v-on", "v-event", "v-click"], correctAnswer: 1, explanation: "Shorthand is @ (e.g., @click)." },
      { id: 2, question: "How to call a method 'sayHi' on click?", options: ["v-on:click='sayHi'", "@click='sayHi()'", "Both work", "click:sayHi"], correctAnswer: 2, explanation: "Both function name or explicit call work." },
      { id: 3, question: "What is an event modifier?", options: ["Changes the event name", "Appends behavior like .prevent or .stop", "Slows down event", "CSS trick"], correctAnswer: 1, explanation: "@click.prevent is same as e.preventDefault()." },
      { id: 4, question: "Key modifier for Listeners (e.g. Enter key)?", options: ["@keyup.enter", "@enter", "@key:enter", "v-enter"], correctAnswer: 0, explanation: "Makes handling keyboard events very simple." },
      { id: 5, question: "How to pass the native event object together with a parameter?", options: ["$event", "$e", "nativeEvent", "just pass it"], correctAnswer: 0, explanation: "Use @click='warn(msg, $event)'." }
    ],
    9: [ // Level 9: Form Bindings
      { id: 1, question: "Which directive creates two-way data binding on form inputs?", options: ["v-bind", "v-model", "v-sync", "v-two"], correctAnswer: 1, explanation: "v-model syncs input value with data automatically." },
      { id: 2, question: "What does v-model do internally on a text input?", options: ["Binds value and listens for input event", "Updates CSS", "Queries database", "Validates text"], correctAnswer: 0, explanation: "Syntactic sugar for :value and @input." },
      { id: 3, question: "What does the '.lazy' modifier do for v-model?", options: ["Slows entry", "Syncs after 'change' event instead of 'input'", "Syncs once a day", "N/A"], correctAnswer: 1, explanation: "Only updates when user leaves the field or presses Enter." },
      { id: 4, question: "How to ensure v-model input is treated as a number?", options: ["type='number'", "v-model.number", "Both", "N/A"], correctAnswer: 2, explanation: "v-model.number automatically casts to Number type." },
      { id: 5, question: "Can v-model be used on custom components?", options: ["No", "Yes, it's a powerful way to make reusable inputs", "Only in Vue 3", "Only for strings"], correctAnswer: 1, explanation: "Requires specific props/events in the child component." }
    ],
    10: [ // Level 10: Components
      { id: 1, question: "How to pass data to a child component?", options: ["Using state", "Using props", "Using events", "Using CSS"], correctAnswer: 1, explanation: "Props are the 'input' of components." },
      { id: 2, question: "How do children communicate back to parents?", options: ["Directly modifying props", "Emitting events ($emit)", "Using global variables", "They can't"], correctAnswer: 1, explanation: "遵循 'Props down, Events up' pattern." },
      { id: 3, question: "What is a 'Slot'?", options: ["A space in a game", "A way to pass content (HTML/text) into a component's layout", "A type of data", "A route"], correctAnswer: 1, explanation: "Allows flexible component structures." },
      { id: 4, question: "What is 'Provide/Inject'?", options: ["A medical term", "A way for an ancestor to share data with all its descendants (deep nesting)", "Prop drilling", "N/A"], correctAnswer: 1, explanation: "Alternative to props for very deep hierarchies." },
      { id: 5, question: "What is 'Dynamic Component'?", options: ["Changing component CSS", "Using <component :is='current'> to switch components at runtime", "A fast component", "N/A"], correctAnswer: 1, explanation: "Useful for tabs or navigation." }
    ],
    11: [ // Level 11: Routing
      { id: 1, question: "What is the official router for Vue?", options: ["Vue Route", "Vue Router", "V-Router", "N/A"], correctAnswer: 1, explanation: "Handles navigation and URL mapping." },
      { id: 2, question: "Which component renders the matched route content?", options: ["<view>", "<router-view>", "<content>", "<route-target>"], correctAnswer: 1, explanation: "The placeholder where page components appear." },
      { id: 3, question: "Which component is used for navigation links?", options: ["<a>", "<router-link>", "<v-btn>", "<nav-link>"], correctAnswer: 1, explanation: "router-link prevents full page reloads." },
      { id: 4, question: "Shorthand to access the router instance in code?", options: ["this.$router", "this.router", "useRouter()", "Both A and C (Composition API)"], correctAnswer: 3, explanation: "Standard way to navigate programmatically." },
      { id: 5, question: "What is a 'Dynamic Route Match'?", options: ["Using a random URL", "Using segments like /user/:id to capture values", "Searching URLs", "N/A"], correctAnswer: 1, explanation: "Allows parameterized pages." }
    ]
  },

  'cpp': {
    1: [ // Level 1: Intro & Variables
      { id: 1, question: "Who created C++?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], correctAnswer: 1, explanation: "Bjarne Stroustrup developed C++ as an extension of C." },
      { id: 2, question: "Which header is used for standard input/output?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<math.h>"], correctAnswer: 1, explanation: "iostream is the standard C++ library for I/O." },
      { id: 3, question: "Difference between C and C++?", options: ["C++ is older", "C++ supports Object-Oriented Programming (OOP)", "C is faster for everything", "No difference"], correctAnswer: 1, explanation: "C++ adds OOP, templates, and more to C." },
      { id: 4, question: "What does 'cout' do?", options: ["Input data", "Output data to console", "Calculate sum", "Define a variable"], correctAnswer: 1, explanation: "cout stands for Console Output." },
      { id: 5, question: "How to declare a constant in C++?", options: ["const", "#define", "constexpr", "All of the above"], correctAnswer: 3, explanation: "All three can be used for constants depending on context." }
    ],
    2: [ // Level 2: OOP Basics
      { id: 1, question: "What is a 'Class' in C++?", options: ["A function", "A user-defined blueprint for objects", "A list of numbers", "A system setting"], correctAnswer: 1, explanation: "Classes define attributes and behaviors for objects." },
      { id: 2, question: "What are the three access specifiers?", options: ["open, closed, hidden", "public, private, protected", "static, final, volatile", "local, global, friend"], correctAnswer: 1, explanation: "These control visibility of members." },
      { id: 3, question: "What is an 'Object'?", options: ["A variable type", "An instance of a class", "A library file", "A pointer"], correctAnswer: 1, explanation: "Objects are the actual entities created from class blueprints." },
      { id: 4, question: "What is the default access specifier for a class?", options: ["public", "private", "protected", "internal"], correctAnswer: 1, explanation: "Class members are private by default; Struct members are public." },
      { id: 5, question: "Keyword to inherit from a class?", options: ["extends", "inherits", ":", "using"], correctAnswer: 2, explanation: "Syntax: class Derived : public Base { ... };" }
    ],
    3: [ // Level 3: Pointers & References
      { id: 1, question: "Difference between pointer and reference?", options: ["None", "Pointers can be null/reseated; references cannot usually", "References are slower", "Pointers use more RAM"], correctAnswer: 1, explanation: "References are essentially aliases for existing variables." },
      { id: 2, question: "Symbol for a reference variable?", options: ["*", "&", "@", "^"], correctAnswer: 1, explanation: "int &ref = originalVar;" },
      { id: 3, question: "What is 'new' keyword used for?", options: ["New local variable", "Dynamic memory allocation on the HEAP", "Resetting system", "Creating a scope"], correctAnswer: 1, explanation: "new returns a pointer to an allocated block on the heap." },
      { id: 4, question: "What MUST you do after using 'new'?", options: ["Nothing", "Use 'delete' to free memory", "Call main()", "Shut down program"], correctAnswer: 1, explanation: "Failing to delete dynamic memory causes leaks." },
      { id: 5, question: "What is a 'Smart Pointer'?", options: ["A pointer that knows math", "A pointer that manages its own memory (RAII)", "A fast pointer", "A global pointer"], correctAnswer: 1, explanation: "std::unique_ptr and std::shared_ptr prevent memory leaks." }
    ],
    4: [ // Level 4: STL (Standard Template Library)
      { id: 1, question: "What is the STL?", options: ["System Tool Library", "Standard Template Library - collection of containers and algorithms", "String Text Library", "Static Type Library"], correctAnswer: 1, explanation: "Provides ready-to-use lists, vectors, maps, etc." },
      { id: 2, question: "Common container for dynamic arrays?", options: ["std::list", "std::vector", "std::stack", "std::array"], correctAnswer: 1, explanation: "vector is the most versatile dynamic array in C++." },
      { id: 3, question: "What does 'push_back()' do in a vector?", options: ["Removes last item", "Adds item to the end", "Clears the vector", "Sorts the vector"], correctAnswer: 1, explanation: "Appends an element to the container." },
      { id: 4, question: "Which STL header contains algorithms like sort()?", options: ["<algo>", "<algorithms>", "<algorithm>", "<math>"], correctAnswer: 2, explanation: "#include <algorithm> is required." },
      { id: 5, question: "What is a 'Map' in C++ STL?", options: ["A GPS tool", "A collection of Key-Value pairs", "A list of strings", "A 2D array"], correctAnswer: 1, explanation: "std::map stores data indexed by keys." }
    ]
  },

  'rust': {
    1: [ // Level 1: Intro & Safety
      { id: 1, question: "Who created Rust?", options: ["Google", "Mozilla", "Microsoft", "Apple"], correctAnswer: 1, explanation: "Rust was originally a personal project by Graydon Hoare at Mozilla." },
      { id: 2, question: "Main selling point of Rust?", options: ["Speed", "Memory safety without a garbage collector", "Simplicity", "Web support"], correctAnswer: 1, explanation: "Rust's 'Ownership' model ensures safety at compile time." },
      { id: 3, question: "What is 'Cargo'?", options: ["A list of files", "Rust's package manager and build system", "A cloud platform", "A type of loop"], correctAnswer: 1, explanation: "Cargo handles dependencies, building, and testing." },
      { id: 4, question: "Which command runs a Rust project?", options: ["rust run", "cargo run", "cargo start", "rustc main.rs"], correctAnswer: 1, explanation: "cargo run builds and executes in one step." },
      { id: 5, question: "File extension for Rust source code?", options: [".ru", ".rst", ".rs", ".rust"], correctAnswer: 2, explanation: "main.rs is the standard filename." }
    ],
    2: [ // Level 2: Variables & Mutability
      { id: 1, question: "Are variables mutable by default in Rust?", options: ["Yes", "No", "Only for numbers", "Only in functions"], correctAnswer: 1, explanation: "Variables are immutable by default for safety." },
      { id: 2, question: "Keyword to make a variable mutable?", options: ["var", "mut", "let", "dynamic"], correctAnswer: 1, explanation: "let mut x = 5;" },
      { id: 3, question: "Difference between 'const' and 'immutable let'?", options: ["None", "Const must be type-annotated and can't be computed at runtime", "Let is faster", "Const is local only"], correctAnswer: 1, explanation: "Const values are literally substituted everywhere used." },
      { id: 4, question: "What is 'Shadowing'?", options: ["Hiding a variable", "Declaring a new variable with same name as a previous one", "Deleting a variable", "Inheritance"], correctAnswer: 1, explanation: "Shadowing allows reusing names without changing mutability." },
      { id: 5, question: "Can the type of a variable change via shadowing?", options: ["No", "Yes", "Only for strings", "Only in loops"], correctAnswer: 1, explanation: "Shadowing creates a new variable, so its type can differ." }
    ],
    3: [ // Level 3: Ownership (The Brain of Rust)
      { id: 1, question: "What is Rust's Ownership model?", options: ["Shared memory", "Rules that govern memory management via ownership, borrowing, and lifetimes", "Manual pointers", "Garbage collection"], correctAnswer: 1, explanation: "Ownership is Rust's unique way of managing memory safely." },
      { id: 2, question: "How many owners can a value have at one time?", options: ["One", "Unlimited", "Two", "Zero"], correctAnswer: 0, explanation: "Every value has a single variables as its owner." },
      { id: 3, question: "What happens when an owner goes out of scope?", options: ["Memory leak", "Value is automatically dropped/freed", "Program crashes", "Stored in cache"], correctAnswer: 1, explanation: "Rust calls 'drop' automatically." },
      { id: 4, question: "What is 'Borrowing'?", options: ["Copying a value", "Accessing a value using a reference without taking ownership", "Selling code", "Deleting data"], correctAnswer: 1, explanation: "Borrowing is done via references (&)." },
      { id: 5, question: "Difference between &T and &mut T?", options: ["None", "Many immutable borrows allowed; ONLY ONE mutable borrow allowed", "Mutable is faster", "Immutable is only for text"], correctAnswer: 1, explanation: "The 'aliasing XOR mutation' rule prevents data races." }
    ]
  },

  'angular': {
    1: [ // Level 1: Basics
      { id: 1, question: "What is Angular?", options: ["Library", "Platform and Framework for building client applications in HTML and TypeScript", "Backend language", "CSS tool"], correctAnswer: 1, explanation: "Angular is a comprehensive framework by Google." },
      { id: 2, question: "Language used primarily for Angular development?", options: ["JavaScript", "TypeScript", "Python", "Dart"], correctAnswer: 1, explanation: "TypeScript is the standard for modern Angular." },
      { id: 3, question: "What is a 'Component' in Angular?", options: ["A CSS file", "The basic building block of Angular UI", "A database record", "A server command"], correctAnswer: 1, explanation: "Components consist of a template, styles, and a class." },
      { id: 4, question: "What is the CLI command to create a new Angular project?", options: ["ng init", "ng new <name>", "angular create", "npm install angular"], correctAnswer: 1, explanation: "ng new starts the setup wizard." },
      { id: 5, question: "What is 'ngModules'?", options: ["Global variables", "Containers used to group components, directives, and services", "A replacement for NPM", "A types of loop"], correctAnswer: 1, explanation: "Standalone components are now common, but Modules are still a core concept." }
    ],
    2: [ // Level 2: Data Binding
      { id: 1, question: "Symbol for Interpolation?", options: ["{{ }}", "[[ ]]", "{ }", "( )"], correctAnswer: 0, explanation: "Displays component data in the view." },
      { id: 2, question: "Symbol for Property Binding?", options: ["( )", "[ ]", "*", "#"], correctAnswer: 1, explanation: "e.g. <img [src]='imageUrl'>." },
      { id: 3, question: "Symbol for Event Binding?", options: ["( )", "[ ]", "*", "#"], correctAnswer: 0, explanation: "e.g. <button (click)='onSave()'>." },
      { id: 4, question: "Syntax for Two-way Data Binding?", options: ["[ ]", "( )", "[ ( ) ]", "*ngTwoWay"], correctAnswer: 2, explanation: "The 'banana in a box' syntax: [(ngModel)]." },
      { id: 5, question: "What is an 'Observable' used for?", options: ["Styling", "Handling asynchronous data and streams (RxJS)", "Loops", "Defining variables"], correctAnswer: 1, explanation: "Angular relies heavily on RxJS for async operations." }
    ]
  },

  'postgresql': {
    1: [ // Level 1: Intro
      { id: 1, question: "What is PostgreSQL?", options: ["A NoSQL database", "An Advanced Object-Relational Database System (ORDBMS)", "A search engine", "A CSS framework"], correctAnswer: 1, explanation: "PostgreSQL is known as the world's most advanced open-source database." },
      { id: 2, question: "Is PostgreSQL ACID compliant?", options: ["No", "Yes", "Only in latest version", "Partially"], correctAnswer: 1, explanation: "ACID compliance ensures reliability of transactions." },
      { id: 3, question: "Command to login to PostgreSQL command line?", options: ["sql", "mysql", "psql", "db-access"], correctAnswer: 2, explanation: "psql is the standard CLI tool." },
      { id: 4, question: "Which symbol represents 'all columns' in a SELECT?", options: ["@", "*", "&", "#"], correctAnswer: 1, explanation: "SELECT * FROM table;" },
      { id: 5, question: "Difference between SQL and PostgreSQL?", options: ["PostgreSQL is the system; SQL is the language", "PostgreSQL is older", "PostgreSQL is only for Linux", "No difference"], correctAnswer: 0, explanation: "PostgreSQL implements the SQL standard." }
    ],
    2: [ // Level 2: Advanced Types
      { id: 1, question: "What is JSONB in PostgreSQL?", options: ["Binary JSON - optimized for speed and indexing", "Text JSON", "A bug", "A version of JavaScript"], correctAnswer: 0, explanation: "JSONB is much more efficient than plain JSON for querying." },
      { id: 2, question: "Can PostgreSQL store Arrays?", options: ["No", "Yes, it has native array support", "Only strings", "Only in paid version"], correctAnswer: 1, explanation: "PostgreSQL allows defining columns as arrays of types." },
      { id: 3, question: "What is 'hstore'?", options: ["History store", "A module for storing sets of Key-Value pairs in a single column", "High speed store", "Header store"], correctAnswer: 1, explanation: "Useful for semi-structured data before JSONB became dominant." },
      { id: 4, question: "What is 'Upsert'?", options: ["An error", "INSERT ON CONFLICT UPDATE", "Deleting data", "Updating logs"], correctAnswer: 1, explanation: "Upsert inserts a row or updates it if it already exists." },
      { id: 5, question: "What tool is commonly used to manage PostgreSQL visually?", options: ["MySQL Workbench", "pgAdmin", "phpMyAdmin", "DBeaver (generic)"], correctAnswer: 1, explanation: "pgAdmin is the official administration tool." }
    ]
  },

  'frontend-stack': {
    1: [ // Level 1: Core Web
      { id: 1, question: "Which languages are the foundation of Frontend?", options: ["Java/SQL", "HTML/CSS/JS", "Python/Django", "C++/Qt"], correctAnswer: 1, explanation: "HTML (Structure), CSS (Style), and JS (Behavior) are the 'Big Three'." },
      { id: 2, question: "What is 'Responsive Design'?", options: ["Design that reacts to voice", "Design that adapts to different screen sizes", "Design that loads fast", "Design with many images"], correctAnswer: 1, explanation: "Responsive design ensures quality experience on mobile, tablet, and desktop." },
      { id: 3, question: "What is the role of Git in Frontend?", options: ["To style pages", "Version control for tracking code changes", "To host databases", "To compile CSS"], correctAnswer: 1, explanation: "Git is essential for team collaboration and versioning." },
      { id: 4, question: "What is a 'Transpiler' like Babel?", options: ["A mini browser", "Tool that converts modern JS into older versions for compatibility", "A CSS tool", "A database link"], correctAnswer: 1, explanation: "Ensures modern code runs on older browsers." },
      { id: 5, question: "What is 'Specificity' in CSS?", options: ["Speed of loading", "The rule that determines which CSS styles are applied based on selector weight", "A type of color", "Mobile-first design"], correctAnswer: 1, explanation: "IDs have higher specificity than classes, which are higher than elements." }
    ]
  },

  'backend-stack': {
    1: [ // Level 1: Server Basics
      { id: 1, question: "What is the primary role of a Backend?", options: ["Displaying images", "Handling data, business logic, and server operations", "Designing UI", "Styling text"], correctAnswer: 1, explanation: "The backend is the 'brain' that processes data for the frontend." },
      { id: 2, question: "What is an API?", options: ["Advanced Program Icon", "Application Programming Interface - a bridge for software communication", "Automated Process Info", "A type of server"], correctAnswer: 1, explanation: "APIs allow different systems (like frontend and backend) to talk." },
      { id: 3, question: "Common format for data exchange in APIs?", options: ["XML", "JSON", "CSV", "Plain Text"], correctAnswer: 1, explanation: "JSON is the industry standard for modern web APIs." },
      { id: 4, question: "What is 'Middleware'?", options: ["The computer case", "Functions that run between receiving a request and sending a response", "The internet wire", "A type of database"], correctAnswer: 1, explanation: "Middleware handles things like auth, logging, and parsing." },
      { id: 5, question: "What is the difference between SQL and NoSQL?", options: ["No difference", "SQL is relational (tables); NoSQL is non-relational (documents/keys)", "SQL is newer", "NoSQL is only for games"], correctAnswer: 1, explanation: "Choosing between them depends on data structure and scale needs." }
    ]
  },

  'mern-stack': {
    1: [ // Level 1: The Stack
      { id: 1, question: "What does MERN stand for?", options: ["MySQL, Express, React, Node", "MongoDB, Express, React, Node", "MongoDB, Ember, Ruby, Node", "MariaDB, Express, React, Next"], correctAnswer: 1, explanation: "MERN is a pure JavaScript full-stack." },
      { id: 2, question: "In MERN, which part handles the database?", options: ["React", "Express", "Node", "MongoDB"], correctAnswer: 3, explanation: "MongoDB is the document-oriented NoSQL database." },
      { id: 3, question: "Role of Express.js in MERN?", options: ["Frontend UI", "Backend web framework for Node.js", "State management", "Database driver"], correctAnswer: 1, explanation: "Express simplifies building APIs and handling routes." },
      { id: 4, question: "How does React talk to the Node/Express backend?", options: ["Via direct SQL", "Via HTTP requests (fetch/axios) to API endpoints", "Via CSS", "They don't talk"], correctAnswer: 1, explanation: "The frontend usually makes REST or GraphQL calls." },
      { id: 5, question: "Why is MERN popular?", options: ["Uniformity (JavaScript everywhere)", "It is free", "It is only for mobiles", "It is owned by Google"], correctAnswer: 0, explanation: "Developers only need to master one language for the whole stack." }
    ]
  },

  'pern-stack': {
    1: [ // Level 1: The Stack
      { id: 1, question: "What does PERN stand for?", options: ["PostgreSQL, Express, React, Node", "Python, Express, React, Node", "PostgreSQL, Ember, React, Node", "PostgreSQL, Elixir, React, Node"], correctAnswer: 0, explanation: "PERN is similar to MERN but uses a relational (SQL) database." },
      { id: 2, question: "Key difference between MERN and PERN?", options: ["The frontend", "The database (PostgreSQL vs MongoDB)", "The server", "The OS"], correctAnswer: 1, explanation: "Choosing PERN often implies a need for relational data and robust transactions." },
      { id: 3, question: "Is PostgreSQL relational?", options: ["No", "Yes", "Only in PERN", "Sometimes"], correctAnswer: 1, explanation: "PostgreSQL is a powerful object-relational database." },
      { id: 4, question: "Common ORM for PERN stack in Node.js?", options: ["Mongoose", "Sequelize or Prisma", "Hibernate", "SQLDirect"], correctAnswer: 1, explanation: "ORMs map database tables to JS objects." },
      { id: 5, question: "What is 'ACID' in the context of PERN?", options: ["An error", "Set of properties ensuring database transactions are reliable", "A testing tool", "A script"], correctAnswer: 1, explanation: "Atomicity, Consistency, Isolation, Durability." }
    ]
  },

  'python-fullstack': {
    1: [ // Level 1: Django/Flask
      { id: 1, question: "Common Python web frameworks?", options: ["React/Vue", "Django/Flask", "Laravel/Symfony", "Express/Hapi"], correctAnswer: 1, explanation: "Django and Flask are the top two Python web frameworks." },
      { id: 2, question: "What is Django's MVT pattern?", options: ["Model-View-Template", "Model-View-Transition", "Map-Value-Type", "None"], correctAnswer: 0, explanation: "Django uses MVT, where Template handles the UI." },
      { id: 3, question: "Flask is considered which type of framework?", options: ["Monolith", "Micro-framework", "NoSQL library", "CSS framework"], correctAnswer: 1, explanation: "Flask is lightweight and modular." },
      { id: 4, question: "Keyword to manage DB migrations in Django?", options: ["npm migration", "python manage.py makemigrations", "db-init", "git migrate"], correctAnswer: 1, explanation: "Django has built-in database management commands." },
      { id: 5, question: "What is Jinja2?", options: ["A database", "A templating engine for Python/Flask", "A CSS preprocessor", "A search engine"], correctAnswer: 1, explanation: "Jinja2 allows embedding logic into HTML." }
    ]
  },

  'java-fullstack': {
    1: [ // Level 1: Spring Boot
      { id: 1, question: "Popular framework for Java microservices?", options: ["Spring Boot", "React", "Django", "PHP"], correctAnswer: 0, explanation: "Spring Boot is the standard for modern Java backend apps." },
      { id: 2, question: "What is Maven?", options: ["A browser", "Build automation tool and dependency manager", "A database", "Java compiler"], correctAnswer: 1, explanation: "Maven manages project lifecycle and external libraries." },
      { id: 3, question: "What does the @RestController annotation do?", options: ["Sends emails", "Defines a class as a RESTful web service controller", "Creates a table", "Saves to memory"], correctAnswer: 1, explanation: "Combines @Controller and @ResponseBody." },
      { id: 4, question: "What is JPA?", options: ["Java Personal App", "Java Persistence API - standard for ORM", "Java Print Area", "JSON Path Access"], correctAnswer: 1, explanation: "JPA allows mapping Java objects to relational databases." },
      { id: 5, question: "Common Java IDE?", options: ["Notepad", "IntelliJ IDEA or Eclipse", "Excel", "Photoshop"], correctAnswer: 1, explanation: "IntelliJ is highly popular for Java development." }
    ]
  },

  'php-fullstack': {
    1: [ // Level 1: Laravel Basics
      { id: 1, question: "Which is a modern PHP framework?", options: ["Laravel", "React", "Angular", "Express"], correctAnswer: 0, explanation: "Laravel is currently the top PHP framework." },
      { id: 2, question: "What is 'Artisan' in Laravel?", options: ["A CSS framework", "Command-line interface for common tasks", "A database name", "A browser"], correctAnswer: 1, explanation: "Artisan provides helpful commands for migrations, testing, and more." },
      { id: 3, question: "Laravel's templating engine?", options: ["Blade", "Handlebars", "EJS", "Pug"], correctAnswer: 0, explanation: "Blade allows smooth PHP integration in HTML." },
      { id: 4, question: "What is Eloquent?", options: ["A type of loop", "Laravel's Object-Relational Mapper (ORM)", "A UI library", "A server type"], correctAnswer: 1, explanation: "Eloquent makes database interaction intuitive using PHP syntax." },
      { id: 5, question: "Dependency manager for PHP?", options: ["NPM", "Composer", "Pip", "Maven"], correctAnswer: 1, explanation: "Composer handles PHP libraries and packages." }
    ]
  },

  'mobile-android': {
    1: [ // Level 1: Fundamentals
      { id: 1, question: "Primary language for modern Android development?", options: ["Java", "Kotlin", "Swift", "C++"], correctAnswer: 1, explanation: "Google made Kotlin the preferred language for Android in 2017." },
      { id: 2, question: "What is an 'Activity'?", options: ["A backup", "A single screen with a user interface", "A database table", "A network request"], correctAnswer: 1, explanation: "Activities are the core UI components of Android apps." },
      { id: 3, question: "Tool used to build Android apps?", options: ["Xcode", "Android Studio", "VS Code", "Eclipse"], correctAnswer: 1, explanation: "Android Studio is the official IDE based on IntelliJ." },
      { id: 4, question: "What is 'Jetpack Compose'?", options: ["Music app", "Modern toolkit for building native Android UI", "A battery setting", "An emulator"], correctAnswer: 1, explanation: "It uses a declarative approach similar to React/Vue." },
      { id: 5, question: "File that defines app metadata (permissions, name)?", options: ["index.html", "AndroidManifest.xml", "config.json", "styles.css"], correctAnswer: 1, explanation: "The Manifest is essential for every Android app." }
    ]
  },

  'game-dev': {
    1: [ // Level 1: Intro
      { id: 1, question: "Popular game engine using C#?", options: ["Unreal Engine", "Unity", "Godot", "Both Unity and Godot (C# version)"], correctAnswer: 3, explanation: "Unity is famous for C#; Godot also supports it." },
      { id: 2, question: "What is a 'Game Loop'?", options: ["A type of sound", "Cycle of inputs, updates, and rendering", "An error", "A level reset"], correctAnswer: 1, explanation: "The game loop keeps the game running at a specific FPS." },
      { id: 3, question: "What does FPS stand for?", options: ["Fast Player Speed", "Frames Per Second", "File Path System", "Final Pixel Scale"], correctAnswer: 1, explanation: "Measures visual performance (60 FPS is standard)." },
      { id: 4, question: "Role of Physics Engine?", options: ["Handling dialogues", "Simulating gravity, collisions, and forces", "Coloring pixels", "Saving games"], correctAnswer: 1, explanation: "Engines like Box2D or PhysX handle 'realistic' movements." },
      { id: 5, question: "What is a 'Sprite'?", options: ["A soda", "A 2D graphic or image in a game", "A 3D model", "A network packet"], correctAnswer: 1, explanation: "Sprites are the building blocks of 2D game visuals." }
    ]
  },

  'ai-ml-stack': {
    1: [ // Level 1: Basics
      { id: 1, question: "Core library for math in Python ML?", options: ["React", "NumPy", "Express", "Tailwind"], correctAnswer: 1, explanation: "NumPy provides support for large, multi-dimensional arrays and matrices." },
      { id: 2, question: "What is 'Supervised Learning'?", options: ["Learning with a teacher", "Training a model with labeled data", "Web scraping", "Manual coding"], correctAnswer: 1, explanation: "The model learns from input-output pairs." },
      { id: 3, question: "Common library for deep learning?", options: ["Angular", "TensorFlow or PyTorch", "PostgreSQL", "Babel"], correctAnswer: 1, explanation: "These frameworks specialize in neural networks." },
      { id: 4, question: "What is an 'Algorithm' in ML?", options: ["A variable", "A set of rules for learning patterns from data", "A fancy name for code", "A hardware server"], correctAnswer: 1, explanation: "Algorithms like Linear Regression or Random Forest process data." },
      { id: 5, question: "Primary language for Data Science?", options: ["PHP", "Python", "Swift", "Ruby"], correctAnswer: 1, explanation: "Python dominates due to its rich ecosystem (Pandas, Scikit-learn)." }
    ]
  },

  'devops-stack': {
    1: [ // Level 1: Concepts
      { id: 1, question: "What does DevOps stand for?", options: ["Developer Operations", "Development and Operations integration", "Deleted Operations", "Daily Optional tasks"], correctAnswer: 1, explanation: "DevOps aims to bridge the gap between development and IT operations." },
      { id: 2, question: "What is Docker used for?", options: ["Editing videos", "Containerization of applications", "Styling text", "Hosting static sites"], correctAnswer: 1, explanation: "Docker ensures apps run consistently across environments." },
      { id: 3, question: "What is CI/CD?", options: ["Code Integration / Content Display", "Continuous Integration / Continuous Deployment", "Cancel Initial / Core Delivery", "None"], correctAnswer: 1, explanation: "Automates the building, testing, and deployment of code." },
      { id: 4, question: "Popular tool for CI/CD pipelines?", options: ["Photoshop", "Jenkins or GitHub Actions", "Word", "Spotify"], correctAnswer: 1, explanation: "These tools manage automated workflows." },
      { id: 5, question: "What is Infrastructure as Code (IaC)?", options: ["Building houses with code", "Managing servers and networks through configuration files (e.g. Terraform)", "A types of UI", "Hand-coding every server"], correctAnswer: 1, explanation: "Allows versioning and automation of cloud setup." }
    ]
  }
};

// Helper function to get questions for a specific course and level
export const getQuestionsForLevel = (courseId, levelId) => {
  const normalizedCourseId = courseId?.toLowerCase();
  const level = parseInt(levelId);
  
  // Get course questions
  const courseQuestions = QUIZ_BANK[normalizedCourseId];
  
  if (courseQuestions && courseQuestions[level]) {
    return courseQuestions[level];
  }
  
  // Fallback to default questions if course/level not found
  return QUIZ_BANK['default'] || [];
};

// Default fallback questions for courses without specific questions
QUIZ_BANK['default'] = [
  { id: 1, question: "What is the main purpose of version control?", options: ["Compiling code", "Tracking changes and collaboration", "Running tests", "Deploying apps"], correctAnswer: 1, explanation: "Version control tracks code changes and enables team collaboration." },
  { id: 2, question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Program Integration", "Automated Process Implementation", "Application Process Interface"], correctAnswer: 0, explanation: "API = Application Programming Interface for software communication." },
  { id: 3, question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Tree"], correctAnswer: 1, explanation: "Stack uses Last In, First Out. Queue uses First In, First Out." },
  { id: 4, question: "What is an algorithm?", options: ["Programming language", "Step-by-step procedure", "Data type", "Error message"], correctAnswer: 1, explanation: "An algorithm is a set of instructions to solve a problem." },
  { id: 5, question: "What does DRY stand for?", options: ["Don't Repeat Yourself", "Do Repeat Yearly", "Data Replication Yearly", "Debug Run Yield"], correctAnswer: 0, explanation: "DRY principle reduces code duplication." }
];
