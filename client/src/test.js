import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('pDiVJx7M5V6USjeO1B3G').collection('cartItems')
firestore.collection('users/pDiVJx7M5V6USjeO1B3G/cartItems')