export function add() {
}


export function createUrl(url: string) {
    return new URL(url, new URL('', import.meta.url)).href;
}
