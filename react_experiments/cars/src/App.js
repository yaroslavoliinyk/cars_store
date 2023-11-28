// import logo from './logo.svg';
// import './App.css';

function App() {
  let data = ["Fiat", "Peugeot","Ford","Renault","Citroen"]
  return (
    <div className="App max-w-3xl mx-auto h-full">
     <h1 className="bg-slate-500 text-white text-center">This is a Tailwind styled site!</h1>
      <div>
        {data.map(
          (el)=>{
            return <div>Cars listed as <span className=
              "font-bold">{el.toUpperCase()}</span></div>
          } )}
      </div>
    </div>
); }
export default App;