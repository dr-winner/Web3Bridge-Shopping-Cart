import React from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="relative h-48 w-full bg-gray-200">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        {alt}
      </div>
    </div>
  );
} 