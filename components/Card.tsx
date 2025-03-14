import Link from "next/link";
import React from "react";

interface cardProps {
    title: string,
    data: any[],
}

const Card: React.FC<cardProps> = ({title, data}) => {
    return (
        <div className="w-full max-w-md p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow dark:bg-gray-800">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
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
    );
};

export default Card;