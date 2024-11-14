import React from "react"
import Tulip from "../../src/assets/tulip.jpg"
const Body = () => {
    return (
        <div class="container flex mx-auto p-20">
            <div class="container">
                <h1 className="font-extrabold text-7xl">
                Fresh Flower & <br />
                Perfect gifts for your <br />
                loved ones
                </h1>
                <p>
                    Check ot our wide selection of flower arrangement to <br />
                    Make your next occasion memorable.
                </p>
            

            </div>
            <div className="image">
                <img src={Tulip} alt="tulip" />
            </div>
        </div>

    );
}
export default Body
