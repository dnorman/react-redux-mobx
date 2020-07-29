import { Product } from "./types";

function delay(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export const getDrinks = async (): Promise<Product[]> => {
    await delay(1);

    return [
        { name: "cola", displayName: "Cola", price: 2 },
        { name: "water", displayName: "Water", price: 1 },
        { name: "lemon", displayName: "Lemon Juice", price: 2 }
    ]
}

export const getBurgers = async (): Promise<Product[]> => {

    await delay(1);

    return [
        { name: "beef", displayName: "Beef Burfer", price: 5 },
        { name: "chicken", displayName: "Chicken Burger", price: 4 },
        { name: "vegan", displayName: "Vegan Burger", price: 4 }
    ]
}