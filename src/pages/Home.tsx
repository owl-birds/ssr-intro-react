import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>HOME</h1>
        <ul>
            <li>
                <Link to={"about"}>About</Link>
            </li>
            <li>
                <Link to={"/article"}>Article</Link>
            </li>
            <li>
                <Link to={"/contacts"}>Contacts</Link>
            </li>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/test-render-to-string"}>test render to string</Link>
            </li>
        </ul>
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default Home
