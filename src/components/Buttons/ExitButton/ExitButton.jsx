import React from "react"
import "./ExitButton.scss"

class ExitButton extends React.Component{
    render(){
        const{
            ButtonText="text"
        }=this.props
        return(
            <button className="ExitButton">
                {ButtonText}
            </button>
        )
    }
}

export default ExitButton;
