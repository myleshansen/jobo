import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BrainCircuit, FileText, SquareUser, Bell, PanelLeftClose, PieChart } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Powered by Artificial Intelligence</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our platform leverages advanced AI algorithms to transform the job search and recruitment process
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <BrainCircuit className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Smart Matching</CardTitle>
            <CardDescription>
              AI analyzes your skills, experiences, and preferences to find the most suitable jobs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our proprietary algorithm looks beyond keywords to understand the context of your experience and matches
              it with job requirements for better results.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <FileText className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Resume Enhancement</CardTitle>
            <CardDescription>Get AI-powered suggestions to optimize your resume for ATS systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our system identifies missing keywords, suggests improvements, and helps format your resume to pass
              through applicant tracking systems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Bell className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Personalized Alerts</CardTitle>
            <CardDescription>Receive tailored job notifications that match your specific career goals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Set your preferences once and let our AI continuously scan thousands of job postings to find opportunities
              that align with your career path.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <SquareUser className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Candidate Screening</CardTitle>
            <CardDescription>
              For employers: AI pre-screens applicants to find the most qualified candidates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Save time by having our AI identify the most promising candidates based on skills, experience, and
              cultural fit with your organization.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <PanelLeftClose className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Interview Preparation</CardTitle>
            <CardDescription>Practice with an AI interviewer that simulates real interview scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get comfortable with typical interview questions for your specific role and receive feedback on your
              responses to improve your performance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <PieChart className="h-10 w-10 mb-2 text-primary" />
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>
              Access AI-generated analytics on salary trends, skill demand, and job market conditions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Make informed career decisions with up-to-date market data and visualizations tailored to your industry
              and location.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Job Search?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="sm:w-auto">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="sm:w-auto">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}

