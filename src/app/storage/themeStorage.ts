export class ThemeStore {
    static setStorage(value: string): void {
        localStorage.setItem('theme', value)
    }

    static getStorage(): string | null {
        return localStorage.getItem('theme')
    }
}