"use client";

import { TableSkeleton } from "@/app/components/common/TableSkeleton";
import { ErrorMessage } from "@/app/components/common/error-message";
import { useGetBalanceSheet } from "@/hooks/useGetBalanceSheet";
import DataTable from "@/app/components/common/data-table";

export default function BalanceSheetReport() {
  const { data, isLoading, isError, error } = useGetBalanceSheet();

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (isError) {
    return <ErrorMessage title="Error" message={error.message} />;
  }

  if (!data) {
    return <ErrorMessage title="Error" message="No data" />;
  }

  return <DataTable data={data} />;
}

