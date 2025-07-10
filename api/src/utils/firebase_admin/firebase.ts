import admin from "firebase-admin";

import serviceAccount from './firebase_admin_sdk' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export default admin;