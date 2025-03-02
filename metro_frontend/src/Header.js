import logo from "./logo metro.webp"; 
function Header(){
    return(
        <div className='Header'>
            <div className="logocontainer">
                <img src = {logo} alt="logo"/>
                <p>HYDERABAD METRO</p>
                <h4>TRAVEL FAST</h4>
            </div>
            <h3 className="Map">
                <a href="https://www.ltmetro.com/metro-route-map/" target="_blank" rel="noopener noreferrer">
                ROUTE-MAP
                </a>
                <button>LOGOUT</button>
            </h3>
        </div>
    );
}

export default Header;