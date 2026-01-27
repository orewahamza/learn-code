// Study Resources for all programming languages and courses
// Organized by course ID matching roadmapData.js

export const STUDY_RESOURCES = {
  // =====================
  // CORE LANGUAGES
  // =====================
  
  'javascript': {
    documentation: [
      { title: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', type: 'official' },
      { title: 'JavaScript.info', url: 'https://javascript.info/', type: 'tutorial' },
      { title: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'freeCodeCamp JavaScript Course', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', type: 'interactive' },
      { title: 'Codecademy JavaScript', url: 'https://www.codecademy.com/learn/introduction-to-javascript', type: 'interactive' },
      { title: 'JavaScript30 - 30 Day Challenge', url: 'https://javascript30.com/', type: 'project-based' },
    ],
    videos: [
      { title: 'JavaScript Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=lfmg-EJ8gm4', duration: '12h' },
      { title: 'JavaScript Tutorial for Beginners - Mosh', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', duration: '1h' },
      { title: 'Traversy Media JS Crash Course', url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c', duration: '1.5h' },
    ],
    practice: [
      { title: 'LeetCode JavaScript Problems', url: 'https://leetcode.com/problemset/all/?topicSlugs=array', type: 'problems' },
      { title: 'Codewars JavaScript Kata', url: 'https://www.codewars.com/kata/search/javascript', type: 'challenges' },
      { title: 'Exercism JavaScript Track', url: 'https://exercism.org/tracks/javascript', type: 'mentored' },
    ],
    cheatsheets: [
      { title: 'JavaScript Cheat Sheet', url: 'https://htmlcheatsheet.com/js/', type: 'reference' },
      { title: 'Modern JS Cheatsheet', url: 'https://mbeaudru.github.io/modern-js-cheatsheet/', type: 'reference' },
    ]
  },

  'python': {
    documentation: [
      { title: 'Python Official Docs', url: 'https://docs.python.org/3/', type: 'official' },
      { title: 'Real Python', url: 'https://realpython.com/', type: 'tutorial' },
      { title: 'W3Schools Python', url: 'https://www.w3schools.com/python/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'freeCodeCamp Python Course', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', type: 'interactive' },
      { title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/', type: 'book' },
      { title: 'Python for Everybody', url: 'https://www.py4e.com/', type: 'course' },
    ],
    videos: [
      { title: 'Python Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=XKHEtdqhLK8', duration: '12h' },
      { title: 'Python for Beginners - Mosh', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', duration: '6h' },
      { title: 'CS50 Python Course - Harvard', url: 'https://www.youtube.com/watch?v=nLRL_NcnK-4', duration: '16h' },
    ],
    practice: [
      { title: 'LeetCode Python Problems', url: 'https://leetcode.com/problemset/all/', type: 'problems' },
      { title: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python', type: 'challenges' },
      { title: 'Exercism Python Track', url: 'https://exercism.org/tracks/python', type: 'mentored' },
    ],
    cheatsheets: [
      { title: 'Python Cheat Sheet', url: 'https://www.pythoncheatsheet.org/', type: 'reference' },
      { title: 'Comprehensive Python Cheatsheet', url: 'https://gto76.github.io/python-cheatsheet/', type: 'reference' },
    ]
  },

  'java': {
    documentation: [
      { title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/en/java/', type: 'official' },
      { title: 'W3Schools Java', url: 'https://www.w3schools.com/java/', type: 'tutorial' },
      { title: 'Baeldung Java Tutorials', url: 'https://www.baeldung.com/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'Codecademy Java', url: 'https://www.codecademy.com/learn/learn-java', type: 'interactive' },
      { title: 'Java Tutorial - Javatpoint', url: 'https://www.javatpoint.com/java-tutorial', type: 'tutorial' },
      { title: 'MOOC Java Programming', url: 'https://java-programming.mooc.fi/', type: 'course' },
    ],
    videos: [
      { title: 'Java Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=xk4_1vDrzzo', duration: '12h' },
      { title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', duration: '2.5h' },
      { title: 'Java Programming - Telusko', url: 'https://www.youtube.com/watch?v=BGTx91t8q50', duration: '12h' },
    ],
    practice: [
      { title: 'LeetCode', url: 'https://leetcode.com/', type: 'problems' },
      { title: 'HackerRank Java', url: 'https://www.hackerrank.com/domains/java', type: 'challenges' },
      { title: 'CodingBat Java', url: 'https://codingbat.com/java', type: 'practice' },
    ],
    cheatsheets: [
      { title: 'Java Cheat Sheet', url: 'https://introcs.cs.princeton.edu/java/11cheatsheet/', type: 'reference' },
    ]
  },

  'c': {
    documentation: [
      { title: 'C Programming - cppreference', url: 'https://en.cppreference.com/w/c', type: 'official' },
      { title: 'Learn-C Interactive', url: 'https://www.learn-c.org/', type: 'interactive' },
      { title: 'W3Schools C', url: 'https://www.w3schools.com/c/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'C Programming Tutorial - Programiz', url: 'https://www.programiz.com/c-programming', type: 'tutorial' },
      { title: 'Tutorialspoint C', url: 'https://www.tutorialspoint.com/cprogramming/', type: 'tutorial' },
    ],
    videos: [
      { title: 'C Programming Full Course', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0', duration: '4h' },
      { title: 'C Programming for Beginners', url: 'https://www.youtube.com/watch?v=87SH2Cn0s9A', duration: '3.5h' },
    ],
    practice: [
      { title: 'Exercism C Track', url: 'https://exercism.org/tracks/c', type: 'mentored' },
      { title: 'HackerRank C', url: 'https://www.hackerrank.com/domains/c', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'C Reference Card', url: 'https://users.ece.utexas.edu/~adnan/c-refcard.pdf', type: 'reference' },
    ]
  },

  'cpp': {
    documentation: [
      { title: 'cppreference.com', url: 'https://en.cppreference.com/', type: 'official' },
      { title: 'LearnCpp', url: 'https://www.learncpp.com/', type: 'tutorial' },
      { title: 'W3Schools C++', url: 'https://www.w3schools.com/cpp/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'C++ Tutorial - Programiz', url: 'https://www.programiz.com/cpp-programming', type: 'tutorial' },
      { title: 'Codecademy Learn C++', url: 'https://www.codecademy.com/learn/learn-c-plus-plus', type: 'interactive' },
    ],
    videos: [
      { title: 'C++ Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=-TkoO8Z07hI', duration: '6h' },
      { title: 'C++ Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y', duration: '4h' },
    ],
    practice: [
      { title: 'LeetCode', url: 'https://leetcode.com/', type: 'problems' },
      { title: 'Codeforces', url: 'https://codeforces.com/', type: 'competitive' },
    ],
    cheatsheets: [
      { title: 'C++ Cheat Sheet', url: 'https://hackingcpp.com/cpp/cheat_sheets.html', type: 'reference' },
    ]
  },

  'csharp': {
    documentation: [
      { title: 'Microsoft C# Docs', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', type: 'official' },
      { title: 'W3Schools C#', url: 'https://www.w3schools.com/cs/', type: 'tutorial' },
      { title: 'Tutorialspoint C#', url: 'https://www.tutorialspoint.com/csharp/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'Codecademy Learn C#', url: 'https://www.codecademy.com/learn/learn-c-sharp', type: 'interactive' },
      { title: 'C# Station', url: 'http://www.csharp-station.com/', type: 'tutorial' },
    ],
    videos: [
      { title: 'C# Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ', duration: '5h' },
      { title: 'C# Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=gfkTfcpWqAY', duration: '4.5h' },
    ],
    practice: [
      { title: 'Exercism C# Track', url: 'https://exercism.org/tracks/csharp', type: 'mentored' },
      { title: 'HackerRank C#', url: 'https://www.hackerrank.com/domains/tutorials/30-days-of-code', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'C# Cheat Sheet', url: 'https://www.thecodingguys.net/resources/cs-cheat-sheet.pdf', type: 'reference' },
    ]
  },

  'php': {
    documentation: [
      { title: 'PHP Official Manual', url: 'https://www.php.net/manual/en/', type: 'official' },
      { title: 'W3Schools PHP', url: 'https://www.w3schools.com/php/', type: 'tutorial' },
      { title: 'PHP The Right Way', url: 'https://phptherightway.com/', type: 'best-practices' },
    ],
    tutorials: [
      { title: 'Codecademy Learn PHP', url: 'https://www.codecademy.com/learn/learn-php', type: 'interactive' },
      { title: 'Laracasts', url: 'https://laracasts.com/', type: 'video-course' },
    ],
    videos: [
      { title: 'PHP Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=zZ6vybT1HQs', duration: '4h' },
      { title: 'PHP Tutorial - Programming with Mosh', url: 'https://www.youtube.com/watch?v=OK_JCtrrv-c', duration: '2h' },
    ],
    practice: [
      { title: 'Exercism PHP Track', url: 'https://exercism.org/tracks/php', type: 'mentored' },
      { title: 'HackerRank PHP', url: 'https://www.hackerrank.com/', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'PHP Cheat Sheet', url: 'https://websitesetup.org/php-cheat-sheet/', type: 'reference' },
    ]
  },

  'go': {
    documentation: [
      { title: 'Go Official Docs', url: 'https://go.dev/doc/', type: 'official' },
      { title: 'Go by Example', url: 'https://gobyexample.com/', type: 'examples' },
      { title: 'Tour of Go', url: 'https://go.dev/tour/', type: 'interactive' },
    ],
    tutorials: [
      { title: 'Learn Go with Tests', url: 'https://quii.gitbook.io/learn-go-with-tests/', type: 'tdd' },
      { title: 'Go Tutorial - Tutorialspoint', url: 'https://www.tutorialspoint.com/go/', type: 'tutorial' },
    ],
    videos: [
      { title: 'Go Full Course - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=yyUHQIec83I', duration: '3h' },
      { title: 'Go Programming - FreeCodeCamp', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo', duration: '7h' },
    ],
    practice: [
      { title: 'Exercism Go Track', url: 'https://exercism.org/tracks/go', type: 'mentored' },
      { title: 'Gophercises', url: 'https://gophercises.com/', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'Go Cheat Sheet', url: 'https://devhints.io/go', type: 'reference' },
    ]
  },

  'rust': {
    documentation: [
      { title: 'The Rust Book', url: 'https://doc.rust-lang.org/book/', type: 'official' },
      { title: 'Rust by Example', url: 'https://doc.rust-lang.org/rust-by-example/', type: 'examples' },
      { title: 'Rustlings', url: 'https://github.com/rust-lang/rustlings', type: 'interactive' },
    ],
    tutorials: [
      { title: 'Rust Tutorial - Tutorialspoint', url: 'https://www.tutorialspoint.com/rust/', type: 'tutorial' },
      { title: 'Comprehensive Rust', url: 'https://google.github.io/comprehensive-rust/', type: 'google' },
    ],
    videos: [
      { title: 'Rust Full Course - FreeCodeCamp', url: 'https://www.youtube.com/watch?v=BpPEoZW5IiY', duration: '14h' },
      { title: 'Rust Tutorial - Doug Milford', url: 'https://www.youtube.com/playlist?list=PLLqEtX6ql2EyPAZ1M2_C0GgVd4A-_L4_5', duration: '8h' },
    ],
    practice: [
      { title: 'Exercism Rust Track', url: 'https://exercism.org/tracks/rust', type: 'mentored' },
      { title: 'Advent of Code in Rust', url: 'https://adventofcode.com/', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'Rust Cheat Sheet', url: 'https://cheats.rs/', type: 'reference' },
    ]
  },

  'typescript': {
    documentation: [
      { title: 'TypeScript Official Docs', url: 'https://www.typescriptlang.org/docs/', type: 'official' },
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/', type: 'official' },
      { title: 'W3Schools TypeScript', url: 'https://www.w3schools.com/typescript/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'Codecademy Learn TypeScript', url: 'https://www.codecademy.com/learn/learn-typescript', type: 'interactive' },
      { title: 'TypeScript Tutorial - Tutorialspoint', url: 'https://www.tutorialspoint.com/typescript/', type: 'tutorial' },
    ],
    videos: [
      { title: 'TypeScript Full Course - Mosh', url: 'https://www.youtube.com/watch?v=d56mG7DezGs', duration: '1h' },
      { title: 'TypeScript Tutorial - Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI', duration: '3h' },
    ],
    practice: [
      { title: 'Exercism TypeScript Track', url: 'https://exercism.org/tracks/typescript', type: 'mentored' },
      { title: 'Type Challenges', url: 'https://github.com/type-challenges/type-challenges', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'TypeScript Cheat Sheet', url: 'https://www.typescriptlang.org/cheatsheets', type: 'reference' },
    ]
  },

  // =====================
  // WEB & UI
  // =====================

  'html': {
    documentation: [
      { title: 'MDN HTML Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'official' },
      { title: 'W3Schools HTML', url: 'https://www.w3schools.com/html/', type: 'tutorial' },
      { title: 'HTML Reference', url: 'https://htmlreference.io/', type: 'reference' },
    ],
    tutorials: [
      { title: 'freeCodeCamp HTML', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'interactive' },
      { title: 'Codecademy Learn HTML', url: 'https://www.codecademy.com/learn/learn-html', type: 'interactive' },
    ],
    videos: [
      { title: 'HTML Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=HGTJBPNC-Gw', duration: '2h' },
      { title: 'HTML Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', duration: '1h' },
    ],
    practice: [
      { title: 'freeCodeCamp Exercises', url: 'https://www.freecodecamp.org/', type: 'interactive' },
      { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'HTML Cheat Sheet', url: 'https://htmlcheatsheet.com/', type: 'reference' },
    ]
  },

  'css': {
    documentation: [
      { title: 'MDN CSS Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', type: 'official' },
      { title: 'W3Schools CSS', url: 'https://www.w3schools.com/css/', type: 'tutorial' },
      { title: 'CSS-Tricks', url: 'https://css-tricks.com/', type: 'articles' },
    ],
    tutorials: [
      { title: 'freeCodeCamp CSS', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', type: 'interactive' },
      { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/', type: 'game' },
      { title: 'Grid Garden', url: 'https://cssgridgarden.com/', type: 'game' },
    ],
    videos: [
      { title: 'CSS Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=wRNinF7YQqQ', duration: '2.5h' },
      { title: 'CSS Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', duration: '1.5h' },
    ],
    practice: [
      { title: 'CSS Battle', url: 'https://cssbattle.dev/', type: 'challenges' },
      { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'CSS Cheat Sheet', url: 'https://htmlcheatsheet.com/css/', type: 'reference' },
      { title: 'Flexbox Cheat Sheet', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'reference' },
    ]
  },

  'react': {
    documentation: [
      { title: 'React Official Docs', url: 'https://react.dev/', type: 'official' },
      { title: 'W3Schools React', url: 'https://www.w3schools.com/react/', type: 'tutorial' },
      { title: 'React Patterns', url: 'https://reactpatterns.com/', type: 'patterns' },
    ],
    tutorials: [
      { title: 'freeCodeCamp React', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/#react', type: 'interactive' },
      { title: 'Codecademy Learn React', url: 'https://www.codecademy.com/learn/react-101', type: 'interactive' },
      { title: 'Full Stack Open', url: 'https://fullstackopen.com/', type: 'course' },
    ],
    videos: [
      { title: 'React Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA', duration: '3h' },
      { title: 'React Tutorial - Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d', duration: '5h' },
      { title: 'React Course 2024', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', duration: '12h' },
    ],
    practice: [
      { title: 'React Exercises', url: 'https://reactexercise.com/', type: 'exercises' },
      { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'React Cheat Sheet', url: 'https://devhints.io/react', type: 'reference' },
      { title: 'React Hooks Cheat Sheet', url: 'https://react.dev/reference/react', type: 'reference' },
    ]
  },

  'nodejs': {
    documentation: [
      { title: 'Node.js Official Docs', url: 'https://nodejs.org/docs/latest/api/', type: 'official' },
      { title: 'W3Schools Node.js', url: 'https://www.w3schools.com/nodejs/', type: 'tutorial' },
      { title: 'Node.js Dev Guide', url: 'https://nodejs.dev/en/learn/', type: 'guide' },
    ],
    tutorials: [
      { title: 'freeCodeCamp Node.js', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', type: 'interactive' },
      { title: 'The Odin Project Node', url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs', type: 'course' },
    ],
    videos: [
      { title: 'Node.js Full Course - Bro Code', url: 'https://www.youtube.com/watch?v=f2EqECiTBL8', duration: '3h' },
      { title: 'Node.js Tutorial - Mosh', url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4', duration: '1h' },
      { title: 'Node.js and Express - Traversy', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE', duration: '1.5h' },
    ],
    practice: [
      { title: 'Exercism JavaScript', url: 'https://exercism.org/tracks/javascript', type: 'mentored' },
      { title: 'NodeSchool', url: 'https://nodeschool.io/', type: 'interactive' },
    ],
    cheatsheets: [
      { title: 'Node.js Cheat Sheet', url: 'https://devhints.io/nodejs', type: 'reference' },
      { title: 'Express Cheat Sheet', url: 'https://devhints.io/express', type: 'reference' },
    ]
  },

  // =====================
  // DATABASES
  // =====================

  'sql': {
    documentation: [
      { title: 'W3Schools SQL', url: 'https://www.w3schools.com/sql/', type: 'tutorial' },
      { title: 'SQLZoo', url: 'https://sqlzoo.net/', type: 'interactive' },
      { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'freeCodeCamp SQL', url: 'https://www.freecodecamp.org/learn/relational-database/', type: 'interactive' },
      { title: 'Codecademy Learn SQL', url: 'https://www.codecademy.com/learn/learn-sql', type: 'interactive' },
    ],
    videos: [
      { title: 'SQL Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', duration: '4h' },
      { title: 'SQL Tutorial - Bro Code', url: 'https://www.youtube.com/watch?v=5OdVJbNCSso', duration: '3h' },
    ],
    practice: [
      { title: 'LeetCode Database', url: 'https://leetcode.com/problemset/database/', type: 'problems' },
      { title: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql', type: 'challenges' },
      { title: 'SQL Murder Mystery', url: 'https://mystery.knightlab.com/', type: 'game' },
    ],
    cheatsheets: [
      { title: 'SQL Cheat Sheet', url: 'https://www.sqltutorial.org/sql-cheat-sheet/', type: 'reference' },
    ]
  },

  'mongodb': {
    documentation: [
      { title: 'MongoDB Official Docs', url: 'https://www.mongodb.com/docs/', type: 'official' },
      { title: 'MongoDB University', url: 'https://learn.mongodb.com/', type: 'courses' },
      { title: 'W3Schools MongoDB', url: 'https://www.w3schools.com/mongodb/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'MongoDB Basics Course', url: 'https://learn.mongodb.com/catalog', type: 'official' },
      { title: 'Tutorialspoint MongoDB', url: 'https://www.tutorialspoint.com/mongodb/', type: 'tutorial' },
    ],
    videos: [
      { title: 'MongoDB Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=ExcRbA7fy_A', duration: '1.5h' },
      { title: 'MongoDB Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', duration: '1h' },
    ],
    practice: [
      { title: 'MongoDB University Labs', url: 'https://learn.mongodb.com/', type: 'labs' },
    ],
    cheatsheets: [
      { title: 'MongoDB Cheat Sheet', url: 'https://www.mongodb.com/developer/products/mongodb/cheat-sheet/', type: 'reference' },
    ]
  },

  'postgresql': {
    documentation: [
      { title: 'PostgreSQL Official Docs', url: 'https://www.postgresql.org/docs/', type: 'official' },
      { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'tutorial' },
      { title: 'W3Schools PostgreSQL', url: 'https://www.w3resource.com/PostgreSQL/tutorial.php', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'PostgreSQL Exercises', url: 'https://pgexercises.com/', type: 'interactive' },
      { title: 'Tutorialspoint PostgreSQL', url: 'https://www.tutorialspoint.com/postgresql/', type: 'tutorial' },
    ],
    videos: [
      { title: 'PostgreSQL Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', duration: '4h' },
      { title: 'PostgreSQL Crash Course', url: 'https://www.youtube.com/watch?v=zw4s3Ey8ayo', duration: '1h' },
    ],
    practice: [
      { title: 'PG Exercises', url: 'https://pgexercises.com/', type: 'interactive' },
    ],
    cheatsheets: [
      { title: 'PostgreSQL Cheat Sheet', url: 'https://www.postgresqltutorial.com/postgresql-cheat-sheet/', type: 'reference' },
    ]
  },

  'vue': {
    documentation: [
      { title: 'Vue.js Official Docs', url: 'https://vuejs.org/guide/', type: 'official' },
      { title: 'Vue School', url: 'https://vueschool.io/', type: 'video-course' },
      { title: 'Vue Mastery', url: 'https://www.vuemastery.com/', type: 'video-course' },
    ],
    tutorials: [
      { title: 'Vue.js Tutorial - W3Schools', url: 'https://www.w3schools.com/vue/', type: 'tutorial' },
      { title: 'Codecademy Vue', url: 'https://www.codecademy.com/learn/learn-vue-js', type: 'interactive' },
    ],
    videos: [
      { title: 'Vue 3 Full Course - Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1', duration: '5h' },
      { title: 'Vue.js Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=qZXt1Aom3Cs', duration: '1.5h' },
    ],
    practice: [
      { title: 'Vue.js Examples', url: 'https://vuejs.org/examples/', type: 'examples' },
      { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'Vue Cheat Sheet', url: 'https://devhints.io/vue', type: 'reference' },
    ]
  },

  'angular': {
    documentation: [
      { title: 'Angular Official Docs', url: 'https://angular.io/docs', type: 'official' },
      { title: 'Angular Tutorial', url: 'https://angular.io/tutorial', type: 'official' },
      { title: 'W3Schools Angular', url: 'https://www.w3schools.com/angular/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'Codecademy Learn Angular', url: 'https://www.codecademy.com/learn/learn-angularjs', type: 'interactive' },
      { title: 'Angular University', url: 'https://angular-university.io/', type: 'video-course' },
    ],
    videos: [
      { title: 'Angular Full Course - Codevolution', url: 'https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ', duration: '10h' },
      { title: 'Angular Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=3dHNOWTI7H8', duration: '2h' },
    ],
    practice: [
      { title: 'Angular Exercises', url: 'https://angular.io/tutorial', type: 'official' },
    ],
    cheatsheets: [
      { title: 'Angular Cheat Sheet', url: 'https://angular.io/guide/cheatsheet', type: 'reference' },
    ]
  },

  // =====================
  // FULL STACK PATHS
  // =====================

  'frontend-stack': {
    documentation: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', type: 'official' },
      { title: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend', type: 'roadmap' },
    ],
    tutorials: [
      { title: 'The Odin Project', url: 'https://www.theodinproject.com/', type: 'course' },
      { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'interactive' },
      { title: 'Frontend Masters', url: 'https://frontendmasters.com/', type: 'video-course' },
    ],
    videos: [
      { title: 'Frontend Web Dev Bootcamp', url: 'https://www.youtube.com/watch?v=zJSY8tbf_ys', duration: '21h' },
    ],
    practice: [
      { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', type: 'projects' },
      { title: 'iCodeThis', url: 'https://icodethis.com/', type: 'daily-challenges' },
    ],
    cheatsheets: [
      { title: 'Frontend Checklist', url: 'https://frontendchecklist.io/', type: 'checklist' },
    ]
  },

  'mern-stack': {
    documentation: [
      { title: 'MERN Stack Roadmap', url: 'https://roadmap.sh/full-stack', type: 'roadmap' },
      { title: 'MongoDB Docs', url: 'https://www.mongodb.com/docs/', type: 'official' },
      { title: 'Express Docs', url: 'https://expressjs.com/', type: 'official' },
      { title: 'React Docs', url: 'https://react.dev/', type: 'official' },
      { title: 'Node.js Docs', url: 'https://nodejs.org/docs/', type: 'official' },
    ],
    tutorials: [
      { title: 'Full Stack Open', url: 'https://fullstackopen.com/', type: 'course' },
      { title: 'The Odin Project Full Stack', url: 'https://www.theodinproject.com/paths/full-stack-javascript', type: 'course' },
    ],
    videos: [
      { title: 'MERN Stack Full Course', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M', duration: '5h' },
      { title: 'MERN eCommerce Project', url: 'https://www.youtube.com/watch?v=CDtPMR5y0QU', duration: '15h' },
    ],
    practice: [
      { title: 'Build MERN Projects', url: 'https://github.com/topics/mern-stack', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'MERN Cheat Sheet', url: 'https://devhints.io/', type: 'reference' },
    ]
  },

  'devops-stack': {
    documentation: [
      { title: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', type: 'roadmap' },
      { title: 'Docker Docs', url: 'https://docs.docker.com/', type: 'official' },
      { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', type: 'official' },
    ],
    tutorials: [
      { title: 'DevOps with Docker', url: 'https://devopswithdocker.com/', type: 'course' },
      { title: 'KillerCoda - Interactive Labs', url: 'https://killercoda.com/', type: 'interactive' },
    ],
    videos: [
      { title: 'DevOps Full Course - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=j5Zsa_eOXeY', duration: '2.5h' },
      { title: 'Docker Tutorial - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', duration: '3h' },
      { title: 'Kubernetes Tutorial', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', duration: '4h' },
    ],
    practice: [
      { title: 'Play with Docker', url: 'https://labs.play-with-docker.com/', type: 'labs' },
      { title: 'Katacoda', url: 'https://www.katacoda.com/', type: 'interactive' },
    ],
    cheatsheets: [
      { title: 'Docker Cheat Sheet', url: 'https://devhints.io/docker', type: 'reference' },
      { title: 'Kubernetes Cheat Sheet', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/', type: 'reference' },
    ]
  },

  'backend-stack': {
    documentation: [
      { title: 'Backend Roadmap', url: 'https://roadmap.sh/backend', type: 'roadmap' },
      { title: 'Node.js Docs', url: 'https://nodejs.org/docs/', type: 'official' },
      { title: 'REST API Tutorial', url: 'https://restfulapi.net/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'The Odin Project Node', url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs', type: 'course' },
      { title: 'freeCodeCamp Backend', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', type: 'interactive' },
    ],
    videos: [
      { title: 'Backend Web Development', url: 'https://www.youtube.com/watch?v=XBu54nfzxAQ', duration: '3h' },
      { title: 'REST API Tutorial', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', duration: '1h' },
    ],
    practice: [
      { title: 'Build APIs', url: 'https://github.com/topics/rest-api', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'REST API Design', url: 'https://devhints.io/rest-api', type: 'reference' },
    ]
  },

  'pern-stack': {
    documentation: [
      { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', type: 'official' },
      { title: 'Express Docs', url: 'https://expressjs.com/', type: 'official' },
      { title: 'React Docs', url: 'https://react.dev/', type: 'official' },
      { title: 'Node.js Docs', url: 'https://nodejs.org/docs/', type: 'official' },
    ],
    tutorials: [
      { title: 'PERN Stack Tutorial', url: 'https://www.youtube.com/watch?v=ldYcgPKEZC8', type: 'video-course' },
      { title: 'Full Stack Open', url: 'https://fullstackopen.com/', type: 'course' },
    ],
    videos: [
      { title: 'PERN Stack Full Course', url: 'https://www.youtube.com/watch?v=ldYcgPKEZC8', duration: '2h' },
      { title: 'PERN Todo App', url: 'https://www.youtube.com/watch?v=5vF0FGfa0RQ', duration: '1.5h' },
    ],
    practice: [
      { title: 'Build Full Stack Apps', url: 'https://github.com/topics/pern-stack', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'PostgreSQL Cheat Sheet', url: 'https://www.postgresqltutorial.com/postgresql-cheat-sheet/', type: 'reference' },
    ]
  },

  'python-fullstack': {
    documentation: [
      { title: 'Django Docs', url: 'https://docs.djangoproject.com/', type: 'official' },
      { title: 'Flask Docs', url: 'https://flask.palletsprojects.com/', type: 'official' },
      { title: 'Python Web Roadmap', url: 'https://roadmap.sh/python', type: 'roadmap' },
    ],
    tutorials: [
      { title: 'Django Tutorial', url: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/', type: 'official' },
      { title: 'Flask Mega-Tutorial', url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world', type: 'tutorial' },
    ],
    videos: [
      { title: 'Django Full Course', url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4', duration: '4h' },
      { title: 'Flask Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA', duration: '3h' },
    ],
    practice: [
      { title: 'Build Django Projects', url: 'https://github.com/topics/django', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'Django Cheat Sheet', url: 'https://devhints.io/django', type: 'reference' },
    ]
  },

  'java-fullstack': {
    documentation: [
      { title: 'Spring Boot Docs', url: 'https://spring.io/projects/spring-boot', type: 'official' },
      { title: 'Java EE Tutorial', url: 'https://javaee.github.io/tutorial/', type: 'official' },
      { title: 'Baeldung', url: 'https://www.baeldung.com/', type: 'tutorial' },
    ],
    tutorials: [
      { title: 'Spring Boot Tutorial', url: 'https://spring.io/guides/gs/spring-boot/', type: 'official' },
      { title: 'Java Web Development', url: 'https://www.javatpoint.com/java-web-application', type: 'tutorial' },
    ],
    videos: [
      { title: 'Spring Boot Full Course', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U', duration: '4h' },
      { title: 'Java Full Stack Project', url: 'https://www.youtube.com/watch?v=O_XL9oQ1_To', duration: '5h' },
    ],
    practice: [
      { title: 'Build Spring Apps', url: 'https://github.com/topics/spring-boot', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'Spring Boot Cheat Sheet', url: 'https://devhints.io/spring', type: 'reference' },
    ]
  },

  'php-fullstack': {
    documentation: [
      { title: 'Laravel Docs', url: 'https://laravel.com/docs', type: 'official' },
      { title: 'PHP Official Manual', url: 'https://www.php.net/manual/en/', type: 'official' },
      { title: 'Laracasts', url: 'https://laracasts.com/', type: 'video-course' },
    ],
    tutorials: [
      { title: 'Laravel From Scratch', url: 'https://laracasts.com/series/laravel-8-from-scratch', type: 'video-course' },
      { title: 'PHP for Beginners', url: 'https://laracasts.com/series/php-for-beginners', type: 'video-course' },
    ],
    videos: [
      { title: 'Laravel Full Course', url: 'https://www.youtube.com/watch?v=ImtZ5yENzgE', duration: '4h' },
      { title: 'PHP Project Tutorial', url: 'https://www.youtube.com/watch?v=BaEj6-SL5o8', duration: '3h' },
    ],
    practice: [
      { title: 'Build Laravel Apps', url: 'https://github.com/topics/laravel', type: 'projects' },
    ],
    cheatsheets: [
      { title: 'Laravel Cheat Sheet', url: 'https://devhints.io/laravel', type: 'reference' },
    ]
  },

  'mobile-android': {
    documentation: [
      { title: 'Android Developers', url: 'https://developer.android.com/', type: 'official' },
      { title: 'Kotlin Docs', url: 'https://kotlinlang.org/docs/home.html', type: 'official' },
      { title: 'Android Roadmap', url: 'https://roadmap.sh/android', type: 'roadmap' },
    ],
    tutorials: [
      { title: 'Android Basics in Kotlin', url: 'https://developer.android.com/courses/android-basics-kotlin/course', type: 'official' },
      { title: 'Codecademy Android', url: 'https://www.codecademy.com/learn/learn-kotlin', type: 'interactive' },
    ],
    videos: [
      { title: 'Android Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=fis26HvvDII', duration: '11h' },
      { title: 'Kotlin Android Tutorial', url: 'https://www.youtube.com/watch?v=F9UC9DY-vIU', duration: '4h' },
    ],
    practice: [
      { title: 'Build Android Apps', url: 'https://developer.android.com/codelabs', type: 'codelabs' },
    ],
    cheatsheets: [
      { title: 'Kotlin Cheat Sheet', url: 'https://devhints.io/kotlin', type: 'reference' },
    ]
  },

  'game-dev': {
    documentation: [
      { title: 'Unity Docs', url: 'https://docs.unity3d.com/', type: 'official' },
      { title: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com/', type: 'official' },
      { title: 'Game Dev Roadmap', url: 'https://roadmap.sh/game-developer', type: 'roadmap' },
    ],
    tutorials: [
      { title: 'Unity Learn', url: 'https://learn.unity.com/', type: 'official' },
      { title: 'Unreal Engine Tutorials', url: 'https://dev.epicgames.com/community/learning', type: 'official' },
    ],
    videos: [
      { title: 'Unity Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=gB1F9G0JXOo', duration: '5h' },
      { title: 'C++ Game Dev', url: 'https://www.youtube.com/watch?v=LyGiWfPBk7Y', duration: '3h' },
    ],
    practice: [
      { title: 'Game Jams', url: 'https://itch.io/jams', type: 'projects' },
      { title: 'Brackeys Tutorials', url: 'https://www.youtube.com/c/Brackeys', type: 'youtube' },
    ],
    cheatsheets: [
      { title: 'Unity Cheat Sheet', url: 'https://devhints.io/unity', type: 'reference' },
    ]
  },

  'ai-ml-stack': {
    documentation: [
      { title: 'TensorFlow Docs', url: 'https://www.tensorflow.org/learn', type: 'official' },
      { title: 'PyTorch Docs', url: 'https://pytorch.org/tutorials/', type: 'official' },
      { title: 'AI/ML Roadmap', url: 'https://roadmap.sh/ai-data-scientist', type: 'roadmap' },
    ],
    tutorials: [
      { title: 'Fast.ai', url: 'https://www.fast.ai/', type: 'course' },
      { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', type: 'official' },
      { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', type: 'interactive' },
    ],
    videos: [
      { title: 'Machine Learning Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc', duration: '12h' },
      { title: 'Deep Learning Specialization', url: 'https://www.youtube.com/watch?v=CS4cs9xVecg', duration: '4h' },
    ],
    practice: [
      { title: 'Kaggle Competitions', url: 'https://www.kaggle.com/competitions', type: 'competitions' },
      { title: 'ML Exercises', url: 'https://www.kaggle.com/learn', type: 'interactive' },
    ],
    cheatsheets: [
      { title: 'ML Cheat Sheet', url: 'https://stanford.edu/~shervine/teaching/cs-229/', type: 'reference' },
      { title: 'NumPy Cheat Sheet', url: 'https://numpy.org/doc/stable/user/cheatsheet.html', type: 'reference' },
    ]
  },

  // Fallback for any course not explicitly defined
  'default': {
    documentation: [
      { title: 'Google Search', url: 'https://www.google.com/', type: 'search' },
      { title: 'Stack Overflow', url: 'https://stackoverflow.com/', type: 'community' },
      { title: 'Dev.to', url: 'https://dev.to/', type: 'articles' },
    ],
    tutorials: [
      { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'interactive' },
      { title: 'Codecademy', url: 'https://www.codecademy.com/', type: 'interactive' },
    ],
    videos: [
      { title: 'YouTube Programming', url: 'https://www.youtube.com/', type: 'videos' },
    ],
    practice: [
      { title: 'LeetCode', url: 'https://leetcode.com/', type: 'problems' },
      { title: 'HackerRank', url: 'https://www.hackerrank.com/', type: 'challenges' },
    ],
    cheatsheets: [
      { title: 'DevHints', url: 'https://devhints.io/', type: 'reference' },
    ]
  }
};

// Helper to get resources for a course
export const getResourcesForCourse = (courseId) => {
  return STUDY_RESOURCES[courseId] || STUDY_RESOURCES['default'];
};
