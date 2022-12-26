import { useQuery } from "@apollo/client";
import { createVideo } from "../graphql";

export default function videoCreate() {
  const { data } = useQuery(createVideo);

  if (data) {
    return <div>{data.createVideo.toString()}</div>;
  }
}
