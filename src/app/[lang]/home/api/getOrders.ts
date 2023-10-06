export const getOrders = async () => {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 100
        }
    })
    const json = await res.json()
    return json
}
