export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design", "/projects/project5", "/projects/project7"],
    },
    sitemap: "https://www.amandamorrison.dev/sitemap.xml",
  };
}
