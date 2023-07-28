let product = [
    {category:"Tshirt",price:400, sku:"ABC", qty:5},
    {category:"Shirt",price:700, sku:"ABC1", qty:1},
    {category:"Shirt",price:800, sku:"ABC2", qty:52},
    {category:"Trouser",price:1200, sku:"ABC3", qty:75},
    {category:"Trouser",price:3200, sku:"ABC4", qty:32},
    {category:"Trouser",price:1200, sku:"ABC5", qty:0},
    {category:"Jeaans",price:2400, sku:"ABC6", qty:12},
    {category:"Jeaans",price:2000, sku:"ABC7", qty:0}
    ]
    
    // function getName(){
    //     let arr = [];
    //     for(let i=0;i<product.length;i++){
    //         let data = product[i].qty
    //         arr.push(data)
    //     }
    //     for(let j=0;j<arr.length-1;j++){
    //         if(arr[j]>arr[j+1]){
    //             let temp = arr[j];
    //             arr[j]=arr[j+1];
    //             arr[j+1]=temp
    //             j = -1
    //         }
    //     }
    //     return arr[arr.length-1]
    // }

    // let res = getName()
    // console.log(res)

    function findDuplicateWithPrice(){
        // console.log(product)
        let findDub = {}
        let element = []
        for(let item of product){
            const price = item.price  // 400,700,800
            if(findDub[price]===undefined){
                findDub[price]=1
            }else{
                findDub[price]++;
                if(findDub[price]===2){
                    element.push(item)
                }
            }
        }
        return element
    }

    console.log(findDuplicateWithPrice())