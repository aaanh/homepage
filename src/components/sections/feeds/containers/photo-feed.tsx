import { useEffect, useState } from "react";

interface Photo {
  url: string;
  public_id: string;
  folder: string;
  width: number;
  height: number;
  format: string;
}

export default function PhotoFeed() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPhotos() {
    try {
      const res = await fetch("/api/photos");
      const data = await res.json();
      setPhotos(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[35vh]">
        <div className="border-gray-900 dark:border-white border-b-2 rounded-full w-8 h-8 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 border border-foreground max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500">
        <div className="flex items-center justify-center bg-accent/50 text-2xl font-mono">Year::2025</div>
        {photos.map((photo) => (
          <div
            key={photo.public_id}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={photo.url}
              alt={photo.public_id}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
