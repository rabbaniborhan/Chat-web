import { config } from "dotenv";
import User from "../models/use.model.js";
import connectDB from "./../lib/db.js";
config();

const seedUsers = [
  {
    fullName: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    password: "securePass456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    fullName: "Michael Johnson",
    email: "michaelj@example.com",
    password: "mikePass789",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    fullName: "Emily Davis",
    email: "emilyd@example.com",
    password: "emilySecret321",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    fullName: "David Brown",
    email: "davidb@example.com",
    password: "browniePass654",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    fullName: "Sarah Wilson",
    email: "sarahw@example.com",
    password: "wilsonPass098",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    fullName: "James Anderson",
    email: "jamesa@example.com",
    password: "anderson007",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    fullName: "Olivia Martinez",
    email: "oliviam@example.com",
    password: "martinezPass123",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    fullName: "William Taylor",
    email: "williamt@example.com",
    password: "taylorPass789",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    fullName: "Sophia Lee",
    email: "sophial@example.com",
    password: "leePass456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const seedDataBas = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("database seeded successfully");
  } catch (error) {
    console.log("error is seed dataBase function", error);
  }
};

seedDataBas();
