import React from "react";
import "./GameImages.css";
// import gameCardData from "../../gameCards";

// class GameImage extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             pieces: gameCardData
//         }
//     }


//     render() {
//         return (
//             this.state.pieces.map( gameCardData => 
//             <button className="btn" onClick={(event) => props.handleClick(event, gameCardData.id)} >
//              <img alt={gameCardData.name} src={gameCardData.image} id={gameCardData.id}/>
//             </button>)
//         )
//     }
// }

// export default GameImage;

const GameImage = props => (
    <button className="btn" onClick={(event) => props.handleClick(event, props.id)} >
        <img alt={props.name} src={props.image} id={props.id}/>
    </button>
);

export default GameImage;