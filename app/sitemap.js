export default function sitemap() {
  return [
    {
      url: 'https://wouteruitentuis.nl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://wouteruitentuis.nl/hovenier',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://wouteruitentuis.nl/groenonderhoud',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
