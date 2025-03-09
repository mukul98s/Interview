import { axiosClient } from "@/lib/axiosClient";
import { SheetData } from "@/types/report.type";
import { useQuery } from "@tanstack/react-query";

export const useGetBalanceSheet = () => {
  return useQuery({
    queryKey: ["balance-sheet"],
    queryFn: async () => {
      const response = await axiosClient.get<SheetData>(
        "/quickbooks/balance-sheet"
      );
      return response.data;
    },
  });
};
