export function add() {
}


export function createUrl(url: string) {
    if (url.startsWith('/')) {
        url = url.slice(1)
    }
    return new URL(import.meta.env.VITE_BASE_PATH + url, import.meta.url).href
}
