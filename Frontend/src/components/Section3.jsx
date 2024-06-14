import React from 'react';

import img1 from '../images1/Screenshot 2024-06-13 180855.png';
import img2 from '../images1/Screenshot 2024-06-13 180900.png';
import img3 from '../images1/Screenshot 2024-06-13 180906.png';
import img4 from '../images1/Screenshot 2024-06-13 180911.png';
import img5 from '../images1/Screenshot 2024-06-13 180915.png';
import img6 from '../images1/Screenshot 2024-06-13 180919.png';
import img7 from '../images1/Screenshot 2024-06-13 180922.png';
import img8 from '../images1/Screenshot 2024-06-13 180926.png';
import img9 from '../images1/Screenshot 2024-06-13 180930.png';
import img10 from '../images1/Screenshot 2024-06-13 180744.png';
import img11 from '../images1/Screenshot 2024-06-13 180748.png';
import img12 from '../images1/Screenshot 2024-06-13 180752.png';

const Section3 = () => {
    const products = [
        { imgSrc: img1, name: '', price: '' },
        { imgSrc: img10, name: '', price: '' },
        { imgSrc: img3, name: '', price: '' },
        { imgSrc: img12, name: '', price: '' },
        { imgSrc: img5, name: '', price: '' },
    ];

    return (
        <section className="dark:bg-slate-800 dark:text-black container mx-8 my-8 px-4 mt-[6%]">
            <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 p-2">
                <div className="border p-4 rounded-md shadow-md text-center">
                        <img
                            className="w-full h-40 object-cover mb-4"
                            src={img6}
                            alt="Advertisement"
                        />
                        <p className="text-md text-gray-500">Wedding planning service</p>
                        <p className="text-lg font-bold text-red-500">We are skilled enough</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 w-full md:w-3/4">
                    {products.map((product, index) => (
                        <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/6 p-2">
                            <div className="border p-4 rounded-md shadow-md text-center">
                                <img
                                    className="w-full h-40 object-cover mb-4"
                                    src={product.imgSrc}
                                    alt={product.name}
                                />
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-md text-gray-500">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Section3;
