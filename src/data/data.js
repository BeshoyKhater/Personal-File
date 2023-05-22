import { AiOutlineHome, AiOutlineCalculator, AiOutlineSetting } from "react-icons/ai"
import { RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { TbMailOpened } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { GiChart } from "react-icons/gi"
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs"
import { MdShareLocation } from "react-icons/md"

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    location:"about",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    location:"resume",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    location:"portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
    location:"contact",
    icon: <TbMailOpened />,
  },
]

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
    link:"https://facebook.com"
  },
  {
    id: 2,
    icon: <AiFillGithub />,
    class: "github",
    link:"https://github.com/BeshoyKhater"
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    class: "linkedin",
    link:"https://www.linkedin.com/in/beshoy-khater-35999925a/"
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram",
    link:"https://instagram.com"
  },
]

export const side = [
  {
    id: 1,
    num: 80,
    text: "Frontend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 5,
    text: "Backend Development",
    class: "skill2",
  },
]

export const info = [
  {id:1 , text: "My Name",value: "Beshoy Khater",icon: <RiUserLine />,},
      {id:2 , text: "My Age", value: "26 Years", icon: <AiOutlineCalculator /> },
      {id:3 , text: "Email Address", value: "BeshoyKhater@gmail", icon: <GoMail /> },
      {id:4 , text: "Phone Number", value: "01202268298", icon: <BsPhoneVibrate /> },
      {id:5 , text: "Address", value: "Egypt/Cairo", icon: <MdShareLocation /> },
]

export const service = [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "React Library",
        text: "from scratch",
        decs: "I can create designs and integrate with Web APIs using react library.",
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "Ui Development",
        text: "data collection",
        decs: "I can develop designs what i received through Figma or Adobe XD.",
      },
      {
        id: 3,
        icon: <GiChart />,
        title: "Search Engine",
        text: "page rank",
        decs: "I have a very good skils for searching and get info .",
      },
]

