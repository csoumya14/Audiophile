export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: Other[];
}

export interface ProductDetails {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryImage: CategoryImage;
  feature: string;
  new: boolean;
  includes: IncludedItem[];
  gallery: Gallery;
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

export interface CartItem {
  quantity: number;
  price: number;
  shortName: string;
  image: string;
  id: number;
}
