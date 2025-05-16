const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page UI.",
        date: "2025-05-01",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar bug",
        description: "Resolve the navigation menu issue on mobile.",
        date: "2025-05-03",
        category: "dev",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Implement Search",
        description: "Add search functionality to the dashboard.",
        date: "2025-05-04",
        category: "dev",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Test Cases",
        description: "Write unit tests for the profile module.",
        date: "2025-05-05",
        category: "testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Update Icons",
        description: "Replace outdated icons with new ones.",
        date: "2025-05-06",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Footer",
        description: "Create an elegant footer for the app.",
        date: "2025-05-02",
        category: "design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Fixing",
        description: "Resolve UI issues in settings page.",
        date: "2025-05-04",
        category: "dev",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Refactor Code",
        description: "Optimize codebase for better performance.",
        date: "2025-05-07",
        category: "dev",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Dark Mode",
        description: "Implement dark mode toggle for UI.",
        date: "2025-05-08",
        category: "feature",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Kiran",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Backend Cleanup",
        description: "Remove unused API endpoints.",
        date: "2025-05-03",
        category: "backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Documentation",
        description: "Update developer documentation.",
        date: "2025-05-04",
        category: "documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Security Patch",
        description: "Apply security updates to user auth.",
        date: "2025-05-05",
        category: "dev",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin=[
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return{employees,admin};
}