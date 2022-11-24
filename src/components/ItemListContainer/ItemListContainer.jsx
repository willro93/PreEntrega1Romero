import PropTypes from 'prop-types';
const ItemListContainer =({listas}) =>{
    return(
        <div>
            {
                listas.map((lista) =>{
                    return <p>{lista}</p>
                })
            }
        </div>
    )
}

ItemListContainer.proptype = {
    lista: PropTypes.array.isRequired
}

export default ItemListContainer;