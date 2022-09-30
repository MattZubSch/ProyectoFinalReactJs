import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">Meldent</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse contPrinc" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="!#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="!#">Mi Usuario</a>
              </li>
            </ul>
            <CardWidget className='cart'/>
          </div>
          
        </div>
        
      </nav>
    )
}

export default Navbar