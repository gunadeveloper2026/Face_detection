export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">

      <img
        src={user.image_path}
        alt={user.name}
        className="w-full h-48 object-cover rounded"
      />

      <div className="mt-4">
        <h2 className="text-xl font-bold">
          {user.name}
        </h2>

        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}