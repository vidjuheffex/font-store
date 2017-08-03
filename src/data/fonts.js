let classicFonts = {
  category: "Classic",
  fonts: 
  [
    {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/Roboto-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Roboto'
    },
    {
      fontFamily: 'Open-Sans',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/OpenSans-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Open+Sans'
    },
    {
      fontFamily: 'Slabo',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/Slabo27px-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Slabo+27px'
    },
    
  ]
};

let cursiveFonts = {
  category: "Cursive",
  fonts: 
  [
    {
      fontFamily: 'Pacifico',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/Pacifico-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Pacifico'
    },
    {
      fontFamily: 'DancingScript',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/DancingScript-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Dancing+Script'
    },
    {
      fontFamily: 'Sacramento',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/Sacramento-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Sacramento'
    }
  ]
};

let monospaceFonts = {
  category: "Monospace",
  fonts: 
  [
    {
      fontFamily: 'Inconsolata',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/Inconsolata-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Inconsolata'
    },
    {
      fontFamily: 'Source Code Pro',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/SourceCodePro-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Source+Code+Pro'
    },
    {
      fontFamily: 'Ubuntu Mono',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "url('/fonts/UbuntuMono-Regular.ttf') format('truetype')",
      link: 'https://fonts.google.com/specimen/Ubuntu+Mono'
    },
    
  ]
};

export function getFonts (cat) {
  let fontset;
  switch(cat){
  case("classic"):
    fontset = classicFonts;
    break;
  case("cursive"):
    fontset = cursiveFonts;
    break;
  case("monospace"):
    fontset = monospaceFonts;
    break;
  default:
    break;
  }
  
    
  return fontset;
}

