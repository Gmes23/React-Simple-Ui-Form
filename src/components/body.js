import React, { useState } from "react";

function Body() {
    const [items, setItems] = useState(['Blood Glucose','Medication', 'Food Tracking', 'Exercise', 'Weight Management', 'Blood Pressure', 'A1C'])

    // Renders the button using the useState data which can be changed using setState, useful when data changes from API
    const itemList = items.map(item => <button className="button-styling">{item}</button>)
    
    return (
        <div className="main-container">
            {itemList}
        </div>
    )
}

export default Body;
