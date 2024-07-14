import Link from "next/link";
import React from "react";

interface cardProps {
    title?: string,
    url?: string,
    data: any[],
}

const Card: React.FC<cardProps> = ({title, url, data}) => {
    return (
        <div className="w-full max-w-md p-4 m-4">
            {
                title && <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
                <Link href={url || ''} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    更多
                </Link>
            </div>
            }
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        data.map(item => {
                            return <li key={item.name} className="py-3 sm:py-4">
                                <span className="inline-block w-8 text-center bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{item.index}</span>
                                <Link href={item.url} target="_blank" className="text-sm font-medium text-gray-900 truncate dark:text-white">{item.name}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Card;