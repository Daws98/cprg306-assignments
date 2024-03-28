import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const getItems = async (userId) => {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const snapshot = await getDocs(itemsCollection);
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
};

export const addItem = async (userId, item) => {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
    await deleteDoc(doc(db, `users/${userId}/items/${itemId}`));
};