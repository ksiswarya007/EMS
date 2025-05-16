# 💼 Employment Management System

A role-based employee management system built with React. The app supports Admin and Employee logins, featuring dynamic dashboards tailored to each user role. All data is persisted using LocalStorage, so no backend is needed.

Admins can create and assign tasks to employees, while employees can log in to view their personalized dashboards and track their active tasks.


---

## 🔑 Features

- 🧑‍💼 **Role-based authentication** (Admin & Employee)
- 🧾 **Task assignment** by Admin to specific employees
- 📋 **Employee dashboard** with task list (active, ongoing)
- 🧠 **Context API** for global auth and task state management
- 🗃️ **LocalStorage** used for data persistence
- 🔐 **Login/Logout** functionality
- 💻 **Fully client-side** — no backend server or database needed

---

## 🧱 Tech Stack

- ⚛️ React (with Hooks)
- 🌐 Context API
- 💾 LocalStorage
- 🎨 Tailwind CSS
- 🧭 React Router *(optional, if implemented)*

---

## Components Used

| Component                        | Purpose                                          |
|---------------------------------|-------------------------------------------------|
| `Auth/Login.jsx`                 | Role-based login screen (admin or employee)     |
| `Dashboard/AdminDashboard.jsx`   | Admin dashboard to create and assign tasks      |
| `Dashboard/EmployeeDashboard.jsx`| Employee dashboard showing assigned tasks       |
| `other/AllTask.jsx`              | Displays all tasks                               |
| `other/CreateTask.jsx`           | Form to create new tasks                         |
| `other/Header.jsx`               | Header component used across pages               |
| `other/TaskListNumber.jsx`       | Displays count of tasks                          |
| `TaskList/AcceptTask.jsx`        | Component for accepted tasks                     |
| `TaskList/CompleteTask.jsx`      | Component for completed tasks                    |
| `TaskList/FailedTask.jsx`        | Component for failed tasks                       |
| `TaskList/NewTask.jsx`           | Component for new tasks                          |
| `TaskList/TaskList.jsx`          | Lists tasks by status                            |
| `context/AuthProvider.jsx`       | Provides global authentication context          |

## Usage

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to launch the app locally
