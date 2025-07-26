import { FaUsers } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { TbChartAreaLineFilled } from "react-icons/tb";
import { BsXCircle } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaBrain } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function NavBar()
{
  // Etat
  const NavLinks = [
    {nom: 'Accueil', icon: <AiFillHome />, lien: 'Accueil' },
    {nom: 'Réalisation', icon: <TbChartAreaLineFilled />, lien: 'Réalisation'},
    {nom: 'Compétences', icon: <FaBrain />, lien: 'Compétences' },
    {nom: 'Expérience', icon: <AiFillCheckCircle />, lien: 'Expérience'},
    {nom: 'Personnel', icon:<FaUsers /> , lien: 'Personnel'},
    {nom: 'Contact', icon: <MdContacts />, lien: 'Contact'},
  ];
  const [ navOuvert, setNavOuvert ] = useState(true);

  // Comportement
  useEffect(()=>
  {
    const handleResize = () =>
    {
      if( window.innerWidth < 768 )
      {
        setNavOuvert(false);
      }
      else
      {
        setNavOuvert(true);
      }
    }
    window.addEventListener('resize',handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[]);

  // Affichage
  return(
    <div className="transition-all duration-500 ease-in-out">
    {/* Icons sur phone */}
    <div className="lg:hidden absolute right-5 top-14 text-white text-5xl"  onClick={() => setNavOuvert(!navOuvert)}>{navOuvert ? (<BsXCircle />) : (<CgMenuGridO />)}</div>

    {/* PUB fixe */}
    <div className="w-full h-10 bg-cyan-900 fixed top-0 z-50 flex text-white justify-between items-center shadow-[0px_0px_5px_white]">
      <div className="ml-5 lg:text-lg font-bold text-sm">Stand'Art</div>
      <div className="mr-5 lg:text-lg font-bold text-sm">manager.standart0306@gmail.com</div>
    </div>
    {/* NavBar */}
      <div className={`w-full items-center border-t overflow-hidden bg-cyan-800 lg:mt-10 mt-[40px] z-40 flex justify-center shadow-[0px_5px_5px_0px_rgba(21,94,117,0.75)] transition-all duration-500 ${navOuvert ? 'h-[70vh] lg:h-20' : 'h-20'}`}>
        {/* Texte standArt sur gauche */}
        <div className="absolute left-5 top-14 text-4xl text-white">
          <span><strong className="font-bold">Stand</strong>'Art</span>
        </div>

        {/* Lien de Navigation */}
        {navOuvert && <nav className="flex items-center flex-col lg:flex-row mt-10 justify-center h-3/4 lg:mt-0 lg:border-none w-full">
          {NavLinks.map((link, index)=>(
            <a href={`#${link.lien}`} className="flex items-center lg:w-auto w-full justify-center no-underline text-white p-4 group relative hover:scale-105 transition-all duration-300" key={ index }>
              <span className="mr-3 text-2xl z-30">{link.icon}</span>
              <span className="text-xl font-bold z-30">{link.nom}</span>
              <span className="bg-cyan-700 w-[26%] h-0 absolute group-hover:h-full left-0 top-0 transition-all duration-500 -skew-x-[20deg]"></span>
              <span className="bg-cyan-700 w-[26%] h-0 absolute group-hover:h-full right-1/2 bottom-0 transition-all duration-500 -skew-x-[20deg]"></span>
              <span className="bg-cyan-700 w-[26%] h-0 absolute group-hover:h-full left-1/2 top-0 transition-all duration-500 -skew-x-[20deg]"></span>
              <span className="bg-cyan-700 w-[26%] h-0 absolute group-hover:h-full right-0 bottom-0 transition-all duration-500 -skew-x-[20deg] shadow-[10px_0px_10px_rgba(3,58,109,0.5)] "></span>
            </a>
          ))}
        </nav>}
      </div>
    </div>
  )
}