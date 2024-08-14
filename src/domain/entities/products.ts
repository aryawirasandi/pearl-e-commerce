// Define interface for product variants
export interface IProductVariant {
    variant_id: string;
    variant_name: string;
    price: number;
    images: string[];
}

// Define interface for product details
export interface IProductDetails {
    description: string;
    variants: IProductVariant[];
}

// Define interface for a product in the catalog
export interface IProduct {
    id: string;
    name: string;
    price: number;
    image_url: string;
    favorite: boolean;
    details: IProductDetails;
}

// Define interface for the catalog page
export type ICatalogs = IProduct[]

// Define interface for the product detail page
export interface IProductDetailPage {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    variants: IProductVariant[];
}
