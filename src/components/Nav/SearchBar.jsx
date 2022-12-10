import { useState } from 'react';

export default function SearchBar(props) {

   const[character, setCharacter] = useState("");

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }
   return (
      <div className={styles.search}>
         <input className={styles.input} type='search'  value={character} onChange={handleChange} />
         <button className= {styles.button} onClick={() => {props.onSearch (character); setCharacter('')}}>Agregar</button> 
      </div>
   );
}

