import { connect, useDispatch } from "react-redux"
import {orderCards, filterCards} from '../redux/actions'
import {useNavigate} from "react-router-dom"

export function Favorites({myFavorites}){
    const dispatch=useDispatch()
    const navigate= useNavigate()

    const handleSelectOrder = (e) =>{
        dispatchEvent(orderCards (e.target.value))
    }

    const handleSelectorFilter = (e) =>{
        dispatch(filterCards(e.target.value))
    }

    return (
            <div>
                  <div>
                        <div>
                                <label  htmlFor="order">Orden:</label>
                                <select  name='order'  onChange={handleSelectOrder}>
                                    <option value='Ascendente'>Ascendente</option>
                                    <option value='Descendente'>Descendente</option>
                                </select>
                        </div>
                        <div>
                              <label  htmlFor="filter">Filtrar por:</label>
                             <select  name='filter' onChange={handleSelectorFilter}>
                                <option value='All'>All</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Genderless'>Genderless</option>
                                <option value='unknown'>unknown</option>
                            </select> 
                        </div>
                  </div>
                  <div>
                   {  myFavorites.map(fav => <div>
                      <img src={fav.image} alt={fav.name} />
                     <h3 >{fav.name}</h3> </div>)}
                   </div>
                 <button  onClick={() => navigate('/home')}>Volver</button>
           </div>
    )
}

 function mapStateToProps (state) {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps) (Favorites)