// // lib/useUser.ts
// import { useEffect, useState } from 'react';
// import { auth } from '../../saas-starter/lib/auth/firebase';
// import { onAuthStateChanged, User } from 'firebase/auth';

// export default function useUser() {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     return onAuthStateChanged(auth, setUser);
//   }, []);

//   return user;
// }
