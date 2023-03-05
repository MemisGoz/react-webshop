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
            break;

        case "DELETEITEM":

            if (exist.qty === 1){
                return state.filter((x) => x.id !== exist.id)
            } else {
                return state.map((x) => 
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;

            default:
                return state;
                break;
    }
    
    
}

export default handleCart;