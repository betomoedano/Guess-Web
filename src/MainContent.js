import React from "react";
import Btn from "./Btn";

function MainContent() {
    return (
        <div>
            <h1 className="text-5xl mx-10 pb-10 pt-20 md:text-7xl">Good Game Coin</h1>
            <h1 className="text-4xl pb-8 md:text-5xl">(GGS)</h1>
            <p className="text-md px-10 font-size-10">Crypto Guess is a revolutionary way to earn crypto by guessing, yeah! literally guessing</p>
            <iframe
                className="p-10"
                title="coin"
                src='https://my.spline.design/coin-f76d5609439b3981bbabbfd69318f31d/'
                frameborder='0'
                width='100%'
                height='100%'
            ></iframe>

            <h1 className="text-xl md:text-5xl">Token address:</h1>
            <p className="text-sm px-10 pt-5 pb-10 font-size-10">0x1bFF850c32bEe2A47451E31f8BF31A14e62C7F03</p>
            <Btn
                name="Buy Now"
                link="https://metamask.io/"
            />
            <p className="text-md px-10 pt-8 font-size-10">Coming soon...</p>
        </div>
    );
}

export default MainContent