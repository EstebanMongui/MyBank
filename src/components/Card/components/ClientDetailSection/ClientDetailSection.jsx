import React from "react";
import"./ClientDetailSection.scss"
class ClientDetailSection extends React.Component{
    render(){
        const{
            owner="Alice William",
            expires="10/29"
        }=this.props
        return(
            <div className="ClientDetailSection">
                <div className="__Fields">
                    <h5>Card Owner</h5>
                    <h5>expires</h5>
                </div>
                <div className="__Data">
                    <h3>{owner}</h3>
                    <h3>{expires}</h3>
                </div>
            </div>
        )
    }
}

export default ClientDetailSection;