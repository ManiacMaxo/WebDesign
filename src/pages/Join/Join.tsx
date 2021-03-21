import React, { useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import styles from './Join.module.scss'

interface Props {}

const Join: React.FC<Props> = () => {
    const positions = [
        { text: 'Rainbow 6: Siege', value: 'rainbow-6-siege' },
        { text: 'Destiny', value: 'destiny' },
        { text: 'League of Legends', value: 'league-of-legends' },
        { text: 'Valorant', value: 'valorant' },
        { text: 'Content Creator', value: 'content-creator' }
    ]

    const [e, setE] = useState(false)

    if (e) {
        console.log('e')
    }

    return (
        <Form className={styles.root}>
            <h1>Join BAGUN</h1>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Name' placeholder='Name' required />
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
            <Button type='submit' onClick={() => setE(!e)} disabled={e}>
                Submit
            </Button>
        </Form>
    )
}

export default Join
