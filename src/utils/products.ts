import { Product, ProductCatergory } from "@/types/products";

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
