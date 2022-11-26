/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Lee Hui Ying",
  title: "Hi all, I'm Hui Ying",
  subTitle: emoji(
    "Python Developer 👨‍💻 | Test Automation Engineer 🤖 | Tech Writer ✍️ "
  ),
  resumeLink:
    "https://www.canva.com/design/DAEyCE7artY/gIack_gVmdRB9GRz-AaZsQ/view?utm_content=DAEyCE7artY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/199993hui",
  linkedin: "https://linkedin.com/in/lee-hui-ying",
  gmail: "huiyinglee_99@student.usm.my",
  facebook: "https://www.facebook.com/lee.huiying.37/",
};

// Your Skills Section

const skillsSection = {
  title: "Skill",
  subTitle:
    "Soft skill",
  skills: [
    emoji(
      "⚡ Teamwork"
    ),
    emoji("⚡ Communication Skill"),
    emoji(
      "⚡ Positive Mind"
    ),
    emoji(
      "⚡ Critical Thinking"
    ),
    emoji(
      "⚡ Problem Solving Skill"
    ),
  ],

  softwareSkills: [
    {
      skillName: "C++",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "R",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "html",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "css",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "php",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "mysql",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "oracle",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    // {
    //   skillName: "SQL, MySQL, Oracle Apex",
    //   classname: "logos:postgresql",
    //   style: {
    //     backgroundColor: "transparent",
    //   },
    // },
    {
      skillName: "AWS",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Microsoft Office",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Photoshop",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Illustrator",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "PowerBi",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "RabbitMQ",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Keras",
      classname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "Flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer Intern",
      company: "Tapway",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Mar 2022 – Sept 2022",
      descBullets: [
        "Building tools and services to maintain a robust, scalable data service layer",
        "Design, develop and implement real-time and batch data processing systems by working with our sensor data and other data sources",
        "Develop responsive and scalable Python scripts which interact with various AWS resources to automate repetitive tasks",
        "Manage databases (DynamoDB, ElasticSearch, OpenSearch, etc)",
        "Development of various API's to interact with front-end and other modules",
        "Microsoft PowerBi for QueensbayMall Visualisation",
        "RabbitMQ",
        "Image labeling",
        "AWS FTR",
      ],
    },
    {
      role: "Teaching Assistant (Tutor)",
      company: "Universiti Sains Malaysia",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Oct 2021 - Feb 2022",
      descBullets: [
        "Help lecturers to handle lab sessions.",
        "Explain the questions and help the students in solving the questions using C++.",
      ],
    },
    {
      role: "Teacher",
      company: "Seremban",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Mar 2019 - Jul 2019",
      desc1:
        "Art teacher at Global Art",
      descBullets1: [
        "Taught students in doing handicrafts and drawing",
      ],
      desc2:
        "Tuition Teacher at Bright Star Tuition Center",
      descBullets2: [
        "Taught and helped students complete their homework.",
        "Helped to prepare teaching material.",
        "Helped to plan and organize holiday activities.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Huawei HCIA Routing and Switching",
      subtitle: "- Huawei",
      date: "Issued Sep 2021 · Expires Sep 2024",
      logo_path: "huawei_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1wbpwPOVQhi11TuCGetYXawY3A_fmdb-m/view?usp=share_link",
      alt_name: "Huawei",
      color_code: "#F6EAEA",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Education",
  subtitle:
    "Never stop learning and exploring the world",

  blogs: [
        {
          title: "Bachelor of Computer Science (Honours)",
          subtitle: "Universiti Sains Malaysia",
          date: "2019 - 2023 (Present)",
          content: [
            "CGPA: 3.69; Dean's list",
            "JPA Scholarship holder ",
            "Member of Bridge & Chess Club, USM 2019-2020",
            "Member of Chinese Arts & Cultural Secretariat of USM 2021-2022",
            "Member of Chinese Society USM",
            "Head of Department of Welfare and Interaction of USM Secretariat of Chinese Orchestra 2021-2022",
          ],
        },
        {
          title: "Pre-University",
          subtitle: "St. Paul Institution, Seremban",
          date: "2017 - 2018",
          content: [
            "Sijil Tinggi Persekolahan Malaysia (STPM - Science Stream): CGPA 3.75",
            "Treasurer of Scout Society: May 2017- May 2018",
            "Auditor of Chinese Society: May 2017- May 2018",
            "MPP of Form 6 Student: May 2017 - May 2018",
            "Third place of Volleyball of Negeri Sembilan State Form Six Sports Carnival 2018",
          ],
        },
        {
          title: "Secondary Education",
          subtitle: "SMJK Chan Wa, Seremban",
          date: "2012 - 2016",
          content: [
            "Sijil Pelajaran Malaysia (SPM): 2A+ 7A 1A- 1B+",
            "Secretary of Economy Society: June 2015 - June 2016",
            "Uniform Committee of Chan Wa Concert Band: June 2015 - June 2016",
            "Achieved MERIT in Malaysian National Chemistry Quiz(2016)",
          ],
        },
      ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "011-21287056",
  email_address: "huiyinglee_99@student.usm.my",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
