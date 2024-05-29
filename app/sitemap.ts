import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://a-spot-thur.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://a-spot-thur.app/introduce',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
        url: 'https://a-spot-thur.app/profile',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
  ]
}