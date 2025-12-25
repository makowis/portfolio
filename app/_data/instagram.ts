export type InstagramPost = {
  id: string;
  image: string; // Path to local image (e.g. '/images/instagram/1.jpg') or external URL
  permalink: string;
  alt: string;
};

export const instagramPosts: InstagramPost[] = [
  // Example data - Replace with your actual posts
  // It is recommended to download images and place them in public/images/instagram/ to avoid link expiration
  {
    id: '1',
    image: '/icon.svg', // Placeholder
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 1',
  },
  {
    id: '2',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 2',
  },
  {
    id: '3',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 3',
  },
  {
    id: '4',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 4',
  },
  {
    id: '5',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 5',
  },
  {
    id: '6',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 6',
  },
  {
    id: '7',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 7',
  },
  {
    id: '8',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 8',
  },
  {
    id: '9',
    image: '/icon.svg',
    permalink: 'https://www.instagram.com/mako_wis/',
    alt: 'Instagram Post 9',
  },
];
