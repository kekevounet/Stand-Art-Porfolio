export default function Footer()
{
  // Etat
    const NavLinks = [
      {nom: 'Accueil', lien: 'Accueil' },
      {nom: 'Réalisation', lien: 'Réalisation'},
      {nom: 'Compétences', lien: 'Compétences' },
      {nom: 'Expérience', lien: 'Expérience'},
      {nom: 'Contact', lien: 'Contact'},
    ];
  // Affichage
  return(
    <div className="container border-t-2 border-cyan-800">
      <div className="w-full lg:h-56 h-[60vh] flex justify-between flex-col">
        <div className="w-full h-full flex items-center justify-around flex-col lg:flex-row py-10">

          {NavLinks.map((link, index)=>(
            <a href={`#${link.lien}`} className="cursor-pointer p-3 relative no-underline text-black group" key={index}>
              <span>{link.nom}</span>
              <span className="absolute bg-cyan-800 w-0 h-1 bottom-0 left-0 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}

        </div>
        <div className="w-full h-full flex justify-center items-center text-center py-5"> <h3 className='mb-5 text-lg lg:text-3xl font-bold tracking-wider'><strong>STAND’<span className='text-cyan-800'>ART</span></strong> – Une expertise qui s’affirme</h3></div>
      </div>
      <div className="w-full h-16 flex justify-center items-center text-lg lg:text-2xl font-bold pt-5">&copy; Stand'Art Corporation. All right reserved</div>
    </div>
  )
}