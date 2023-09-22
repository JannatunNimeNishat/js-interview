import { useReducer } from "react"

const initialState = [
  {
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 0
  },
  {
    id: 3,
    value: 0
  },
  {
    id: 4,
    value: 0
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':

      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        } else {
          return {
            ...item,
            value: item.value + 1
          }
        }
      })

    case 'Decrement':
      return state.map(item => {
        if (item.id !== action.id) {
          return item;
        } else {
          return {
            ...item,
            value: item.value - 1
          }
        }
      })

    case 'AddCounter':
      return [
        ...state,
        {
          id: state.length + 1,
          value: 0
        }
      ]


    default:
      break;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        {
          state?.map((item, index) => <div
            key={index}
            className=" w-[250px] h-[100px] shadow-xl border  ">
            <div className="flex">
              <p className="text-4xl font-bold cursor-pointer"
                onClick={() => dispatch({ type: 'Increment', id: index + 1 })}
              >+</p>
              <p className="text-4xl font-bold">{item?.value}</p>
              <p className="text-4xl font-bold cursor-pointer"
                onClick={() => dispatch({ type: 'Decrement', id: index + 1 })}
              >-</p>
            </div>
            <button className="px-5 py-3 border rounded-xl"
              onClick={() => dispatch({ type: 'AddCounter' })}
            >Add more</button>
          </div>
          )
        }
      </div>
    </>
  )
}

export default App
