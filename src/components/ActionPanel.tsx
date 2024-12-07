import React from "react";
import { Card, Button } from "react-bootstrap";
import { User } from "../types";

interface ActionsProps {
  selectedUser: User | null;
}

const Actions: React.FC<ActionsProps> = ({ selectedUser }) => {
  return (
    <Card>
      <Card.Header className="bg-danger text-white">Actions</Card.Header>
      <Card.Body>
        <Button variant="success" className="mb-2 w-100">
          Add User
        </Button>
        <Button
          variant="primary"
          className="mb-2 w-100"
          disabled={!selectedUser}
        >
          Edit
        </Button>
        <Button variant="danger" className="w-100" disabled={!selectedUser}>
          Delete User
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Actions;
