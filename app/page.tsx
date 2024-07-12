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
    <main className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <Card title="📺 哔哩哔哩" url="/bili" data={biliData} />
          <Card title="🎵 抖音" url="/douyin" data={douyinData} />
          <Card title="📰 头条" url="/toutiao" data={toutiaoData} />
          <Card title="🦊 微博" url="/weibo" data={weiboData} />
          <Card title="❓ 知乎" url="/zhihu" data={zhihuData} />
        </div>
      </div>
    </main>
  );
}
