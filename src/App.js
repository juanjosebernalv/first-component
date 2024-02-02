import './App.css';
import Header from './components/Header';
import { Main } from './components/Main';
import { Footer as FooterJJ } from './components/Footer';

function App() {

  const fruits = ['🍇', '🍉', '🍌', '🍍', '🪱'];

  const number = 1_000_000;

  const f1 = (event) => {
    console.log('press clic', event);
    console.log(number);
    alert('Test');
  };
  return (
    <>
      <Header title="HTML ATTRIBUTE PROPS" onAlgo={f1} />
      <Main>{fruits}</Main>
      <FooterJJ />
    </>
  );
}

export default App;
