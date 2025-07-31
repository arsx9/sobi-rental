import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import type { ImageGalleryProps } from '../types/ImageGalleryProps';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, videoThumbnail }) => {
  const slides = images.map((imgUrl) => ({ src: imgUrl }));
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const previewImages = images.slice(0, 4);
  if (!images || images.length === 0) {
    return <p className="text-gray-500 flex flex-wrap items-center justify-center h-100">No images available.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full gap-8 px-5 md:px-10 py-10 min-h-[600px]">
        <div className="w-full md:w-1/2 bg-gray-200 min-h-[300px] md:h-auto relative overflow-hidden">
            <img
                src={videoThumbnail}
                alt="Full cover image"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="/assets/icons/video.png" alt="Video Thumbnail" className="w-10 md:w-15 h-10 md:h-15 text-primary hover:scale-110 transition-transform cursor-pointer"/>
            </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-8 min-h-[300px] md:h-auto">
            {previewImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-gray-200 relative overflow-hidden"
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`Image ${idx + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                {idx === 3 && (
                  <div className="absolute bottom-2 right-2">
                    <button className="bg-white font-bold text-md px-4 py-2 text-[var(--color-primary)] rounded-full cursor-pointer" onClick={ () => { setIndex( (idx+2) ); setOpen(true);} }>
                        {images.length} Photos
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
       <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
            container: {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // control opacity here
          },
        }}
      />
    </div>
  );
};

export default ImageGallery;