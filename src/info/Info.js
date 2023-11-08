import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgba(0, 164, 250, 0.8)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Charisma",
  lastName: "Kurniawan",
  initials: "CK", // the example uses first and last, but feel free to use three or more if you like.
  position: "a React Native Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌎",
      text: "Based in Jakarta/Bali, Indonesia",
    },
    {
      emoji: "💼",
      text: "React Native Developer at TROOPR.APP",
    },
    {
      emoji: "📧",
      text: "charismakurniawan@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/charisma-kurniawan-aji-12a7b4165/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.instagram.com/charismaaji/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://www.facebook.com/charis.jakmaniaii",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.youtube.com/@charismaaji",
      icon: "fa fa-youtube",
      label: "youtube",
    },
    {
      link: "https://github.com/charismaaji",
      icon: "fa fa-github",
      label: "github",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Charisma. I'm a React Native Developer for TROOPR.APP, I enjoy coding not only for working but also for my hobby. I have been create many type of mobile application using React Native like marketplace, news portal, internal company apps, delivery apps, and many more. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "react native",
      "react",
      "git",
      "github",
      "firebase",
      "redux",
    ],
    exposedTo: ["java", "python", "ethical hacking"],
  },
  hobbies: [
    {
      label: "coding",
      emoji: "💻",
    },
    // {
    //   label: "theater",
    //   emoji: "🎭",
    // },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "food traveling",
      emoji: "🍜",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "UU2",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Hobister",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Get Plus",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Ecofit",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};
