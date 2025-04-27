import React from 'react'

type Props = {}
export async function fetchData(_context: any, params: any) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    return { car: await res.json() }
}

const Page2 = (props: Props) => {
    return (
        <div>Page2</div>
    )
}

export default Page2