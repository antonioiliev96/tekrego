import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import { galleryImageAssets } from "@/public/assets/galleryImages";
import { galleryMetadata } from "@/lib/metadata";

export const metadata: Metadata = galleryMetadata;

export default function GalleryPage() {
    return (
        <>
            <PageHeader
                subtitle="Галерия"
                title="Нашето студио"
                description="Уютна обстановка за пълна релаксация в сърцето на Русе."
            />

            <Section>
                {/* Masonry Grid */}
                <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
                    {galleryImageAssets.map((image, index) => (
                        <div
                            key={index}
                            className="group relative break-inside-avoid rounded-xl overflow-hidden bg-muted"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {image.caption && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <p className="text-background text-sm md:text-base font-medium">
                                            {image.caption}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
