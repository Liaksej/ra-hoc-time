import { DateTime } from "@/components/DateTime";

interface VideoProps {
  url: string;
  date: string;
}

export function Video({ url, date }: VideoProps) {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen={true}
      ></iframe>
      <DateTime date={date} />
    </div>
  );
}
