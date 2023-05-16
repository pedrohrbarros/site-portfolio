export default function getYearsAndMonths(months: number): {years: number, months: number} {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return {years, months: remainingMonths};
}