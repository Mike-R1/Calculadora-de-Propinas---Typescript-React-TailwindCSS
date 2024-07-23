import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import UseOrder from "./hooks/UseOrder"

function App() {

  const { order , addItem , removeItem, tip, setTip, placeOrder} = UseOrder()

  return (
    <>
      <header className=" bg-teal-500 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h1 className=" mx-auto py-10 text-4xl font-black">Menu</h1>
            <div className=" space-y-3">
            {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
            </div>

        </div>

        <div className=" p-5 rounded-lg space-y-10">
          <OrderContents
          order={order}
          removeItem={removeItem}
          />
          
          <TipPercentageForm
          setTip={setTip}
          tip={tip}
          />

          <OrderTotals
            order={order}
            tip={tip}
            placeOrder={placeOrder}
          />
        </div>
       
      </main>
    </>
  )
}

export default App
