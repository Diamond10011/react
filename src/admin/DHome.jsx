import React from 'react'

export default function DHome() {
  const loadhotelsfromlocal = () =>{
    const stored = localStorage.getItem('hotels');
    if(stored){
      const hotels = JSON.parse(stored);
      // display the hotels
    }
    const hotels = JSON.parse(localStorage.getItem('hotels'))
    
  }
  return (
    <div>
    </div>
  )
}
