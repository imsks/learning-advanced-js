class Car {
    name = "BMW";
    color = "red";
    count = 0

    increment() {
        this.count++
        return this
    }

    decrement() {
        this.count--
        return this
    }

    getCount() {
        console.log(this.count)
        return this
    }
}

const car = new Car()

car.increment().getCount().increment().increment().getCount().decrement().getCount()