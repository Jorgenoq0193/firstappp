import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto">
       
        {/* Aquí se inserta la imagen */}
        <div className="mt-8">
          <Image src="https://wallpapercave.com/wp/PeG3aM8.jpg" alt="Descripción de la imagen" width={500} height={500} />
          <p className="text-center text-xl mt-4">Portaviones Gerald Ford </p>
        </div>
        
      </div>
     
    </div>
  );
}
