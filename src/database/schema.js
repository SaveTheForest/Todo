const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    desc: "string",
    date: "string",
    status: "string",
  },
  primaryKey: "_id",
};

export default TaskSchema;
