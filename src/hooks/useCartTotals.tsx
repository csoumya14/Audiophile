import { SHIPPING_FEE, TAX_RATE } from "@/app/constants/price";
import { useCart } from "@/context/CartContext";

const useCartTotals = (): {
  totalPrice: number;
  tax: number;
  grandTotal: number;
} => {
  const { calculatedTotalPrice } = useCart();
  const totalPrice = calculatedTotalPrice();
  const tax = TAX_RATE * totalPrice;
  const grandTotal = totalPrice + tax + SHIPPING_FEE;

  return {
    totalPrice,
    tax,
    grandTotal,
  };
};

export default useCartTotals;
