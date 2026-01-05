"use client";

export default function VideoComponent({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-110"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
