import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent);

  return NextResponse.json(data);
}
