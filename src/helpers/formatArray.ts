import { CartItem } from "@/types/products";

export const formatArray = (items: CartItem[]) => {
    if (items.length === 0 || items.length === 1) return "";

    const remainingCount = items.length - 1;

    if (remainingCount > 0) {
      return ` and ${remainingCount} other item(s)`;
    }
  };