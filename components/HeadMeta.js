import Head from 'next/head';

export default function HeadMeta(props) {
    return (
        <Head>
            <title>{props.title} </title>
            <meta name="title" content={props.content}/>
            <meta property="og:type" content="website" />

        </Head>
    );
}

