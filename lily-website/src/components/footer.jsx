import React from "react"
import Map from "../assets/map.png"

const Footer = () => {
    return (
        <div class="container mx-auto flex p-10">
            <>
                <h4 class=" font-bold text-4xl">Lily

                    <p class="font-light text-sm">Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Rem repellendus quis sequi fuga molestiae at. Enim  <br /> <br />voluptate corrupti magni labore minima architecto doloribus sunt <br />inventore perferendis consequuntur, ipsam obcaecati incidunt.</p>
                </h4>
                <ul class="inline font-semibold p-5" >
                    <li class="list-none px-4">
                        <a href="">Home</a>
                    </li>
                    <li class="list-none px-4 ">
                        <a href="">About Us</a>
                    </li>
                    <li class="list-none px-4">
                        <a href="">Services</a>
                    </li>
                    <li class="list-none px-4">
                        <a href="">Help</a>
                    </li>
                </ul>
                <div class="container mx-auto py-15">
                <img src={Map} alt="map image" />
                </div>
            </>



        </div>

    );
}

export default Footer