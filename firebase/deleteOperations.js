import { doc, deleteDoc } from "firebase/firestore";
import { firestore as db } from "./firebase"; // Adjust the path if necessary

export async function deleteStudentRecord(id) {
  try {
    const docRef = doc(db, "students", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}
export async function deleteTeacherRecord(id) {
  try {
    const docRef = doc(db, "teachers", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document: ", error);
    return false;
  }
}

