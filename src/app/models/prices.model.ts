interface priceFeature {
    title: string;
    isAvailable: boolean;
}

export interface price {
    title: string;
    subTitle: string;
    type: string;
    features: priceFeature[]
}