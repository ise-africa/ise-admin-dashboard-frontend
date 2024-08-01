import { backend_url } from "../Utilities/global";
import useGetHook from "./useGetHook";

const useDashboard = () => {
  return useGetHook(`${backend_url}/api/ise/v1/admin-home-dashboard`);
};

export default useDashboard;
