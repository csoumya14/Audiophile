import { FC } from "react";
import fs from "fs";
import path from "path";
import { Product } from "@/types/products";
import { ProductTemplate } from "@/components/Organisms/Templates/ProductTemplate/ProductTemplate";

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
  product: Product | null;
}

function readProductsFile(): Product[] {
  const filePath = path.join(process.cwd(), "src/data/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData).products;
}

async function fetchProduct(category: string, slug: string) {
  const products = readProductsFile();

  let foundProduct: Product | null = null;

  products.forEach((product) => {
    if (product.slug === slug && product.category === category) {
      foundProduct = product;
    }
  });

  return foundProduct;
}

export async function generateStaticParams() {
  const products = readProductsFile();

  return products
    .filter((product) => product.category)
    .map((product) => ({
      category: product.category,
      subcategory: product.slug,
    }));
}

export default async function Page({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const { category, subcategory } = params;
  const product = await fetchProduct(category, subcategory);
  return <ProductTemplate subcategory={subcategory} product={product} />;
}
