import { useEffect, useRef } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css'; // যদি CSS দরকার হয়

export default function ContactBanner() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer({
        container: viewerRef.current,
        panorama: 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
        caption: 'Md. Shakhawat Hossain',
      });

      return () => {
        viewer.destroy(); // clean up
      };
    }
  }, []);

  return (
    <div className='h-[600px]' ref={viewerRef}></div>
  );
}
