"use client";
import Calendar from "@/components/IMS/Calender";
import CButton from "@/components/ui/Cbutton";
import EmptyState from "@/components/ui/EmptyState";
import InviteTeamMember from "@/components/ui/InviteTeamMember";
import Modal from "@/components/ui/Modal";
import { useFetch } from "@/hooks/useFetch";
import { endpoint } from "@/lib/api/endpoint";
import { querykeys } from "@/lib/constant";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const OnCall = () => {
  const [openInvite, setOpenInvite] = useState(false);
  const { get } = useFetch();
  const { data: members } = useQuery<
    { firstname: string; lastname: string; email: string }[]
  >({
    queryKey: [querykeys.GET_MEMBERS],
    queryFn: async () => {
      try {
        const res = await get(endpoint.incident_ticket.get_members);
        console.log({ memeber: res });
        if (res.success) {
          return res.data;
        }
        return [];
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  });

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4   flex-[.5] p-3">
          <p className="dark:text-white text-lg font-semibold">Team</p>
          {members && members.length < 1 ? (
            <EmptyState
              title="No Team Member"
              description="You have no team member on this workspace yet!"
              action={
                <CButton
                  onClick={() => setOpenInvite(true)}
                  className=" bg-IMSLightGreen hover:bg-IMSDarkGreen"
                >
                  Invite Team Members
                </CButton>
              }
            />
          ) : (
            <>
              {members?.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark rounded-md p-3 flex gap-3 items-center"
                >
                  <div className=" text-sm size-[30px] rounded-full flex justify-center items-center bg-gray-600 text-white uppercase">
                    {member.firstname[0]}
                    {member.lastname[0]}
                  </div>
                  <div>
                    <p className=" font-medium dark:text-white capitalize">
                      {member.firstname} {member.lastname}
                    </p>
                    <p className=" text-sm dark:text-white">{member.email}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex bg-white rounded-md flex-1">
          <Calendar />
        </div>
      </div>

      <Modal isOpen={openInvite} onClose={() => setOpenInvite(false)}>
        <InviteTeamMember />
      </Modal>
    </div>
  );
};

export default OnCall;
