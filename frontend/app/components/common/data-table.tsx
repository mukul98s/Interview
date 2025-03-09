"use client";

import { Fragment } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatMoney } from "@/lib/utils";
import { SheetData } from "@/types/report.type";

import clsx from "clsx";

const PADDING_VALUE = 16;

interface DataTableProps {
  data: SheetData;
}

export default function DataTable({ data }: DataTableProps) {
  // Get column headers for the table
  const columnHeaders = data.Columns.Column.map((col) => col.ColTitle);
  const currency = data.Header.Currency ?? "USD";

  // Recursive function to render rows
  function renderRows(rows: SheetData["Rows"], depth = 0) {
    if (!rows || !rows.Row) return null;

    // Ensure Row is always an array
    const rowArray = Array.isArray(rows.Row) ? rows.Row : [rows.Row];

    return rowArray.map((row, index) => {
      // Check if it's a header row
      const isHeader = row.Header && row.Header.ColData;
      const headerValue = isHeader ? row.Header.ColData[0]?.value : null;
      const isSummary = row.Summary && row.Summary.ColData;

      return (
        <Fragment key={`row-${depth}-${index}`}>
          {/* Header Row */}
          {isHeader && (
            <TableRow>
              <TableCell className="pl-4 py-2 font-medium">
                <div
                  className={clsx(
                    "flex items-center",
                    "font-semibold text-gray-700"
                  )}
                  style={{ paddingLeft: `${depth * PADDING_VALUE}px` }}
                >
                  {headerValue}
                </div>
              </TableCell>
              {columnHeaders.slice(1).map((_, i) => (
                <TableCell key={`header-cell-${i}`}></TableCell>
              ))}
            </TableRow>
          )}

          {/* Render children if expanded */}
          {row.Rows && renderRows(row.Rows, depth + 1)}

          {/* Data rows */}
          {!isHeader && row.ColData && (
            <TableRow>
              {row.ColData.map((cell, cellIndex) => (
                <TableCell
                  key={`data-cell-${cellIndex}`}
                  className={`${
                    cellIndex === 0 ? "font-medium" : "text-right"
                  }`}
                  style={{
                    paddingLeft:
                      cellIndex === 0
                        ? `${(depth + 1) * PADDING_VALUE}px`
                        : undefined,
                  }}
                >
                  {cellIndex === 0
                    ? cell.value
                    : formatMoney(cell.value, currency)}
                </TableCell>
              ))}
            </TableRow>
          )}

          {/* Summary row */}
          {isSummary && (
            <TableRow className="border-t border-b bg-gray-100 border-gray-300">
              {row.Summary.ColData.map((cell, cellIndex) => (
                <TableCell
                  key={`summary-cell-${cellIndex}`}
                  className={clsx(
                    "text-gray-700 font-semibold",
                    cellIndex > 0 && "text-right"
                  )}
                  style={{
                    paddingLeft:
                      cellIndex === 0
                        ? `${(depth + 1) * PADDING_VALUE}px`
                        : undefined,
                  }}
                >
                  {cellIndex === 0
                    ? cell.value
                    : formatMoney(cell.value, currency)}
                </TableCell>
              ))}
            </TableRow>
          )}
        </Fragment>
      );
    });
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{data.Header.ReportName}</h1>
        <p className="text-sm text-gray-500">
          Last Updated: {formatDate(data.Header.Time)}
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              {columnHeaders.map((header, index) => (
                <TableHead
                  key={index}
                  className={clsx(
                    "font-bold text-gray-700",
                    index > 0 && "text-right"
                  )}
                >
                  {header || "Account"}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-auto px-4">
            {renderRows(data.Rows)}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
