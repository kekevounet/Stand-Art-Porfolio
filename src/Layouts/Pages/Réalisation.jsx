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
    detail: '',
    detail1: '',
    detail2: '',
    detail3: [],
    detail4: [],
    img: prod1
  },
  {
    titre: 'Totebag personnalisé – NOSY BORAH – NOSY MAITSO GO GREEN',
    detail: 'Sac en toile (type coton canvas) de couleur blanche, avec impression en quadrichromie',
    detail1: '',
    detail2: '',
    detail3: [
      'Texte : "NOSY BORAH" en bleu et "NOSY MAITSO – GO GREEN" en vert fluo ',
      'Motif : queue de baleine stylisée en noir',
      'Utilisation : articles promotionnels ou événementiels écoresponsables'
    ],
    detail4: [
      'Format estimé : environ 35x40 cm, anses longues pour port à l’épaule',
      'Emballage individuel possible (comme visible à l’arrière-plan)',
      ''
    ],
    img: prod2
  },
  {
    titre: 'Beau gilet de sécurité jaune fluo avec bandes réfléchissantes grises',
    detail: 'Il a plusieurs poches devant, dont une avec une fenêtre plastique pour insérer une carte d\'identité',
    detail1: 'Le logo "CLEAN IMPACT ASSAINISSEMENT HYGIÈNE" est brodé sur la poitrine droite.',
    detail2: '',
    detail3: ['', '', ''],
    detail4: [
      'Format estimé : environ 35x40 cm, anses longues pour port à l’épaule',
      'Emballage individuel possible (comme visible à l’arrière-plan)',
      ''
    ],
    img: prod3
  },
  {
    titre: 'Gilet de travail sans manches – modèle brodé logo MIARY',
    detail: 'Finition : Col montant pour protection supplémentaire',
    detail1: 'Usage : Idéal pour les techniciens, équipes terrain ou personnel de bureau en déplacement',
    detail2: 'Coloris : Gris clair',
    detail3: [
      'Matière : Toile résistante, adaptée aux environnements professionnels',
      'Fermeture : Zip central robuste',
      '2 grandes poches latérales'
    ],
    detail4: [
      '1 poche poitrine avec rabat',
      'Logo "MIARY" brodé (environ 8 cm) côté cœur',
      ''
    ],
    img: prod4
  },
  {
    titre: 'T-shirts personnalisés – impression poitrine',
    detail: 'T-shirts en coton, col rond, manches courtes. Impression du logo ou visuel sur le devant côté cœur. Coloris variés disponibles : vert, rouge, blanc, bordeaux. Tailles mixtes selon commande',
    detail1: 'Utilisation : Événement, association, équipe, campagne de sensibilisation, etc.',
    detail2: '',
    detail3: ['', '', ''],
    detail4: ['', '', ''],
    img: prod5
  },
  {
    titre: 'Blouse professionnelle manches courtes – modèle unisexe',
    detail: 'Conçue pour les environnements médicaux, industriels ou de laboratoire, cette blouse associe praticité et confort.',
    detail1: '',
    detail2: '',
    detail3: [
      'Fermeture centrale par boutons',
      '1 poche poitrine et 2 grandes poches basses pour un rangement fonctionnel',
      'Tissu en polyester-coton, résistant et facile d’entretien'
    ],
    detail4: ['Logo client brodé/thermocollé sur le côté cœur', '', ''],
    img: prod6
  },
  {
    titre: 'Tenue de sport – Maillot et short de basketball personnalisé',
    detail: 'Ensemble composé d’un maillot sans manches et d’un short assorti, conçu pour une équipe de basketball.',
    detail1: 'Idéal pour une utilisation en compétition ou entraînement. Personnalisation possible (noms, numéros, logos, …',
    detail2: 'Maillot :',
    detail3: [
      'Col en V avec liseré tricolore',
      'Impression du nom de l’équipe « MB2ALL » et du numéro « 20 » à l’avant',
      'Logos imprimés sur la poitrine'
    ],
    detail4: [
      'Short :',
      'Taille élastique',
      'Bandes latérales orange effet "splash" et motif ballon de basket'
    ],
    img: prod7
  },
  {
    titre: 'Polo personnalisé – Lycée Mixte Andapa',
    detail: 'T-shirt polo bleu royal à col blanc contrasté, conçu pour une commande institutionnelle (uniforme scolaire ou événementiel).',
    detail1: '',
    detail2: '',
    detail3: [
      'Matière : coton ou piqué polyester confortable',
      'Style : col polo à trois boutons, manches courtes avec revers blancs',
      'Couleur principale : bleu avec détails en blanc'
    ],
    detail4: [
      'Marquage : broderie ou impression côté cœur du logo "LYCÉE MIXTE ANDAPA (1984–2009)"',
      'Utilisation : uniforme scolaire, tenue associative, événement spécial',
      ''
    ],
    img: prod8
  }
];

export default function Réalisation() {
  return (
    <div className="w-full h-full container">
      <div className="w-full h-[20vh] flex justify-center items-center my-3 lg:my-0" id="Réalisation">
        <h3 className="text-center px-4">
          Tout au long du parcours, on avait travaillé avec des clients qui nous ont poussés au-delà de ce qu'on peut imaginer, et nous ont aidés à avancer.<br />
          Voici une petite présentation de notre main d'œuvre.
        </h3>
      </div>

      <div className="flex flex-col gap-y-16 px-4">
        {réalisations.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-16 h-screen lg:h-[50vh]`}
          >
            <div className="lg:w-1/2 w-full h-full border-2 border-cyan-800 rounded-lg flex items-center justify-center overflow-hidden relative">
              <img src={item.img} alt={item.titre} className="w-[75%] h-full absolute" />
            </div>

            <div className="lg:w-1/2 w-full h-full border-b border-cyan-800 flex flex-col">
              <section className="w-full h-[20%] flex justify-center items-center border-b border-cyan-800 text-xl font-bold text-center px-2">
                {item.titre}
              </section>
              <section className="w-full h-[80%] p-3 overflow-y-auto text-sm space-y-1">
                {[item.detail, item.detail1, item.detail2].map((d, i) => d && <p key={i}>{d}</p>)}

                {[item.detail3, item.detail4].map((list, i) => (
                  <ul key={i} className="list-disc list-inside space-y-3">
                    {list.filter(Boolean).map((s, j) => (
                      <li key={j} className='mt-3'>{s}</li>
                    ))}
                  </ul>
                ))}
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
