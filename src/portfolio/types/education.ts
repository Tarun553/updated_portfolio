export type Education = {
  id: string;
  institution: string;
  degree: string;
  period: {
    start: string;
    end?: string;
  };
  location: string;
  description?: string;
  highlights?: string[];
};
