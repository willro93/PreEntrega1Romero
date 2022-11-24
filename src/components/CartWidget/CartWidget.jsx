import PropTypes from 'prop-types';

const CartWidget = ({children}) => {
    return (
        <div>
            {children}
        </div>
        
    )
}

CartWidget.proptype = {
    children: PropTypes.element.isRequired
}

export default CartWidget;

