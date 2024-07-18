import { Product, ProductCatergory, ProductDetails } from "@/types/products";
import path from "path";

let fs: { readFileSync: (arg0: string, arg1: string) => any };
if (typeof window === "undefined") {
  fs = require("fs");
}

let fsPromises: { readFile: (arg0: string) => any };
if (typeof window === "undefined") {
  fsPromises = require("fs/promises");
}

export async function getLocalData() {
  const filePath = path.join(process.cwd(), "lib/data.json");
  if (fsPromises) {
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData as unknown as string).products;
    return objectData;
  }
}

export const readData = (): Product[] | null => {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  if (fs) {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData).products;
  }
  return null;
};

export const getProductsByCategory = (
  category: string
): Product[] | undefined => {
  const data = readData();
  if (data === null) {
    return undefined;
  }
  return data
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        description: product.description,
        features: product.features,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
        image: product.categoryImage,
        includes: product.includes,
        gallery: product.gallery,
        others: product.others,
      };
    })
    .sort((a, b) => Number(b.new) - Number(a.new));
};

export const getProductDetails = (
  name: string,
  data: Product[]
): ProductDetails | null => {
  let productDetails: ProductDetails | null = null;
  data.forEach((product) => {
    if (product.name === name) {
      productDetails = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        categoryImage: product.categoryImage,
        feature: product.features,
        new: product.new,
        includes: product.includes,
        gallery: product.gallery,
      };
    }
  });
  return productDetails;
};

export const getProductBySlug = (slug: string): Product | undefined => {
  const data = readData();
  if (data === null) {
    return undefined;
  }
  return data.find((product) => product.slug === slug);
};

export const getCategories = (): string[] | undefined => {
  const data = readData();
  if (data === null) {
    return undefined;
  }
  const categories = data.map((product) => product.category);
  return Array.from(new Set(categories));
};

export const getProductsPaths = ():
  | { category: string; slug: string }[]
  | undefined => {
  const data = readData();
  if (data === null) {
    return undefined;
  }
  return data.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
};
