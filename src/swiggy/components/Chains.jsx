
import React, {useState,useEffect} from 'react';
import {API_URL} from '../api';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ProgressBar } from 'react-loader-spinner'

const Chains = () => {
    const[vendorData,setvendorData] = useState([]);
    const[scrollPosition,setScrollPosition]=useState(0);
    const[loading, setLoading]=useState(true);

    const firmVendorData = async()=>{
        try{
          const response = await fetch(`${API_URL}/vendor/all-vendors`);
          const newData = await response.json()
          setvendorData(newData)
          setLoading(false);

          // console.log("this is api",newData)
        }
        catch(error){
         console.log("this not api response");
         setLoading(true);
        }
    }
useEffect(()=>{
    firmVendorData()
},[])

const handleScroll=(direction) =>{
  
const gallery = document.getElementById("chainGallery");
const scrollAmount=500;
if(direction == "left"){
  gallery.scrollTo({
left:gallery.scrollLeft+scrollAmount,
behavior:"smooth"
  })
}
else if(direction == "right"){
  gallery.scrollTo({
    left:gallery.scrollLeft-scrollAmount,
  behavior:"smooth"
  })
}
}
  return (
<>
{loading && <div className=''>

  <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>}
<div className='main-contentI'>
    <div className='buttons'>
      <button onClick={()=>handleScroll("right")} className='right' type="btn"><FaCircleArrowRight /></button>
      <button onClick={()=>handleScroll("left")} className='left' type="btn"><FaCircleArrowLeft /></button>
    </div>
     <h3 className='left-content'>Top restaurent chains in hyderbad</h3>
      <div className='sectiom' id="chainGallery" onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
  {vendorData.vendors && vendorData.vendors.map((vendor)=>{
    return(
     <div className='subSection'>
     {vendor.firm.map((item)=>{
     return(
        <>
        <div>
        {item.firmName}
        </div>
        <div className='image-secrtion'>
            {item.area}
        </div>
        <div className='image-secrtion'>
            <img src={`${API_URL}/uploads/${item.image}`}  />
        </div>
        <div className='image-secrtion'>
          {item.veg}
        </div>
        
        </>
     )
     })}
    </div>

    )
  })}

    </div>
    </div>
</>
   
  
  )
}

export default Chains