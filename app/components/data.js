const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
const currentYear = currentDate.getFullYear();

const dateRange = `( March 2022 - ${currentMonth} ${currentYear} (present) )`;

const experienceData = [
  {
    id: 0,
    position: "Product Designer at BharatPe",
    duration: dateRange,
    company: "BharatPe",
    descShort: "A keen believer in business and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1, Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1",
    descLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    exeImg: "/desc.jpg",
  },
  {
    id: 1,
    position: "Product Designer at Postpe",
    duration: dateRange,
    company: "Postpe",
    descShort: "lorem A keen believer in business and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1, Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1",
    descLong:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    exeImg: "/desc.jpg",
  },
  {
    id: 2,
    position: "Product Designer at Zillion",
    duration: dateRange,
    company: "Zillion",
    descShort: "A keen believer in business and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1, Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1",
    descLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
    exeImg: "/desc.jpg",
  },
  {
    id: 3,
    position: "Product Designer at BharatPe",
    duration: dateRange,
    company: "Trillion",
    descShort: "A keen believer in business and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1, Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1",
    descLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    exeImg: "/desc.jpg",
  },
  {
    id: 4,
    position: "Product Designer at BharatPe",
    duration: dateRange,
    company: "12% Club",
    descShort: "A keen believer in business and analysis capacity is combined with design thinking. My primary goal is to provide a richly engaging and innovative user experience to the user. Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1, Always open to new opportunities to grow and test the limits and help the product to grow from 0 to 1",
    descLong:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    exeImg: "/desc.jpg",
  },
];

const workData = [
  {
    id: 0,
    name:"lorem0",
    about:"lorem lorem0",
    workImg: "/desc.jpg",
  },
  {
    id: 1,
    name:"lorem1",
    about:"lorem lorem1",
    workImg: "/profile.png",
  },
  {
    id: 2,
    name:"lorem2",
    about:"lorem lorem2",
    workImg: "/desc.jpg",
  },
  {
    id: 3,
    name:"lorem0",
    about:"lorem lorem0",
    workImg: "/desc.jpg",
  },
  {
    id: 4,
    name:"lorem0",
    about:"lorem lorem0",
    workImg: "./desc.jpg",
  },
  {
    id: 5,
    name:"lorem0",
    about:"lorem lorem0",
    workImg: "/desc.jpg",
  },
  {
    id: 6,
    name:"lorem0",
    about:"lorem lorem0",
    workImg: "/desc.jpg",
  },
  {
    id: 7,
    name:"lorem7",
    about:"lorem lorem0",
    workImg: "/desc.jpg",
  }
]

export {experienceData, workData};