import { Product, getProducts } from "./products.js";
import { User, getUser } from "./users.js";
import { outputCsv } from "./output_csv_2.js";

const userId = 1; // 1: Alice(管理者), 2: Bob

const loginUser: User = getUser(userId); // ログインユーザー情報取得
const products: Product[] = getProducts(); // 商品リスト取得
let columns;
if (loginUser.isAdmin) {
  columns = [
    { id: "productCode", title: "商品コード" },
    { id: "productName", title: "商品名" },
    { id: "supplier", title: "仕入先" },
    { id: "price", title: "単価" },
    { id: "category", title: "カテゴリー" },
    { id: "notes", title: "備考" },
  ];
} else {
  columns = [
    { id: "productCode", title: "商品コード" },
    { id: "productName", title: "商品名" },
    { id: "price", title: "単価" },
    { id: "category", title: "カテゴリー" },
  ];
}

outputCsv(products, columns); // CSVファイル出力
