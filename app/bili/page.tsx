import { fetchBiLiData } from "@/lib/data";
import Link from "next/link";
import Card from "@/components/Card";

export default async function Page() {
    const data: any[] = await fetchBiLiData();
    return (
        <div className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 flex flex-col items-center justify-center">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                <Link href="https://www.bilibili.com" target="_blank" className="w-5/6 truncate text-center font-bold dark:text-gray-300">
                    哔哩哔哩热搜排行榜
                </Link>
                <Link href="/" className="text-lg font-bold dark:text-gray-300">{'<-'}</Link>
            </div>
            <Card data={data} />
        </div>
    );
}