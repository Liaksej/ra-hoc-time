import { Video } from "@/components/Video";
import { Video as VideoType } from "@/app/page";

interface VideoListProps {
  list: VideoType[];
}

export function VideoList(props: VideoListProps) {
  return props.list.map((item) => (
    <Video key={item.url} url={item.url} date={item.date} />
  ));
}
