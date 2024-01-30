import navBar from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import PawIcon from '../PawIcon/PawIcon'


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
          <ul className='col-md-6 navbar ml-5'>
            <li>Inicio</li>
            <li>Perros</li>
            <li>Gatos</li>
            <li>Otros</li>
          </ul>
          <div className='ml-auto mr-4'>
            <CartWidget /> 
          </div>
        </nav>
     </>
   )
 }
 
 export default NavBar