import Table from "./Table";

export default function App() {
  const dummyData = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      level: "Junior",
      profession: "Software Engineer",
      github: "john_doe",
      skills: [
        {
          top_technical_skills: "React, Node.js",
        },
      ],
      work_experience: [
        {
          currently_work_here: true,
        },
      ],
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      level: "Mid-Level",
      profession: "Data Scientist",
      github: "jane_doe",
      skills: [
        {
          top_technical_skills: "Python, Pandas",
        },
      ],
      work_experience: [
        {
          currently_work_here: false,
        },
      ],
    },
    {
      id: 3,
      first_name: "Emily",
      last_name: "Clark",
      level: "Senior",
      profession: "DevOps Engineer",
      github: "emily_clark",
      skills: [
        {
          top_technical_skills: "Docker, Kubernetes",
        },
      ],
      work_experience: [
        {
          currently_work_here: true,
        },
      ],
    },
    // Add more objects here as needed
  ];

  const columns = [
    {
      id: "id",
      name1: "SR NO.",
      name: (
        <th
          scope="col"
          className={`px-6 py-4 font-[600]  text-center  tracking-wider   `}
        >
          SR NO.
        </th>
      ),
      cell: (row) => (
        <div className="text-[#3C4048] text-center py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${dummyData.indexOf(row) + 1}`}
          </span>
        </div>
      ),
    },
    {
      id: "name",
      name1: "Name",
      name: (
        <th
          scope="col"
          className={`px-6 py-4 font-[600]  text-left  tracking-wider   `}
        >
          Name
        </th>
      ),
      cell: (row) => (
        <div className="text-[#3C4048] text-left pl-2 py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${row.first_name} ${row.last_name}`}
          </span>
        </div>
      ),
    },
    {
      id: "level",
      name1: "Level",
      name: (
        <th
          scope="col"
          className={`px-6 py-4 font-[600]  text-left  tracking-wider   `}
        >
          Level
        </th>
      ),
      cell: (row) => (
        <div className="text-[#3C4048] text-left pl-2 py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${row.level}`}
          </span>
        </div>
      ),
    },
    {
      id: "profession",
      name1: "Profession",
      name: (
        <th
          scope="col"
          className={`px-6 py-4 font-[600]  text-left  tracking-wider   `}
        >
          Profession
        </th>
      ),
      cell: (row) => (
        <div className="text-[#3C4048] text-left pl-2 py-3 font-medium text-sm font-roboto">
          <span className="text-[#3C4048] uppercase font-medium">
            {`${row.profession}`}
          </span>
        </div>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} rows={dummyData} />
    </>
  );
}
