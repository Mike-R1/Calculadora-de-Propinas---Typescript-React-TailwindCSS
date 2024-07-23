import { MenuItem, OrderItem } from "../types"

export type OrderContentsProps={
    order: OrderItem[],
    removeItem: (id : MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
        <h2 className=" mx-auto py-10 text-4xl font-black">Consumo</h2>

        <div className=" space-y-3 mt-5">
            {order.length === 0 ? 
            <p className=" text-center"> Carrito vacio</p> 
                                                
            :   (
                    order.map(item => (
                        <div key={item.id}
                        className="flex justify-between border-t border-gray-500 py-5"
                        > 
                        <div>
                            <p className=" text-lg font-black">
                                {item.name} - ${item.price}
                            </p>
                            <p className=" font-black">
                                Cantidad: {item.quantity} - ${item.price * item.quantity}

                            </p>
                        </div>  
                            <button className=" bg-red-600 h-8 w-8 rounded-full text-white"
                            onClick={() => removeItem(item.id)}>
                                X
                            </button>
                              
                        </div>
                        
                    ))
                )
            }

        </div>
    </div>
  )
}
