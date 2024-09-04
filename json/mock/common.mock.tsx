import {
  ExperienceCardProps,
  TechCardPaperProps
} from "@/interface/commonAll.interfaces";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const demotechCardList: TechCardPaperProps[] = [
  {
    count: 98,
    text: "HTML-CSS-SCSS-BOOTSTRAP"
  },
  {
    count: 98,
    text: "J-QUERY"
  },
  {
    count: 98,
    text: "JAVASCRIPT"
  },
  {
    count: 98,
    text: "React JS JXS Markup"
  },
  {
    count: 98,
    text: "NEXT JS"
  },
  {
    count: 98,
    text: "Figma to HTML"
  }
];

export const gradiantColors = [
  "linear-gradient(180deg, rgba(255, 230, 0, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)", // Color 1
  "linear-gradient(180deg, rgba(89, 195, 120, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)", // Color 2
  "linear-gradient(180deg, rgba(221, 88, 79, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)", // Color 3
  "linear-gradient(180deg, rgba(255, 154, 0, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)", // Color 4
  "linear-gradient(180deg, rgba(0, 169, 255, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)", // Color 5
  "linear-gradient(180deg, rgba(158, 0, 255, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)" // Color 6
];

export const solidColors = [
  "#FFE600", // Color 1
  "#59C378", // Color 2
  "#DD584F", // Color 3
  "#FF9A00", // Color 4
  "#00A9FF", // Color 5
  "#AD00FF" // Color 6
];

export const experienceData: ExperienceCardProps[] = [
  {
    year: "2000 - 2000",
    present: true,
    name: "HTML Developer",
    address: "Webskitters Technology Solutions (Kolkata,india)"
  },
  {
    year: "2000 - 2000",
    name: "Web Designer",
    address: "Digital Web Avenue (Kolkata,india)"
  },
  {
    year: "2000 - 2000",
    name: "Junior Web Designer",
    address: "Max bridge solutions (Kolkata,india)"
  }
];

export const sociallinks = [
  { icon: <LinkedInIcon />, href: "/" },
  { icon: <FacebookIcon />, href: "/" },
  { icon: <InstagramIcon />, href: "/" }
];
