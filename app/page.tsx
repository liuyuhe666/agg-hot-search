import BiLiCard from "@/components/BiLiCard";
import DouYinCard from "@/components/DouYinCard";
import TouTiaoCard from "@/components/TouTiaoCard";
import WeiBoCard from "@/components/WeiBoCard";
import ZhiHuCard from "@/components/ZhiHuCard";


export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <BiLiCard />
      <DouYinCard />
      <TouTiaoCard />
      <WeiBoCard />
      <ZhiHuCard />
    </main>
  );
}
