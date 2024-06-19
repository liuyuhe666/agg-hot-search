import BiLiCard from "@/components/BiLiCard";
import DouYinCard from "@/components/DouYinCard";
import TouTiaoCard from "@/components/TouTiaoCard";
import WeiBoCard from "@/components/WeiBoCard";
import ZhiHuCard from "@/components/ZhiHuCard";


export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-center mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
      <BiLiCard />
      <DouYinCard />
      <TouTiaoCard />
      <WeiBoCard />
      {/* <ZhiHuCard /> */}
    </main>
  );
}
