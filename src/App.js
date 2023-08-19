import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='sadfafafsadfadfgsgsgsdfgsfdgsdfgdsgsdgdsg
          sdgsdgsdgsdfgsgsdfgdsfgdsfgsdfgsdfgsdfgsdfgs
          dfgdsfdsfgsdgsfsgsdfgdfgsdgfsdfg'/>  
           <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='sadfafafsadfadfgsgsgsdfgsfdgsdfgdsgsdgdsg
          sdgsdgsdgsdfgsgsdfgdsfgdsfgsdfgsdfgsdfgsdfgs
          dfgdsfdsfgsdgsfsgsdfgdfgsdgfsdfg'/>   
          <Testimonio 
          nombre='Ema Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='sadfafafsadfadfgsgsgsdfgsfdgsdfgdsgsdgdsg
          sdgsdgsdgsdfgsgsdfgdsfgdsfgsdfgsdfgsdfgsdfgs
          dfgdsfdsfgsdgsfsgsdfgdfgsdgfsdfg'/>   
      </div>
    </div>
  );
}

export default App;
