import { PopupMenu } from "../cmps/popup-menu";
import React from "react";
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from "../cmps/google.map";



export function AboutUs() {

    return (
    <>
        <section className="main-layout">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>
        </section >
         
        <section className="google-container main-layout">
            <GoogleMap/>
        </section>
    </>
    )

}
