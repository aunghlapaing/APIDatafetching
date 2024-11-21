let table = document.getElementById ('tableData');

let dataFetching = async () => {
    var temp = "";
    try {
      let dataFetch = await fetch ("https://fakestoreapi.com/products") //fetch data from API link
    products = await dataFetch.json();
    products.forEach(element => {
        temp += `
        <tbody>
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.description}</td>
                <td><img style="width:20px; heigh:20px" src="${element.image}"></img></td>
                <td>${element.price}</td>
            </tr>
        </tbody>
        `
        table.innerHTML = `

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        `+temp;
        console.log(products);
    });
    }catch (e){
      console.log(`Error ==> ${e}`);
    
    }
    
    // dataFetching();
}