function greet(name) {
    if(name === null) return `Hello there!`;

    if (name === name.toUpperCase){
        return `HELLO ${name}!`;
    }

    if(typeof name === typeof []){
        let names = '';
        name.forEach(element => {
            names += ', ' + element;
        });
        return `Hello ${names}`
        }

    return `Hello, ${name}`;
}