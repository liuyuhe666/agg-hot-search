import Link from "next/link";
import { fetchTouTiaoData } from "@/lib/data";

export default async function Page() {
    const data: any[] = await fetchTouTiaoData();
    return (
        <div className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <Link href="https://www.toutiao.com" target="_blank" className="w-3/4 truncate text-center font-bold dark:text-gray-300">
                今日头条热搜排行榜
            </Link>
            <Link href="/" className="text-lg font-bold dark:text-gray-300">{'<-'}</Link>
        </div>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                    data.map(item => {
                        return <li key={item.name} className="py-3 sm:py-4">
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{item.index}</span>
                            <Link href={item.url} target="_blank" className="text-sm font-medium text-gray-900 truncate dark:text-white">{item.name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
    );
}