import { useEffect, useCallback } from "react";
import "./App.css";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebase";


function useFCM() {
  const requestPermission = useCallback(async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      try {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_CLOUD_MESSAGING_KEY,
        });
        if (token) {
          console.log("token", token);
          return token;
        } else {
          console.log("no token");
        }
      } catch (error) {
        console.error("Error getting token:", error);
      }
    }
    return null;
  }, []);

  const setupMessageListener = useCallback((callback) => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Foreground message received:", payload);
      callback(payload);
    });
    return unsubscribe;
  }, []);

  return { requestPermission, setupMessageListener };
}

function App() {
  const { requestPermission, setupMessageListener } = useFCM();

  const handleMessage = useCallback((payload) => {
    console.log("Message handled:", payload);
    
    // Handle the message
    if (payload.notification) {
      // Show browser notification
      new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
      });
    }
  }, []);

  useEffect(() => {
    requestPermission();
    
    // Set up message listener
    const unsubscribe = setupMessageListener(handleMessage);
    
    return () => {
      unsubscribe();
    };
  }, [requestPermission, setupMessageListener, handleMessage]);

  return <></>;
}

export default App;