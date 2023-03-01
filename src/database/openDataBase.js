import Realm from "realm";
import TaskSchema from "./schema";

const realm = await Realm.open({
  path: "realm-files/myrealm",
  schema: [TaskSchema],
});

export default realm;
