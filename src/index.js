const messages = [
    "Oscar",
    "Ana",
    "Pepe",
    "Sacha",
    "Rosy",
    "Robert"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}