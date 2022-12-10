import styles from './Card.module.css'
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { addFav, deleteFav } from '../redux/actions';
import { connect } from 'react-redux';

export function Card(props) {
   
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myfavorites.foreach ((fav) => {
        if (fav.id === props.id) {
                 setIsFav(true);
        }
      });
   }, [props.myfavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.deleteFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props)
      }
   }

   return (
      <div className={styles.singleCard} >
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} ><h2>{props.name}</h2> </Link>
         <h6>{props.id}</h6>
         <img  src={props.image} alt={props.name} /> 
         <div>
         <h3>{props.species} </h3>
         <h3>{props.gender} </h3>
         </div>
                {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
      </div>
   );
}

export function mapStateToProps(state){
   return{
      myfavorites: state.myfavorites
   }
}

export function mapDispatchToProps(dispatch){
   return{
      addFav: (personaje) => dispatch(addFav(personaje)),
      deleteFav: (id) => dispatch(deleteFav(id))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
