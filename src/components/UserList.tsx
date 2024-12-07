import React from "react";
import { User } from "../types";
import { Card, ListGroup } from "react-bootstrap";

interface UserListProps {
  users: User[];
  onUserClick: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
  return (
    <Card>
      <Card.Header className="bg-primary text-white">User List</Card.Header>
      <ListGroup variant="flush">
        {users.map((user) => (
          <ListGroup.Item
            key={user.id}
            action
            onClick={() => onUserClick(user)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default UserList;
