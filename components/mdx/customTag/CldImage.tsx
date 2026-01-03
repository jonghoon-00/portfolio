interface MediaProps {
  src: string; // Cloudinary 기본 src
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 *
 * @param src /upload/ 이후 이미지 경로
 * @returns
 */
export default function CldImage({
  src,
  alt,
  width,
  height,
  className,
}: MediaProps) {
  // 공통 변환 옵션 자동 추가
  const transformedUrl = `https://res.cloudinary.com/dfourp6t8/image/upload/f_auto,q_auto/${src}`;

  return (
    <img
      src={transformedUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
