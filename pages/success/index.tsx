import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout/layout';
export default function Success() {
    return (
        <Layout>
            <Head>
                <title>Заказ оформлен</title>
            </Head>
            <h1>Спасибо! Ваш заказ успешно оформлен</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </Layout>
    );
}