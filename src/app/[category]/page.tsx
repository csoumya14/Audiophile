import { CategoryTemplate } from "@/container/CategoryTemplate/CategoryTemplate";
import { Product } from "@/types/products";
import path from "path";
import fs from "fs";

function readProductsFile(): Product[] {
  const filePath = path.join(process.cwd(), "src/data/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData).products;
}

async function fetchProduct(category: string) {
  const products = readProductsFile();
  return products
    .filter((product) => product.category === category)
    .sort((a, b) => Number(b.new) - Number(a.new));
}

export async function generateStaticParams() {
  const products = readProductsFile();
  return products.map((product) => ({
    category: product.category,
  }));
}
export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  console.log({ category });
  const product = await fetchProduct(category);

  return <CategoryTemplate products={product} category={category} />;
}
