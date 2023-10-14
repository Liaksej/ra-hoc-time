import { DateTime } from "@/components/DateTime";
import { withPrettyDateTime } from "@/components/DateTimePretty";

interface VideoProps {
  url: string;
  date: string;
}

const DateTimePretty = withPrettyDateTime(DateTime);

export function Video({ url, date }: VideoProps) {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen={true}
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}
