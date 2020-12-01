import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123456"
            title="Lean start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="4567890"
            title="Kenwood kMix Stand Mixer for..."
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="147258"
            title="Samsung LC49RG90SSUEXEN 49..."
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="963852"
            title="Amazon Echo..."
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          />
          <Product
            id="741963"
            title="New Apple iPad Pro..."
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="654963"
            title="Samsung LED Gaming Monitor 5120 x 1440"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
