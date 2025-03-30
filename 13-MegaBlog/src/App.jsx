import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.error("Auth error:", error.message)) // Debugging
      .finally(() => setLoading(false)); 
  }, [dispatch]);

  return loading ? ( 
    <div className="flex justify-center dark:bg-gray-500 items-center min-h-screen">
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  ) : (
    <div className="flex flex-col  dark:bg-gray-500 min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {/* <Outlet /> ✅ Enable routing */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
