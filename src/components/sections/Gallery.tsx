import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import gallery1 from '../../assets/gallery1.jpeg';
import gallery2 from '../../assets/gallery2.jpeg';
import gallery3 from '../../assets/gallery3.jpeg';
import gallery4 from '../../assets/gallery4.jpeg';
import gallery5 from '../../assets/gallery5.jpeg';
import gallery6 from '../../assets/gallery6.jpeg';
import gallery7 from '../../assets/gallery7.jpeg';
import gallery8 from '../../assets/gallery8.jpeg';
import gallery9 from '../../assets/gallery9.jpeg';
import gallery10 from '../../assets/gallery10.jpeg';
import gallery11 from '../../assets/gallery11.jpeg';
import gallery12 from '../../assets/gallery12.jpeg';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // תמונות פרויקטים אמיתיים של החברה
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ];

  return (
    <section className="py-20 bg-white" dir="rtl" lang="he">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">גלריית תמונות</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#FF8C00' }} />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צפו בחלק מהפרויקטים והעבודות שביצענו
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={image}
                  alt={`פרויקט ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="max-w-6xl w-full">
              <ImageWithFallback
                src={images[selectedImage]}
                alt={`פרויקט ${selectedImage + 1}`}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
