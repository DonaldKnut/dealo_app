import React from "react";
import Link from "next/link";
import "./page.css";
import { FaArrowLeft } from "react-icons/fa";

type Props = {};

interface Message {
  id: number;
  buyer: string;
  message: string;
  date: string;
}

const Page: React.FC<Props> = (props) => {
  const currentUser = {
    id: 1,
    username: "Mogbojuri",
    isSeller: true,
  };

  const messages: Message[] = [
    {
      id: 1,
      buyer: "John Doe",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatis voluptatibus nam",
      date: "1 day ago",
    },
    {
      id: 2,
      buyer: "Jane Smith",
      message: "Another message here...",
      date: "2 days ago",
    },
    {
      id: 3,
      buyer: "Lucas Thaddeus",
      message: "why do you have to do the logo upside down",
      date: "2 days ago",
    },
    {
      id: 4,
      buyer: "Mike Bond",
      message: "i just paid you.",
      date: "8 days ago",
    },
    // Add more messages for the current user
  ];

  return (
    <div className="my-gigs">
      <div className="my-gig_container">
        <div className="gig-container_title">
          <div className="my-gig_wrapper">
            <h1 className="message_text">Messages</h1>
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {messages.map((message) => (
              <tr className="table-tr active" key={message.id}>
                <td>{message.buyer}</td>
                <td>
                  <Link href={`/messages/${message.id}`}>
                    {message.message.substring(0, 20)}...
                  </Link>
                </td>
                <td>{message.date}</td>
                <td>123</td>
                <td className="td-text">
                  <button className="message-btn">Mark as Read</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
