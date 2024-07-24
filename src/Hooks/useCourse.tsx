import { SWRConfiguration } from "swr";
import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useCourseFromSchool = (id: string, props?: SWRConfiguration) => {
  return useGetHook(`${backend_url}/api/ise/v1/school/admin/${id}/courses`, {
    ...props,
  });
};

export const useCoursebyIdWithModules = (
  id: string,
  props?: SWRConfiguration,
  filter?: string
) => {
  return useGetHook(
    `${backend_url}/api/ise/v1/courses/admin/school/${id}?filter=${filter}`,
    {
      ...props,
    }
  );
};

export const useCourseById = (id: string, props?: SWRConfiguration) => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/course/${id}`, {
    ...props,
  });
};

export const useCourseWeeksByCourseModules = (
  id: string,
  props?: SWRConfiguration
) => {
  return useGetHook(`${backend_url}/api/ise/v1/course-modules/${id}/weeks`, {
    ...props,
  });
};

export default useCourseFromSchool;
