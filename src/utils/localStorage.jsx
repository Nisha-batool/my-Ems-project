


const employees = {
  "id": 1,
  "email": "ali@company.com",
  "password": "123",
  "tasks": [
    {
      "taskTitle": "Design Landing Page",
      "taskDescription": "Create responsive UI for homepage using Tailwind CSS",
      "taskDate": "2026-09-15",
      "category": "Design",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    },
    {
      "taskTitle": "Fix Login Bug",
      "taskDescription": "Resolve authentication error on login page",
      "taskDate": "2026-09-14",
      "category": "Development",
      "active": false,
      "newTask": false,
      "completed": true,
      "failed": false
    }
  ]
}


const employee2= {
  "id": 2,
  "email": "sara@company.com",
  "password": "123",
  "tasks": [
    {
      "taskTitle": "SEO Audit",
      "taskDescription": "Complete website SEO audit and submit report",
      "taskDate": "2026-09-14",
      "category": "SEO",
      "active": false,
      "newTask": false,
      "completed": true,
      "failed": false
    },
    {
      "taskTitle": "Email Campaign",
      "taskDescription": "Send monthly newsletter to 1000 subscribers",
      "taskDate": "2026-09-17",
      "category": "Marketing",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    }
  ]
}


const employee3 = {
  "id": 3,
  "email": "ahmed@company.com",
  "password": "123",
  "tasks": [
    {
      "taskTitle": "Backend API",
      "taskDescription": "Build authentication API with JWT tokens",
      "taskDate": "2026-09-16",
      "category": "Development",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    }
  ]
}


const employee4 = {
  "id": 4,
  "email": "fatima@company.com",
  "password": "123",
  "tasks": [
    {
      "taskTitle": "Content Writing",
      "taskDescription": "Write 3 SEO optimized blog posts",
      "taskDate": "2026-09-17",
      "category": "Marketing",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    }
  ]
}

const employee5 = {
  "id": 5,
  "email": "nisha@company.com",
  "password": "123",
  "tasks": [
    {
      "taskTitle": "Build Dashboard",
      "taskDescription": "Create employee dashboard with task statistics",
      "taskDate": "2026-09-17",
      "category": "Development",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    },
    {
      "taskTitle": "Test localStorage",
      "taskDescription": "Check if data is saving properly in browser",
      "taskDate": "2026-09-14",
      "category": "Testing",
      "active": false,
      "newTask": false,
      "completed": true,
      "failed": false
    },
    {
      "taskTitle": "Learn React",
      "taskDescription": "Complete React hooks tutorial",
      "taskDate": "2026-09-15",
      "category": "Learning",
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false
    }
  ]
}


const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}


export const setLocalStorage =() =>{
  localStorage.setItem('employees',JSON.stringify(employees,employee2,employee3,employee4,employee5))
  localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage =() =>{

 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

  return{employees,admin}
  
}
