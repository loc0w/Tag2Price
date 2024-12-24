import '@react-native-firebase/app';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

interface FirebaseConfig {
  auth: typeof auth;
  authInstance: FirebaseAuthTypes.Module;
  firestore: typeof firestore;
  storage: typeof storage;
}

const firebase: FirebaseConfig = {
  auth,
  authInstance: auth(),
  firestore,
  storage,
};

export default firebase;
export { auth, firestore, storage };