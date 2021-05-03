import React, {useState} from 'react'
import './App.css'

function App(){
    const [oriPrice, setOriPrice] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);
    const [buyPrice, setBuyPrice] = useState(0);
    const [profit, setProfit] = useState(0);
    function calcProfit(){
        var finalProfit = (sellPrice/oriPrice)*buyPrice;
        setProfit(finalProfit);
    }
    return(
        <>
        
        <div className="main">
        <div className="name">
            <a href="">Crypto Profit Calculator</a>
        </div>
            <div className="container">
                <div className="left">
                    <label>Buying Price </label>
                    <label>Selling Price </label>
                    <label>Total Buy </label>
                    <label className='total-label'>Total Value </label>
                </div>
                <div className="right">
                    <input type="text" className='buy-price'  onChange={e =>setOriPrice(e.target.value)}/>
                    <input type="text" className='sell-price'  onChange={e =>setSellPrice(e.target.value)}/>
                    <input type="text" className='total-buy-price'  onChange={e =>setBuyPrice(e.target.value)}/>
                    <button className="btn" onClick={calcProfit}>Calculate</button>
                    {/* <input type="text" className='total-profit'  onChange={e =>setProfit(e.target.value)}/> */}
                    <div className="profit-show">{profit}</div>
                </div>
            </div>
            <div className="mobile-container">
            <div className="right">
                    <label>Buying Price </label>
                    <input type="text" onChange={e =>setOriPrice(e.target.value)}/>
                    <label>Selling Price </label>
                    <input type="text"  onChange={e =>setSellPrice(e.target.value)}/>
                    <label>Total Buy </label>
                    <input type="text"  onChange={e =>setBuyPrice(e.target.value)}/>
                    <button className="btn" onClick={calcProfit}>Calculate</button>
                    <label className='mobile-total-label'>Total Value </label>
                    {/* <input type="text" className='total-profit'  onChange={e =>setProfit(e.target.value)}/> */}
                    <div className="profit-show">{profit}</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default App;