import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useAdmin = () => {
  return useGetHook(`${backend_url}/api/ise/v1/admin`);
};

export default useAdmin;
