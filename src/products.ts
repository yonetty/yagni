type Product = {
    productCode: string;
    productName: string;
    supplier: string;
    price: number;
    category: string;
    notes: string;
}

const products: Product[] = [
    {
        productCode: "01",
        productName: "鉛筆",
        supplier: "にゃんこ商店",
        price: 50,
        category: "文具",
        notes: "書き心地抜群！"
    },
    {
        productCode: "02",
        productName: "ノート",
        supplier: "わんこ商店",
        price: 150,
        category: "文具",
        notes: "5mm方眼ノート"
    },
    {
        productCode: "03",
        productName: "消しゴム",
        supplier: "わんこ商店",
        price: 100,
        category: "文具",
        notes: "消せないものなどない"
    },
    {
        productCode: "04",
        productName: "マグカップ",
        supplier: "にゃんこ商店",
        price: 200,
        category: "雑貨",
        notes: "にゃんこ柄のかわいいマグカップ"
    },
]

const getProducts = (): Product[] => products;


export { Product, getProducts }