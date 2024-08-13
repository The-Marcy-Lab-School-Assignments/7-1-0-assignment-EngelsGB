import { useState } from "react";
import handleFetch from "../utils/handleFetch";

const PokemonForm = () => {
    const [name, setName] = useState('');
    const [hp, setHP] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(name, hp, front, back);
        handleFetch("http://localhost:4000/pokemon", {
            method: "POST",
            body: JSON.stringify({ name: name, hp: hp, front: front, back: back }),
            headers: {
              "Content-Type": "application/json"
            }  
        });

        setName('');
        setHP('');
        setFront('');
        setBack('');
    }


    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHP(e.target.value)} required/>
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={front} onChange={(e) => setFront(e.target.value)} required/>
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={back} onChange={(e) => setBack(e.target.value)} required/>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
