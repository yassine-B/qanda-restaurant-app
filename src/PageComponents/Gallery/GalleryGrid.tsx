import React, { useEffect, useRef } from 'react';
import MiniMasonry from 'minimasonry';
import Image from 'next/image';
import Styles from './Gallery.module.css';
import { galleryData } from '@public/dummyData';
import { useReSize } from '@src/hooks/useResize';

const GalleryItems = () => {
  const result = galleryData.map((item) => {
    const { id, imageSource, imageDescription, height } = item;
    return (
      <div key={id} className={Styles.mini_masonry_item} style={{ height: height + 'px' }}>
        <div className={`minimasonry__wrapper ${Styles.gallery_image_container}`}>
          <Image
            layout="fill"
            objectFit="fill"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={imageDescription}
          />
        </div>
      </div>
    );
  });
  return <>{result}</>;
};

function GalleryGrid() {
  const [width] = useReSize();
  const masonryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (masonryRef.current) {
      new MiniMasonry({
        container: masonryRef.current,
        baseWidth: width < 580 ? 150 : 300,
        gutter: 20,
        minify: true
      });
    }
  }, [width]);

  return (
    <div ref={masonryRef} className={Styles.grid_container}>
      <GalleryItems />
    </div>
  );
}

export default GalleryGrid;
