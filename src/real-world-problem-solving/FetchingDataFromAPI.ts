// 2. Fetching Data from an API
// Problem You need to fetch user data from a REST API and handle the response appropriately.

// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }
  
//   async function fetchUser(userId: number): Promise<User | null> {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const user: User = await response.json();
//       return user;
//     } catch (error) {
//       console.error("Fetch user failed:", error);
//       return null;
//     }
//   }
  
//   fetchUser(1).then((user) => {
//     if (user) {
//       console.log("User:", user);
//     } else {
//       console.log("User not found");
//     }
//   });
  