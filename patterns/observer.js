class NewsAgency {
    constructor() {
        this.subscribers = []
    }

    subscribe(reader) {
        this.subscribers.push(reader)
        console.log(`${reader.name} Subscribed.`)
    }

    unsubscribe(reader) {
        this.subscribers = this.subscribers.filter(
            (subscriber) => subscriber !== reader
        )

        console.log(`${reader.name} Unsubscribed.`)
    }

    publish(article) {
        console.log(`${article} Published.`)
        this.subscribers.forEach((subscriber) => subscriber.update(article))
    }
}

class Reader {
    constructor(name) {
        this.name = name
    }

    update(article) {
        console.log(`${this.name} received the latest news ${article}`)
    }
}

const newsAgency = new NewsAgency()

const reader1 = new Reader("Sachin")
const reader2 = new Reader("John")

newsAgency.subscribe(reader1)
newsAgency.subscribe(reader2)

newsAgency.publish("Article 1")

newsAgency.unsubscribe(reader1)
newsAgency.publish("Article 2")
