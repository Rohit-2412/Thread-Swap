// api.js

const BASE_URL = "http://Components/Login"; // Replace with your backend server URL

// Function to handle user login
export const loginUser = async (email, password, accountType) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, accountType }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Assuming the server responds with a token upon successful login
    } else {
      // Handle failed login
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error.message);
    throw new Error("Login failed. Please check your credentials.");
  }
};
