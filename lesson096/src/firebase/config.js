import firebaseCredentials from "./firebaseCredentials";
import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
} from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

async function getCollectionSnapshot(collectionName) {
  const coll = collection(db, collectionName);
  const snapshot = await getDocs(coll);
  return snapshot;
}

async function getCollection(collectionName) {
  let snapshot = await getCollectionSnapshot(collectionName);
  const docList = snapshot.docs.map((doc) => doc.data());
  return docList;
}

async function getCollectionWithIds(collectionName) {
  let snapshot = await getCollectionSnapshot(collectionName);
  const docList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docList;
}

async function getDocument(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

async function getDocumentWithId(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw Error("Doc doesn't exists");
  }
}

async function addDocument(collectionName, document) {
  const coll = collection(db, collectionName);
  await setDoc(doc(coll), document);
}

export {
  db,
  getCollection,
  getCollectionSnapshot,
  getCollectionWithIds,
  getDocument,
  getDocumentWithId,
  addDocument,
};
