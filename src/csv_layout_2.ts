import { User } from "./users.js";

type Column = {
  id: string;
  title: string;
};

type AddonFunction = (user: User) => Column[];

const getProductsCsvLayout = async (user: User): Promise<Column[]> => {
  const addonModulePath = "./addonx.js";
  return import(addonModulePath)
    .then((module) => {
      // アドオンモジュールが存在する場合はそれを利用
      console.log("アドオンモジュールを読み込みました");
      return module.default(user);
    })
    .catch((error) => {
      // アドオンモジュールが存在しない場合は標準の振る舞い
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
    });
};

export { Column, AddonFunction, getProductsCsvLayout };
