import admin from "../utils/firebase_admin/firebase";

export async function sendNotification(registrationToken : string , title : string, body : string ) {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: registrationToken,
  };

  try {
    const response = admin.messaging().send(message);
    return response;
  } catch (error) {
    
  }
}

