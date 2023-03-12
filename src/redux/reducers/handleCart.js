const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    //check if product exist
    const exist = state.find((x) => x.id === product.id )

    switch(action.type){
        case "ADDITEM":
            
            if (exist) {
                //increase quantity
                return state.map((x) => 
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                )
            } else {
                return [
                    ...state, 
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            

            default:
                return state;
                
    }
    
    
}

export default handleCart;