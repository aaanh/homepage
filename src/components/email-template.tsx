import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  sender: string; // email
  subject: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  sender,
  body,
  subject
}) => (
  <div>
    <h1>{subject}</h1>
    <h2>Message from {firstName} {`<${sender}>`}</h2>
    <p>{body}</p>
  </div>
);