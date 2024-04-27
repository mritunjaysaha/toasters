import './App.css';
import { Counter } from './components/Counter/Counter';
import { ToasterProvider, ToastsContainer } from './context/ToasterProvider';

function App() {
  return (
    <>
      <ToasterProvider>
        <Counter />
        <ToastsContainer />
      </ToasterProvider>
    </>
  );
}

export default App;
