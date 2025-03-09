"use client";

import { useGetProfitLossSheet } from "@/hooks/useGetProfitLossSheet";
import DataTable from "@/app/components/common/data-table";
import { ErrorMessage } from "@/app/components/common/error-message";
import { TableSkeleton } from "@/app/components/common/TableSkeleton";

export default function ProfitLossReport() {
  const { data, isLoading, isError, error } = useGetProfitLossSheet();

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (isError) {
    return <ErrorMessage title="Error" message={error.message} />;
  }

  if (!data) {
    return <ErrorMessage title="Error" message="No data found" />;
  }

  return <DataTable data={data} />;
}
