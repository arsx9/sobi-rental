import { useState } from 'react';
import VideoModal from './VideoModal';
function HeroVideo(){
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div className="flex justify-center items-center">
            <div className="w-full px-5 md:px-10 relative h-100">
                <img
                    src="/assets/images/properties/header.png"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover rounded-xl"
                />

                {/* Centered play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button onClick={() => setModalOpen(true)}>
                        <img
                            src="/assets/icons/video.png"
                            alt="Video Thumbnail"
                            className="w-15 md:w-20 h-15 md:h-20 text-primary hover:scale-110 transition-transform cursor-pointer"
                        />
                    </button>
                </div>
                <VideoModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    videoUrl="https://www.youtube.com/embed/qzGxK6Uiu04"
                />
            </div>
        </div>
    );
}
export default HeroVideo;