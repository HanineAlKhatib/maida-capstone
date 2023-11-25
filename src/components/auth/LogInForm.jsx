import { useState } from "react";
import PrimaryButton from "../reusables/PrimaryButton";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // API call logic
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      // endpoint changed to /login
      method: "POST", // method changed to POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // assuming your API expects an email instead of a username
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Response from server:", data);
      // Handle successful login here (e.g., redirect to dashboard or store tokens)
    } else {
      // Handle errors here (e.g., show error message to the user)
      console.error("Login failed:", response.statusText);
    }
  };

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <div className="m-auto max-w-lg w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg shadow-zinc-300">
          <h2 className="text-3xl font-inter mb-6 text-gray-700 text-center">
            Log In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                id="username"
                type="text"
                name="username"
                className="w-full p-2 font-inter border border-gray-200 rounded-md focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-300"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                id="password"
                type="password"
                name="password"
                className="w-full p-2 font-inter border border-gray-200 rounded-md focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <PrimaryButton>Log In</PrimaryButton>
            </div>
          </form>
          <div className="text-center font-inter text-gray-700">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-primary font-inter hover:underline"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
