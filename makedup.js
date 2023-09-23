import { CSV } from "https://js.sabae.cc/CSV.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const list = await CSV.fetchJSON("./haiku_masaoka_shiki.csv");
const dup = ArrayUtil.toDuplicated(list, d => d.俳句);
await writeData("haiku_masaoka_shiki_dup", dup);
