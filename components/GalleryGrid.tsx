import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  className?: string;
}

const GalleryGrid = ({ images, className }: GalleryGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-square rounded-xl overflow-hidden bg-muted"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            quality={80}
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay with caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
