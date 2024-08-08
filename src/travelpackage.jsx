import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function Travelpackage() {
   const [travelPackages, settravelPackages] = useState([]);

   useEffect(() => {
     const fetchtravelPackages = async () => {
       try {
         const response = await fetch(
           "http://localhost:5223/wandermate/TravelPackages"
         );
         if (!response.ok) {
           throw new Error("Network Problem");
         }
         const data = await response.json();
         console.log(data);
         settravelPackages(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
     fetchtravelPackages();
   }, []);

   return (
     <div className="container mx-auto p-4">
       <Nav />
       <h1 className="text-3xl font-bold mb-6">Hotels</h1>
       <ul className="space-y-6">
         {travelPackages.map((travelPackages) => (
           <li
             key={travelPackages.id}
             className="bg-white shadow-md rounded-lg overflow-hidden"
           >
             <div className="flex items-center p-6 h-[300px] w-full">
               <img
                 src={travelPackages.img}
                 alt={travelPackages.name}
                 className="w-1/3 h-full object-cover rounded-lg mr-6"
               />
               <div>
                 <h2 className="text-3xl font-bold mb-2">
                   {travelPackages.name}
                 </h2>
                 <h2 className="text-gray-600 font-semibold mb-2">
                   Price: ${travelPackages.price}
                 </h2>
                 <button
                   type="button"
                   className="bg-blue-500 text-white p-2 rounded w-25 mb-4"
                 >
                   View Deal
                 </button>
                 {travelPackages.freeCancellation && (
                   <h4 className="text-green-400 font-semibold">
                     {" "}
                     &#10004; Free Cancellation{" "}
                   </h4>
                 )}
                 {!travelPackages.freeCancellation && (
                   <h4 className="text-red-500">
                     {" "}
                     &#10006; No Free Cancellation{" "}
                   </h4>
                 )}
                 <h4 className="font-semibold">
                   {" "}
                   &#10004; Reseve now , Pay or Stay{" "}
                 </h4>
                 <br></br>
                 <h2 className="text-gray-600 font-semibold mb-2">
                   Rating: {travelPackages.rating}/5
                 </h2>
               </div>
             </div>
           </li>
         ))}
       </ul>
       <Footer/>
     </div>
   );
}
