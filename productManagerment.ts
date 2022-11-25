import {Product} from "./product";
export class ProductManager {
    listProduct: Product[] = [];

    add(t: Product): void {
        this.listProduct.push(t);
    }

    findByName(name: string): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (name === this.listProduct[i].name) {
                return i;
            }
        }
        return -1;
    }

    edit(name: string, t: Product): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct[index] = t;
        }
    }

    remove(name: string): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct.splice(index, 1);
        }
    }

    findByNameClose(arr: Product[], t: string) {
        return this.listProduct.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    findByRangeAmount(low: number, high: number) {
        let arr = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].price > low && this.listProduct[i].price < high) {
                arr.push(this.listProduct[i])
            }
        }
        return arr;
    }

    sortPriceUp() {
        return this.listProduct.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    sortPriceDown() {
        return this.listProduct.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    sortAmountDown() {
        return this.listProduct.sort(function (a, b) {
            return b.amount - a.amount;
        });
    }

    findByCompany(company: string) {
        let list = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].company === company) {
                list.push(this.listProduct[i])
            }
        }
        return list
    }

    display() {
        return this.listProduct;
    }
}