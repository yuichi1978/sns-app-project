import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../SessionProvider";

export function Profile() {
  const { currentUser } = useContext(SessionContext);
  console.log(currentUser);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#34D399] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">SNS APP</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={handleHome}
              className="text-white hover:text-red-600"
            >
              Home
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4 mt-5 rounded-lg shadow-md bg-white flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <p>
          <strong>Name :</strong> {currentUser.userName}
        </p>
        <p>
          <strong>Email :</strong> {currentUser.email}
        </p>
      </div>
    </div>
  );
}
