// src/components/ExperienceData.js
import company1 from '../assets/icon/Pinnacle.jpg'; 
import company2 from '../assets/icon/CodSoft.jpg'; 
import company3 from '../assets/icon/Metacrafters.jpg'; 
import certificate1 from '../assets/internship/PinnacleLabs.png'; 
import certificate2 from '../assets/internship/CodSoft.png'; 

const ExperienceData = [
  {
    id: 1,
    company: "Pinnacle Labs",
    companyIcon: company1,
    startDate: "May 2024",
    endDate: "Jun 2024",
    description: "Description for Company 1",
    certificateImage: certificate1
  },
  {
    id: 2,
    company: "CodSoft",
    companyIcon: company2,
    startDate: "Jun 2024",
    endDate: "Jul 2024",
    description: "Description for Company 2",
    certificateImage: certificate2
  },
  {
    id: 3,
    company: "Metacrafters",
    companyIcon: company3,
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    description: "Description for Company 2",
    certificateImage: "../assets/icon/Metacrafters.jpg"
  },
  
];

export default ExperienceData;
