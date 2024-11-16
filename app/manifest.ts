import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tabu',
    short_name: 'Tabu',
    description: 'Tamamen ücretsiz, sade ve hızlı tabu oyunu',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '../public/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
