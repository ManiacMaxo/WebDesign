import Head from 'next/head'
import { useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import Layout from '../components/Layout'
import styles from '../styles/Join.module.scss'

const Join = () => {
    const positions = [
        { text: 'Rainbow 6: Siege', value: 'rainbow-6-siege' },
        { text: 'Destiny', value: 'destiny' },
        { text: 'League of Legends', value: 'league-of-legends' },
        { text: 'Valorant', value: 'valorant' },
        { text: 'Content Creator', value: 'content-creator' }
    ]

    const [e, setE] = useState(false)

    const sendForm = (event: any) => {
        setE(!e)

        fetch(process.env.REACT_APP_API_URL + '/join', {
            method: 'POST',
            body: JSON.stringify({}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
    }

    return (
        <Layout>
            <Head>
                <title>BAGUN | Join BAGUN</title>
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta name='og:title' content='BAGUN' />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>

            <Form className={styles.root}>
                <h1 className={styles.heading}>Join BAGUN</h1>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Name'
                        placeholder='Name'
                        required
                    />
                    <Form.Input
                        fluid
                        label='Age'
                        placeholder='Age'
                        type='number'
                        min={1}
                        max={99}
                        required
                    />
                </Form.Group>
                <Form.Field>
                    <label>YouTube link</label>
                    <Input label='http://' placeholder='youtube link' />
                </Form.Field>
                <Form.Select
                    label='Select a position'
                    placeholder='Select a position'
                    options={positions}
                />
                <Form.Checkbox
                    label='I agree to the Terms and Conditions'
                    required
                />
                <Button type='submit' onClick={sendForm} disabled={e}>
                    Submit
                </Button>
            </Form>
        </Layout>
    )
}

export default Join
