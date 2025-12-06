import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { TeamMember } from "../types/team.type";
import Link from "next/link";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg">
      <Image
        width={110}
        height={110}
        className="bg-cover h-[200px] w-[200px] rounded-full bg-slate-500 object-cover"
        src={member.image}
        alt={member.name}
      />
      <div className="space-y-1 text-center">
        <h1 className="text-2xl text-gray-700 dark:text-white/90">
          {member.name}
        </h1>
        <p className="text-sm text-gray-400">{member.role}</p>
      </div>
      <p className="text-center text-sm text-gray-500">{member.description}</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 py-2">
        {member.social.facebook && (
          <Link
            href={member.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 bg-primary text-white shadow hover:scale-125 transition"
          >
            <FaFacebookF />
          </Link>
        )}
        {member.social.youtube && (
          <Link
            href={member.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 bg-primary text-white shadow hover:scale-125 transition"
          >
            <FaYoutube />
          </Link>
        )}
        {member.social.linkedin && (
          <Link
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-white p-2 shadow hover:scale-125 transition"
          >
            <FaLinkedinIn />
          </Link>
        )}
      </div>

      <button className="w-full rounded-full py-2 text-[12px] font-semibold text-primary ring-1 ring-primary hover:bg-primary hover:text-white sm:text-sm md:text-base">
        View Profile
      </button>
    </div>
  );
};
export default TeamCard;
