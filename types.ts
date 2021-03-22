export interface Player {
    id: number
    name: string
    game: string
    position: string
    description: string
    picture: string
    country: string
    age: number
    slug: string
}

export interface Team {
    name: string
    slug: string
    players: Player[]
}
