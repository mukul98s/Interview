import { AlertCircle } from "lucide-react";

interface Props {
  title: string;
  message: string;
}

export function ErrorMessage({ title, message }: Props) {
  return (
    <div
      className="flex items-start p-4 mb-4 text-sm rounded-lg max-w-lg mx-auto text-red-800 border border-red-300 bg-red-50"
      role="alert"
    >
      <AlertCircle className="mt-0.5 mr-3 inline h-5 w-5 flex-shrink-0" />
      <div className="flex-1">
        <h3 className="mb-1 font-medium">{title}</h3>
        <p className="mb-2">{message}</p>
      </div>
    </div>
  );
}
