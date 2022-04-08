import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCfhHz5G3GjB-Az5vGrIEFIF5k3FjmSiQs',
    authDomain: 'tech-geeks-95c99.firebaseapp.com',
    projectId: 'tech-geeks-95c99',
    storageBucket: 'tech-geeks-95c99.appspot.com',
    messagingSenderId: '1000155264790',
    appId: '1:1000155264790:web:52cacf5042fe74f6428237',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default app
