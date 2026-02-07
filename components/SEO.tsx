import Script from "next/script";
import { structuredData } from "@/content/siteContent";

// JSON-LD Script component for structured data
export const LocalBusinessSchema = () => {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.localBusiness) }}
    />
  );
};

// SEO is now handled by Next.js metadata API in page files
// This file is kept for the LocalBusinessSchema component
export default LocalBusinessSchema;
