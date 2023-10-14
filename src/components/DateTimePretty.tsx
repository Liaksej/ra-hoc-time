import { ComponentType } from "react";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export function withPrettyDateTime<T extends { date: string }>(
  Component: ComponentType<T>,
) {
  return function DateTimePretty(props: Omit<T, "date"> & { date: string }) {
    const { date, ...rest } = props;

    let dateObj = new Date(date);

    const finalDateString = moment(dateObj).fromNow();

    return <Component {...(rest as T)} date={finalDateString} />;
  };
}
