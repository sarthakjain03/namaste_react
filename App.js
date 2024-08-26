import React from 'react';
import ReactDOM from 'react-dom/client';

const RestaurantCard = () => {
    return (
        <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
            <img className='res-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PQ_j5Tcix_Vp3MxfSCcgFiaOmuQeJu7U_w&s' />
            <h3>Sarthak Foods</h3>
            <h4>Vegetarian, North Indian, Asian</h4>
            <h4>4.8 stars</h4>
            <h4>40 minutes</h4>
        </div>
    );
}

const AppBody = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <AppBody />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);