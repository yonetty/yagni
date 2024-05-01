import { Product, getProducts } from "./products.js";
import { User, getUser } from "./users.js";
import { Column, getProductsCsvLayout } from "./csv_layout_1.js";
import { outputCsv } from "./output_csv_2.js";

const userId = 1; // 1: Alice(管理者), 2: Bob

const loginUser: User = getUser(userId); // ログインユーザー情報取得
const products: Product[] = getProducts(); // 商品リスト取得
const columns: Column[] = getProductsCsvLayout(loginUser); // CSVレイアウト取得
outputCsv(products, columns); // CSVファイル出力
