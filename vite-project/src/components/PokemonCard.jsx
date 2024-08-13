// TODO: This component should render a single pokemon's stats and image.

import { useState } from "react";

const PokemonCard = ({ front, back, name, hp }) => {
    const [image, setImage] = useState(front);

    const flipImg = (e) => {
        image === front ? setImage(back) : setImage(front);
    }

    return (
        <div className="ui card">
            <div onClick={flipImg}>
                <div className="image">
                    <img alt="pokemon name" src={image} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard