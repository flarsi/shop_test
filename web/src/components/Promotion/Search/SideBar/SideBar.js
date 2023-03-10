import { colors } from "assets/configFilter";
import "./SideBar.css"



const SideBar =({total, setPrice, setColor})=> {
    return (
        <div className="searchparams">
            <div className="searchparams__color">
                <span className="searchparams__text">Color</span>
                <ul className="searchparams__color-list">{colors.map(({id, color}) =>
                    {const result = color.charAt(0).toUpperCase() + color.slice(1);
                    return <li key={id} className="searchparams__color-item"><input type="checkbox" name="color" value={color} onClick={setColor}/>{result}</li>})}
                </ul>
            </div>
            <div className="searchparams__price">
                <span className="searchparams__text">Price, $</span>
                <div className="searchparams__use">
                    <input className="searchparams__input" type="number" name="min" placeholder="min" onChange={setPrice}/> - 
                    <input className="searchparams__input" type="number" name="max" placeholder="max" onChange={setPrice}/>
                </div>
            </div>
            <span className="searchparams__text">Total products: {total}</span>
        </div>
    )
}

export default SideBar;
