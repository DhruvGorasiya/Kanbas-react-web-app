import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState, useEffect } from "react";
import * as modulesClient from "./client";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
  setModules,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../../Courses/client";
export default function Modules() {
  const { cid } = useParams();
  // const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isStudent = currentUser.role === "STUDENT";

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          createModuleForCourse();
        }}
      />

      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      saveModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => removeModule(moduleId)}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <div>
  // <ModulesControls /><br /><br /><br /><br />
  // <ul id="wd-modules" className="list-group rounded-0">
  //   <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
  //     <ul className="wd-lessons list-group rounded-0">
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         LEARNING OBJECTIVES </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         Introduction to the course </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         Learn what is Web Development </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //     </ul>
  //   </li>
  //   <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
  //     <ul className="wd-lessons list-group rounded-0">
  //       <li className="wd-lesson list-group-item p-3 ps-1">
  //         LEARNING OBJECTIVES </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
  //       <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
  //     </ul>
  //   </li>
  // </ul> </div>

  // );
}
