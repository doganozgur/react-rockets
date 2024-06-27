import useSWR from "swr";

import { fetcher } from "../utils/fetcher";

export const useMissionsData = () => {
  const { data, isLoading } = useSWR(
    "https://api.spacexdata.com/v3/launches/past",
    fetcher
  );

  return {
    data,
    isLoading,
  };
};
