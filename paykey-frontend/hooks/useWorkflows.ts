import { adminService } from "@/services/adminService";
import { useQuery } from "@tanstack/react-query";


export function useWorkflows() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['workflows'],
    queryFn: () => adminService.listCompanyWorkflows(),
  })
  return data
}