import { CgTimelapse } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Contact()
{
  // Etat
  const contacts = [
    { titre : 'Adresse', icon:<FaMapMarkerAlt />, nom: 'Ankadikely Ilafy, Antananarivo' },
    { titre : 'Téléphones', icon:<AiFillPhone />, nom: '+261 34 31 093 79 / +261 38 66 414 82' },
    { titre : 'Email', icon:<HiMail />, nom: 'manager.standart0306@gmail.com' },
    { titre : 'Horaires', icon:<CgTimelapse />, nom: 'Lun - Sam : 7h30 à 16h30' },
  ]
  // Affichage
  return(
    <div className="w-full lg:h-screen h-[120vh] container flex justify-between mt-10 lg:flex-row flex-col" id="Contact">
      <div className="w-full h-full flex flex-col justify-between">

        <div className="w-full h-full border-2 lg:ml-20 relative space-y-7 flex justify-center flex-col lg:rounded-ss-[5rem] py-5 lg:py-0">

          <h2 className="ml-5 lg:ml-20">Information</h2>

          {contacts.map((contact, index)=>(
          <div className="flex flex-col ml-5 lg:ml-24" key={index}>
            <div className="flex items-center text-xl">
              <span className="mr-3">{contact.icon}</span>
              <span className="">{contact.titre} :</span>
            </div>
            <div className="text-lg text-gray-900">{contact.nom} </div>
          </div>
          ))}


          {/* Google maps */}
          <div className="absolute w-[222px] h-[227px] bottom-0 right-0 hidden lg:flex ">
            <iframe
              title="Stand'art Location"
              width="100%"
              height="100%"
              className=" w-full h-full lg:h-full shadow-[inset_0px_0px_5px_rgba(0,0,0,0.7)]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=-18.853962,47.566114&z=15&output=embed"
            ></iframe>
          </div>
        </div>
        <div className="w-full h-[60%]"></div>
      </div>


      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-full hidden lg:flex"></div>

        <div className="w-full h-full border-2 lg:-mt-56 lg:-ml-36 lg:rounded-ee-[5rem] relative space-y-7 flex justify-center flex-col">


          <div className="flex flex-col lg:ml-24 lg:mr-24 mx-3 lg:mt-48 space-y-2">
            <label htmlFor="Email" className="py-3 text-lg: font-bold ">Email:</label>
            <input type="text" className=" p-3 border" />
            <label htmlFor="Mess">Message</label>
            <input type="text" className="p-3 border" />
            <input type="submit" className="p-3 bg-cyan-800 text-lg text-white font-bold" value='Envoyer' />
          </div>
          <h2 className="absolute lg:top-20 top-5 left-5 lg:mr-24 right-0">Contactez-nous ici</h2>


        </div>


      </div>

    </div>
  )
}