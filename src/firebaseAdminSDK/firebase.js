import { getFirestore } from "firebase-admin/firestore";
import "server-only";

export const fetchCars = async () => {
  const firestore = getFirestore();
  const carSnapshot = await firestore.collection("cars").get();
  const documents = carSnapshot.docs.map((item) => ({
    id: item.id,
    brand: item.data().brand,
    model: item.data().model,
    type: item.data().type,
    color: item.data().color,
    year: item.data().year,
    price: item.data().price,
  }));

  return documents;
};
