import { MdContacts } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import Accueil from "./Layouts/Pages/Accueil";
import NavBar from "./Layouts/Components/NavBar";
import Réalisation from "./Layouts/Pages/Réalisation";
import Compétences from "./Layouts/Pages/Compétences";
import Logo from './Layouts/Assets/Logo.png';
import Expérience from "./Layouts/Pages/Expériences";
import Personnel from "./Layouts/Pages/Personnel";
import Contact from "./Layouts/Pages/Contact";
import Footer from "./Layouts/Components/Footer";
import { Parallax } from 'react-scroll-parallax';
export default function App()
{
  return(
    <div className="">
      <NavBar />
      <Accueil />
      <div className="w-full h-[70vh] bg-white p-2 bg-fixed inset-0 flex justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500" style={{ backgroundImage : `url(${Logo})` }}></div>
      <Réalisation />
      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond4">
        <Parallax speed={-25} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:mr-20">COMPETENCE</Parallax>
        <Parallax speed={-25} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20"><FaBrain /></Parallax>
      </div>
      <Compétences />
      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond1">
        <Parallax speed={-25} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:ml-20">EXPERIENCE</Parallax>
        <Parallax speed={-25} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20 lg:mr-20"><AiFillCheckCircle /></Parallax>
      </div>
      <Expérience />
      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond2">
        <Parallax speed={-25} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:mr-20">PERSONNEL</Parallax>
        <Parallax speed={-25} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20"><AiFillCheckCircle /></Parallax>
      </div>
      <Personnel />
      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond3">
        <Parallax speed={-25} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:ml-20">Contact</Parallax>
        <Parallax speed={-25} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20 lg:mr-20"><MdContacts /></Parallax>
      </div>
      <Contact />
      <div className="w-full h-20 bg-white" />
      <Footer />
    </div>
  )
}