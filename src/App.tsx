import { CharacterProvider } from './context/Characters/CharacterContext';
import { Navegation } from './navegation/Navegation';

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
        <Navegation/>
    </AppState>
  );
}

export default App;

