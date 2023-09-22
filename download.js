import { CSV } from "https://js.sabae.cc/CSV.js";
import { writeData } from "https://js.sabae.cc/writeData.js";

const urls = [
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/haru.csv",
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/natsu.csv",
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/aki.csv",
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/huyu.csv",
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/sinsyun.csv",
  "https://www.city.matsuyama.ehime.jp/shisei/opendata/metadata/shikihaiku.files/zatsu.csv",
];

const list = [];
for (const url of urls) {
  const d = await CSV.fetchJSON(url);
  console.log(d);
  d.forEach(d => list.push(d));
}
await writeData("haiku_masaoka_shiki", list);
