import CartWidget from "../CartWidget/CarWidget"


const NavBar = () =>{
    return(
        <nav className="nav">
            <div>
                <h1>OBSEQUIOS</h1>
                <div className="nav_btn">
                    <button>Remeras</button>
                    <button>Camperas</button>
                    <button>Pantalones</button>
                </div>
            </div>

            <CartWidget/>
       </nav>
    )
}

export default NavBar