import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <main className="header">
        <section className="header-section">
            <article></article>
              <article className="header-navs">
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>About Us</NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>Contact</NavLink>
              </article>
            <article></article>
        </section>
    </main>
  )
}

export default Header