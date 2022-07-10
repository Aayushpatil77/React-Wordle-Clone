import './App.css';
import Key from './Key';

function App() {

  const generateKeys = () => {
        const KEYS = [];
        const KEYBOARD = "qwertyuiopasdfghjklzxcvbnm".toUpperCase();
        KEYBOARD.split("").forEach((v, i)=>{
            if (v === 'A'){
              KEYS.push(<div className='space'></div>)
            }
            if (v === 'Z'){
              KEYS.push(<div className='space'></div>)
              KEYS.push(<Key keyName='ENTER'/>)
            }
            KEYS.push(<Key keyName={v} key={v}/>)
        })
        KEYS.push(<Key keyImage/>)
        return KEYS;
  }

  return (
    <>
    <div className='guess-grid'>
    <div className='tile'></div>
        
    </div>
    <div className='keyboard'>

      {generateKeys()}
      
    </div>
    </>
  );
}

export default App;
