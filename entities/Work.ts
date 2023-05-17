export type Role = {
    name: string
    timeInMonths: number
    description: string
}

export type Work = {
    workplace: string
    roles: Role[]
}