import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./Cards/Cards.jsx";
import Nav from "./Nav/Nav";
import Detail from "./Detail/Detail";
import About from "./About/About";
import { useState, useEffect} from "react";
import Form from "./Form/Form";
import  Favorites  from "./Favorites/Favorites";


function App () {

  const location = useLocation ()

  const [characters, setCharacters] = useState([]);

  const [access, setAccess]= useState(false) 
  const username= "emilia.landa@gmail.com"
  const password= "12345"
  const navigate = useNavigate()

  
  function login(userData){
      if(userData.username === username && userData.password === password){
          setAccess(true);
          navigate("/home");
      
    } else{
      alert("usuario o contraseña incorrecta")
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

const onClose= (id)=>{
   setCharacters(characters.filter(character => character.id !== id))
 }


  return (
    <div className='App' style={{ padding: '25px' }}>
    
      <div> {location.pathname !== '/' && <Nav onSearch={onSearch} /> } </div>
        <Routes>
              <Route path="/home" element= {<Cards characters={characters} onClose={onClose}/>} />
              <Route path="/about" element= {<About/>}/>
              <Route path="/detail/:detailId" element={<Detail/>} />
              <Route path='/' element={<Form login={login} />}/>
              <Route path="/favorites" element={<Favorites/>} />
        </Routes>
    </div>
  )
}
export default App
