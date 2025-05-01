import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from "../../../../assets/icon/correct.png"

const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Our Menu</title>
        <link rel="canonical" href={logo} />
      </Helmet>
            this is menu
            
        </div>
    );
};

export default Menu;