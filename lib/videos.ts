import { cacheLife } from "next/cache";

export const CHANNEL_ID = "UCgsM_ZziYzUbGXCmRBnypOA";
export const UPLOADS_PLAYLIST = "UU" + CHANNEL_ID.slice(2);

export type Video = { id: string; title: string };

// Featured videos. Change the titles to the real video titles.
export const featured: Video[] = [
  { id: "SkDo3cNmnEE", title: "Featured Message 1" },
  { id: "sH5lagxGT7g", title: "Featured Message 2" },
  { id: "H5Q17LOcv9Q", title: "Featured Message 3" },
  { id: "dTeCM_eII-Q", title: "Featured Message 4" },
  { id: "zMxo1uA1sbk", title: "Featured Service (Live) 1" },
  { id: "YPH3RXPpnIE", title: "Featured Service (Live) 2" },
];

function decode(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export async function getLatestVideos(): Promise<Video[]> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    );
    if (!res.ok) return [];
    const xml = await res.text();

    return xml
      .split("<entry>")
      .slice(1, 13)
      .map((entry) => {
        const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
        const title = entry.match(/<title>([^<]+)<\/title>/)?.[1];
        return id && title ? { id, title: decode(title) } : null;
      })
      .filter((v): v is Video => v !== null);
  } catch {
    return [];
  }
}