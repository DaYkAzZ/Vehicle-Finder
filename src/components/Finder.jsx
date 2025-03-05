import { useState } from "react"
import { fetchCarAndImage } from "../services/fetchData";

export function Finder() {

    const [input, setInput] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [fuel, setFuel] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [cars, setCars] = useState([]);

    const handleSearch = async (event) => {
        const inputValue = event.target.value;
        setInput(inputValue);

        const words = inputValue.trim().split(" ");
        setBrand(words[0]);
        setModel(words.slice(1).join(" "));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetchCarAndImage(brand, model, fuel, price, year);
        setCars(data);
    }
    return (
        <div className="flex flex-row justify-between">
            <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={input} placeholder="Ex: Audi A4" onChange={handleSearch}/>
            </div>
            <div>
                <select onChange={(event) => setFuel(event.target.value)}>
                    <option value="">Fuel</option>
                    <option value="diesel">Diesel</option>
                    <option value="gas">Gas</option>
                </select>
            </div>
            <div>
                <button type="submit" className="text-white rounded-lg">
                    Rechercher
                </button>
            </div>
            </form>
            <div className="text-white" id="cars">
                {cars ? cars.map((car, index) => {
                    return (

                        <div id="car" key={index} className="text-white">

                            {image && <img src={image} alt={`${brand} ${model}`} 
                            style={{ maxWidth: "300px" }} />}
                            <h1>Marque : {car.make}</h1>
                            <h2>Modèle :{car.model}</h2>
                            <h3>Prix : {car.price} €</h3>
                            <h4>Année : {car.year}</h4>
                            <h5>Type de motorisation : {car.fuel}</h5>
                        </div>
                    );
                }) : <h1 className="text-white m-5">No cars found</h1>}
            </div>
        </div>
    )
}