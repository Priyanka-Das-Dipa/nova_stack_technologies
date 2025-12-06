/* eslint-disable react/jsx-key */
import { teamMembers } from "../data/teamData";
import TeamCard from "./TeamCard";

export default function OurTeam() {
  return (
    <div className="">
      <h1 className="uppercase text-lg md:text-2xl font-bold text-center py-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {teamMembers.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
}
