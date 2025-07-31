import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const slides = [
        { src: '/assets/images/properties/slider/1.png' },
        { src: '/assets/images/properties/slider/2.png' },
        { src: '/assets/images/properties/slider/3.png' },
        { src: '/assets/images/properties/slider/4.png' },
        { src: '/assets/images/properties/slider/5.png' },
    ];
    const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) {
    return <p className="text-gray-500 flex flex-wrap items-center justify-center h-100">No images available.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full gap-8 px-5 md:px-10 py-10 min-h-[600px]">
        <div className="w-full md:w-1/2 bg-gray-200 min-h-[300px] md:h-auto relative overflow-hidden">
            <img
                src="/assets/images/properties/slider/1.png" // portrait image for test
                alt="Full cover image"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="/assets/icons/video.png" alt="Video Thumbnail" className="w-10 md:w-15 h-10 md:h-15 text-primary hover:scale-110 transition-transform cursor-pointer"/>
            </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-8 min-h-[300px] md:h-auto">
            <div className="bg-gray-200 relative overflow-hidden" onClick={ () => { setIndex(0); setOpen(true);} }>
                <img
                    src="/assets/images/properties/slider/2.png" // replace with your image
                    alt="Box 1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="bg-gray-200 relative overflow-hidden" onClick={ () => { setIndex(0); setOpen(true);} }>
                <img
                    src="/assets/images/properties/slider/3.png" // replace with your image
                    alt="Box 1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="bg-gray-200 relative overflow-hidden" onClick={ () => { setIndex(0); setOpen(true);} }>
                <img
                    src="/assets/images/properties/slider/4.png" // replace with your image
                    alt="Box 1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="bg-gray-200 relative overflow-hidden" onClick={ () => { setIndex(0); setOpen(true);} }>
                <img
                    src="/assets/images/properties/slider/5.png" // replace with your image
                    alt="Box 1"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2">
                    <button className="bg-white font-bold text-md px-4 py-2 text-[var(--color-primary)] rounded-full cursor-pointer" onClick={ () => { setIndex(0); setOpen(true);} }>
                        23 Photos
                    </button>
                </div>
            </div>
        </div>
       <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
            container: {
            backgroundColor: "rgba(0, 0, 0, 0.8)", // control opacity here
          },
        }}
      />
    </div>
  );
};

export default ImageGallery;