import React, { useState } from "react";
import Input from "./input";
import Select from "./select";
import CButton from "./Cbutton";

const InviteTeamMember = () => {
  const [memberForm, setMemberForm] = useState({
    email: "",
    role: "",
    level: "",
    permissions: [] as string[],
  });
  return (
    <div className="">
      {/* Name and Email Row */}
      <p className="dark:text-white text-lg font-semibold mb-3">
        Invite Team Member
      </p>
      <div className="grid grid-cols-1 gap-6">
        <Input
          label="Email"
          placeholder="Enter Email"
          type="email"
          value={memberForm.email}
          className="dark:!text-black"
          labelClassName="dark:!text-black"
          onChange={(e) =>
            setMemberForm((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
      </div>

      {/* Role */}
      <Select
        label="Level"
        className="dark:!text-black"
        labelClassName="dark:!text-black"
        options={[
          { value: "", label: "Select Level" },
          { value: "1st_Line", label: "1st Line" },
          { value: "2st_Line", label: "2st Line" },
          { value: "3st_Line", label: "3st Line" },
          { value: "Manager", label: "Manager" },
        ]}
        value={memberForm.level}
        onChange={(e) =>
          setMemberForm((prev) => ({
            ...prev,
            level: (e.target as HTMLSelectElement).value,
          }))
        }
      />

      <Select
        label="Role"
        className="dark:!text-black"
        labelClassName="dark:!text-black"
        options={[
          { value: "", label: "Select role" },
          { value: "ADMIN", label: "Admin" },
          { value: "MANAGER", label: "Manager" },
          { value: "ANALYST", label: "Analyst" },
          { value: "VIEWER", label: "Viewer" },
        ]}
        value={memberForm.role}
        onChange={(e) =>
          setMemberForm((prev) => ({
            ...prev,
            role: (e.target as HTMLSelectElement).value,
          }))
        }
      />

      {/* Access Permissions */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700">
          Access Permissions
        </h4>
        <div className="flex items-center gap-4">
          {[
            { label: "View Dashboard", value: "VIEW_DASHBOARD" },
            {
              label: "Modify Dashboard",
              value: "MODIFY_DASHBOARD",
            },
            { label: "Execute Actions", value: "EXECUTE_ACTIONS" },
            { label: "Manage Users", value: "MANAGE_USERS" },
          ].map((permission) => (
            <div key={permission.label} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={permission.value}
                checked={memberForm.permissions.includes(permission.value)}
                onChange={() =>
                  setMemberForm((prev) => {
                    if (prev.permissions.includes(permission.value)) {
                      const filterPermission = prev.permissions.filter(
                        (item) => item !== permission.value
                      );
                      return {
                        ...prev,
                        permissions: filterPermission,
                      };
                    } else {
                      return {
                        ...prev,
                        permissions: [...prev.permissions, permission.value],
                      };
                    }
                  })
                }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor={permission.value}
                className="text-sm text-gray-700"
              >
                {permission.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Actions */}
      <div className="flex justify-end space-x-3 pt-6">
        {/* <button
        type="button"
        onClick={() => {
          setIsModalOpen(false);
          resetMemberForm();
          setEditingMember(null);
        }}
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Cancel
      </button> */}

        <CButton
          onClick={() => {}}
          className=" bg-IMSLightGreen hover:bg-IMSDarkGreen"
        >
          Invite Team Member
        </CButton>
      </div>
    </div>
  );
};

export default InviteTeamMember;
