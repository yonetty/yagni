import { createObjectCsvWriter } from "csv-writer";
import { Product } from "./products.js";

const outputCsv = (products: Product[]): void => {
  const csvWriter = createObjectCsvWriter({
    path: "./dist/products.csv",
    header: [
      { id: "productCode", title: "商品コード" },
      { id: "productName", title: "商品名" },
      { id: "price", title: "単価" },
      { id: "category", title: "カテゴリー" },
      { id: "notes", title: "備考" },
    ],
  });

  csvWriter.writeRecords(products).then(() => {
    console.log("...CSVを出力しました");
  });
};

export { outputCsv };
