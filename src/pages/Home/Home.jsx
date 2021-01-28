import React from 'react'
import './Home.scss'
//Components
import Header from "../../components/Header/Header.jsx"
import Card from "../../components/Card/Card.jsx"
import TransactionButton from "../../components/Buttons/TransactionButton/TransactionButton.jsx"
//Data
import data from "../../../.data/data.json"

class Home extends React.Component {
    render() {
        const{
            title="MyBank, more easy transactions",
            description="Make your transactions now is secure and more cheap . What do you wait for make one?"
        }=this.props
        return(
            <section className='Home'>
                <div className="Home__Container">
                    <Header />
                    <div className="Home__TextSection">
                        <h1>{title}</h1>
                        <h5>{description}</h5>
                        <TransactionButton/>
                    </div>
                    <Card clients={data.clients}/>
                </div>
            </section>
        )
    }
};

export default Home;
