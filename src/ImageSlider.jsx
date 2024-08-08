import React, {useState, useEffect} from 'react'
const image = [
  "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/ygmdtppexv58ngfcakt6",
  "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/bjyr3hehjb04e4m67nnb",
];

export default function ImageSlider() {
    const screenwidth = window.innerWidth;
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((previndex) => (previndex + 1) % image.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div className="w-full h-[500px] overflow-hidden">
      <div
        className=" w-full h-full flex transform transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * screenwidth}px)` }}
      >
        {image.map((img, ind) => (
          <img key={ind} className="w-full flex-shrink-0 object-cover" src={img} alt="" />
        ))}
        ;
      </div>
    </div>
  );
}
