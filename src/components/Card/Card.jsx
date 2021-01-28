import React from "react";
import "./Card.scss";
//Subcomponents
import ClientDetailSection from "./components/ClientDetailSection/ClientDetailSection.jsx"
//Icons
import Chip from "../../assets/icons/chip.svg"
import Visa from "../../assets/icons/visa.svg"

class Card extends React.Component{
    render(){
        return(
            <div className="Card__Container">
                {this.props.clients.map(client=>{
                    return(
                        <div key={client.id} className="Card">
                            <figure>
                                <img src={Chip} alt=""/>
                                <img src={Visa} alt=""/>
                            </figure>
                            <h2 className="__Number">{client.cardNumber}</h2>
                            <ClientDetailSection owner={client.owner} expires={client.expires}/>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}

export default Card;
