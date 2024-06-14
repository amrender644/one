import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HorizontalCrousal = () => {

    return (
        // <div style={{ margin: "0px 10px 0px" }}>
        <div >
            <Carousel>
                <div>
                    <img src="../../logo512.png"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="../../logo192.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="../../logo192.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="../../logo192.png" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="../../logo192.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="../../logo192.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>

    );
};

export default HorizontalCrousal;
