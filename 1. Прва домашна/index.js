function applyDiscount(productArray, discountPercentage, productId){
    if (productArray.length === 0){
        return []
    }

    
    if (productId != undefined){
        let product = productArray.find(product => productId === product.id)
        if(!product){
            return "Error: Product not found"
        }
            product.price -= (product.price * discountPercentage) / 100
            return product
    }
 
    let clearedProductArray = productArray.map(product => {
        if (product.price > 100) {
            product.price -= (product.price * discountPercentage) / 100
        }
        return product
    })
        return clearedProductArray
}

const products = [
    { id: 1, name: "Product A", price: 150 },
    { id: 2, name: "Product B", price: 90 },
    { id: 3, name: "Product C", price: 120 },
    { id: 4, name: "Product D", price: 80 },
    { id: 5, name: "Product E", price: 200 }
]

console.log(applyDiscount(products, 10, 1))
console.log(applyDiscount(products, 10))