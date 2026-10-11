import React from 'react';
import style from './ImageGallery.module.css';

type ImageChild = React.ReactElement<React.JSX.IntrinsicElements['img'], 'img'>;

type ImageGalleryProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    children: ImageChild | [ImageChild, ...ImageChild[]];
    allowFullPage?: boolean;
    imageFlexBasis?: React.CSSProperties['flexBasis'];
};

export default function ImageGallery({
    allowFullPage = true,
    children,
    className,
    imageFlexBasis = '30%',
    ...props
}: ImageGalleryProps): React.ReactElement {
    const images = Array.isArray(children) ? children : [children];
    const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);
    const closeButtonRef = React.useRef<HTMLButtonElement>(null);
    const triggerRef = React.useRef<HTMLImageElement | null>(null);
    const isOpen = activeImageIndex !== null;

    const galleryStyle: React.CSSProperties & { '--image-flex-basis': string | number } = {
        ...style,
        '--image-flex-basis': imageFlexBasis,
    };

    const closeViewer = () => {
        setActiveImageIndex(null);
        triggerRef.current?.focus();
    };

    const showImage = (index: number, image: HTMLImageElement) => {
        triggerRef.current = image;
        setActiveImageIndex(index);
    };

    const changeImage = (offset: number) => {
        setActiveImageIndex((currentIndex) => {
            if (currentIndex === null) return currentIndex;
            return (currentIndex + offset + images.length) % images.length;
        });
    };

    React.useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    React.useEffect(() => {
        if (activeImageIndex === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeViewer();
            } else if (event.key === 'ArrowLeft' && images.length > 1) {
                changeImage(-1);
            } else if (event.key === 'ArrowRight' && images.length > 1) {
                changeImage(1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImageIndex, images.length]);

    return (
        <div
            className={`${style.imageGallery}${className ? ` ${className}` : ''}`}
            style={galleryStyle}
            {...props}
        >
            {images.map((image, index) => {
                if (!allowFullPage) return image;

                return React.cloneElement(image, {
                    key: image.key ?? index,
                    className: `${image.props.className ?? ''} ${style.zoomableImage}`.trim(),
                    role: 'button',
                    tabIndex: image.props.tabIndex ?? 0,
                    'aria-label': `View ${image.props.alt || 'image'} full screen`,
                    onClick: (event) => {
                        image.props.onClick?.(event);
                        if (!event.defaultPrevented) showImage(index, event.currentTarget);
                    },
                    onKeyDown: (event) => {
                        image.props.onKeyDown?.(event);
                        if (!event.defaultPrevented && (event.key === 'Enter' || event.key === ' ')) {
                            event.preventDefault();
                            showImage(index, event.currentTarget);
                        }
                    },
                });
            })}

            {isOpen && activeImageIndex !== null && (
                <div
                    className={style.fullPageViewer}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) closeViewer();
                    }}
                >
                    <button
                        ref={closeButtonRef}
                        className={`${style.viewerButton} ${style.closeButton}`}
                        type="button"
                        aria-label="Close image viewer"
                        onClick={closeViewer}
                    >
                        ×
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                className={`${style.viewerButton} ${style.previousButton}`}
                                type="button"
                                aria-label="Previous image"
                                onClick={() => changeImage(-1)}
                            >
                                ‹
                            </button>
                            <button
                                className={`${style.viewerButton} ${style.nextButton}`}
                                type="button"
                                aria-label="Next image"
                                onClick={() => changeImage(1)}
                            >
                                ›
                            </button>
                        </>
                    )}

                    {React.cloneElement(images[activeImageIndex], {
                        className: `${images[activeImageIndex].props.className ?? ''} ${style.fullPageImage}`.trim(),
                        onClick: undefined,
                    })}
                </div>
            )}
        </div>
    );
}
