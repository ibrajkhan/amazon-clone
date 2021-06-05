import React from "react";
import "../Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
          alt="Showcase_img"
        />
        <div className="home__row">
          <Product
            title={
              "Zero to One: Notes on Start Ups, or How to Build the Future Paperback"
            }
            price={" 499.00"}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/71m-MxdJ2WL._AC_UL160_SR160,160_.jpg"
            }
            ratings={5}
          />
          <Product
            title={
              "Lifelong FitPro LLTM09 (2.5 HP Peak) Motorized Treadmill for Home with 12 preset Workouts, Max Speed 10km/hr. (Free Installation Assistance)"
            }
            price={"16,499.00"}
            image={
              "https://m.media-amazon.com/images/I/71lQOrDk-HL._AC_UL320_.jpg"
            }
            ratings={4}
          />
          <Product
            title={"Canon M50 Mark II 15-45mm f3.5-6.3 is STM"}
            price={"58,878.00"}
            image={"https://m.media-amazon.com/images/I/51L75Bk2fCS.jpg"}
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Fire-Boltt Beast SpO2 1.69” Smart Watch with Blood Oxygen Monitoring, Heart Rate Monitor,"
            }
            price={"3,999.00"}
            image={
              "https://m.media-amazon.com/images/I/61lA9eKky4S._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            title={
              "2021 Apple 11-inch iPad Pro with Apple M1 chip (Wi-Fi + Cellular, 256GB)"
            }
            price={" 94,900.00"}
            image={
              "https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UL320_.jpg"
            }
            ratings={3}
          />
          <Product
            title={
              "All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass"
            }
            price={"4,799.00"}
            image={
              "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            title={
              "OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black) + Powerbank"
            }
            price={" 3,098.00"}
            image={
              "https://m.media-amazon.com/images/I/71oir4nT9RS._AC_UY218_.jpg"
            }
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)"
            }
            price={"2,74,900.00 "}
            image={
              "https://m.media-amazon.com/images/I/81V+hqDbomL._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            title={
              "Impex FUSION 140 Watts 5.1 Channel Multimedia Speaker System with USB/SD/MMC Card/Bluetooth/FM Radio & Remote Function (Black)"
            }
            price={"9,360.00"}
            image={
              "https://m.media-amazon.com/images/I/719nGD3yTaL._AC_UL320_.jpg"
            }
            ratings={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
