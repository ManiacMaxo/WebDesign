export const getAllTeams = () => {
    const games = [
        'destiny',
        'rainbow-6-siege',
        'valorant',
        'league-of-legends'
    ]

    return games.map((game) => {
        return {
            params: {
                slug: game
            }
        }
    })
}

export const getTeamData = (slug: string) => {
    const players = [
        {
            id: 1,
            picture: 'https://storage.gorchilov.net/images/maniac.webp',
            name: 'Name',
            country: 'Country',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis, hic aspernatur eos fugit optio expedita voluptates nemo quisquam, impedit officia eum officiis laudantium, quaerat doloribus iste itaque magni amet?',
            game: 'Rainbow 6: Siege',
            age: 16,
            slug: 'name',
            position: 'flex'
        }
    ]

    return {
        name: slug,
        players
    }
}
