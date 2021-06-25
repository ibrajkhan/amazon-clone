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
            id="68765723"
            title={"Unlocking the Universe by Stephen Hawkings"}
            price={499.0}
            image={
              "https://m.media-amazon.com/images/I/81JqsvOQqDL._AC_UL320_.jpg"
            }
            ratings={5}
          />
          <Product
            id="98746884"
            title={
              "Lifelong FitPro LLTM09 (2.5 HP Peak) Motorized Treadmill for Home with 12 preset Workouts, Max Speed 10km/hr. (Free Installation Assistance)"
            }
            price={16499.0}
            image={
              "https://m.media-amazon.com/images/I/71lQOrDk-HL._AC_UL320_.jpg"
            }
            ratings={4}
          />
          <Product
            id="88941761"
            title={"Canon M50 Mark II 15-45mm f3.5-6.3 is STM"}
            price={58878.0}
            image={"https://m.media-amazon.com/images/I/51L75Bk2fCS.jpg"}
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345674"
            title={
              "Fire-Boltt Beast SpO2 1.69” Smart Watch with Blood Oxygen Monitoring, Heart Rate Monitor,"
            }
            price={3999.0}
            image={
              "https://m.media-amazon.com/images/I/61lA9eKky4S._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            id="12345764"
            title={
              "2021 Apple 11-inch iPad Pro with Apple M1 chip (Wi-Fi + Cellular, 256GB)"
            }
            price={94900.0}
            image={
              "https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UL320_.jpg"
            }
            ratings={3}
          />
          <Product
            id="99845400"
            title={
              "All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass"
            }
            price={4799.0}
            image={
              "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            id="68745791"
            title={
              "OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black) + Powerbank"
            }
            price={3098.0}
            image={
              "https://m.media-amazon.com/images/I/71oir4nT9RS._AC_UY218_.jpg"
            }
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="87465699"
            title={"Philips HR3705/10 300-Watt Hand Mixer, Black"}
            price={1999.0}
            image={
              "https://m.media-amazon.com/images/I/41tDUmnDITL._AC_UL320_.jpg"
            }
            ratings={4}
          />
          <Product
            id="21484111"
            title={"Kuvings B1700 Professional Cold Press Whole Slow Juicer"}
            price={17999.0}
            image={
              "https://m.media-amazon.com/images/I/61q9HZyPYiL._AC_UL320_.jpg"
            }
            ratings={4}
          />
          <Product
            id="97954693"
            title={"Prestige Electric Kettle PKOSS - 1500watts, Steel (1.5Ltr)"}
            price={799.0}
            image={"https://m.media-amazon.com/images/I/41XXjVSLyGL.jpg"}
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="68745773"
            title={
              "LG 260L 3 Star Smart Inverter Frost-Free Double Door Refrigerator"
            }
            price={36000.0}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/315q4CFDxqL._AC_SX184_.jpg"
            }
            ratings={4}
          />
          <Product
            id="89465155"
            title={
              "Bosch 7 kg 5 Star Inverter Touch Control Fully Automatic Front Loading"
            }
            price={36000.0}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/41vJa67shSL._AC_SX184_.jpg"
            }
            ratings={4}
          />
          <Product
            id="58465132"
            title={"Symphony Desert Cooler - 70 Liter, Grey"}
            price={10300.0}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/417bwgv9MNL._AC_SX184_.jpg"
            }
            ratings={4}
          />
          <Product
            id="56465151"
            title={
              "Philips PowerPro FC9352/01 Compact Bagless Vacuum Cleaner (Blue)"
            }
            price={7399.0}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41xQDop2T5L.jpg"
            }
            ratings={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="88791396"
            title={"BLUEWUD Clonard Work from Home Table,"}
            price={2831.0}
            image={
              "https://m.media-amazon.com/images/I/617yZ7ctoHL._AC_UL320_.jpg"
            }
            ratings={3}
          />
          <Product
            id="54984114"
            title={"AmazonBasics Full Back Executive Chair (Black) "}
            price={2999.0}
            image={
              "https://m.media-amazon.com/images/I/41ZExXTss7L._AC_UL320_.jpg"
            }
            ratings={3}
          />
          <Product
            id="28465784"
            title={
              "Green Soul Newyork High-Back Mesh Office Executive Ergonomic Chair "
            }
            price={7999.0}
            image={
              "https://m.media-amazon.com/images/I/61vP3JsRTlS._AC_UL320_.jpg"
            }
            ratings={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="16523490"
            title={"LG 260L 3 Star Smart Inverter Frost-Free Double Door"}
            price={274900.0}
            image={
              "https://m.media-amazon.com/images/I/81V+hqDbomL._AC_UY218_.jpg"
            }
            ratings={4}
          />
          <Product
            id="28465766"
            title={
              "Impex FUSION 140 Watts 5.1 Channel Multimedia Speaker System with USB/SD/MMC Card/Bluetooth/FM Radio & Remote Function (Black)"
            }
            price={9360.0}
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
