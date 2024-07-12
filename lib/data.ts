// 所有数据均来自官方，确保稳定与实时。代码开源地址: https://github.com/vikiboss/60s
const API_URL = 'https://60s.viki.moe';

export async function fetchBiLiData() {
    const res = await fetch(`${API_URL}/bili`, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    const data: any[] = json.data;
    return data.map(v => {
        return {
            index: v.position,
            name: v.show_name,
            url: `https://search.bilibili.com/all?keyword=${v.keyword}`
        }
    });
}

export async function fetchWeiBoData() {
    const res = await fetch(`${API_URL}/weibo`, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    const data: any[] = json.data;
    return data.map((v, i) => {
        return {
            index: i + 1,
            name: v.word,
            url: `https://s.weibo.com/weibo?q=${v.word}`
        }
    });
}

export async function fetchZhiHuData() {
    const res = await fetch(`${API_URL}/zhihu`, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    const data: any[] = json.data;
    return data.map((v, i) => {
        return {
            index: i + 1,
            name: v.display_query,
            url: `https://www.zhihu.com/search?q=${v.query}`
        }
    });
}

export async function fetchTouTiaoData() {
    const res = await fetch(`${API_URL}/toutiao`, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    const data: any[] = json.data;
    return data.map((v, i) => {
        return {
            index: i + 1,
            name: v.word,
            url: `https://www.toutiao.com/trending/${v.id}`
        }
    });
}

export async function fetchDouYinData() {
    const res = await fetch(`${API_URL}/douyin`, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    const data: any[] = json.data;
    return data.map(v => {
        return {
            index: v.position,
            name: v.word,
            url: `https://www.douyin.com/search/${v.word}`
        }
    });
}