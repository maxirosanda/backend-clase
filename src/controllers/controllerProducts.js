let products = []

export const view = async (req,res)=>{

    res.status(200).render('products',{products:products})
  
  }

  export const create = async (req,res)=>{
    let product = req.body
    product.id = Math.floor(Math.random()*10000000000001)
    products.push(product)
    console.log(products)

    res.status(200).redirect("./products")
  
  }  

  export const del = async (req,res) => {
    console.log(req.body.id)
     products = products.filter(element => element.id != req.body.id)
    console.log(products)
    res.status(200).redirect('/products')
  }

  export const update = async (req,res) =>{
    products.forEach(element => {
     
      if (element.id <= 5){
        carro['tamaño'] = "mediano";
      }

     });

    }

 