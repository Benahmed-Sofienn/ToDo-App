import { DELETETASK, EDITTASK, ADDTASK } from "./ActionsType";

export const editTask = (id, Name, Progress, Description) => {
  return {
    type: EDITTASK,
    payload: { id, Name, Progress, Description },
  };
};

export const addTask = (payload) => {
  return {
    type: ADDTASK,
    payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: DELETETASK,
    payload,
  };
};
