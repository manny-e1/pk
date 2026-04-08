import { adminService } from "@/services/adminService";
import { useQuery } from "@tanstack/react-query";


export function useWorkflows(companyId?: string) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['workflows'],
    queryFn: async() => await adminService.listCompanyWorkflows(companyId||''),
  });
  return { data, isLoading, refetch };
}