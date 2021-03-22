import Head from 'next/head'
import { getArticleData, getAllArticleIds } from '../../lib/news'
import { Layout, Date } from '../../components'

export const getStaticProps = async ({ params }) => {
    const postData = await getArticleData(params.id)
    return {
        props: {
            postData
        }
    }
}

export const getStaticPaths = async () => {
    const paths = getAllArticleIds()
    return {
        paths,
        fallback: false
    }
}

const Article = ({ article }) => {
    return (
        <Layout>
            <Head>
                <title>BAGUN | {article.title}</title>
            </Head>
            <article>
                <h1>{article.title}</h1>
                <div>
                    <Date dateString={article.date} />
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />
            </article>
        </Layout>
    )
}

export default Article
