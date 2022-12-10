import {useState , useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";

export default function Detail(){
 
    const { detailId }= useParams()
    const [character, setCharacter] = useState({})
    const navigate= useNavigate()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return <div>
              <div>
                  {character ? ( <div> 
                                   <div>
                                    <h1>{character.name}</h1> 
                                    <h5>{character.status} ESTADO:</h5>
                                    <h5>{character.species} ESPECIE:</h5>
                                    <h5>{character.gender} GENERO:</h5>
                                    <h5>{character.origin?.name} ORIGEN:</h5>
                                   </div>
                                   <div>
                                     <img src={character.image} alt={character.name} />
                                   </div>

                     </div> ) : ("")}
                     <button onClick={()=> navigate ('/home')}>Atrás</button>
              </div> 
           </div>
}