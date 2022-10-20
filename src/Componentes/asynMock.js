const products = [
    {
        id: '1',
        name: 'Brackets 0.22 Roth',
        price: '800',
        category: 'brackets',
        img: 'https://cdn.shopify.com/s/files/1/2233/3995/products/ef655d254ba1934de2d813c5555893b4.jpg?v=1558372682',
        stock: 20,
        description: "Brackets metalicos 0.22, para tecnica 'Roth'"
    },
    {
        id: '2',
        name: 'Brackets 0.22 MBT',
        price: '1000',
        category: 'brackets',
        img: 'https://cdn.shopify.com/s/files/1/0508/8405/1136/products/QF-0224_a.jpg?v=1629412258',
        stock: 15,
        description: "Brackets metalicos 0.22, para tecnica 'MBT'"
    },
    {
        id: '3',
        name: 'Tubos x4 0.22 Roth',
        price: '400',
        category: 'brackets',
        img: 'https://http2.mlstatic.com/D_NQ_NP_612735-MLA49925380197_052022-O.jpg',
        stock: 70,
        description: "Tubos metalicos para tecnica Roth, para medidas 16, 26, 36 y 46"
    },
    {
        id: '4',
        name: 'Ligaduras Surtidas',
        price: '1200',
        category: 'ligaduras',
        img: 'https://i.linio.com/p/339f7d2fa1474b5788fe30304e45902f-product.jpg',
        stock: 200,
        description: "Ligaduras de colores surtidos para ortodoncia"
    },
    {
        id: '5',
        name: 'Ligaduras Grises',
        price: '1000',
        category: 'ligaduras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_855334-MLA49132736138_022022-V.jpg',
        stock: 100,
        description: "Ligaduras de color gris metalico para ortodoncia"
    },
    {
        id: '6',
        name: 'Ligaduras Transparentes',
        price: '1000',
        category: 'ligaduras',
        img: 'https://http2.mlstatic.com/D_NQ_NP_662439-MLA49503742970_032022-V.jpg',
        stock: 100,
        description: "Ligaduras de color gris metalico para ortodoncia"
    },
    {
        id: '7',
        name: 'Arcos SuperElastic',
        price: '700',
        category: 'arcos',
        img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/262/939/products/3191-203298fbf9521a581b16300930929890-640-0.jpg',
        stock: 80,
        description: "Arcos para ortodoncia de aleacion Niquel-Titanio"
    },
    {
        id: '8',
        name: 'Arcos Acero',
        price: '500',
        category: 'arcos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_671738-MLA48171166437_112021-O.webp',
        stock: 60,
        description: "Arcos para ortodoncia de Acero"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
  }
