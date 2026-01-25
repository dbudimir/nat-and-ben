'use client';

import Image from 'next/image';
import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';

type MaskedEdgeProps = {
  type?: 'image' | 'video';
  src?: string;
  fallbackImage?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onHoverEffect?: CSSProperties;
  onClickAction?: () => void;
  hoverAccent?: ReactNode;
  hoverAccentStyle?: CSSProperties;
  animationStyle?: CSSProperties;
  innerRef?: React.RefObject<HTMLDivElement>;
};

const MASK_STYLE: CSSProperties = {
  WebkitMaskImage: `url(/collage/mask-edge.webp)`,
  maskImage: `url(/collage/mask-edge.webp)`,
  WebkitMaskSize: '100% 100%',
  maskSize: '100% 100%',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
};

const MaskedEdge = ({
  type,
  src,
  fallbackImage,
  children,
  className,
  style,
  onHoverEffect,
  onClickAction,
  hoverAccent,
  hoverAccentStyle,
  animationStyle,
  innerRef,
}: MaskedEdgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isAutoplayAllowed, setIsAutoplayAllowed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type === 'video' && src) {
      const video = document.createElement('video');
      video.src = src;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';

      const handleCanPlayThrough = async () => {
        setIsVideoReady(true);
        try {
          await video.play();
          setIsAutoplayAllowed(true);
        } catch (error) {
          setIsAutoplayAllowed(false);
          console.log('Autoplay was prevented:', error);
        }
      };

      const handleError = () => {
        setVideoError(true);
        console.log('Video failed to load');
      };

      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('error', handleError);
      video.load();

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('error', handleError);
      };
    }
  }, [type, src]);

  const baseWrapperStyle: CSSProperties = {
    position: 'relative',
    transition: 'all 0.3s ease',
    cursor: onClickAction ? 'pointer' : 'default',
    ...animationStyle,
    ...style,
  };

  const hoveredWrapperStyle: CSSProperties = {
    ...baseWrapperStyle,
    ...(onHoverEffect || {}),
  };

  const interactiveProps = onClickAction
    ? {
        role: 'button' as const,
        tabIndex: 0,
        onClick: onClickAction,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClickAction();
          }
        },
      }
    : {};

  if (children !== undefined) {
    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: presentational hover wrapper
      <div
        ref={innerRef}
        className={className}
        style={baseWrapperStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...interactiveProps}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            ...MASK_STYLE,
          }}
        >
          {children}
        </div>
        {isHovered && hoverAccent && <div style={{ position: 'absolute', ...hoverAccentStyle }}>{hoverAccent}</div>}
      </div>
    );
  }

  if (type === 'image' && src) {
    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: presentational hover wrapper
      <div
        className={className}
        style={isHovered ? hoveredWrapperStyle : baseWrapperStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...interactiveProps}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            ...MASK_STYLE,
          }}
        >
          <Image src={src} alt="Masked image" priority fill style={{ objectFit: 'cover' }} />
        </div>
        {isHovered && hoverAccent && <div style={{ position: 'absolute', ...hoverAccentStyle }}>{hoverAccent}</div>}
      </div>
    );
  }

  if (type === 'video' && src) {
    if ((!isVideoReady || !isAutoplayAllowed || videoError) && fallbackImage) {
      return (
        // biome-ignore lint/a11y/noStaticElementInteractions: presentational hover wrapper
        <div
          className={className}
          style={isHovered ? hoveredWrapperStyle : baseWrapperStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...interactiveProps}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              ...MASK_STYLE,
            }}
          >
            <Image src={fallbackImage} alt="Loading video" priority fill style={{ objectFit: 'cover' }} />
          </div>
          {isHovered && hoverAccent && <div style={{ position: 'absolute', ...hoverAccentStyle }}>{hoverAccent}</div>}
        </div>
      );
    }

    if (isVideoReady && isAutoplayAllowed) {
      return (
        // biome-ignore lint/a11y/noStaticElementInteractions: presentational hover wrapper
        <div
          className={className}
          style={isHovered ? hoveredWrapperStyle : baseWrapperStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...interactiveProps}
        >
          <video
            ref={videoRef}
            src={src}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              ...MASK_STYLE,
            }}
            autoPlay
            loop
            muted
            playsInline
          />
          {isHovered && hoverAccent && <div style={{ position: 'absolute', ...hoverAccentStyle }}>{hoverAccent}</div>}
        </div>
      );
    }
  }

  return null;
};

export default MaskedEdge;
