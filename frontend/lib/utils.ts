import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format money values
export function formatMoney(value: string | undefined, currency: string) {
  if (!value) return "";
  return parseFloat(value).toLocaleString("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
