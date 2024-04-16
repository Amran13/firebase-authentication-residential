import React, { useEffect, useState } from 'react';

const Resident = () => {
    const [residents, setResidents] = useState([])
    useEffect(() => {
        fetch('residents.json')
            .then(res => res.json())
            .then(data => setResidents(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-3 mb-10 mt-16'>
                <h2 className='text-5xl text-center font-bold'>Our Residential Houses</h2>
                <p>Highlight the best of your properties by using the List Category shortcode. <br /> You can list categories, types, cities, areas and states of your choice.</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    residents.map(resident => <div key={resident.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={resident.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {resident.estate_title} </h2>
                            <p> Segment :  {resident.segment_name} </p>
                            <p><span className='font-bold'>Price :</span> {resident.price} </p>
                                <p className='text-lg'> Type :  {resident.status} </p>
                            <p><span className='font-bold'>Area :</span> {resident.area} </p>
                            <p> <span className='font-bold'>Location :</span> {resident.location} </p>
                            <div className="card-actions justify-center my-3">
                                {
                                    resident.facilities.map(fecility => <div key={resident.facilities[fecility]} className="badge badge-outline">
                                        {fecility}
                                    </div>)
                                }
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Resident;