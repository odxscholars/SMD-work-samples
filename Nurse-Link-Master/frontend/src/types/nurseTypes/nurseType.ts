type EmploymentType = 'Full-time' | 'Part-time' | 'Self-employed' | 'Freelance' | 'Contract' | 'Internship' | 'Apprenticeship' | 'Seasonal';


export interface NurseType {
    id: string
    userId: string
    firstName: string
    lastName: string
    specialization?: string
    about?: string
    birthdate: Date
    gender: string
    country: string
    city: string
    profilePicture: string
    bannerPicture: string
    username: string
    email: string
    phoneNum: string
    progress: number
    technicalSkill: Array<string>
    credentials: CredentialsType
    connections: Array<string>
    education: EducationType
    video: string
} //continue updating

export interface CredentialsType {
    education: EducationType[]
    experience: ExperienceType[]
    volunteering: VolunteeringType[]
    document: DocumentType[]
}

export interface EducationType {
    institutionName: string
    degree: string
    fieldStudy: string
    startDate: Date
    endDate: Date
    isCurrent: boolean
}

export interface ExperienceType {
  institutionName: string;
  description: string;
  role: string;
  startDate: Date;
  endDate: Date;
  employmentType: EmploymentType;
  isCurrent: boolean;
}

export interface VolunteeringType {
  institutionName: string;
  role: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isCurrent: boolean;
}

export interface DocumentType {
    type: 'license' | 'certification' | 'award' | 'resume';
    name: string;
    description: string;
    institutionName: string;
    issuanceDate: Date;
    status: 'verified' | 'unverified' | 'pending';
    link: string;
  }