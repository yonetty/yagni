import { User } from "./users.js";
import { Column, AddonFunction } from "./csv_layout_2.js";

const getProductsCsvLayout: AddonFunction = (user: User): Column[] => {
  return [
    { id: "category", title: "カテゴリー" },
    { id: "productCode", title: "商品コード" },
    { id: "productName", title: "商品名" },
    { id: "price", title: "単価" },
  ];
};

export default getProductsCsvLayout;
