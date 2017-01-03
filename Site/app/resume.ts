export class Job {
  beginning: string;
  end: string;
  company: string;
  job: string;
  description: string;
  keywords: string[];

  constructor() {
    this.keywords = [];
  }
};

export class Qualification {
  obtention: string;
  name: string;
  location: string;
  organization: string;
  description: string;
  keywords: string[];

  constructor() {
    this.keywords = [];
  }
};

export class Resume {
  userid: string;
  name: string;
  surname: string;
  birthdate: Date;
  gender: string;
  address: string;
  presentation: string;
  past_jobs: Job[];
  qualifications: Qualification[];
  keywords: string[];

  constructor() {
    this.qualifications = [];
    this.past_jobs = [];
    this.keywords = [];
  }
}

export class Credentials {
  userid: string;
  username: string;
  password: string;
}
