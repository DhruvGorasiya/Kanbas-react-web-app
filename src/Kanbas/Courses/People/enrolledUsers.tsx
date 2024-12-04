import { useState, useEffect, useId } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as client1 from "../client";
import * as client from "../../Account/client";
import { FaPlus } from "react-icons/fa";
export default function EnrolledUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const {cid} = useParams();

  const enrolledUsers = async () => { 
    if (cid) {
      const users = await client1.findUsersForCourse(cid);
      setUsers(users);
    }
   };

  useEffect(() => {
    console.log("course id",cid);
    enrolledUsers();
  }, [cid]);
  
  return (
    <div>
      <h3>Users</h3>
      <PeopleTable users={users} />
    </div>
  );
}
