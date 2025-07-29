import { FaTshirt, FaTools, FaLaptop, FaPaintBrush, FaPrint, FaBolt } from "react-icons/fa";

export default function Choix() {
  const images = [
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5442.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5443.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5440.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5441.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5445.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5446.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5447.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5448.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5449.png",
    "https://pngimg.com/uploads/tshirt/tshirt_PNG5450.png",
  ];
  const fullImages = [...images, ...images]; // Duplication pour continuité

  const services = [
    { texte: "Vêtements personnalisés", icon: <FaTshirt /> },
    { texte: "Réparations", icon: <FaTools /> },
    { texte: "Vente matériel", icon: <FaLaptop /> },
    { texte: "Design graphique", icon: <FaPaintBrush /> },
    { texte: "Impression", icon: <FaPrint /> },
    { texte: "Maintenance rapide", icon: <FaBolt /> },
  ];
  const fullServices = [...services, ...services];

  return (
    <section className="w-full bg-white text-gray-800 py-12" id="Choix">
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Notre expertise allie qualité, réactivité et créativité. Que ce soit pour vos vêtements professionnels, vos projets d'impression ou vos besoins en matériel informatique, nous vous accompagnons avec sérieux et passion.
        </p>
      </div>

      {/* Bande t-shirts */}
      <div className="overflow-hidden w-full h-[35vh] relative">
        <div className="flex w-max animate-marquee gap-6">
          {fullImages.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`vetement-${index}`}
              className="h-[35vh] w-auto object-contain bg-white p-2 rounded-md flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Bande services */}
      <div className="overflow-hidden w-full h-[15vh] relative mt-8 flex items-center">
        <div className="flex w-max animate-marquee-reverse gap-12">
          {fullServices.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-lg font-medium text-gray-800 flex-shrink-0">
              <span className="text-2xl text-blue-600">{item.icon}</span>
              <span>{item.texte}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
