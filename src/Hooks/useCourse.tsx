import { SWRConfiguration } from "swr";
import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useCourseFromSchool = (id: string, props?: SWRConfiguration) => {
  return useGetHook(`${backend_url}/api/ise/v1/school/admin/${id}/courses`, {
    ...props,
  });
};

export default useCourseFromSchool;
