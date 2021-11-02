let products = []

export const view = (req,res)=>{

    res.status(200).render('products',{products:products})
  
  }

  export const create = (req,res)=>{
    let product = req.body
    product.id = Math.floor(Math.random()*10000000000001)
    products.push(product)
    console.log(products)

    res.status(200).redirect("./products")
  
  }  

  export const del = (req,res) => {
     products = products.filter(element => element.id != req.body.id)
 
    res.status(200).redirect('/products')
  }

  export const update =  (req,res) =>{
   
  res.status(200).redirect('/products')

    }

 