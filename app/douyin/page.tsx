import { fetchDouYinData } from "@/lib/api";

export default async function Page() {
    const data = await fetchDouYinData();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">🎵 抖音实时热搜榜</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            data.map((item: any) => 
                                <li className="py-3 sm:py-4" key={item.position}>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{item.position}</span>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            <a href={'https://www.douyin.com/search/' + item.word} target="_blank">
                                                {item.word}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </main>
    );
}