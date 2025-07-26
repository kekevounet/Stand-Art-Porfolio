import { BiMath } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { FaCut } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import kevin from '../Assets/equipe/kevin.jpg';
import hajaina from '../Assets/equipe/hajaina.jpeg';
import heritina from '../Assets/equipe/heritina.jpg';
import nadia from '../Assets/equipe/nadia.jpeg';
import mamitina from '../Assets/equipe/mamitina.jpeg';
import voara from '../Assets/equipe/voara.jpeg';
export default function Personnel()
{
  const Pers = [
    {nom:'Nadia', img:nadia, icon :<SiGoogletagmanager />, profession:'Manager'},
    {nom:'Mamitiana', img:mamitina , icon :<FaCut />, profession:'Découpeur'},
    {nom:'Hajaina', img:hajaina, icon :<GiDoctorFace />, profession:'Docteur'},
    {nom:'Niavo Kevin', img:kevin, icon :<FaLaptopCode />, profession:'Développeur'},
    {nom:'Heritina', img:heritina, icon :<MdDesignServices />, profession:'Développeur'},
    {nom:'Voara', img:voara, icon :<BiMath />, profession:'Calculatiste'},
  ]
  return(
    <>
    <div className="w-full h-[25vh] lg:h-[20vh] bg-cyan-800 text-white flex justify-center items-center space-y-5 flex-col"  id="Personnel">
      <div className="lg:text-3xl text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
      <div className="lg:text-xl text-center container">Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, repellendus? Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
    </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-[80%] w-[95%] h-full gap-5 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">

        {Pers.map((Per, index)=>(
          <div className="w-full border border-black scale-90 h-[60vh] group cursor-pointer" key={index}>
            <div className="h-2/3 w-full relative">
              <img src={Per.img} alt="membre" className='object-cover absolute w-full h-full' />
            </div>
            <div className="h-1/3 w-full flex justify-center flex-col p-3 relative">
              <span className='mr-3 text-lg lg:text-3xl flex transition-all duration-500 delay-500 items-center z-40 group-hover:text-white font-bold'>{Per.icon} <span className='ml-3'>{Per.profession} ({Per.nom})</span></span>
              <span className="mt-2 z-40 group-hover:text-white transition-all duration-500 delay-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, placeat!</span>
              <span className="w-0 h-full absolute top-0 group-hover:w-full right-0 bg-cyan-800 transition-all duration-1000 ease-in-out"></span>
              <span className="w-0 h-full absolute bottom-0 group-hover:w-full left-0 bg-cyan-800 transition-all duration-1000 ease-in-out"></span>
            </div>
          </div>
        ))}

        </div>
      </div>
    </>
  )
}