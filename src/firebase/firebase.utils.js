import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD8ZNqcdwdL4tg9K9czImnB4lSxdjvIoDM",
    authDomain: "crwn-db-7406e.firebaseapp.com",
    databaseURL: "https://crwn-db-7406e.firebaseio.com",
    projectId: "crwn-db-7406e",
    storageBucket: "crwn-db-7406e.appspot.com",
    messagingSenderId: "902534477564",
    appId: "1:902534477564:web:4f0a8f6dd632795dbc8979",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("Error while creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
