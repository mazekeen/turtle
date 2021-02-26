function arrChunk(arr, size) {
    const result = [];
    let index = 0;
    while (index * size < arr.length) {
        result.push(arr.slice(index * size, (index + 1) * size));
        index++;
    }

    return result;
}

export default arrChunk;
