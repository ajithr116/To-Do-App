import React from  'react';

function ClearData({clearData}){
    return(
        <button onClick={()=>clearData()} className="clear-button">Clear All</button>
    )
}

export default ClearData;