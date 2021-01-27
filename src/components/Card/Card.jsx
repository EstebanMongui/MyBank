import React from "react";
import "./Card.scss";
//Subcomponents
import ClientDetailSection from "./components/ClientDetailSection/ClientDetailSection.jsx"
//Icons
import Chip from "../../assets/icons/chip.svg"
import Visa from "../../assets/icons/visa.svg"

class Card extends React.Component{
    render(){
        const{
            CardNumber="1234 4567",
        }=this.props;
        return(
            <div className="Card">
                <figure>
                    <img src={Chip} alt=""/>
                    <img src={Visa} alt=""/>
                </figure>
                <h2 className="__Number">{CardNumber}</h2>
                <ClientDetailSection />
            </div>
        )
    }
}

export default Card;
