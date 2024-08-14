import {ICatalogs} from "@/domain/entities/products";

export const catalogs: ICatalogs = [
    {
        id: "001",
        name: "Pearl Bracelet",
        price: 500000,
        image_url: "/assets/images/catalogs/necklace.png",
        details: {
            description: "Elegant pearl bracelet made with high-quality pearls.",
            variants: [
                {
                    variant_id: "001A",
                    variant_name: "Size: Small",
                    price: 500000,
                    images: [
                        "https://example.com/pearl-bracelet-small.jpg",
                        "https://example.com/pearl-bracelet-small-side.jpg"
                    ]
                },
                {
                    variant_id: "001B",
                    variant_name: "Size: Large",
                    price: 550000,
                    images: [
                        "https://example.com/pearl-bracelet-large.jpg",
                        "https://example.com/pearl-bracelet-large-side.jpg"
                    ]
                }
            ]
        }
    },
    {
        id: "002",
        name: "Pearl Ring",
        price: 300000,
        image_url: "/assets/images/catalogs/necklace.png",
        details: {
            description: "Beautifully crafted pearl ring with a timeless design.",
            variants: [
                {
                    variant_id: "002A",
                    variant_name: "Size: 6",
                    price: 300000,
                    images: [
                        "https://example.com/pearl-ring-size6.jpg",
                        "https://example.com/pearl-ring-size6-side.jpg"
                    ]
                },
                {
                    variant_id: "002B",
                    variant_name: "Size: 8",
                    price: 350000,
                    images: [
                        "https://example.com/pearl-ring-size8.jpg",
                        "https://example.com/pearl-ring-size8-side.jpg"
                    ]
                }
            ]
        }
    },
    {
        id: "003",
        name: "Pearl Souvenir",
        price: 150000,
        image_url: "/assets/images/catalogs/necklace.png",
        details: {
            description: "A perfect gift or keepsake, featuring a delicate pearl design.",
            variants: [
                {
                    variant_id: "003A",
                    variant_name: "Type: Keychain",
                    price: 150000,
                    images: [
                        "https://example.com/pearl-keychain.jpg",
                        "https://example.com/pearl-keychain-side.jpg"
                    ]
                },
                {
                    variant_id: "003B",
                    variant_name: "Type: Pendant",
                    price: 200000,
                    images: [
                        "https://example.com/pearl-pendant.jpg",
                        "https://example.com/pearl-pendant-side.jpg"
                    ]
                }
            ]
        }
    }
]