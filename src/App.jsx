import { AiOutlineArrowUp } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import Accueil from "./Layouts/Pages/Accueil";
import NavBar from "./Layouts/Components/NavBar";
import Réalisation from "./Layouts/Pages/Réalisation";
import Compétences from "./Layouts/Pages/Compétences";
import Logo from './Layouts/Assets/Logo.png';
import Expérience from "./Layouts/Pages/Expériences";
import Contact from "./Layouts/Pages/Contact";
import Footer from "./Layouts/Components/Footer";
import { Parallax } from 'react-scroll-parallax';
import carte from './Layouts/Assets/Carte nadia.png';
import { useState, useEffect } from 'react';

export default function App() {
  // État du dialogue de téléchargement
  const [showDialog, setShowDialog] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = carte;
    link.download = "Carte_de_visite.png";
    link.click();
    setShowDialog(false);
  };

  // État pour gérer la visibilité du bouton de scroll vers le haut
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <NavBar />
      <Accueil />

      <div
        className="w-full h-[70vh] bg-white p-2 bg-fixed inset-0 flex justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>

      <Réalisation />

      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row-reverse justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond4">
        <Parallax speed={-25} rotate={[-10, 10]} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:mr-20">COMPETENCE</Parallax>
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20"><FaBrain /></Parallax>
      </div>

      <Compétences />

      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond1">
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:ml-20">EXPERIENCE</Parallax>
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20 lg:mr-20 lg:ml-0"><AiFillCheckCircle /></Parallax>
      </div>

      <Expérience />

      <div className="w-full h-[40vh] lg:h-[70vh] bg-white p-2 bg-fixed overflow-hidden inset-0 flex lg:flex-row justify-center lg:justify-between bg-contain bg-no-repeat bg-center items-center text-blue-500 fond3">
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-4xl lg:text-8xl font-extrabold tracking-widest lg:ml-20">Contact</Parallax>
        <Parallax speed={-25} rotate={[10, -10]} className="text-white text-3xl lg:text-8xl font-extrabold tracking-widest ml-20 lg:mr-20 lg:ml-0"><MdContacts /></Parallax>
      </div>

      <div className="container w-full h-[20vh] lg:h-[25vh] my-20 relative justify-center items-center flex">
        <img
          src={carte}
          alt="Carte de visite"
          className='absolute w-[95%] lg:w-[50%] cursor-pointer h-full border-2 border-cyan-800'
          onClick={() => setShowDialog(true)}
        />

        {/* Dialogue téléchargement */}
        {showDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center fond3 bg-opacity-60">
            <div className="w-full max-w-sm p-6 space-y-4 bg-white shadow-xl rounded-xl">
              <h2 className="text-lg font-semibold text-gray-800">Stand'art | Carte de visite ?</h2>
              <p className="text-sm text-gray-600">Contactez nous le plus rapidement.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Contact />
      <div className="w-full h-20 bg-white" />
      <Footer />

      {/* Bouton Scroll to Top */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 lg:w-[4%] lg:h-[8vh] w-[15%] h-[7vh] fond3 flex items-center justify-center border rounded-full cursor-pointer transition-opacity duration-500"
        >
          <AiOutlineArrowUp className="text-5xl text-white" />
        </div>
      )}
    </div>
  );
}
