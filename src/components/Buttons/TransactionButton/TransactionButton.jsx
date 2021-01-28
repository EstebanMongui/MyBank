import React from "react"
import "./TransactionButton.scss"

class TransactionButton extends React.Component{
    render(){
        const{
            ButtonText="Transactions"
        }=this.props
        return(
            <button className="TransactionButton">
                {ButtonText}
            </button>
        )
    }
}

export default TransactionButton;
