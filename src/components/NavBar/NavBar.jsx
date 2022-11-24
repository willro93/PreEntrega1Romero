import PropTypes from 'prop-types';
 const NavBar = ({menus, children}) =>{
    return (
       <div className='navbar'>
           <div className='navbar__menus'>
                {
                    menus.map((menu)=> {
                        return <button className='navbar__menu'>{menu}</button>
                        
                    })
                }
           </div>
           <div>
            {children}
           </div>
       </div>
    )
 }

NavBar.proptype = {
    menus: PropTypes.array.isRequired,
    children: PropTypes.element
}

export default NavBar;