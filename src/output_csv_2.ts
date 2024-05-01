import { createObjectCsvWriter } from "csv-writer";
import { Product } from "./products.js";

const outputCsv = (
  products: Product[],
  columns: { id: string; title: string }[]
): void => {
  const csvWriter = createObjectCsvWriter({
    path: "./dist/products.csv",
    header: columns,
  });

  csvWriter.writeRecords(products).then(() => {
    console.log("...CSVを出力しました");
  });
};

export { outputCsv };
