import { axiosClient } from "@/lib/axiosClient";
import { SheetData } from "@/types/report.type";
import { useQuery } from "@tanstack/react-query";

export const useGetProfitLossSheet = () => {
  return useQuery({
    queryKey: ["profit-loss-sheet"],
    queryFn: async () => {
      const response = await axiosClient.get<SheetData>(
        "/quickbooks/profit-and-loss"
      );
      return response.data;
    },
  });
};
