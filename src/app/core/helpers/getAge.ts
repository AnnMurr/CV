export function getAge(): string {
    const year: Date = new Date
    let age: string = (year.getFullYear() - 1998).toString()
    
    return age
}