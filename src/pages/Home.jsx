import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Button from "../components/atoms/Button";


const Home = () => {
  const users = [
    {id: 1, name: 'John Doe', email: 'johndoe32@gmail.com'},
     {id: 2, name: 'Jane Smith', email: 'janesmitht31@gmail.com'}
  ];

  return (
    <PageLayout title='User List'>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">All Users</h2>
          <Link to='/create'>
          <Button>Add New User</Button>
          </Link>
        </div>

        <div className="space-y-3">
          {users.map(user => (
            <div key={user.id} className="flex justify-between items-center p-3 border rounded">
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-600">{user.email}</div>
              </div>
              <Link to={`/edit/${user.id}`}>
              <Button variant="secondary">Edit</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );

}

export default Home;