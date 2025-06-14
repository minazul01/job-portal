import { useEffect, useState } from "react";

import FavouriteCard from "./FavouriteCard";


const Favourite = () => {
  
const [data, setData] = useState([]);


useEffect(() => {
    fetch("http://localhost:5000/jobs")
    .then(res => res.json())
    .then(data => {
        setData(data)
    })
}, [])
   
  
    return (
        <div className="my-10">
            <div className="w-fit mx-auto flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl font-bold">Jobs of the day</h1>
                <p className="w-3/5 text-center text-base text-gray-500 font-medium">Favourite job in the world and socila site best job for you. Search and connect with the right candidates faster.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    data.map(job => <FavouriteCard key={job._id} data={job}></FavouriteCard>)
                }
            </div>
        </div>
    );
};

export default Favourite;