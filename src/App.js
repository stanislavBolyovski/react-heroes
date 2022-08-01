import './App.css';
import Heroes from './components/Heroes/Heroes';

function App() {

  function addHero() {
    console.log('TEST');
  }

  return (
    <div className='container'>
      <Heroes></Heroes>
    </div>
  );

}

export default App;
