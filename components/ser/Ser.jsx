import "./ser.css";
import Res from "../../assets/res-int.jpg";
import Residential from "../../assets/resi4.jpg";
import Commercial from "../../assets/resi6.jpg";
import Educational from "../../assets/resi8.jpg";
import Lig from "../../assets/resi1.jpg";
import Lan from "../../assets/resi2.jpg";
import Ren from "../../assets/resi3.jpg";


import React from 'react'

const Ser = () => {
  return (
    <div className="ser">
        <div className="ser-intro">
                <h1>Our Services</h1>
                <br></br>
                <p>Satlak Interiors has made its name within the industry for interiors that are intelligent, elegant, dynamic and infused with passion and creativity.
                    Our interior design organization is talented, friendly, approachable and absolutely committed to acheiving the best design solution possible for any given project, whether residence, commercial space or any environment. From initial design through to final installation, our deep knowledge of the hospitality industry means our team is able to plan more precisely, anticipate issues and find elegant solutions.
                </p>
        </div>
        <div className="comm">
            <div className="re">
                    <img src={Residential} alt="Residential" className="reimg"/>
                <div className="re-con">
                    Residential Development
                </div>
            </div>
            <div className="com">
                <img src={Commercial} alt="Commercial" className="comimg"/>
                <div className="com-con">
                    Commercial Interiors
                </div>
            </div>
            <div className="edu">
                <img src={Educational} alt="Educational" className="eduimg"/>
                <div className="edu-con">
                    Hospiitality and Educational Spaces
                </div>
            </div>
        </div>
        <div className="intdesign">
        <div className="design-img">
            <img src={Res} alt="Res" className="resim"/>
        </div>
        <div className="intdesigncont">
            <h1>Interior Design</h1>
            <p>Our team of interior designers interpret each client's passions and style to provide innovative and exquisite interiors, curating furniture, textiles, art and antiques. Interior spaces are often completely re-imagined beyond the decorative, to climate boundaries between the built environment and a better way of life. Each project is as personalised as a piece of art or couture. </p>
        </div>
        </div>
        <div className="intlight">
        <div className="lightcont">
            <h1>Lighting Design</h1>
            <p>
            Beautifully designed and carefully planned lighting; emphasising important architectural features and creating ambiences to set the overall scene is an integral part of any interior design scheme. As it is such an intrinsic part of the project we design all our lighting design schemes in house in close coordination with our interior, architectural and landscape design teams.
            </p>
        </div>
        <div className="light-img">
            <img src={Lig} alt="Lig" className="ligim"/>
        </div>
        
        </div>

        <div className="intland">
        <div className="land-img">
            <img src={Lan} alt="Lan" className="lanim"/>
        </div>
        
        <div className="landcont">
            <h1>Landscape Design</h1>
            <p>
                "A well designed landscape complements the interior and architectural features of a property, often with the interior aesthetic being carried through into the outside space, blurring the boundary between inside and out." We take a holistic approach to each design project and the relationship and connection between the interior and exterior is key to the overall ambience. 
            </p>
        </div>
        
        </div>

        <div className="intreno">
       
        <div className="renocont">
            <h1>Renovation</h1>
            <p>
            Whether you are looking for a complete home makeover, or only kitchen renovation, we have got you covered. Our renovation service help you elevate existing spaces to the highest levels of functionality and aesthetics, making your home a paradise to live in.
            From waterproofing to MEP, we cover all bases and leave no stone unturned - home renovation is not just about refined aesthetics, it is about improving the functionality and making life a tad bit easier.
            </p>
        </div>  
        <div className="reno-img">
            <img src={Ren} alt="Ren" className="renim"/>
        </div>
          
        </div>
        <div className="other">
        <div className="other-ser">
            <h2>Other Services</h2>
            <p>We provide a full range of interior design services and prefer to be included in the project team from the earliest stage.
            </p> 
            </div>       
</div>
        <div className="services-list">
            <ol className="list-ser">
                <li>Costing and Budget</li>
                <li>Civil Work</li>
                <li>Electrical Work</li>
                <li>Painting</li>
                <li>Tiles Work</li>
                <li>Granites</li>
                <li>Water-proofing</li>
                <li>Deep-Cleaning</li>
                <li>MS Work</li>
                <li>Fabrication</li>
                <li>Design brief advisory</li>
                <li>Concept creation</li>
                <li>Site inspection</li>
                <li>Installation supervision</li>
            </ol>

        </div>
    </div>
  )
}

export default Ser