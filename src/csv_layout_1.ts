import { User } from "./users.js";

type Column = {
  id: string;
  title: string;
};

const getProductsCsvLayout = (user: User): Column[] => {
  if (user.isAdmin) {
    return [
      { id: "productCode", title: "商品コード" },
      { id: "productName", title: "商品名" },
      { id: "supplier", title: "仕入先" },
      { id: "price", title: "単価" },
      { id: "category", title: "カテゴリー" },
      { id: "notes", title: "備考" },
    ];
  } else {
    return [
      { id: "productCode", title: "商品コード" },
      { id: "productName", title: "商品名" },
      { id: "price", title: "単価" },
      { id: "category", title: "カテゴリー" },
    ];
  }
};

export { Column, getProductsCsvLayout };
