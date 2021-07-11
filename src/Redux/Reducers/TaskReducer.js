import { DELETETASK, EDITTASK, ADDTASK } from "../Actions/ActionsType";

const initState = {
  TaskList: [
    {
      id: Math.random(),
      Name: "Learn HTML",
      Progress: 80,
      Description: `Learn HTML and its features `,
    },
    {
      id: Math.random(),
      Name: "Learn CSS",
      Progress: 30,
      Description: `Learn Cascading Style Sheets and its features `,
    },
    {
      id: Math.random(),
      Name: "Learn JS",
      Progress: 100,
      Description: `Learn JavaScript and its features `,
    },
    {
      id: Math.random(),
      Name: "Learn React",
      Progress: 40,
      Description: `Learn React and its features `,
    },
  ],
};

const CounterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case EDITTASK:
      return {
        ...state,
        listTasks: state.TaskList.map((task) =>
          task.id === payload.id
            ? ((task.Name = payload.Name),
              (task.Description = payload.Description),
              (task.Progress = payload.Progress))
            : task
        ),
      };

    case DELETETASK:
      return {
        ...state,
        TaskList: state.TaskList.filter((el) => el.id !== payload),
      };

    case ADDTASK:
      return { ...state, TaskList: [...state.TaskList, payload] };

    default:
      return state;
  }
};

export default CounterReducer;
