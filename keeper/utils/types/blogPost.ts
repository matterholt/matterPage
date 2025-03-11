export interface ContentFrontMatter {
  workingDate: string;
  employer: string;
  location: string;
  jobTitle: string;
  type: string;
  isCurrent: boolean;
  jobId: number;
}

export interface ContentCareers {
  id?: string;
  slug?: string;
  collections?: string;
  body?: string;
  data?: ContentFrontMatter;
}
