// app/seo-schema.tsx
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = "https://rootlabsengg.com";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RootLabs Engineering",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/logo-64.webp`,
    // Add social profiles when available:
    // sameAs: ["https://www.linkedin.com/company/...", "https://www.instagram.com/..."],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+919738984610",
        email: "arunv.inc@gmail.com",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RootLabs Engineering",
    url: SITE_URL,
  };
}
