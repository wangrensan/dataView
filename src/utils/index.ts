export function openWebsiteByPath(path: string) {
    window.open(location.origin + path);
}

export function tree2map<T extends { [key: string]: any }>(
    array: T[],
    key = 'name',
    children = 'children'
) {
    if (!array) return {};

    const map: { [key: string]: T } = {};
    array.forEach((item) => {
        const value = item[key];
        map[value] = item;

        const childrenList = item[children];
        if (childrenList) {
            const childrenMap = tree2map(childrenList, key, children);
            Object.assign(map, childrenMap);
        }
    });

    return map;
}
export function tree2list<T extends { [key: string]: any }>(
    array: T[],
    key = 'name',
    children = 'children'
) {
    if (!array) return [];

    const list: T[] = [];
    array.forEach((item) => {
        list.push(item);

        const childrenList: T[] = item[children];
        if (childrenList) {
            list.push(...tree2list(childrenList, key, children));
        }
    });

    return list;
}

export function string2color(string: string) {
    let res = '#';
    for (const val of string) {
        res += parseInt(`${val.charCodeAt(0)}`, 10).toString(16);
    }
    return res.slice(0, 7);
}

/**
 * 判断数据是否为空
 * @param value
 * @returns boolean
 */
export function isNothing(value: any) {
    if (!value) {
        return true;
    } else if (Array.isArray(value)) {
        return !value.length;
    } else if (Object.prototype.toString.call(value) == '[object Object]') {
        return !Object.keys(value).length;
    }

    return false;
}

export const getAssetsFile = (url: string) => {
    return new URL(`../assets/${url}`, import.meta.url).href;
};

/**
 * 复制内容到粘贴板
 * @param data 需要复制的内容
 * @param callback 复制成功回调函数
 */
export function copySomething(data: string, callback?: () => void) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', data);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        callback && callback();
    }
    document.body.removeChild(input);
}

/**
 * 随机生成字符串
 */
export function randomString(
    length = 16,
    chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export const downloadByUrl = (data: { name: string; url: string }) => {
    const aLink = document.createElement('a');
    aLink.setAttribute('download', data.name);
    aLink.href = data.url;
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
};
