import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';

import logo from '../logo.png'
import { DetailsPage } from '../pages/DetailsPage';
export const Navegation = () => {
  return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/">
                    <img src={logo} alt="logo-base" className="logo-base"/>
                </NavLink>
                <section className="nav-links">
                    <ul className="row">
                        <li className="col-4">
                            <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : '' }>Listado</NavLink>
                        </li>
                        <li className="col-4">
                            <NavLink to="/favorites" className={({isActive}) => isActive ? 'nav-active' : '' }>Favorites</NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/details/:id" element={<DetailsPage/>}/>
            {/* <Route path="*" element={<Error404/>}/> */}
        </Routes>
      </BrowserRouter>
  )
};
