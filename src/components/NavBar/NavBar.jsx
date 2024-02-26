import navBar from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import PawIcon from '../PawIcon/PawIcon'
import { Link } from 'react-router-dom'




const NavBar = () => {
   return (
     <>
       <nav className={`row ${navBar.navBar}`}>
         <h2 className={`navbar-brand col-md-2 ${navBar.title}`}>
           Tienda Mascotas
         </h2>
         <div className={`col-md-1 ml-n5 mt-2 ${navBar.logo}`}>
           <PawIcon color="#294B29" size="35" />
         </div>
         {/* <ul className='col-md-6 navbar ml-5'>
            <li>Inicio</li>
            <li>Perros</li>
            <li>Gatos</li>
            <li>Otros</li>
          </ul> */}

         {/* <div className='col-md-6 navbar ml-5'>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/category/calzados">
          <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
        <Link to="/category/ropa">
          <button className="btn btn-outline-dark mx-2">Ropa</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link> */}

         <div className="col-md-6 navbar ml-5">
           <Link to="/">
             <button className="btn btn-outline-dark mx-2">Home</button>
           </Link>
           <Link to="/category/perros">
             <button className="btn btn-outline-dark mx-2">Perros</button>
           </Link>
           <Link to="/category/gatos">
             <button className="btn btn-outline-dark mx-2">Gatos</button>
           </Link>
           <Link to="/category/otros">
             <button className="btn btn-outline-dark mx-2">Otros</button>
           </Link>
         </div>
         {/* <Link to="/cart">
           <CartWidget />
         </Link> */}

         <div className="col-md-3 ml-auto mr-4">
           <CartWidget />
         </div>
       </nav>
     </>
   );
 }
 
 export default NavBar