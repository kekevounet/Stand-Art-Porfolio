import { motion } from 'framer-motion';
import prod1 from '../Assets/prod/prod1.png';
import prod2 from '../Assets/prod/prod2.png';
import prod3 from '../Assets/prod/prod3.png';
import prod4 from '../Assets/prod/prod4.png';
import prod5 from '../Assets/prod/prod5.png';
import prod6 from '../Assets/prod/prod6.png';
import prod7 from '../Assets/prod/prod7.png';
import prod8 from '../Assets/prod/prod8.png';

const réalisations = [
  {
    titre: 'Casquette en tissus drill avel logo dtf ou serigraphie',
    description: [],
    details: [],
    img: prod1
  },
  {
    titre: 'Totebag personnalisé – NOSY BORAH – NOSY MAITSO GO GREEN',
    description: [
      'Sac en toile (type coton canvas) de couleur blanche, avec impression en quadrichromie'
    ],
    details: [
      { label: 'Texte', value: '"NOSY BORAH" en bleu et "NOSY MAITSO – GO GREEN" en vert fluo' },
      { label: 'Motif', value: 'queue de baleine stylisée en noir' },
      { label: 'Utilisation', value: 'articles promotionnels ou événementiels écoresponsables' },
      { label: 'Format', value: 'environ 35x40 cm, anses longues pour port à l’épaule' },
      { label: 'Emballage', value: 'individuel possible (comme visible à l’arrière-plan)' }
    ],
    img: prod2
  },
  {
    titre: 'Beau gilet de sécurité jaune fluo avec bandes réfléchissantes grises',
    description: [
      'Il a plusieurs poches devant, dont une avec une fenêtre plastique pour insérer une carte d\'identité',
      'Le logo "CLEAN IMPACT ASSAINISSEMENT HYGIÈNE" est brodé sur la poitrine droite.'
    ],
    details: [
      { label: 'Format', value: 'environ 35x40 cm' },
      { label: 'Port', value: 'anses longues pour port à l’épaule' },
      { label: 'Emballage', value: 'individuel possible' }
    ],
    img: prod3
  },
  {
    titre: 'Gilet de travail sans manches – modèle brodé logo MIARY',
    description: [
      'Finition : Col montant pour protection supplémentaire',
      'Usage : Idéal pour les techniciens, équipes terrain ou personnel de bureau en déplacement',
      'Coloris : Gris clair'
    ],
    details: [
      { label: 'Matière', value: 'Toile résistante, adaptée aux environnements professionnels' },
      { label: 'Fermeture', value: 'Zip central robuste' },
      { label: 'Poches', value: '2 grandes poches latérales + 1 poitrine avec rabat' },
      { label: 'Logo', value: '"MIARY" brodé côté cœur (8 cm)' }
    ],
    img: prod4
  },
  {
    titre: 'T-shirts personnalisés – impression poitrine',
    description: [
      'T-shirts en coton, col rond, manches courtes. Impression du logo ou visuel sur le devant côté cœur.',
      'Coloris variés disponibles : vert, rouge, blanc, bordeaux. Tailles mixtes selon commande',
      'Utilisation : Événement, association, équipe, campagne de sensibilisation, etc.'
    ],
    details: [],
    img: prod5
  },
  {
    titre: 'Blouse professionnelle manches courtes – modèle unisexe',
    description: [
      'Conçue pour les environnements médicaux, industriels ou de laboratoire, cette blouse associe praticité et confort.'
    ],
    details: [
      { label: 'Fermeture', value: 'centrale par boutons' },
      { label: 'Rangements', value: '1 poche poitrine, 2 grandes poches basses' },
      { label: 'Tissu', value: 'polyester-coton, résistant et facile d’entretien' },
      { label: 'Logo', value: 'client brodé/thermocollé sur le côté cœur' }
    ],
    img: prod6
  },
  {
    titre: 'Tenue de sport – Maillot et short de basketball personnalisé',
    description: [
      'Ensemble composé d’un maillot sans manches et d’un short assorti, conçu pour une équipe de basketball.',
      'Idéal pour une utilisation en compétition ou entraînement. Personnalisation possible (noms, numéros, logos, …'
    ],
    details: [
      { label: 'Maillot', value: 'Col en V avec liseré tricolore, impression équipe « MB2ALL », numéro « 20 », logos sur la poitrine' },
      { label: 'Short', value: 'Taille élastique, bandes latérales orange effet "splash" et motif ballon' }
    ],
    img: prod7
  },
  {
    titre: 'Polo personnalisé – Lycée Mixte Andapa',
    description: [
      'T-shirt polo bleu royal à col blanc contrasté, conçu pour une commande institutionnelle (uniforme scolaire ou événementiel).'
    ],
    details: [
      { label: 'Matière', value: 'coton ou piqué polyester confortable' },
      { label: 'Style', value: 'col polo à trois boutons, manches courtes avec revers blancs' },
      { label: 'Couleur', value: 'bleu avec détails blancs' },
      { label: 'Logo', value: 'broderie ou impression "LYCÉE MIXTE ANDAPA (1984–2009)" côté cœur' }
    ],
    img: prod8
  }
];

export default function Réalisation() {
  return (
    <div className="flex flex-col items-center w-full py-10" id="Réalisation">
      <div className="container text-center">
        <h2 className="text-3xl font-bold">Matériels informatiques</h2>
        <hr className="my-4 border-cyan-800" />
      </div>
      <div className="flex flex-col w-full space-y-20">
        {réalisations.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row bg-cyan-50' : 'lg:flex-row-reverse'
            } items-center justify-center gap-10 lg:gap-20 w-full p-4 lg:p-5`}
          >
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <div className="w-full max-w-xl h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden border-8 rounded-3xl border-cyan-800">
                <img
                  src={service.img}
                  alt={service.titre}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <motion.div
              className="flex flex-col items-center justify-center w-full lg:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full max-w-xl p-2 space-y-6">
                <p className="p-3 text-lg font-bold text-center border-b-4 lg:text-2xl border-cyan-600">
                  {service.titre}
                </p>
                {service.description.map((desc, i) => (
                  <p key={i} className="text-xl leading-relaxed">
                    {desc}
                  </p>
                ))}
                <ul className="space-y-1">
                  {service.details.map((detail, i) => (
                    <li key={i} className="ml-4 text-xl list-disc">
                      <strong>{detail.label}:</strong> {detail.value}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center w-full pt-4">
                  {/* <a
                    href="#Contact"
                    className="w-full p-2 font-bold text-center text-white no-underline rounded-lg shadow bg-cyan-600 hover:bg-cyan-700"
                  >
                    Contactez-nous
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
