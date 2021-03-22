import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Layout } from '../../components'
import { getAllTeams, getTeamData } from '../../lib/team'
import { Team as TeamType } from '../../types'

const Team = ({ team }: { team: TeamType }) => {
    return (
        <Layout>
            <Head>
                <title>BAGUN | {team.name}</title>
            </Head>
            <Card.Group centered>
                {team.players?.map((player) => (
                    <Card key={player.id}>
                        <Image src={player.picture} />
                        <Card.Content>
                            <Card.Header>
                                <Link href={`/players/${player.slug}`}>
                                    <a>{player.name}</a>
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
        </Layout>
    )
}

export const getStaticPaths = () => {
    return {
        paths: getAllTeams(),
        fallback: false
    }
}

export const getStaticProps = ({ params }) => {
    const data = getTeamData(params.slug)
    return {
        props: {
            team: data
        }
    }
}

export default Team
