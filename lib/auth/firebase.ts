// // lib/firebase.ts
// import { initializeApp, getApps } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// const auth = getAuth(app);

// export { auth };
