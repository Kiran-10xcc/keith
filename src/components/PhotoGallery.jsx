import React, { useState } from 'react';

const PhotoGallery = () => {
    const [activePhoto, setActivePhoto] = useState(0);
    
    const photos = [
        { src: '/assets/keith_photo_1.jpg', caption: 'Keith contemplating his life choices' },
        { src: '/assets/keith_photo_2.jpg', caption: 'Deep in thought about the seven seas' },
        { src: '/assets/keith_photo_3.jpg', caption: 'Praying for calm waters' },
        { src: '/assets/keith_photo_4.jpg', caption: 'Already feeling seasick' },
        { src: '/assets/keith_photo_5.jpg', caption: 'The face of a fearless sailor' },
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'rgba(17, 34, 64, 0.5)' }}>
            <div className="container">
                <h2 className="text-4xl text-center mb-8">📸 The Many Faces of Captain Keith</h2>
                <p className="text-center text-gray-400 mb-12 text-lg">
                    A sneak peek at the man who will conquer the Atlantic
                </p>
                
                {/* Main Featured Photo */}
                <div className="relative group mb-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="absolute -inset-2 bg-gradient-to-r from-gold to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-black/30 rounded-xl overflow-hidden">
                        <img
                            src={photos[activePhoto].src}
                            alt={photos[activePhoto].caption}
                            className="w-full rounded-xl transition duration-500"
                            style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                            <p className="text-lg text-gold italic text-center">
                                "{photos[activePhoto].caption}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePhoto(index)}
                            className={`relative rounded-lg overflow-hidden transition duration-300 ${
                                activePhoto === index 
                                    ? 'ring-2 ring-gold transform scale-105' 
                                    : 'opacity-60 hover:opacity-100'
                            }`}
                            style={{ width: '100px', height: '75px' }}
                        >
                            <img
                                src={photo.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Fun fact */}
                <div className="text-center mt-8 p-4 bg-white/5 rounded-xl border border-white/10" style={{ maxWidth: '500px', margin: '2rem auto 0' }}>
                    <span style={{ fontSize: '1.5rem' }}>🦆</span>
                    <p className="text-gray-400 mt-2 text-sm">
                        Fun fact: Keith will be bringing a lucky rubber duck for every photo taken of him on this voyage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
