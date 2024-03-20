import navBar from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import PawIcon from '../PawIcon/PawIcon'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
   return (
     <>
       <nav className={`row fixed-top ${navBar.navBar}`}>
         <h2 className={`navbar-brand col-md-2 ${navBar.title}`}>
           Tienda Mascotas
         </h2>
         <div className={`col-md-1 ml-n5 mt-2 ${navBar.logo}`}>
         <Link to="/">
           <PawIcon color="#294B29" size="35" />
           </Link>
         </div>
         
         <div className="col-md-6 navbar ml-5">
           <NavLink to="/" className={({ isActive }) => isActive ? `${navBar.activeLi}` : ""}>
             <li className={`nav-item ${navBar.home}`}>Home</li>
           </NavLink>
           <NavLink to="/category/perros" className={({ isActive }) => isActive ? `${navBar.activeLi}` : "" }>
             <li className="nav-item">Perros</li>
           </NavLink>
           <NavLink to="/category/gatos" className={({ isActive }) => isActive ? `${navBar.activeLi}` : "" }>
             <li className="nav-item">Gatos</li>
           </NavLink>
           <NavLink to="/category/otros" className={({ isActive }) => isActive ? `${navBar.activeLi}` : "" }>
             <li className="nav-item">Otros</li>
           </NavLink>
         </div>
         {/* <Link to="/cart" className="col-md-3 ml-auto mr-4">
           <CartWidget />
         </Link> */}
         <NavLink to="/cart" className={({ isActive }) => `${isActive ? navBar.activeCart : ""} col-md-3 ml-auto mr-4 ${navBar.cart}`}>         
         <CartWidget />
           </NavLink>
         
       </nav>
     </>
   );
 }
 
 export default NavBar