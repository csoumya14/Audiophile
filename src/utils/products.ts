import { Product, ProductCatergory, ProductDetails } from "@/types/products";

export const getProductsByCategory = (
  category: string,
  data: Product[]
): ProductCatergory[] => {
  return data
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
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
