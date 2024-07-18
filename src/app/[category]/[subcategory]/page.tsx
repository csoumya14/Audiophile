import { FC } from "react";
import fs from "fs";
import path from "path";
import { Product } from "@/types/products";

interface SubcategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
  product: Product | null;
}

const SubcategoryPage: FC<SubcategoryPageProps> = ({ params, product }) => {
  if (!product) {
    return <div>Subcategory not found</div>;
  }

  return (
    <div>
      <h1>Subcategory: {product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};
function readProductsFile(): Product[] {
  const filePath = path.join(process.cwd(), "src/data/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData).products;
}

async function fetchProduct(category: string, slug: string) {
  const products = readProductsFile();

  return (
    products.find(
      (product) => product.slug === slug && product.category === category
    ) || null
  );
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
  const product = await fetchProduct(params.category, params.subcategory);
  return <SubcategoryPage params={params} product={product} />;
}
