function calculateArea(radius) {
    if (typeof radius !== 'number' || radius < 0) {
        throw new Error('Radius must be a non-negative number.');
    }

    const area = Math.PI * Math.pow(radius, 2);
    return area;
}
console.log(calculateArea(5));