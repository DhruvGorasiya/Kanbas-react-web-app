import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Importing the BsPlus icon
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
    <span className="badge rounded-pill bg-secondary text-dark" style={{ border: '1px solid black' }}>
      40% of Total
    </span>
    <BsPlus className="fs-4 ms-2" />
    <IoEllipsisVertical className="fs-4 ms-2" />
    </div>
  );
}