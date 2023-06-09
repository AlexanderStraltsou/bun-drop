import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ItemCard from "./ItemCard";
import Order from "./Order";



function Menu() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);



  useEffect(() => {
    fetch("http://localhost:7000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });

    // Hämta från local storage
    const cart = getLocalStorage();
      setSelectedItems(cart);
  }, []);

  function getLocalStorage(){
    let cart = localStorage.getItem("cart");

    if(!cart || cart.length <= 0) {
      cart = [];
    }
    else {
      cart = JSON.parse(cart);
    }

    return cart;
  }


  function filterItems(searchWord) 
  {
    const tempItems = [...items].filter((i) => 
    {
      if (i.name.toLowerCase().includes(searchWord.toLowerCase())) 
      {
        return true;
      }
    });

    setFilteredItems(tempItems);
  }


  function addToFavorites(itemId) {
    const selectedItem = items.find((item) => item.id === itemId);
    setFavorites((prevFavorites) => [...prevFavorites, selectedItem]);
  }

  function addToOrder(itemId) {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItems((prevItems) => [...prevItems, selectedItem]);

    const cart = getLocalStorage();

    // Kolla om objektet redan finns i localstorage
    const foundItem = cart.find(i => i.id === selectedItem.id);

    if(!foundItem) {
      // Inget item hittat
      // Lägg till ett nytt med quantity 1
 
      const newItem = {id: selectedItem.id, name: selectedItem.name, price: selectedItem.price, quantity: 1 }
      cart.push(newItem);
    }
    else {
      // Item hittat
      // Öka quantity för itemet med 1
      foundItem.quantity++;
    }


    localStorage.setItem("cart", JSON.stringify(cart));

    setSelectedItems(cart);
  }

  function removeFromOrder(itemId) {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );

    

    const cart = getLocalStorage();
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  
 

  // function placeOrder() {
    


    
  //   fetch("http://localhost:7000/orders", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ items: selectedItems }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Order added to the database:", data);
  //       // Reset the selectedItems array after placing the order
  //       setSelectedItems([]);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding order to the database:", error);
  //     });
  // }


  return (
    <div className="wrapper">


        <h1>Bun Drop Burgers & Drinks</h1>
        <br />
        
        <div className="neworder-container">

        

        <div className="order">
        <Order selectedItems={selectedItems} 
          removeFromOrder={removeFromOrder}
          
          />
          
    

      <Link to="/OrderPage">
        <div >
          <button className="button">Review Cart</button>
          
        </div>
      </Link>

    
        </div>
        
      <div className="favorite">
      <h2>Favorite Items:</h2>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      </div>

      </div>
      <br />
        <br />
        
        

    <SearchBar filterItems={filterItems} />
    
    <div className="items-container">

    {filteredItems?.map((i) => (
          <ItemCard
          key={i.id}
          price={i.price}
          image={i.image}
          name={i.name}
          size={i.size}
          id={i.id}
          addToFavorites={addToFavorites}
          addToOrder={addToOrder}
        />
        ))}

    </div>

    </div>

  );
}

export default Menu;




