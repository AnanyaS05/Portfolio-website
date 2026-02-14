export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "data-eng", label: "Data Engineering" },
  { id: "ai", label: "AI" },
  { id: "analytics", label: "Analytics" },
];

export const techStackGroups = [
  {
    command: "cat languages.txt",
    tags: ["Python", "SQL", "Java", "C/C++", "R"],
  },
  {
    command: "cat frameworks.txt",
    tags: ["LangChain", "LangGraph", "Snowpark", "Playwright", "BeautifulSoup"],
  },
  {
    command: "cat data-cloud.txt",
    tags: ["Snowflake", "GCP", "MySQL", "Oracle DB", "Google BigQuery"],
  },
  {
    command: "cat tools.txt",
    tags: ["Git/GitHub", "Tableau", "Jupyter", "Docker", "VS Code"],
  },
];

export const projects = [
  {
    id: "snowflake-reverse-etl",
    category: "data-eng",
    tag: "Data Engineering",
    icon: "fas fa-cloud-arrow-up",
    title: "Snowflake Reverse ETL",
    description:
      "Built a reverse ETL process using Snowpark and GCP to seamlessly upload CSV files from Snowflake to Google Drive.",
    hoverDescription:
      "Reverse ETL from Snowflake to Google Drive using Snowpark and GCP. Delivered a reusable prototype within one week.",
  },
  {
    id: "auto-monitor-llm-position",
    category: "ai",
    tag: "AI",
    icon: "fas fa-eye",
    title: "Auto Monitor LLM Position",
    description:
      "Automated brand visibility tracking in LLM responses using Gemini, LangChain, LangGraph, and Snowflake.",
    hoverDescription:
      "Tracks brand visibility across LLM outputs with a custom scoring matrix. Built with Gemini, LangChain, and Snowflake.",
  },
  {
    id: "ai-competitor-price-tracker",
    category: "ai",
    tag: "AI",
    icon: "fas fa-tags",
    title: "AI Competitor Price Tracker",
    description:
      "AI-driven web scraping solution using LangGraph and Gemini for automated competitor price tracking.",
    hoverDescription:
      "AI-powered competitor scraping with Gemini and LangGraph. Automatically extracts and compares product prices at scale.",
  },
  {
    id: "macroeconomic-data-pipeline",
    category: "data-eng",
    tag: "Data Engineering",
    icon: "fas fa-chart-line",
    title: "Macroeconomic Data Pipeline",
    description:
      "Automated weekly ingestion of macroeconomic data using Snowflake and Python to enhance sales forecast accuracy.",
    hoverDescription:
      "Automated weekly macroeconomic data ingestion into Snowflake via Python, improving sales forecast accuracy.",
  },
  {
    id: "competitor-intelligence-pipeline",
    category: "data-eng",
    tag: "Data Engineering",
    icon: "fas fa-binoculars",
    title: "Competitor Intelligence Pipeline",
    description:
      "Scalable web scraping pipeline with Playwright and BeautifulSoup, increasing product data coverage.",
    hoverDescription:
      "Scalable scraping with Playwright and BeautifulSoup. Expanded competitor product data coverage significantly.",
  },
  {
    id: "oracle-data-automation",
    category: "analytics",
    tag: "Analytics",
    icon: "fas fa-gears",
    title: "Oracle Data Automation",
    description:
      "Python solution to extract, wrangle, and insert distributor data into Oracle databases, cutting data acquisition time by 50%.",
    hoverDescription:
      "Python automation for Oracle DB: extract, wrangle, and insert distributor data. Cut data acquisition time by 50%.",
  },
  {
    id: "client-metrics-dashboard",
    category: "analytics",
    tag: "Analytics",
    icon: "fas fa-chart-pie",
    title: "Client Metrics Dashboard",
    description:
      "Leveraged Excel and Tableau for in-depth client metrics analysis, driving a 25% reduction in manual reporting.",
    hoverDescription:
      "Built client metrics dashboards in Excel and Tableau. Delivered actionable insights and reduced manual reporting by 25%.",
  },
  {
    id: "multi-source-data-integration",
    category: "data-eng",
    tag: "Data Engineering",
    icon: "fas fa-sitemap",
    title: "Multi-Source Data Integration",
    description:
      "Integrated data from multiple Oracle database tables into a comprehensive view, improving accessibility for over 1M records.",
    hoverDescription:
      "Consolidated multiple Oracle DB tables into a unified view, improving data accessibility for over 1M records.",
  },
];

export const aboutParagraphs = [
  "I'm Ananya Saggi, a Computer Science student at Northeastern University's Khoury College with an Artificial Intelligence concentration (GPA: 3.68, Dean's List, Honors Scholarship). I'm passionate about building data pipelines and AI-driven solutions that create real business impact.",
  "As a Data Engineer and AI Co-op at Comoto Holdings, I automated macroeconomic data ingestion, developed AI-driven web scraping with LangGraph and Gemini, and built scalable competitor intelligence pipelines. Previously at State Street Bank, I cut data acquisition time by 50% through Python automation across Oracle databases.",
  "My coursework in Algorithms, Data Science and Machine Learning, Mathematics of Data Models, and Theory of Computation gives me a strong foundation for tackling complex engineering challenges.",
];

