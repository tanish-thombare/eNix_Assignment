import React from "react";
import { User } from "../types";
import { Card, Tabs, Tab } from "react-bootstrap";

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card className="user-details-card">
      <Card.Header className="bg-secondary text-white">User Details</Card.Header>
      <Card.Body>
        <Tabs defaultActiveKey="profile" className="mb-3">
          {/* Profile Tab */}
          <Tab eventKey="profile" title="Profile">
            {user ? (
              <div>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {user.dateOfBirth}
                </p>
                <p>
                  <strong>Address:</strong> {user.address}
                </p>
              </div>
            ) : (
              <p>Select a user to view details</p>
            )}
          </Tab>

          {/* Contacts Tab */}
          <Tab eventKey="contacts" title="Contacts">
            {user ? (
              <div>
                <p>
                  <strong>Mobile:</strong> {user.mobileNumber}
                </p>
                <p>
                  <strong>Skype ID:</strong> {user.skypeId}
                </p>
                <p>
                  <strong>Email:</strong> {user.emailAddress}
                </p>
              </div>
            ) : (
              <p>Select a user to view contact details</p>
            )}
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
