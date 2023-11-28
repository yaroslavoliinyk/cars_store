// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header"

function App() {
  let data = [
    {brand:"Fiat", color:"green", model:"500L",price:7000, "year":2020,"id":1},
    {brand:"Peugeot", color:"red", model:"5008", price:8000, "year":2018,"id":2},
    {brand:"Volkswagen", color:"white", model:"Golf 7", price:8500, "year":2019,"id":3},
    {brand:"Fiat", color:"green", model:"Tipo", price:10000, "year":2019,"id":4},
    {brand:"Kia", color:"black", model:"Ceed", price:6000, "year":2010,"id":5},
    {brand:"Volkswagen", color:"white", model:"Golf 7", price:8500, "year":2019,"id":15},
    {brand:"Fiat", color:"gray", model:"Ritmo", price:300, "year":1990,"id":21}
  ]
  return (
    <div className="App max-w-3xl mx-auto h-full">
      <Header/>
      <div>
        {data.map(
          (el)=>{
            return (<div key={el.id}>
              <span className="font-bold">
                {el.brand.toUpperCase()}</span>
                </div>
                )
          } )}
      </div>
    </div>
); }
export default App;