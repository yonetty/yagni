import { Product, getProducts } from "./products.js";
import { outputCsv } from "./output_csv_1.js";

const products: Product[] = getProducts(); // 商品リスト取得
outputCsv(products); // CSVファイル出力
