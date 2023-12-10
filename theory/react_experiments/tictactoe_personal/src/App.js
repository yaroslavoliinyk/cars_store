import Header from "./components/Header"
import {useState} from 'react'


function App() {
  const [turn, setTurn] = useState(0);
  
  function turnClick(){
    setTurn(turn === 0 ? 1 : 0);
    return turn;
  }

  let nums = Array.from(Array(9).keys());

  let buttons = nums.map((number) => (
    // <FieldButton turn={turn} id={number} key={number} />
    <FieldButton turn={turn} key={number} onClick={turnClick} />
  ));

  return (
    <div className="App max-w-3xl mx-auto h-full ">
      <Header/>
        User {turn + 1}

      <div className="grid grid-cols-3 my-3 gap-2 ">
          {buttons.map(
            (btn) =>{
                return btn
            }
          )}
      
      </div>
    </div>
  );
}

function FieldButton({turn, onClick}){
  // this.id = id
  // let symbol = '-'
  // function onClickField(){
  //   symbol = turn===0?'X':'0';
  //   console.log(symbol);
  //   onClick();
  // }
  // let symbol = turn === 0 ? 'X' : '0';
  const [symbol, setSymbol] = useState('-');

  function fieldClick(){
    turn = onClick();
    setSymbol(turn === 0 ? 'X':'O');
  }

  return (
      <button className='border-2 border-blue-500 rounded p-2' onClick={fieldClick}>
        {symbol}
      </button>
  )
}

export default App;
