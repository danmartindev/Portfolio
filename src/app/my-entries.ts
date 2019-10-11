import { Entry, ProjEntry } from './entry';

export const expEntries : Entry[] = [

    //NDA
    {title: "Freelance Angular Developer", company: "Coll-U", date: "Febuary 2019 - May 2019", 
    content: `Coll-U is a startup software development company out of Long Island. My main responsibility was the front end development 
    of an Angular app. My duties also included working with a designer on the UI/UX of the app, and creating user flows/mock-ups.
    <br>
    <br>
    My duties as the front end developer included:
    <br>
    - Working with a designer on the UI/UX design of a web/mobile app    <br>
    - Creating user flows and mockups    <br>
    - Developing the front end of an Angular app `, 
    chips: ['Angular2+', 'HTML', 'CSS', 'SASS', 'TypeScript', 'Illustrator'], state:"*"},

    //AHFC//
    {title: "Freelance Wordpress Developer", company: "African Heritage Food Co-op", date: "July 2018 - December 2018", 
    link: 'https://myahfc.com/community/', linkText: 'Visit the Site',
    content: `AHFC is a Buffalo based non-profit which works in community development. My position as a freelance developer had me 
    working with a fellow developer to design and develop a new site for AHFC to expand their community. A majority of my time was 
    spent developing the community section of the site. 
    <br>
    <br>
    My responsibilities included: <br>
    - Designing custom themes and pages for a new site with a designer <br>
    - Developing custom PHP for user post and comment submission <br>
    - Developing custom functions for WooCommerce
    `, 
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'], state:"*"},

    //CAMAFib
    {title: "iOS Developer - Co-op/Internship", company: "RIT/NIH", date: "September 2017 - December 2017", 
    content: `This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
    The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. I worked as the iOS 
    developer on a team including myself, a data analyst, and an android developer. The end product of my time at this position was 
    an app that on the front-end had a number of built in browser “apps” that the user could browse, while in the background, videos 
    were periodically recorded through the front facing camera. These videos would have the RGB data of each frame extracted, the 
    data sent to a Firebase database, and then the video would be deleted for the user's privacy.
    <br>
    <br>
    My responsibilities included: <br>
    - Designing an app with users who have never used a tablet in mind <br>
    - Developing an iOS app which detected irregular heart rhythms using a front facing camera <br>
    - Developing a Firebase database to store camera data <br>
    - Presenting app updates and functions to a health board at the University of Rochester for review <br>

    `, 
    chips: ['iOS', 'XCode', 'Mobile'], state:"*"},

    //PHT
    {title: "Wordpress Developer - Co-op/Internship", company: "PHT180, RIT", date: "May 2017 - August 2017", 
    content: `Personalized Healthcare Technology, now PHT180, is an offshoot of RIT’s faculty focused on development and advancement 
    of medical practices and technologies. My position as the WordPress developer for the group had me work with designing and 
    developing WordPress themes and plugins for various faculty members.
    <br>
    <br>
    My work included: <br>
    - Working with a team of designers <br>
    - Creating custom WordPress themes for multiple projects <br>
    - Customizing existing WordPress Plugins <br>
    - Instructing faculty members on management of WordPress sites
    `, 
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS'], state:"*"},

]

export const projEntries : ProjEntry[] = [
    //Portfolio
    {title: "Career Seed", type: "Angular Web App", date: "Under Construction!", 
    link: "https://github.com/danmartindev/Hunt-Helper", linkText: "Preview", 
    content: `Career Seed is an Angular App made to help professionals on the job hunt. It's still currently in the design stage, 
    but you can see some of the framework in the link above.`, 
    chips: ['Angular2+', 'HTML', 'CSS', 'SASS', 'TypeScript', 'Angular Material', 'Illustrator', 'Photoshop'], state:"*"},

    //Portfolio
    {title: "My Portfolio", type: "Angular Site", date: "Still Updating!", 
    link: "https://github.com/danmartindev/Portfolio", linkText: "The code", 
    content: `If you were looking for the code behind the curtain, look no further! Check out the Github link above to see 
    all the code and possibly some future updates.`, 
    chips: ['Angular2+', 'HTML', 'CSS', 'SASS', 'TypeScript', 'Angular Material'], state:"*"},
    
    //Social Stopwatch
    {title: "Social Media Stopwatch", type: "Google Chrome Extension", date: " March 2019 - April 2019", 
    link: "https://github.com/danmartindev/SocialStopwatch", linkText: "The code", 
    link2: "https://chrome.google.com/webstore/detail/social-media-stopwatch/fahoaamoeaejjidplpjhgmaggphgnaig", linkText2: "Try it!",
    content: `This is a Google Chrome extension that I developed for a friend. It utilizes the Chrome alarms, 
    tabs, and local storage APIs to set timers(alarms) based on your open tabs, to help you better manage your 
    time usage of social media and other distracting sites. 
    <br>
    <br>
    Timers can be set manually with the user choosing the tab by URL and setting the how long they want to
     spend on the site. Timers can also be set automatically based on the URL. These URLs can be set by the 
    user in the options page.
    <br>
    <br>
    You can check out the code or try for yourself in the links above.`, 
    chips: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Chrome APIs'], state:"*"},

]