export const slider = [
    {
        id: 1,
        name: "Diana Ayi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita.",
        link: "DianaAyi.com",
        cover: require("../assets/images/avatar1.jpg")
      },
      {
        id: 2,
        name: "Daniel Vinyo",
        desc: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium.",
        link: "DanielVinyo.com",
        cover: require("../assets/images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        desc: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam .",
        link: "EdemQuist.com",
        cover: require("../assets/images/avatar3.jpg")
      },
    {
        id: 4,
        name: "Grace Lavoe",
        desc: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam .",
        link: "GraceLavoe.com",
        cover: require("../assets/images/avatar4.jpg")
    }
    ,
    {
      id: 5,
        name: "Nana Yaa Dankwa",
        desc: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita.",
        link: "NanaYaaDankwa.com",
        cover: require("../assets/images/avatar5.jpg")
    }
  ]
  

//resume
  const imgBio=require("../assets/images/bio.png")
  export const bio= [
      {
        para1: "I'm Beshoy junior front-end developer I have a short experience as a freelancer and now I'm looking for a new challenge in a team to improve my skills.",
        para2: "I have a bachelor of computer science as I have been graduated from Zwser high institute with a grade very good.",
        para3: "I did many projects as a freelancer or as a self-study using front-end technologies like React, Js, Html Css and Scss.",
        img: imgBio,
        id:1
      }
    ]
export const skills = [
  {
    id: 1,
    num: 90,
    text: "HTML5",
    class: "skill1",
  },
  {
    id: 2,
    num: 85,
    text: "CSS3",
    class: "skill2",
  },
  {
    id: 3,
    num: 75,
    text: "JavaScript",
    class: "skill3",
  },
  {
    id: 4,
    num: 90,
    text: "SCSS",
    class: "skill4",
  },
  {
    id: 5,
    num: 90,
    text: "BootStrap",
    class: "skill5",
  },
  {
    id: 6,
    num: 85,
    text: "React",
    class: "skill6",
  },
  {
    id: 7,
    num: 70,
    text: "GitHub",
    class: "skill7",
  },
  {
    id: 8,
    num: 70,
    text: "Typescript",
    class: "skill8",
  },
  {
    id: 9,
    num: 80,
    text: "Next",
    class: "skill9",
  },
]
const Avada=require("../assets/images/Avada.jpg");
const iphone=require("../assets/images/iphone.jpg");
const developYourSkills=require("../assets/images/develop-your-skills.jpg");
const education=require("../assets/images/education-website.jpg");
const healthCare=require("../assets/images/health-care.jpg");
const Avada2=require("../assets/images/Avada2.jpg");
const cart=require("../assets/images/cart.jpg");
const sportSite=require("../assets/images/sport-site.jpg");
const portfolio=require("../assets/images/portfolio.jpg");
const PersonalFile=require("../assets/images/Personal-File.jpg");
const dashboard=require("../assets/images/dashboard.jpg");

export const projects =[
    {id:1 , image:Avada , date:"20/6/2022" , github:"https://github.com/BeshoyKhater/Avada" , demo:"https://beshoykhater.github.io/Avada/" ,  type:"UI", title:"Avada (UI)" , desc:"Html-Css-Bootstrap "},
    {id:2 , image:iphone , date:"8/7/2022" , github:"https://github.com/BeshoyKhater/IPhone" , demo:"https://beshoykhater.github.io/IPhone/" ,  type:"UI", title:"IPhone (UI)" , desc:"Html-Css-Javascript"},
    {id:3 , image:developYourSkills , date:"12/8/2022" , github:"https://github.com/BeshoyKhater/Develop-your-skills" , demo:"https://beshoykhater.github.io/Develop-your-skills/" ,  type:"UI", title:"Develop Your Skills (UI)" , desc:'Html-Css-Javascript "Responsive"'},
    {id:4 , image:education , date:"1/9/2022" , github:"https://github.com/BeshoyKhater/Education-Website" , demo:"https://beshoykhater.github.io/Education-Website/" ,  type:"UI", title:"Education Website (UI)" , desc:'Html-Sass-Javascript "Responsive"'},
    {id:5 , image:healthCare , date:"30/9/2022" , github:"https://github.com/BeshoyKhater/Health-Care" , demo:"https://beshoykhater.github.io/Health-Care/" ,  type:"UI", title:"Health Care (UI)" , desc:'Html-Sass-Javascript "Responsive"'},
    {id:6 , image:Avada2 , date:"15/10/2022" , github:"https://github.com/BeshoyKhater/Avada2" , demo:"https://beshoykhater.github.io/Avada2/" ,  type:"react", title:"Avada2 (React)" , desc:"React-Css-Javascript"},
    {id:7 , image:cart , date:"1/11/2022" , github:"https://github.com/BeshoyKhater/Cart" , demo:"https://beshoykhater.github.io/Cart/" ,  type:"react", title:"Cart (React)" , desc:"React-Css-Redux Toolkit"},
    {id:8 , image:sportSite , date:"1/12/2022" , github:"https://github.com/BeshoyKhater/Sport-Site" , demo:"https://beshoykhater.github.io/Sport-Site/" ,  type:"react", title:"Sport Site (React)" , desc:'React-Sass-Bootstrap "Responsive"'},
    {id:9 , image:portfolio , date:"1/1/2023" , github:"https://github.com/BeshoyKhater/Portfolio" , demo:"https://beshoykhater.github.io/Portfolio/" ,  type:"react", title:"Portfolio (React)" , desc:'React-Sass-Bootstrap "Responsive"'},
    {id:10 , image:PersonalFile , date:"5/2/2023" , github:"https://github.com/BeshoyKhater/Personal-File" , demo:"https://personal-file2023.netlify.app" ,  type:"react", title:"Personal File (React)" , desc:'React-Sass-Bootstrap "Responsive"'},
    {id:11 , image:dashboard , date:"5/22/2023" , github:"https://github.com/BeshoyKhater/DASHBOARD" , demo:"https://beshoykhater.github.io/DASHBOARD/" ,  type:"react", title:"Dashboard (React)" , desc:'React-MUI-FullCalendar-Nivo "Responsive"'},
]

export const buttons = [
    {id:1, text:"All", type:"all"},
    {id:2, text:"React", type:"react"},
    {id:3, text:"UI", type:"UI"},
]