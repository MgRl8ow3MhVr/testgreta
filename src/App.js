import './App.css';
import { useState } from 'react'

function App() {

  // le state aura deux valeurs possibles :
  // "option1" dans le cas ou on a clique sur la case du haut
  // "option2" dans le cas ou on a clique sur la case du bas
  const [selecteur1, setSelecteur1] = useState("")
  const [prixOption1, setprixOption1] = useState(0)


  // le state aura deux valeurs possibles :
  // "option1" dans le cas ou on a clique sur la case du haut
  // "option2" dans le cas ou on a clique sur la case du bas

  const [selecteur2, setSelecteur2] = useState("")
  const [prixOption2, setprixOption2] = useState(0)


  return (
    <div>
      TESLA CONFIG
      <div className={selecteur1 === "option1" ? 'selecteurYes' : 'selecteurNo'} onClick={() => {
        setSelecteur1("option1")
        setprixOption1(90700)
      }}
      >grande autonomie (90 700)</div>


      <div className={selecteur1 === "option2" ? 'selecteurYes' : 'selecteurNo'} onClick={() => {

        setSelecteur1("option2")
        setprixOption1(106700)

      }} > performance (106700)</div>

      COUELUR
      <div className={selecteur2 === "option1" ? 'selecteurYes' : 'selecteurNo'} onClick={() => {
        setSelecteur2("option1")
        setprixOption2(0)
      }}
      >Blanc Nacre (0)</div>


      <div className={selecteur2 === "option2" ? 'selecteurYes' : 'selecteurNo'} onClick={() => {
        setSelecteur2("option2")
        setprixOption2(1000)
      }} > Noir Uni (1000)</div>


      <div>PRIX FINAL {prixOption1 + prixOption2}</div>

    </div>

  );
}

export default App;
