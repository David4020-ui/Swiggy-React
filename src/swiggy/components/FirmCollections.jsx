import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';

const FirmCollections = () => {
    const [firmData, setFirmData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("All");  // Default to "All" to show everything

    const firmDataHandled = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`);
            const firstFirm = await response.json();
            setFirmData(firstFirm.vendors);  // Set the fetched vendor data
        } catch (error) {
            console.log("Error fetching data: ", error);  // Log if the API fails
        }
    };

    useEffect(() => {
        firmDataHandled();  // Fetch firm data when the component mounts
    }, []);

    const selectHandled = (region) => {
        setSelectedRegion(region);  // Update selected region
    };

    return (
        <div className="main-firmCollection">
            <h3 className="left-content">Top restaurant chains in Hyderabad</h3>
             <div className='button-section'>
            <button onClick={() => selectHandled("All")}>All</button>
            <button onClick={() => selectHandled("South-Indian")}>South-India</button>
            <button onClick={() => selectHandled("North-Indian")}>North-India</button>
            <button onClick={() => selectHandled("Chinese")}>Chinese</button>
            <button onClick={() => selectHandled("Bakery")}>Bakery</button>
            </div> 
            <div className="firmSection">
                {/* Loop through the firmData */}
                {firmData.map((apple) => (
                    <div className="firm-group" key={apple._id}>
                        {/* Loop through the firms of each vendor */}
                        {apple.firm.map((item) => {
                            // Only render if the region matches the selected region
                            if (selectedRegion === "All" || item.region.includes(selectedRegion.toLowerCase())) {
                                return (
                                    <Link className='link' to={`/products/${item._id}/${item.firmName}`} key={item._id}>
                                        <div className="firm-image">
                                            <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                                            <div className="offer">{item.offer}</div>
                                        </div>
                                        <div className="list-cfirmItems">
                                            <ul>
                                                <li><strong>{item.firmName}</strong></li>
                                                <li>{item.region.join(', ')}</li>
                                                <li>{item.area}</li>
                                            </ul>
                                        </div>
                                    </Link>
                                );
                            }
                            return null;  // If no region matches, return null to avoid rendering
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FirmCollections;
