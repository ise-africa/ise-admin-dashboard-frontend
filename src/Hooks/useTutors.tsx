import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useTutors = () => {
  return useGetHook(`${backend_url}/api/ise/v1/admin/tutors`);
};

export default useTutors;
