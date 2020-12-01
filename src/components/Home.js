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
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="4567890"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Red"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._AC_SX425_.jpg"
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
            title="Echo Plus (2nd Gen) – Premium sound with a built-in smart home hub - Heather Grey Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          />
          <Product
            id="741963"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 1TB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="654963"
            title="Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB, Black"
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
