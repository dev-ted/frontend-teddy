/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://frontendted.co.za",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  autoLastmod: true,
  changefreq: "daily",
  priority: 0.7,
  // robots
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
     
    ],
  },
  
};
