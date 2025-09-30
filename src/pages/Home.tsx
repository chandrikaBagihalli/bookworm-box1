import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, UserPlus, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { mockStudents } from "@/lib/mockData";

const Home = () => {
  const totalStudents = mockStudents.length;
  const activeStudents = mockStudents.filter(s => s.status === "active").length;
  const graduatedStudents = mockStudents.filter(s => s.status === "graduated").length;
  const inactiveStudents = mockStudents.filter(s => s.status === "inactive").length;

  const stats = [
    { label: "Total Students", value: totalStudents, icon: Users, color: "text-academic-blue" },
    { label: "Active Students", value: activeStudents, icon: BookOpen, color: "text-green-600" },
    { label: "Graduated", value: graduatedStudents, icon: BarChart3, color: "text-warm-accent" },
    { label: "Inactive", value: inactiveStudents, icon: Users, color: "text-red-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-academic rounded-lg text-white">
        <BookOpen className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Library Management System</h1>
        <p className="text-xl mb-8 text-white/90">
          Manage student records efficiently and effectively
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="warm" size="lg">
            <Link to="/add-student">
              <UserPlus className="h-5 w-5" />
              Add New Student
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Link to="/students">
              <Users className="h-5 w-5" />
              View Students
            </Link>
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks for managing student records
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button asChild variant="academic" className="h-auto p-6 flex-col gap-2">
            <Link to="/add-student">
              <UserPlus className="h-8 w-8" />
              <span className="text-lg font-semibold">Add New Student</span>
              <span className="text-sm opacity-90">Register a new student in the system</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-6 flex-col gap-2">
            <Link to="/students">
              <Users className="h-8 w-8" />
              <span className="text-lg font-semibold">Manage Students</span>
              <span className="text-sm text-muted-foreground">View, edit, and delete student records</span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* System Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
          <CardDescription>
            Welcome to the Library Management System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This system allows you to efficiently manage student records for your educational institution. 
            You can add new students, view existing records, and maintain up-to-date information about 
            enrollment status and academic progress.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-academic-blue-light text-academic-blue rounded-full text-sm font-medium">
              Student Management
            </span>
            <span className="px-3 py-1 bg-warm-accent-light text-warm-accent rounded-full text-sm font-medium">
              Record Keeping
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Real-time Updates
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Data Validation
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;