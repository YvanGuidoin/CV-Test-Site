export class Job {
  beginning: String;
  end: String;
  company: String;
  job: String;
  description: String;
  keywords: String[];
};

export class Qualification {
  obtention: String;
  name: String;
  location: String;
  organization: String;
  description: String;
  keywords: String[];
};

export class Resume {
  userid: String;
  name: String;
  surname: String;
  birthdate: Date;
  gender: String;
  address: String;
  presentation: String;
  past_jobs: Job[];
  qualifications: Qualification[];
  keywords: String[];
}

export class Credentials {
  userid: String;
  username: String;
  password: String;
}
