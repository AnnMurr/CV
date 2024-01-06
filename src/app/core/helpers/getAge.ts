export function getAge(): string {
    const birthDate: Date = new Date("1998-05-30")
    const currentDate: Date = new Date()
    
    const ageInMilliseconds: number = currentDate.getTime() - birthDate.getTime()
    const ageInYears: number = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    
    const age: string = Math.floor(ageInYears).toString()
    
    return age
}