const education = [
  {
    institution: "Northeastern University, Khoury College of Computer Sciences",
    date: "Sept 2022 - May 2026",
    subtitle: "B.S. Computer Science - Artificial Intelligence Concentration",
    details: [
      "GPA: 3.68 / 4.0 | Dean's List | Honors Scholarship",
      "Courses: Algorithms, Computer Systems, Object Oriented Design, Mathematics of Data Models, Data Science and Machine Learning, Theory of Computation",
    ],
  },
];

const experience = [
  {
    title: "Comoto Holdings - Data Engineer & AI Co-op",
    date: "Jan - June 2025",
    location: "Philadelphia, PA",
    bullets: [
      "Automated weekly ingestion of macroeconomic data using Snowflake and Python, enhancing accuracy of sales forecasts",
      "Developed AI-driven web scraping solution using LangGraph and Gemini, enabling competitor price tracking automation",
      "Built scalable competitor intelligence pipeline with Playwright and BeautifulSoup, increasing coverage of product data",
      "Implemented automated monitoring of brand visibility in LLM responses using Python and Snowflake, informing strategic decisions",
    ],
  },
  {
    title: "State Street Bank and Trust - Reporting Analyst Co-op",
    date: "Jan - June 2024",
    location: "Boston, MA",
    bullets: [
      "Developed an automated solution using Python to extract, wrangle, and insert data from a distributor website into Oracle databases, reducing data acquisition time by 50%",
      "Integrated data from multiple Oracle database tables into a comprehensive table, improving data accessibility for over 1,000,000 records",
      "Leveraged Excel and Tableau for in-depth analysis of client metrics, delivering actionable insights",
      "Delivered insights in weekly team meetings that improved automation of recurring data queries, resulting in a 25% reduction in manual reporting efforts",
    ],
  },
];

export const resumeTabs = [
  {
    id: "data-eng",
    label: "Data Engineer",
    icon: "fas fa-database",
    downloadHref: "/Ananya_Saggi_Resume_Data_Engineer.pdf",
    skills: {
      proficient: [
        "Python",
        "SQL",
        "Java",
        "C/C++",
        "R",
        "Snowflake",
        "Snowpark",
        "GCP",
        "Jupyter",
        "MySQL",
        "VS Code",
        "Toad",
      ],
      familiar: ["HTML", "CSS", "Git/GitHub", "IntelliJ", "Tableau", "Anaconda"],
    },
    projects: [
      {
        title: "Snowflake Reverse ETL",
        date: "Apr - May 2025",
        tech: ["Snowpark", "Snowflake", "GCP"],
        bullets: [
          "Created reverse ETL process to upload CSV files seamlessly from Snowflake to Google Drive folders",
          "Delivered functional prototype within a one-week period, demonstrating secure data-sharing capabilities",
          "Provided reusable template for future data integration use cases, enhancing operational efficiency",
        ],
      },
      {
        title: "Auto Monitor LLM Position",
        date: "May - June 2025",
        tech: ["Python", "LangChain", "LangGraph", "GCP", "Snowflake"],
        bullets: [
          "Implemented automated monitoring system using Gemini LLM and Snowflake to track brand visibility in LLM outputs",
          "Analyzed responses for motorcycle parts and accessory queries based on custom scoring matrix",
          "Expanded the system's query set and devised a mechanism for comprehensive LLM response analytics",
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: "fas fa-robot",
    downloadHref: "/Ananya_Saggi_Resume_AI.pdf",
    skills: {
      proficient: [
        "Python",
        "SQL",
        "Java",
        "C/C++",
        "R",
        "Snowflake",
        "GCP",
        "Jupyter",
        "MySQL",
        "VS Code",
        "Toad",
      ],
      familiar: ["HTML", "CSS", "Git/GitHub", "IntelliJ", "Tableau", "Anaconda"],
    },
    projects: [
      {
        title: "Price Pursuit AI",
        date: "Feb - Mar 2025",
        tech: ["Python", "LangChain", "LangGraph", "FastAPI", "GCP", "MySQL"],
        bullets: [
          "Developed an AI-driven proof-of-concept using LangGraph and Gemini LLM for competitor price comparison across major competitor websites",
          "Automated competitor data scraping workflow with Playwright and BeautifulSoup, storing results in MySQL databases",
          "Established a foundation for product-matching accuracy, enabling future integration into Snowflake pipelines",
        ],
      },
      {
        title: "Auto Monitor LLM Position",
        date: "May - June 2025",
        tech: ["Python", "LangChain", "LangGraph", "GCP", "Snowflake"],
        bullets: [
          "Implemented automated monitoring system using Gemini-powered chain workflow and Snowflake to track brand visibility in LLM outputs",
          "Analyzed responses for motorcycle parts and accessory queries using NLP based on custom scoring matrix",
          "Expanded the system's query set and devised a mechanism for comprehensive LLM response analytics",
        ],
      },
    ],
  },
];

export const sharedResumeData = {
  education,
  experience,
  contact: {
    location: "Boston, MA",
    phone: "+1 (267) 370-7441",
    email: "contact.ananyasaggi@gmail.com",
    github: "https://github.com/AnanyaS05",
    linkedin: "https://www.linkedin.com/in/ananya-saggi-36aa961b2",
  },
};
