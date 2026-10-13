export type TeamMember = {
  id: string;
  name: string;
  role: string;
};

export const team: TeamMember[] = [
  { id: "team-105A2401", name: "Team Member", role: "Operations" },
  { id: "team-cameron", name: "Cameron", role: "Project Management" },
  { id: "team-courtney", name: "Courtney", role: "Administration" },
  { id: "team-joni", name: "Joni", role: "Leadership" },
  { id: "team-dan", name: "Dan", role: "Field Operations" },
  { id: "team-dave", name: "Dave", role: "Project Management" },
  { id: "team-erin", name: "Erin", role: "Business Development" },
  { id: "team-john", name: "John", role: "Estimating" },
  { id: "team-keone", name: "Keone", role: "Field Operations" },
  { id: "team-lauren", name: "Lauren", role: "Project Coordination" },
  { id: "team-nicole", name: "Nicole", role: "Accounting" },
  { id: "team-reno", name: "Reno", role: "Superintendence" },
  { id: "team-sandy", name: "Sandy", role: "Administration" },
  { id: "team-teala", name: "Teala", role: "Human Resources" },
  { id: "team-todd", name: "Todd", role: "Leadership" },
  { id: "team-robert", name: "Robert", role: "Field Operations" },
];

export type CurrentTeamMember = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
};

export const currentTeam: CurrentTeamMember[] = [
  { slug: "tim-merrill", name: "Tim Merrill", role: "Chief Executive Officer", photo: "/images/team/tim-merrill.jpg" },
  { slug: "joni-anderson", name: "Joni Anderson", role: "Founder & President", photo: "/images/team/joni-anderson.jpg" },
  { slug: "dan-carrisosa", name: "Dan Carrisosa", role: "Chief Operations Officer", photo: "/images/team/dan-carrisosa.jpg" },
  { slug: "sandy-davis", name: "Sandy Davis", role: "Chief Financial Officer", photo: "/images/team/sandy-davis.jpg" },
  { slug: "erin-arbuckle", name: "Erin Arbuckle", role: "Controller", photo: "/images/team/erin-arbuckle.jpg" },
  { slug: "nicole-maya", name: "Nicole Maya", role: "Assistant Controller", photo: "/images/team/nicole-maya.jpg" },
  { slug: "robert-felix", name: "Robert Felix", role: "Operations Manager", photo: "/images/team/robert-felix.jpg" },
  { slug: "dave-van-mouwerik", name: "Dave Van Mouwerik", role: "Estimating Manager", photo: "/images/team/dave-van-mouwerik.jpg" },
  { slug: "reno-hawley", name: "Reno Hawley", role: "Senior Estimator", photo: "/images/team/reno-hawley.jpg" },
  { slug: "luke-ferrell", name: "Luke Ferrell", role: "Senior Estimator" },
  { slug: "cameron-reese", name: "Cameron Reese", role: "Project Manager", photo: "/images/team/cameron-reese.jpg" },
  { slug: "robert-villavicencio", name: "Robert Villavicencio", role: "Project Manager/Consultant", photo: "/images/team/robert-villavicencio.jpg" },
  { slug: "lauren-mahoney", name: "Lauren Mahoney", role: "Systems Administrator", photo: "/images/team/lauren-mahoney.jpg" },
  { slug: "keone-calderon", name: "Keone Calderon", role: "Project Coordinator", photo: "/images/team/keone-calderon.jpg" },
  { slug: "teala-reynolds", name: "Teala Reynolds", role: "Project Coordinator", photo: "/images/team/teala-reynolds.jpg" },
];
