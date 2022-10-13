const products = [
    {
        id: '1',
        name: 'Brackets',
        price: '800',
        category: 'Ortodoncia',
        img: 'https://cdn.shopify.com/s/files/1/2233/3995/products/ef655d254ba1934de2d813c5555893b4.jpg?v=1558372682',
        stock: 10,
        description: "Descripcion Brackets"
    },
    {
        id: '2',
        name: 'Ligaduras',
        price: '1200',
        category: 'Ortodoncia',
        img: 'https://i.linio.com/p/339f7d2fa1474b5788fe30304e45902f-product.jpg',
        stock: 100,
        description: "Descripcion Ligaduras"
    },
    {
        id: '3',
        name: 'Arcos',
        price: '700',
        category: 'Ortodoncia',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/262/939/products/3191-203298fbf9521a581b16300930929890-640-0.jpg',
        stock: 80,
        description: "Descripcion Arcos"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}