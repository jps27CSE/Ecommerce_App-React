import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyCbEiu1QyD5g2XLHmOxNuThgLXY7uUbDRI",
    authDomain: "ecommerce-react-81095.firebaseapp.com",
    projectId: "ecommerce-react-81095",
    storageBucket: "ecommerce-react-81095.appspot.com",
    messagingSenderId: "738656088568",
    appId: "1:738656088568:web:f8cc6ca5282635cf1f260d",
    measurementId: "G-PRB0GVVD1N"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//Google Authentication Starts
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const singInWithGoogle = () => auth.signInWithPopup(provider)

//Google Authentication Ends
export default firebase