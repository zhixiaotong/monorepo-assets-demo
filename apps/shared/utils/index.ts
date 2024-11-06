export function add() {
}


export function createUrl(url: string) {
    return new URL(url, import.meta.url).href
}
