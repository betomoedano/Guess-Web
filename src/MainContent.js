import React from "react";
import Btn from "./Btn";

function MainContent() {
    return (
        <div>
            <h1 className="text-7xl pb-10 pt-20">Guess Crypto</h1>
            <p className="pb-10">Crypto Guess is a revolutionary way to earn crypto by guessing, yeah! literally guessing</p>
            <iframe 
                title="coin" 
                src='https://my.spline.design/coin-f76d5609439b3981bbabbfd69318f31d/' 
                frameborder='0' 
                width='100%' 
                height='100%'
            ></iframe>
            <Btn 
                name="Buy Now"
                link="https://metamask.io/"
            />

        </div>
    );
}

export default MainContent