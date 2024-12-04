
import React ,{useState}from 'react';
import { itemsData } from '../data';

const ItemsDisplay = () => {
    const [displayItem, setDisplayItem]=useState(itemsData)
  
  return (
<div className='itemSection'>
  {displayItem.map((item)=>{
    return(
      <div className='gallery'>
        <img src={item.item_img} alt={item.item_img}/>
        </div>
    )
  })}
</div>
  )
}

export default ItemsDisplay