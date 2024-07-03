import { NextResponse } from "next/server";
import productList from "@/data/products.json";

export async function GET() {
  return NextResponse.json({ products: productList.products });
}
