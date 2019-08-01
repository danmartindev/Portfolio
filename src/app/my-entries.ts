import { Entry, ProjEntry } from './entry';

export const expEntries : Entry[] = [
    //AHFC//
    {title: "Freelance Wordpress Developer", company: "African Heritage Food Co-op", date: "July 2018 - December 2019", 
    link: 'https://myahfc.com/community/', linkText: 'Visit the Site',
    content: `This freelance project had me working with designer/developer to develop a new website for a Buffalo based non-profit. 
    A majority of my time was spent working on the community section of the site. This implements a couple of plugins which we 
    lightly customized for user accounts, and also some custom PHP to allow for user submitted posts and comments.`, 
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'], state:"*"},

    //CAMAFib
    {title: "iOS Developer - Co-op/Internship", company: "RIT/NIH", date: "September 2017 - December 2017", 
    content: `This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
    The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. 
    <br>
    <br>
    I worked as the iOS developer on a team including myself, a data analyst, and an android developer. 
    The end product of my time at this position was an app that on the front-end had a number of built in browser “apps” that 
    the user could browse, while in the background, videos were periodically recorded through the front facing camera. 
    These videos would have the RGB data of each frame extracted, the data sent to a firebase database, and then the video would be deleted for the user's privacy.`, 
    chips: ['iOS', 'XCode', 'Mobile'], state:"*"},

    //PHT
    {title: "Wordpress Developer - Co-op/Internship", company: "Personalized Healthcare Technology", date: "May 2017 - August 2017", 
    content: `For this co-op I worked as a general web developer for the members of PHT, a group tied to the research and application 
    of healthcare technologies. Most of my work involved the development of Wordpress sites and plugins. 
    I was also responsible for some of the design work for the sites and instructing the members of PHT on how to update their 
    sites for themselves.`, 
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS'], state:"*"},

    //NDA
    {title: "Freelance Angular Developer", company: "Undisclosed", date: "Febuary 2019 - May 2019", 
    content: `This project had me developing a social media type Angular2+ app. This project is currently under NDA.`, 
    chips: ['Angular2+', 'HTML', 'CSS', 'SASS', 'TypeScript'], state:"*"},

]

export const projEntries : ProjEntry[] = [

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