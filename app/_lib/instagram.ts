export type InstagramPost = {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
};

type InstagramResponse = {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
  error?: {
    message: string;
    type: string;
    code: number;
  };
};

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export const getInstagramPosts = async (limit = 9): Promise<InstagramPost[]> => {
  if (!INSTAGRAM_ACCESS_TOKEN) {
    console.warn('INSTAGRAM_ACCESS_TOKEN is not set.');
    return [];
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=${limit}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Revalidate every hour (if using ISR, but for export it's build time)
    });

    if (!response.ok) {
      console.error('Failed to fetch Instagram posts:', response.statusText);
      return [];
    }

    const json: InstagramResponse = await response.json();

    if (json.error) {
      console.error('Instagram API Error:', json.error.message);
      return [];
    }

    return json.data || [];
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return [];
  }
};
