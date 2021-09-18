//icono
import logo from '../../iconos/logo_reina.jpg'; 

import './NavBar.css';

//components exts
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const NavBar = () => {
      
  return (
    <div className="App">
   
      
      <AppBar position="static" className="main_navbar">
        <Toolbar>
          <Typography variant="h6" >
           <div className="icono_nav">
                    <img src={logo} alt={"logo principal"} />
           </div>
          </Typography>
        
            <ul className="lista_nav">
              <li> <Button color="inherit">Inicio</Button></li>
              <li> <Button color="inherit">Productos</Button></li>
              <li><Button color="inherit">Preguntas Frecuentes</Button></li>
              <li> <Button color="inherit">Contacto</Button></li>
            </ul>

        

        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar; 



