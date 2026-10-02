const handleAddProduct = (event) => {
    event.preventDefault();
    const productName = event.target.productName;
    const obj = {
        name: productName.value
    }
    axios.post('http://localhost:4000'+'/api/products', obj)
        .then((response) => {
            console.log("Value returned from post "+response.data.value);
        })
}