import useSWR from "swr";
import useGetHook from "./useGetHook";

const useCountries = () => {
  return useGetHook("https://restcountries.com/v3.1/all?fields=name", {
    revalidateOnFocus: false,
  });
};

export default useCountries;
