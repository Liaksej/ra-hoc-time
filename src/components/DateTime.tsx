interface DateTimeProps {
  date: string;
}

export function DateTime({ date }: DateTimeProps) {
  return <p className="date">{date}</p>;
}
