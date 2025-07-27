import { FaUserMd, FaGift, FaTshirt, FaPrint, FaUniversity, FaProjectDiagram } from 'react-icons/fa';

export default function Expérience() {
  // Etat
  const items = [
    {
      titre: 'Vêtements professionnels',
      texte: 'Confection de vêtements professionnels : blouses médicales, gilets de sécurité, polos personnalisés pour établissements scolaires.',
      icon: <FaUserMd />
    },
    {
      titre: 'Goodies personnalisés',
      texte: 'Création de goodies & objets publicitaires : tote bags, porte-clés, casquettes et autres articles sur mesure pour campagnes de sensibilisation ou événements.',
      icon: <FaGift />
    },
    {
      titre: 'Habillage visuel',
      texte: 'Habillage visuel : réalisation de vêtements d’équipe (maillots de sport, uniformes), avec logos brodés ou imprimés.',
      icon: <FaTshirt />
    },
    {
      titre: 'Supports imprimés',
      texte: 'Supports de communication : impression d’affiches, bâches et flyers pour entreprises ou ONG.',
      icon: <FaPrint />
    },
    {
      titre: 'Partenariats institutionnels',
      texte: 'Collaboration avec des particuliers et institutions : lycées, associations, sociétés privées ou organismes locaux.',
      icon: <FaUniversity />
    },
    {
      titre: 'Gestion de projet complète',
      texte: 'Suivi complet du projet : de la conception graphique jusqu’à la livraison finale, en garantissant qualité, réactivité et respect des délais.',
      icon: <FaProjectDiagram />
    }
  ];

  const references = [
    'Lycée Andapa',
    'École privée Le Panda Ankadikely Ilafy',
    'Clean Impact Toamasina',
    'Triumph Antananarivo',
    'Cabinet d\'études Mirary',
    'Pharmacie Saint Marie'
  ];

  return (
    <div className="w-full min-h-[150vh] my-10 bg-white container" id="Expérience">

      {/* Texte intro */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <p className="text-lg text-gray-700">
          Nous proposons une gamme complète de services autour de la personnalisation textile et de la communication visuelle. Grâce à notre savoir-faire, nous accompagnons entreprises, institutions et particuliers dans la réalisation de leurs projets sur mesure, avec une attention particulière à la qualité, à la réactivité et au respect des délais.
        </p>
      </div>

      {/* Services */}
      <div className="w-full mb-10 gap-5 grid lg:grid-cols-2 grid-cols-1 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-52 shadow-md overflow-hidden border-b-4 border-t border-t-gray-400 border-cyan-500 cursor-pointer bg-white p-4 space-y-5 relative group"
          >
            <div className="flex">
              <span className="text-3xl mr-3 group-hover:text-cyan-800 transition-all duration-300">{item.icon}</span>
              <span className="text-xl group-hover:text-cyan-500 transition-all duration-300">{item.titre}</span>
            </div>
            <div>{item.texte}</div>
            <span className="absolute bottom-0 -right-28 w-0 bg-cyan-500 h-full -skew-x-[45deg] group-hover:w-1/6 transition-all duration-500"></span>
          </div>
        ))}
      </div>

      {/* Références */}
      <section className="max-w-3xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-cyan-600 text-2xl font-semibold mb-6">Références</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2
                       text-center sm:text-left
                       grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {references.map((ref, idx) => (
            <li key={idx} className="text-lg">{ref}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
