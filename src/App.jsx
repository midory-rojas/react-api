import axios from "axios";
import './App.css'
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [attrici, setAttrici] = useState([]);

  useEffect(() => {
    fetchAttrici();
  }, []);


  function fetchAttrici() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/") .then((resp) => {
        setAttrici(resp.data);
      });
  }


  return (
    <>
      <div className='container'>
        <header className="text-center">
          <h1 className="fw-bold py-3">Attrici</h1>
        </header>
        <main>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {attrici.map((attrice) => (
              <div className="col" key={attrice.id}>
               <Card  attrice={attrice} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
