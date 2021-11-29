// import firebase from "firebase/app";
// import "firebase/firestore";

import firebaseCredentials from "./firebaseCredentials";

// console.log(firebaseCredentials);
// // init firebase
// firebase.initializeApp(firebaseCredentials);
// console.log(2);

// // init firestore service
// const projectFirestore = firebase.firestore();
// console.log(3);

// export { projectFirestore };

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app = initializeApp(firebaseCredentials);
const db = getFirestore(app);

async function getCollectionSnapshot(collectionName) {
  const coll = collection(db, collectionName);
  const snapshot = await getDocs(coll);
  // console.log("snapshot.docs: ");
  // console.log(snapshot.docs);
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

export { db, getCollection, getCollectionSnapshot, getCollectionWithIds };
