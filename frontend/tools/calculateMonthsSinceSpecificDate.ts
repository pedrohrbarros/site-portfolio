export default function calculateMonthsSinceSpecificDate(month: number, year: number): number{
    const specificDate = new Date(year, month - 1)
    const actualDate = new Date()

    const months = (actualDate.getFullYear() - specificDate.getFullYear()) * 12
    const remainingMonths = actualDate.getMonth() - specificDate.getMonth()

    return months + remainingMonths
}