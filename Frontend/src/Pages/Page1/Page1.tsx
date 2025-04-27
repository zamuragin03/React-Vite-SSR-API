import { useEffect, useState } from 'react';
import { GetCatFact } from '../../Service/Api';
import { Helmet } from 'react-helmet';



const Page1 = ({ data }) => {
    const [fact, setFact] = useState(data || null)
    useEffect(() => {
        if (!fact) {
            console.log(fact);
            GetCatFact(null, null).then(fact=>setFact(fact))
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>{fact.fact} — продаётся</title>
                <meta name="description" content={`ржач ${fact.fact}, владелец`} />
                <meta property="og:title" content={`${fact.length}— купить сейчас`} />
            </Helmet>

            <div>{fact.fact}</div>
            {[...Array(10).keys()].map((i) => (
                <div key={i}>
                    <img src={`https://picsum.photos/200/300?random=${i}`} alt="random" />
                </div>
            ))}
        </>
    )
}

export default Page1