import "./Navbar.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
      <div className="barraNav sticky-xl-top">
        <h1 className="navbar-brand title" href="!#">meldent</h1>
        <nav className="navbar navbar-expand-lg fs-3">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse contPrinc" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link active" aria-current="page">Inicio</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">Productos</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu">
                    <Link to={'category/brackets'} className="dropdown-item"> Brackets</Link>
                    <Link to={'category/arcos'} className="dropdown-item"> Arcos</Link>
                    <Link to={'category/ligaduras'} className="dropdown-item"> Ligaduras</Link>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="!#">Mi Usuario</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar Productos" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Buscar</button>
              </form>
            <CardWidget className='cart'/>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar