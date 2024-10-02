import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { RiInbox2Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account{" "}
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </Link>


      <Link
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </Link>


      <Link
        to="/Kanbas/Calender"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <SlCalender className="fs-1 text-danger" />

        Calender{" "}
      </Link>

      <Link
        to="/Kanbas/Inbox"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <RiInbox2Fill className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </Link>

      <Link
        to="/Labs"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <IoSettingsOutline className="fs-1 text-danger" />
        <br />
        Labs{" "}
      </Link>
      <br />
    </div>
  );
}
