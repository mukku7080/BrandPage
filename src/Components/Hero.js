import React from 'react'
import "../App.css"

function Hero() {
    return (
        <main className='hero container'>
            <div className='herocontent'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WHERE HEREE TO HELP YOU WITH OUR
                    SHOES. YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH
                    OUR
                </p>
                <div className="herobutton ">
                    <button>Shop Now</button>
                    <button className='secondry-btn'>Category</button>
                </div>
                <div>
                    <p>Also Available On</p>
                </div>
                <div className='icon'>
                    <img src="/images/amazon.png" alt="amazonlogo" />
                    <img src="/images/flipkart.png" alt="flipkartlogo" />
                </div>
            </div>
            <div className="heroimage">
                <img src="/images/shoeimage.png" alt="shoe_image" />

            </div>

        </main>
    )
}

export default Hero