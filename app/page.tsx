import Card from "@/components/Card";
import { 
  fetchBiLiData, 
  fetchDouYinData, 
  fetchTouTiaoData, 
  fetchWeiBoData, 
  fetchZhiHuData 
} from "@/lib/data";

export default async function Home() {
  const biliData: any[] = (await fetchBiLiData()).slice(0, 10);
  const douyinData: any[] = (await fetchDouYinData()).slice(0, 10);
  const toutiaoData: any[] = (await fetchTouTiaoData()).slice(0, 10);
  const weiboData: any[] = (await fetchWeiBoData()).slice(0, 10);
  const zhihuData: any[] = (await fetchZhiHuData()).slice(0, 10);

  return (
    <main className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card title="哔哩哔哩" data={biliData} />
      <Card title="抖音" data={douyinData} />
      <Card title="今日头条" data={toutiaoData} />
      <Card title="微博" data={weiboData} />
      <Card title="知乎" data={zhihuData} />
    </main>
  );
}
