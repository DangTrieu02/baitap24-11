import {ProductManager} from "./productManagerment";
import {Product} from "./product";
let honda = new Product('xe may',2000, 100,'honda')
let ninja = new Product('Xe may', 10000,20,'kawasaki')
let lambo = new Product('Aventador',1000111,3,'lambo')
let wawe= new Product('wawe tau`',50,10000,'wawe')


let productManager = new ProductManager()
productManager.add(honda)
productManager.add(ninja)
productManager.add(lambo)

productManager.edit('lambo',wawe)


console.log(productManager.display())
productManager.edit('ninja', wawe)
console.log(productManager.display())
console.log(productManager.findByCompany('honda'))
console.log(productManager.findByName('xe tau`'))
console.log(productManager.sortPriceUp())

