import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Actions from "./components/ActionPanel";
import { User } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

const users: User[] = [
  {
    id: 1,
    name: "User 1",
    dateOfBirth: "01-01-1990",
    address: "123 Main Street",
    mobileNumber: 1234567890,
    skypeId: "user1_skype",
    emailAddress: "user1@example.com",
  },
  {
    id: 2,
    name: "User 2",
    dateOfBirth: "02-02-1991",
    address: "456 Elm Street",
    mobileNumber: 9876543210,
    skypeId: "user2_skype",
    emailAddress: "user2@example.com",
  },
  {
    id: 3,
    name: "User 3",
    dateOfBirth: "14-08-2001",
    address: "456 Senapati Bapat Road",
    mobileNumber: 9067111980,
    skypeId: "user3_skype",
    emailAddress: "user3@example.com",
  },
];

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  /*useEffect(() => {
    axios
      .get<User[]>("/public/data/user.json") // Access the file in the public folder
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);*/
  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };
  
  return (
    <div className="container">
      {/* Header */}
      <div>
        <h1 className="app-title">User Data Application</h1>
      </div>
      {/* Card Layout */}
      <div className="row w-100">
        {/* User List */}
        <div className="col-lg-3">
          <div className="card user-list-card">
            <UserList users={users} onUserClick={handleUserClick} />
          </div>
        </div>

        {/* User Details */}
        <div className="col-lg-6">
          <div className="card user-details-card">
            <UserDetails user={selectedUser} />
          </div>
        </div>

        {/* Actions */}
        <div className="col-lg-3">
          <div className="card actions-card">
            <Actions selectedUser={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


