"`use client";
import { useEffect, useState } from "react";

interface UseFetchProps {
  keyword: string;
}

const useFetch = ({ keyword }: UseFetchProps) => {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        // Check if running on the server
        const isServer = typeof window === "undefined";

        let APIKEY: string | undefined;

        if (isServer) {
          // Provide a default value or handle it differently for SSR
          APIKEY = "ge7t6C2zTjYe6FFasb8WisIqA5wExEp8";
        } else {
          // Running on the client
          APIKEY = import.meta.env.VITE_GIPHY_API;

          if (!APIKEY) {
            throw new Error("Giphy API key is not available");
          }
        }

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
            .split(" ")
            .join("")}&limit=1`
        );

        const { data } = await response.json();

        if (data && data.length > 0) {
          setGifUrl(data[0]?.images?.downsized_medium.url);
        } else {
          // Handle the case when no data is returned
          setGifUrl("");
        }
      } catch (error) {
        console.error("Error fetching Giphy data:", error);
        setGifUrl(
          "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
        );
      }
    };

    if (keyword) {
      fetchGifs();
    }
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
