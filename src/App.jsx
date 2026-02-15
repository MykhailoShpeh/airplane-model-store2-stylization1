import './App.css';

// import Section from './components/SectionWOSyle';  
import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі


import planes from './json/planes.json';
// import PlanesList from './components/PlanesListWOSyle';
import PlanesList from './components/PlanesListBuiltInStyles'; //! вбудовані стилі




export default function App() {
  return (
    <>
      {/* //? Paintings */}
      {/* <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section > */}

      {/* //? Planes */}
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
