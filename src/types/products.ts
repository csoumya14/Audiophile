export interface Product {
  id: number;
  slug: string;
  name: string;
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


export interface ProductCatergory {
  id: number;
  slug: string;
  name: string;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
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
