DROP KEYSPACE IF EXISTS resumes;
CREATE KEYSPACE resumes WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};
USE resumes;
CREATE TYPE job (
  beginning timestamp,
  end timestamp,
  company text,
  job text,
  description text,
  keywords list<text>
);
CREATE TYPE qualification (
  obtention timestamp,
  name text,
  location text,
  organization text,
  description text,
  keywords list<text>
);
CREATE TABLE users (
  userid uuid,
  pseudo text,
  password text,
  name text,
  surname text,
  birthdate timestamp,
  gender varchar,
  address text,
  presentation text,
  past_jobs list<frozen <job>>,
  qualifications list<frozen <qualification>>,
  keywords list<text>,
  PRIMARY KEY(userid)
 );
CREATE INDEX on users (pseudo);
CREATE INDEX on users (keywords);
CREATE INDEX on users (past_jobs);
CREATE INDEX on users (qualifications);
INSERT INTO users JSON '{"userid":"6410a4f9-eeb4-4755-ab14-c52938fcce9a","pseudo":"testuser","password":"testpassword","name":"Yvan","surname":"Guidoin","birthdate":710510400000,"gender":"M","address":"Dublin, Ireland","presentation":"Hi, I&#39;m the creator of this example site.","past_jobs":[{"beginning":1420113600000,"end":1451649600000,"keywords":["fake","job"],"company":"False Company for Test Inc.","job":"Executive manager of representives workers","description":"Please..."}],"qualifications":[{"obtention":1388577600000,"name":"PhD in IT","location":"77 Massachusetts Ave, Cambridge, MA 02139, USA","organization":"MIT","keywords":["wow","MIT","PhD"],"description":"much work"}],"keywords":["creator","developer","test"]}';
