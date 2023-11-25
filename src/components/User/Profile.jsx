import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    birthday: "1990-01-01",
    // Other user details...
  };

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <div className="m-auto max-w-lg w-full">
        <div className="bg-white py-8 px-8 m-4 rounded-xl shadow-lg shadow-zinc-300">
          <h2 className="text-4xl font-edu-tas mb-6 text-gray-700 font-semibold">
            Account
          </h2>
          <hr className="mb-10"></hr>
          <h3 className="text-left text-3xl font-edu-tas text-gray-700 font-semibold">
            Profile
          </h3>
          <br></br>
          {/* Container for username title and username */}
          <div className="flex flex-col">
            <div>
              <div className="text-xl text-primary text-left">Username</div>
              <div className="text-xl text-left">{user.name}</div>
            </div>
            <div className="my-8">
              <div className="text-xl text-primary text-left">Email</div>
              <div className="text-xl text-left">{user.email}</div>
            </div>
            <div>
              <div className="text-xl text-primary  text-left">
                Date of birth
              </div>
              <div className="text-xl text-left">{user.birthday}</div>
            </div>
          </div>
          <br></br>
          <hr className="mb-10"></hr>
          <div className="text-left text-3xl font-edu-tas text-gray-700 font-semibold">
            Application
          </div>
          <br></br>
          <div className="text-left font-edu-tas text-gray-700 text-2xl">
            Ready to start cooking? We'll need some information about your home
            restaurant first.
          </div>
          <button
            onClick={() => navigate("/apply-chef")}
            className="text-xl px-6 py-2 border border-transparent font-medium rounded-md text-white bg-primary hover:bg-opacity-75 mt-8"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
