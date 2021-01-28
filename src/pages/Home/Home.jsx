import React from 'react'
import './Home.scss'
//Components
import Header from "../../components/Header/Header.jsx"
import Card from "../../components/Card/Card.jsx"
import TransactionButton from "../../components/Buttons/TransactionButton/TransactionButton.jsx"

class Home extends React.Component {
    render() {
        const{
            title="MyBank transactions and stay save",
            description="Make your transactions now is more cheap and more easy. What do you wait for make that?"
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
                    <Card />
                </div>
            </section>
        )
    }
};

export default Home;
