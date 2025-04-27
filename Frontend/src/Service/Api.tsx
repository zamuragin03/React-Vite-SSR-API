export async function GetCatFact(_context: any, params: any) {
    const res = await fetch(`https://catfact.ninja/fact`)
    return await res.json()
}
export async function FetchProducts(_context: any, params: any) {
    const res = await fetch(`https://fakestoreapi.com/products`)
    return await res.json()
}

export async function FetchProduct(_context: any, params: any) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    return await res.json()
}