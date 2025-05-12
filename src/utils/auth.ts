// Simulated role check (replace with actual auth logic, e.g., JWT, localStorage, or API)
export const checkUserRole = (): 'user' | 'guest' => {
  // For demo purposes, assume the user is a guest
  // In a real app, check for a token or user session
  const isLoggedIn = false; // Replace with actual logic
  return isLoggedIn ? 'user' : 'guest';
};