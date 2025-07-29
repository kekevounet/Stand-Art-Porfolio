import { CgSpinnerTwo } from "react-icons/cg";
import { CgTimelapse } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Parallax } from "react-scroll-parallax";
export default function Contact()
{
  // Etat
  const contacts = [
    { titre : 'Adresse', icon:<FaMapMarkerAlt />, nom: 'Ankadikely Ilafy, Antananarivo' },
    { titre : 'Téléphones', icon:<AiFillPhone />, nom: '+261 34 31 093 79 / +261 38 66 414 82' },
    { titre : 'Email', icon:<HiMail />, nom: 'manager.standart0306@gmail.com' },
    { titre : 'Horaires', icon:<CgTimelapse />, nom: 'Lun - Sam : 7h30 à 16h30' },
  ];

  // Comportement
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(()=>{
      return(
        <div className="flex items-center ml-4">Envoi du message <CgSpinnerTwo className="animate-spin ml-3"/></div>
      )
    });
    setTimeout(() => {
      setResult(null);
  }, 7000);
    const formData = new FormData(event.target);

    formData.append("access_key", "5a5726b2-d782-436b-b4bc-51697b576221");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
          title: "Message envoyé avec succès",
          text: "Stand'Art vous remercie pour votre soutien.",
          icon: "success"
        });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oups, une erreur a été détecté !",
        text: "Nous sommes navrés de vous dire de recommencer plus tard, merci.",
        icon: "error"
      });
    }
  };


  // Affichage
  return(
    <div className='relative overflow-hidden'>
      <div className="w-full lg:h-screen h-[120vh] container flex justify-between gap-5 items-center lg:flex-row flex-col" id="Contact">

          {/* Information de contact */}
          <div className="w-full h-3/4 border-2 space-y-7 flex justify-center flex-col lg:p-5 p-3 rounded-lg group relative">
            <h1 className="font-bold z-10 text-white"><span className="group-hover:text-black">Information</span></h1>
            {contacts.map((contact, index)=>(
            <div className="flex flex-col ml-5 z-10" key={index}>
              <div className="flex items-center text-xl text-white">
                <span className="mr-3 group-hover:text-black">{contact.icon}</span>
                <span className="group-hover:text-black">{contact.titre} :</span>
              </div>
              <div className="text-lg text-white"><span className="group-hover:text-gray-700">{contact.nom} </span></div>
            </div>
            ))}
            <span className="w-full h-full bg-cyan-800 absolute bottom-0 left-0 group-hover:h-0 transition-all duration-500"></span>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full h-[90%] lg:h-3/4 border-2 flex justify-center flex-col rounded-lg p-3 relative overflow-hidden group">
          <h1 className="z-10 font-bold group-hover:text-white delay-300">Contactez-nous ici</h1>
            <form className="flex flex-col space-y-5 z-10" onSubmit={onSubmit}>
              <label htmlFor="Email" className="py-3 text-lg group-hover:text-white delay-300">Email:</label>
              <input type="email" className=" p-3 border focus:outline-1 focus:outline focus:outline-cyan-800 group-hover:border-white group-hover:bg-cyan-800 group-hover:text-white"  name="email" require/>
              <label htmlFor="Mess" className="text-lg group-hover:text-white delay-300">Message</label>
              <input type="text" className=" p-3 border focus:outline-1 focus:outline focus:outline-cyan-800 group-hover:border-white group-hover:bg-cyan-800 group-hover:text-white" name="message" require/>
              <input type="submit" className="p-3 bg-cyan-800 text-lg text-white  border-2 font-bold group-hover:border-2 delay-300" value='Envoyer' />
            </form>
            <p className="text-sms z-10 mt-2 group-hover:text-white">{result}</p>
            <span className="w-full h-0 bg-cyan-800 absolute top-0 left-0 group-hover:h-full transition-all duration-500"></span>
          </div>

      </div>

    {/* Google maps */}
     <Parallax
      className="absolute w-[14%] h-[30%] z-20 bottom-0 rounded-full overflow-hidden left-2 hidden lg:flex "
      speed={ -40}
    >
       <iframe
         title="Stand'art Location"
         width="100%"
         height="100%"
         className=" w-full h-full lg:h-full  shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]"
         style={{ border: 0 }}
         loading="lazy"
         allowFullScreen
         src="https://www.google.com/maps?q=-18.853962,47.566114&z=15&output=embed"
       ></iframe>
     </Parallax>

    </div>
  )
}