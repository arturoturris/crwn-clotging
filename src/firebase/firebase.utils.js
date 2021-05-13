import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyALTnyNwzrYCxFTPyjHNn1QVlGcHhYPqfk",
    authDomain: "crwn-db-e9962.firebaseapp.com",
    projectId: "crwn-db-e9962",
    storageBucket: "crwn-db-e9962.appspot.com",
    messagingSenderId: "983516385369",
    appId: "1:983516385369:web:189a889550b7c763322148",
    measurementId: "G-6LSN6VM5T6"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err){
      console.log('error creating user',err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
