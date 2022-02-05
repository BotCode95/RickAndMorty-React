import './App.css';
import { Listado } from './components/Listado/Listado';
import { CharacterProvider } from './context/Characters/CharacterContext';

const AppState = ({children} : any) => {
  return (
    <CharacterProvider>
      {children}
    </CharacterProvider>
  )
}

const App = () => {
  return (
    <AppState>
      <div className="App">
        <Listado></Listado>
      </div>
    </AppState>
  );
}

export default App;

