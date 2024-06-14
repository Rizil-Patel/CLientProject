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

const Subsection1 = () => {
    const categories = [
        { imgSrc: img1, label: 'Hotels' },
        { imgSrc: img2, label: 'Beauty Spa' },
        { imgSrc: img3, label: 'Home Decor' },
        { imgSrc: img4, label: 'Wedding Planning' },
        { imgSrc: img5, label: 'Education' },
        { imgSrc: img6, label: 'Rent & Hire' },
        { imgSrc: img7, label: 'Hospitals' },
        { imgSrc: img8, label: 'Contractors' },
        { imgSrc: img9, label: 'Pet Shops' },
        { imgSrc: img10, label: 'Pet Shops' },
        { imgSrc: img11, label: 'Pet Shops' },
        { imgSrc: img12, label: 'Pet Shops' },
    ];

    return (
        <section className="relative top-[64px] left-0 right-0 z-0 bg-white shadow-md py-2 my-1 dark:bg-slate-800 dark:text-white">
            <div className="container mx-auto flex justify-center items-center space-x-4 overflow-x-auto px-4">
                {categories.map((category, index) => (
                    <div key={index} className="category flex flex-col items-center mx-2">
                        <img
                            className="icon w-16 h-16 rounded-full"
                            src={category.imgSrc}
                            alt={category.label}
                        />
                        <p className="label text-center mt-2 text-sm font-medium">{category.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Subsection1;
