import useSWR from "swr";

const useGetHook = (url: string, props: any) => {
  const { data, error, isLoading } = useSWR(url, { ...props });

  return { data, error, isLoading };
};

export default useGetHook;
