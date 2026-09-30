import Image from "next/image";
import SmartVideo from "./SmartVideo";
import type { Media as MediaT } from "@/lib/site";

type Props = MediaT & { alt: string; sizes: string; className?: string; priority?: boolean };

/** Renders a looping clip when one is available, otherwise a responsive image. Both fill their parent. */
export default function Media({ image, video, alt, sizes, className = "", priority }: Props) {
  if (video) {
    return (
      <SmartVideo
        src={video.src}
        poster={video.poster}
        label={alt}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    );
  }
  return <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}
