export type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  social: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
};
