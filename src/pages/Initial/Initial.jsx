import CartWidget from "../../components/CartWidget";
import NavBar from "../../components/NavBar/NavBar";
import ItemListContainer from "../../components/ItemListContainer"
const Initial = () => {
    const Menus = ['Nosotros', '¿Por qué Maguey?', 'Productos', 'Preguntas Frecuentes']
    const Productos = ['Shampoo','Acondicionador', 'Desodorante']
    return(
        <CartWidget>
             <NavBar menus= {Menus}><button><img src="./components/ItemListContainer/ico_carri.png" alt="carrito"/></button></NavBar>
             <ItemListContainer listas={Productos}/>
        </CartWidget>
    )
}

export default Initial;