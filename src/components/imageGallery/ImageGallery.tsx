import React from 'react';
import style from './ImageGallery.module.css';

type ImageGalleryProps = React.HTMLAttributes<HTMLDivElement> & {
    imageFlexBasis?: React.CSSProperties['flexBasis'];
};

export default function ImageGallery({ className, imageFlexBasis = '30%', ...props }: ImageGalleryProps): React.ReactElement {
    const galleryStyle: React.CSSProperties & { '--image-flex-basis': string | number } = {
        ...style,
        '--image-flex-basis': imageFlexBasis,
    };

    return (
        <div
            className={`${style.imageGallery}${className ? ` ${className}` : ''}`}
            style={galleryStyle}
            {...props}
        />
    );
}
