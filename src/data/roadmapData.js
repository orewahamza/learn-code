export const ROADMAP_DATA_RAW = {
  // Core Languages
  'javascript': {
    type: 'Free',
    title: 'JavaScript',
    purpose: 'Web, frontend, backend, automation',
    outcome: 'JavaScript Master',
    whyTakeIt: 'JavaScript is the most popular programming language in the world. Mastering it allows you to build everything from stunning frontend interfaces to high-performance backends.',
    projects: ['To-Do List App', 'Weather Dashboard', 'Interactive Quiz Engine'],
    color: 'from-[#F7DF1E] to-[#D4A518]',
    items: ['Variables (let, const)', 'Data types', 'Operators', 'Conditional statements', 'Loops', 'Functions', 'Arrays', 'Objects', 'Array & object methods', 'Scope & hoisting', 'DOM manipulation', 'Events', 'ES6+ features', 'Asynchronous JS', 'Error handling', 'Modules', 'Browser APIs', 'Performance']
  },
  'python': {
    type: 'Free',
    title: 'Python',
    purpose: 'Backend, AI, automation',
    outcome: 'AI & Automation Engineer',
    whyTakeIt: 'Python\'s simplicity and powerful libraries make it the top choice for Artificial Intelligence, Data Science, and rapid backend development.',
    projects: ['Web Scraper Tool', 'Automated Emailer', 'Basic Machine Learning Model'],
    color: 'from-[#3776AB] to-[#FFD43B]',
    items: ['Syntax & indentation', 'Variables & types', 'Operators', 'Conditions', 'Loops', 'Functions', 'Lists, tuples, sets', 'Dictionaries', 'File handling', 'Exceptions', 'Modules & packages', 'Virtual environments', 'OOP', 'Async basics', 'Testing', 'Deployment basics']
  },
  'sql': {
    type: 'Free',
    title: 'SQL',
    purpose: 'Relational databases',
    outcome: 'Database Architect',
    whyTakeIt: 'Data is the oil of the digital age. SQL is the universal language for managing, querying, and optimizing the data that powers every modern application.',
    projects: ['Library Management System', 'Sales Analytics DB', 'Employee Tracking Portal'],
    color: 'from-[#336791] to-[#2F5E85]',
    items: ['Tables', 'CRUD', 'Joins', 'Indexes', 'Constraints', 'Transactions', 'Optimization']
  },
  'java': {
    type: 'Free',
    title: 'Java',
    purpose: 'Enterprise backend, Android',
    outcome: 'Enterprise Software Engineer',
    whyTakeIt: 'Java powers the world\'s largest enterprises and Android apps. Its robust nature and scalability make it essential for professional software development.',
    projects: ['Banking Management System', 'Android Calculator App', 'Inventory Management API'],
    color: 'from-[#5382a1] to-[#f89820]',
    items: ['JVM & syntax', 'Variables & types', 'Control flow', 'Methods', 'Arrays', 'OOP principles', 'Collections', 'Exception handling', 'File I/O', 'Multithreading', 'Streams & lambdas', 'Maven/Gradle']
  },
  'c': {
    type: 'Free',
    title: 'C',
    purpose: 'Low-level systems',
    outcome: 'Systems Programmer',
    whyTakeIt: 'The "mother" of all languages. Learning C gives you an unparalleled understanding of how computers work at the hardware level.',
    projects: ['Shell Environment', 'Simple OS Scheduler', 'Memory Allocator'],
    color: 'from-[#00599C] to-[#A8B9CC]',
    items: ['Compilation basics', 'Variables & types', 'Operators', 'Conditions', 'Loops', 'Functions', 'Arrays', 'Pointers', 'Memory management', 'Structures', 'File handling']
  },
  'cpp': {
    type: 'Paid',
    title: 'C++',
    purpose: 'Performance apps, game engines',
    outcome: 'High-Performance Developer',
    whyTakeIt: 'When performance is everything, C++ is the king. From game engines like Unreal to high-frequency trading systems.',
    projects: ['2D Physics Engine', 'Graphics Renderer', 'Multithreaded Server'],
    color: 'from-[#00599C] to-[#004482]',
    items: ['C basics', 'OOP', 'References & pointers', 'STL', 'Templates', 'Memory management', 'Multithreading']
  },
  'csharp': {
    type: 'Free',
    title: 'C#',
    purpose: 'Windows, backend, games',
    outcome: 'Unity Game & App Developer',
    whyTakeIt: 'Master the power of .NET and Unity. C# is the go-to language for professional Windows applications and modern game development.',
    projects: ['Unity 2D Platformer', 'Windows Desktop Utility', 'E-commerce API with .NET'],
    color: 'from-[#239120] to-[#178600]',
    items: ['.NET basics', 'Variables & types', 'Control flow', 'Methods', 'Classes & OOP', 'Collections', 'LINQ', 'Async/await', 'ASP.NET basics']
  },
  'php': {
    type: 'Free',
    title: 'PHP',
    purpose: 'Web backend',
    outcome: 'Professional Web Developer',
    whyTakeIt: 'PHP powers over 70% of the web. Mastering it allows you to build dynamic, data-driven websites and professional WordPress themes.',
    projects: ['Custom Blog System', 'User Authentication Portal', 'Content Management System'],
    color: 'from-[#777BB4] to-[#4F5B93]',
    items: ['Syntax & variables', 'Forms & input', 'Conditions & loops', 'Functions', 'Arrays', 'Sessions & cookies', 'File handling', 'MySQL integration', 'Security basics', 'MVC concepts']
  },
  'go': {
    type: 'Paid',
    title: 'Go (Golang)',
    purpose: 'Scalable backend',
    outcome: 'Cloud Infrastructure Engineer',
    whyTakeIt: 'Designed by Google for simplicity and speed. Go is the preferred language for cloud-native applications and high-performance microservices.',
    projects: ['Real-time Chat Server', 'Custom CLI Tool', 'Distributed Key-Value Store'],
    color: 'from-[#00ADD8] to-[#008CA8]',
    items: ['Syntax & types', 'Functions', 'Structs', 'Interfaces', 'Error handling', 'Concurrency', 'HTTP servers', 'Modules']
  },
  'rust': {
    type: 'Paid',
    title: 'Rust',
    purpose: 'Memory-safe systems',
    outcome: 'Systems & Security Guru',
    whyTakeIt: 'The most loved language by developers. Rust provides the performance of C++ with guaranteed memory safety, making it perfect for secure system design.',
    projects: ['Modern Web Browser Engine', 'Secure Password Manager', 'Cloud Micro-kernel'],
    color: 'from-[#DEA584] to-[#000000]',
    items: ['Ownership model', 'Variables & types', 'Control flow', 'Functions', 'Structs & enums', 'Pattern matching', 'Lifetimes', 'Concurrency']
  },
  'typescript': {
    type: 'Paid',
    title: 'TypeScript',
    purpose: 'Safer JavaScript',
    outcome: 'Enterprise Frontend Architect',
    whyTakeIt: 'Bring type safety to JavaScript. Essential for building large-scale, maintainable web applications in professional teams.',
    projects: ['Strictly Typed UI Library', 'Kanban Board with TS', 'Type-safe Data Visualizer'],
    color: 'from-[#3178C6] to-[#235A97]',
    items: ['JS fundamentals', 'Type annotations', 'Interfaces', 'Generics', 'Enums', 'Type narrowing', 'Modules', 'Tooling']
  },
  'html': {
    type: 'Free',
    title: 'HTML',
    purpose: 'Document structure',
    outcome: 'Layout Architect',
    whyTakeIt: 'The skeleton of the web. Every single thing you see online starts with HTML. Mastering it is the mandatory first step for any developer.',
    projects: ['Professional Portfolio Layout', 'Semantic Blog Structure', 'Custom Order Form'],
    color: 'from-[#E34F26] to-[#F06529]',
    items: ['Document structure', 'Text & media', 'Links & lists', 'Forms', 'Semantic HTML', 'Accessibility']
  },
  'css': {
    type: 'Free',
    title: 'CSS',
    purpose: 'Styling',
    outcome: 'Visual UI Designer',
    whyTakeIt: 'Make the web beautiful. Mastering CSS allows you to turn raw code into stunning, responsive, and animated user experiences.',
    projects: ['Modern Landing Page', 'Interactive CSS Animations', 'Responsive Grid Gallery'],
    color: 'from-[#264DE4] to-[#2965F1]',
    items: ['Selectors', 'Box model', 'Positioning', 'Flexbox', 'Grid', 'Responsive design', 'Animations', 'Variables']
  },
  'react': {
    type: 'Paid',
    title: 'React',
    purpose: 'Modern frontend',
    outcome: 'Modern Frontend React Developer',
    whyTakeIt: 'The industry standard for building modern, high-performance web applications. Used by Facebook, Instagram, and millions of professional apps.',
    projects: ['Task Management App', 'Movie Database Clone', 'Social Media Dashboard'],
    color: 'from-[#61DAFB] to-[#21819B]',
    items: ['JS + JSX', 'Components', 'Props & state', 'Events', 'Hooks', 'Routing', 'Context', 'API integration', 'Performance']
  },
  'nodejs': {
    type: 'Free',
    title: 'Node.js',
    purpose: 'JS runtime',
    outcome: 'Backend JavaScript Engineer',
    whyTakeIt: 'Use JavaScript everywhere. Node.js allows you to build lightning-fast, scalable backends using the language you already know for the frontend.',
    projects: ['RESTful API Service', 'Real-time WebSocket Chat', 'Markdown to HTML CLI'],
    color: 'from-[#339933] to-[#68A063]',
    items: ['JS runtime', 'Modules', 'File system', 'HTTP server', 'Express.js', 'Middleware', 'REST APIs', 'Authentication']
  },
  'frontend-stack': {
    type: 'Free',
    title: 'Frontend Developer',
    purpose: 'Professional web interfaces',
    outcome: 'Full-fledged Frontend Pro',
    whyTakeIt: 'A complete path from zero to professional developer. You will learn the exact stack used by top tech companies to build modern web interfaces.',
    projects: ['Multi-page Business Site', 'Crypto Portfolio Tracker', 'SaaS Landing Page with Dashboard'],
    color: 'from-[#F59E0B] to-[#EC4899]',
    items: ['HTML', 'CSS', 'JavaScript', 'Git', 'Responsive design', 'React', 'API consumption', 'Performance & accessibility']
  },
  'mern-stack': {
    type: 'Paid',
    title: 'Full-Stack MERN',
    purpose: 'Modern JavaScript Stack',
    outcome: 'Full Stack MERN Master',
    whyTakeIt: 'The most in-demand full stack in the current job market. Mastering MongoDB, Express, React, and Node puts you at the top tier of developers.',
    projects: ['E-Commerce Megastore', 'Social Networking Site', 'Project Management SaaS'],
    color: 'from-[#EF4444] to-[#8B5CF6]',
    items: ['HTML + CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Auth', 'Deployment']
  },
  'vue': {
    type: 'Paid',
    title: 'Vue.js',
    purpose: 'Progressive framework',
    outcome: 'Vue.js Frontend Specialist',
    whyTakeIt: 'Vue.js combines the best of React and Angular with an approachable learning curve. It\'s the perfect framework for building modern, reactive user interfaces quickly.',
    projects: ['Task Management Dashboard', 'E-commerce Product Catalog', 'Real-time Chat Interface'],
    color: 'from-[#4FC08D] to-[#42b883]',
    items: ['Vue instance', 'Templates & directives', 'Components', 'Props & events', 'Computed & watchers', 'Vue Router', 'Vuex/Pinia state', 'Composition API', 'Lifecycle hooks', 'Transitions', 'Plugins']
  },
  'angular': {
    type: 'Paid',
    title: 'Angular',
    purpose: 'Enterprise framework',
    outcome: 'Enterprise Angular Developer',
    whyTakeIt: 'Angular is Google\'s powerful framework for building large-scale enterprise applications. Mastering it opens doors to corporate development and complex web apps.',
    projects: ['Corporate Dashboard Portal', 'Inventory Management System', 'Multi-module Enterprise App'],
    color: 'from-[#DD0031] to-[#C3002F]',
    items: ['TypeScript basics', 'Components & templates', 'Directives', 'Services & DI', 'Routing', 'Forms (template & reactive)', 'HTTP client', 'RxJS observables', 'Pipes', 'Modules', 'Testing']
  },
  'mongodb': {
    type: 'Paid',
    title: 'MongoDB',
    purpose: 'NoSQL database',
    outcome: 'NoSQL Database Expert',
    whyTakeIt: 'MongoDB is the leading NoSQL database for modern applications. Learn to design flexible schemas and build scalable data layers for any application.',
    projects: ['Blog Content Management DB', 'User Analytics System', 'Product Catalog with Search'],
    color: 'from-[#47A248] to-[#3F9142]',
    items: ['Document model', 'CRUD operations', 'Query operators', 'Indexes', 'Aggregation pipeline', 'Schema design', 'Mongoose ODM', 'Relationships', 'Transactions', 'Performance tuning']
  },
  'postgresql': {
    type: 'Paid',
    title: 'PostgreSQL',
    purpose: 'Advanced SQL database',
    outcome: 'Advanced Database Architect',
    whyTakeIt: 'PostgreSQL is the world\'s most advanced open-source database. Master complex queries, JSON support, and enterprise-grade features.',
    projects: ['Financial Transaction System', 'Multi-tenant SaaS Database', 'Geospatial Data Application'],
    color: 'from-[#336791] to-[#274d6d]',
    items: ['SQL fundamentals', 'Advanced queries', 'Joins & subqueries', 'Indexes & optimization', 'Transactions & ACID', 'JSON/JSONB', 'Views & CTEs', 'Stored procedures', 'Triggers', 'Replication basics']
  },
  'backend-stack': {
    type: 'Free',
    title: 'Backend Developer',
    purpose: 'Server-side mastery',
    outcome: 'Professional Backend Engineer',
    whyTakeIt: 'Backend development is the engine of every web application. Learn to build robust APIs, manage databases, and create scalable server architectures.',
    projects: ['RESTful API Service', 'Authentication System', 'Microservices Architecture'],
    color: 'from-[#10B981] to-[#0EA5E9]',
    items: ['HTTP & REST', 'Node.js/Express', 'Authentication', 'Database design', 'SQL & NoSQL', 'API security', 'Caching', 'Rate limiting', 'Error handling', 'Logging & monitoring', 'Testing APIs']
  },
  'pern-stack': {
    type: 'Paid',
    title: 'Full-Stack PERN',
    purpose: 'PostgreSQL Full Stack',
    outcome: 'PERN Stack Developer',
    whyTakeIt: 'The PERN stack combines PostgreSQL\'s power with React\'s flexibility. Build production-ready full-stack applications with type-safe database queries.',
    projects: ['Job Board Platform', 'Restaurant Booking System', 'Project Collaboration Tool'],
    color: 'from-[#336791] to-[#61DAFB]',
    items: ['PostgreSQL mastery', 'Express server setup', 'React frontend', 'Node.js APIs', 'SQL queries', 'Sequelize/Prisma ORM', 'Authentication', 'CRUD operations', 'Deployment', 'Performance']
  },
  'python-fullstack': {
    type: 'Free',
    title: 'Python Full Stack',
    purpose: 'Django/Flask & Web',
    outcome: 'Python Full Stack Developer',
    whyTakeIt: 'Python\'s simplicity meets full-stack power. Build complete web applications with Django or Flask, from database to deployment.',
    projects: ['Social Media Platform', 'E-learning Portal', 'REST API with Admin Dashboard'],
    color: 'from-[#3776AB] to-[#F59E0B]',
    items: ['Python web basics', 'Django/Flask setup', 'Models & ORM', 'Views & templates', 'Forms & validation', 'User authentication', 'REST APIs', 'Static files', 'Testing', 'Deployment']
  },
  'java-fullstack': {
    type: 'Paid',
    title: 'Java Full Stack',
    purpose: 'Spring Boot & Frontend',
    outcome: 'Enterprise Java Developer',
    whyTakeIt: 'Java Spring Boot is the backbone of enterprise applications worldwide. Master the most sought-after full-stack combination in corporate development.',
    projects: ['Banking Application', 'Hospital Management System', 'Microservices E-commerce Platform'],
    color: 'from-[#5382a1] to-[#EF4444]',
    items: ['Java fundamentals', 'Spring Boot setup', 'REST controllers', 'JPA & Hibernate', 'Spring Security', 'Database integration', 'Frontend integration', 'Microservices', 'Testing', 'Docker deployment']
  },
  'php-fullstack': {
    type: 'Free',
    title: 'PHP Full Stack',
    purpose: 'Laravel & Modern Web',
    outcome: 'PHP Laravel Developer',
    whyTakeIt: 'PHP powers 70% of the web, and Laravel is its most elegant framework. Build beautiful, maintainable web applications with modern PHP.',
    projects: ['Content Management System', 'E-commerce Marketplace', 'SaaS Subscription Platform'],
    color: 'from-[#777BB4] to-[#FACC15]',
    items: ['PHP basics', 'Laravel setup', 'Blade templates', 'Eloquent ORM', 'Migrations', 'Controllers & routing', 'Authentication', 'API resources', 'Queues & jobs', 'Testing', 'Deployment']
  },
  'mobile-android': {
    type: 'Paid',
    title: 'Android Development',
    purpose: 'Native mobile apps',
    outcome: 'Android Mobile Developer',
    whyTakeIt: 'Android dominates the mobile market. Learn to build native applications that reach billions of users with Kotlin and modern Android development.',
    projects: ['Weather App with API', 'Todo List with Room DB', 'Social Media Feed Clone'],
    color: 'from-[#3DDC84] to-[#073042]',
    items: ['Kotlin basics', 'Android Studio setup', 'Activities & fragments', 'Layouts & views', 'RecyclerView', 'Navigation', 'Room database', 'Retrofit networking', 'ViewModel & LiveData', 'Jetpack Compose basics']
  },
  'game-dev': {
    type: 'Paid',
    title: 'Game Development',
    purpose: 'Game engines & design',
    outcome: 'Game Developer',
    whyTakeIt: 'Turn your passion for games into a career. Learn game development fundamentals, from physics engines to rendering, using industry-standard tools.',
    projects: ['2D Platformer Game', 'Top-down Shooter', '3D First-Person Explorer'],
    color: 'from-[#7C3AED] to-[#EC4899]',
    items: ['Game design basics', 'Unity/Godot setup', 'Game loop', 'Physics & collision', 'Sprites & animation', 'Audio integration', 'UI systems', 'Input handling', 'Scene management', 'Build & publish']
  },
  'ai-ml-stack': {
    type: 'Paid',
    title: 'AI & Machine Learning',
    purpose: 'Intelligent systems',
    outcome: 'AI/ML Engineer',
    whyTakeIt: 'AI is reshaping every industry. Master machine learning, deep learning, and data science to build intelligent systems that solve real-world problems.',
    projects: ['Image Classification Model', 'Sentiment Analysis System', 'Recommendation Engine'],
    color: 'from-[#8B5CF6] to-[#3B82F6]',
    items: ['Python for ML', 'NumPy & Pandas', 'Data preprocessing', 'Scikit-learn basics', 'Supervised learning', 'Unsupervised learning', 'Neural networks', 'TensorFlow/PyTorch intro', 'Model evaluation', 'Deployment basics']
  },
  'devops-stack': {
    type: 'Paid',
    title: 'DevOps Stack',
    purpose: 'Systems & CI/CD',
    outcome: 'Cloud & DevOps Engineer',
    whyTakeIt: 'Automation and scaling are the backbone of modern tech. DevOps engineers are highly valued for their ability to streamline deployments and manage cloud infrastructure.',
    projects: ['Automated CI/CD Pipeline', 'Dockerized Microservices App', 'Self-Healing K8s Cluster'],
    color: 'from-[#6366F1] to-[#06B6D4]',
    items: ['Linux', 'Git', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud platforms']
  }
};
