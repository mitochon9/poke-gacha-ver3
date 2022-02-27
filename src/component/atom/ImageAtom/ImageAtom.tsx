import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const ImageAtom: React.FC<ImageProps> = ({ src, alt, width, height }) => (
  <>
    <Image src={src} alt={alt} width={width} height={height} />
  </>
);
