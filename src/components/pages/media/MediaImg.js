import React, { useEffect, useState } from "react";

const MediaImg = ({ id, size = "full" }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id || id === 0) {
      setError(true);
      return;
    }

    fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Media not found");
        return response.json();
      })
      .then((data) => {
        setImage(data);
        setError(false);
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <img
        src="https://placehold.co/600x400/000000/CAFF33?text=No+Image"
        alt="No image available"
        className="media-img"
      />
    );
  }

  if (!image) {
    return (
      <img
        src="https://placehold.co/600x400/000000/CAFF33?text=Loading..."
        alt="Loading"
        className="media-img"
      />
    );
  }

  const imageUrl =
    image.media_details?.sizes?.[size]?.source_url || image.source_url;

  return (
    <img
      src={imageUrl}
      alt={image.alt_text || "Blog post image"}
      className="media-img"
    />
  );
};

export default MediaImg;
