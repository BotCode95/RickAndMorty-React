import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';

import logo from '../logo.png'
import { DetailsPage } from '../pages/DetailsPage';
import { NoMatch } from '../pages/NoMatch';
import { FavoritesPage } from '../pages/FavoritesPage';
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
                        <li className="col-5">
                            <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : '' }>Characters</NavLink>
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
            <Route path="/favorites" element={<FavoritesPage/>}/>
            <Route path="/404" element={<NoMatch/>}/>
            <Route path="*" element={<Navigate replace to="/404" />}/>
        </Routes>
      </BrowserRouter>
  )
};
