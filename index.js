let validNumbers = [34, 20, 46, 32, 24, 26, 25, 36, 31, 32, 24, 49, 10, 30, 20, 37, 10, 17, 17, 10,
    29, 10, 44, 10, 10, 10, 10, 10, 10, 10, 47, 44, 28, 27, 37, 10, 10, 10, 21, 48,
    37, 10, 10]

function generateNumber() {
    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    return validNumbers[randomIndex]
}

module.exports = generateNumber