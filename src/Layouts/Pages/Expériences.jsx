import { IoIosBusiness } from "react-icons/io";
import { MdAddBusiness } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa";
import { Fa500Px } from "react-icons/fa";
export default function Expérience() {
  // Etat
  const items = [
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <FaBusinessTime /> },
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <IoMdBusiness /> },
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <MdBusinessCenter /> },
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <MdAddBusiness /> },
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <IoIosBusiness /> },
    { titre: 'lorem', texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam.', icon: <Fa500Px /> },
  ];
  // Affichage
  return (
    <div className="w-full h-full mb-10 bg-white container" id="Expérience">
      <h1 className="text-center">lorem</h1>
      <h4 className="text-center mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquid?</h4>
      <div className="w-full h-1/2 mb-10 gap-5 grid lg:grid-cols-2 grid-cols-1">
        {items.map((item, index) => (
          <div
            className="w-full h-52 shadow-md overflow-hidden border-b-4 border-t border-t-gray-400 border-cyan-500 cursor-pointer bg-white p-4 space-y-5 relative group" key={index}
          >
            <div className="flex">
              <span className="text-3xl mr-3 group-hover:text-cyan-800 transition-all duration-300">{item.icon}</span>
              <span className="text-xl group-hover:text-cyan-500 transition-all duration-300">{item.titre}</span>
            </div>
            <div className="">{item.texte}</div>
            <span className="absolute bottom-0 -right-28 w-0 bg-cyan-500 h-full -skew-x-[45deg] group-hover:w-1/6 transition-all duration-500"></span>
          </div>))}
      </div>
    </div>
  )
}