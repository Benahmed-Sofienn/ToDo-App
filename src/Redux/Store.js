import { createStore } from 'redux'
import TaskReducer from './Reducers/TaskReducer'

const store = createStore(TaskReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store