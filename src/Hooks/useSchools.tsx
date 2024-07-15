import { SWRConfiguration, SWRResponse } from "swr";
import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useSchools = () => {
  return useGetHook(`${backend_url}/api/ise/v1/school`);
};

export const useSchoolsById = (id: string, props?: SWRConfiguration) => {
  return useGetHook(`${backend_url}/api/ise/v1/school/${id}`, { ...props });
};

export default useSchools;
