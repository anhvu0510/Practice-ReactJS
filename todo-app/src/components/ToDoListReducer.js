import { useReducer, useCallback} from 'react'
import ToDo from './ToDo'
import './ToDo.css'

const UUID = (min, max) => {
  const range = Number(max) - Number(min)
  const random = () => Math.floor(Math.random()  * range)
  return {
    getUUID: random
  }
}
// 1. Init
const { getUUID } = UUID('10000000', '99999999') 
const initState = {
  job: '',
  jobs: []
}
 // 2. Action
const ACTION = {
    ADD_JOB: 'ADD_JOB',
    REMOVE_JOB: 'REMOVE_JOB',
    SET_JOB: 'SET_JOB',
}

 // 3. Reducer
const reducer = (state, action) => {
  let newState = {}
  if(action.type === ACTION.SET_JOB) {
    newState = {
      ...state,
      job: action.value
    }
  }else if(action.type === ACTION.ADD_JOB) {
    const jobName = action.value
    if(!!jobName === false) return state;
    newState = {
     ...state,
      jobs: [...state.jobs , { id: getUUID(), name: jobName}]
    }
  }else if(action.type === ACTION.REMOVE_JOB) {
    newState = {
      ...state,
      jobs: state.jobs.filter(item => item.id !== Number(action.value))
    }
  }else {
    return state;
  }



  // console.log('newState', newState)
  return newState;

}
 // 4. Dispatch
export default function ToDoListReducer() {
  console.log('Re-Render >> ToDoList')
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs} = state;

  const hadlerAddButton = useCallback(() => {
    dispatch({ type: ACTION.ADD_JOB, value: job})
    dispatch({ type: ACTION.SET_JOB, value: ''})
  }, [job])

  const handlerRemove = useCallback((e) => dispatch({ type: ACTION.REMOVE_JOB, value: e.target.value }), [])
  const handlerChangeInput = useCallback(e => dispatch({ type: ACTION.SET_JOB, value: e.target.value }), [])
  

  return (
    <div>
        <h1>TodoAPP (useReducer)</h1>
        <input 
            placeholder='do something ...'
            value={job}
            onChange={handlerChangeInput}
        />
        <button
          onClick={hadlerAddButton}
        >
            Thêm việc
        </button>
        <ul>
            {
              jobs.map(item => <ToDo key={item.id} id= {item.id} name = {item.name} onClickRemove = {handlerRemove} />)
            }
        </ul>
    </div>
  )
}
