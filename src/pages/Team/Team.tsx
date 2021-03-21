import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import { Player } from '../../types'

interface Props {}

const Team: React.FC<Props> = () => {
    const location = useLocation()

    const [players, setPlayers] = useState<Player[] | null>([
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
    ])

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + location.pathname)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
                return null
            })
            .then((data: Player[] | null) => {
                setPlayers(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <Card.Group centered>
            {players?.map((player) => (
                <Card key={player.id}>
                    <Image src={player.picture} />
                    <Card.Content>
                        <Card.Header>
                            <Link to={`/players/${player.slug}`}>
                                {player.name}
                            </Link>
                        </Card.Header>
                        <Card.Meta
                            content={`${player.game} - ${player.position}`}
                        />
                        <Card.Description content={player.description} />
                    </Card.Content>
                    <Card.Content
                        extra
                        content={`${player.age}, ${player.country}`}
                    />
                </Card>
            ))}
        </Card.Group>
    )
}

export default Team
