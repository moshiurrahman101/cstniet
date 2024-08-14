import { doc, deleteDoc } from "firebase/firestore";
import { firestore as db } from "./firebase"; // Adjust the path if necessary

async function deleteStudentRecord(id) {
  try {
    const docRef = doc(db, "students", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

export default deleteStudentRecord;