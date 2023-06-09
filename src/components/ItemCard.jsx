import React, {useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ItemCard({ name, size, id, image, price, addToFavorites, addToOrder }) {

  const [isSelected, setIsSelected] = useState(false);

    const handleAddToFavorites = () => {
        addToFavorites(id);
      };


      const handleAddToCart = () => {
        addToOrder(id);
        setIsSelected(true);
        setTimeout(() => {
          setIsSelected(false);
        }, 3000);
      };

  return (
    
        <div className={`item-card ${isSelected ? 'selected' : ''}`}>
            <button onClick={handleAddToFavorites} className="favorite-button">
        <FontAwesomeIcon icon={faStar} />
      </button>
<img className="card-image"

        src={image}
        alt=""
      />
      <div
      
        style={{ flexDirection: "column", justifyContent: "center" }}
        className="items-item flex-container"
      >
        
        <h3>{name}</h3>
        
        <em>{size}</em>
        
        <h3>{price} SEK</h3>

        <button className="button" onClick={handleAddToCart}>Add to Cart</button> 
        
        
      </div>
        </div>
        
   
  );
}

export default ItemCard;