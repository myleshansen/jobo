import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Building, Clock, DollarSign, MapPin, Star, Zap } from "lucide-react"

// const jobs = [
//   {
//     id: 1,
//     title: "Senior AI Engineer",
//     company: "TechMaster Inc.",
//     location: "Remote",
//     salary: "$120k - $150k",
//     postedTime: "2 hours ago",
//     matchScore: 95,
//     isFeatured: true,
//     skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch"],
//     logoUrl: "/placeholder.svg?height=50&width=50",
//   },
//   {
//     id: 2,
//     title: "UX/UI Designer",
//     company: "Creative Solutions",
//     location: "New York, NY",
//     salary: "$90k - $110k",
//     postedTime: "1 day ago",
//     matchScore: 88,
//     isFeatured: false,
//     skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
//     logoUrl: "/placeholder.svg?height=50&width=50",
//   },
//   {
//     id: 3,
//     title: "Full Stack Developer",
//     company: "GrowthStartups",
//     location: "San Francisco, CA",
//     salary: "$100k - $130k",
//     postedTime: "3 days ago",
//     matchScore: 82,
//     isFeatured: false,
//     skills: ["React", "Node.js", "TypeScript", "MongoDB"],
//     logoUrl: "/placeholder.svg?height=50&width=50",
//   },
//   {
//     id: 4,
//     title: "Data Scientist",
//     company: "DataInsights Co.",
//     location: "Remote",
//     salary: "$110k - $140k",
//     postedTime: "Just now",
//     matchScore: 91,
//     isFeatured: true,
//     skills: ["R", "Python", "SQL", "Data Visualization"],
//     logoUrl: "/placeholder.svg?height=50&width=50",
//   },
// ]

type Job = {
  id: number
  title: string
  company: string
  location: string
  salary: string
  postedTime: string
  matchScore: number
  isFeatured: boolean
  skills: string[]
  logoUrl: string
}

export async function JobListings() {
  try {
    const response = await fetch("http://host.docker.internal:8080/ping")
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const message = await response.json()
    const jobs = message.jobs
    if (!Array.isArray(jobs)) {
      throw new Error("Expected an array of jobs")
    }
    return (
      <section className="py-12 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Jobs</h2>
              <p className="text-muted-foreground">Opportunities matched to your profile by our AI</p>
            </div>
            <Button variant="outline">View All Jobs</Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job: Job) => (
              <Card key={job.id} className="transition-all hover:shadow-md">
                {job.isFeatured && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-primary hover:bg-primary">
                      <Star className="h-3 w-3 mr-1 fill-primary-foreground" />
                      Featured
                    </Badge>
                  </div>
                )}

                <CardHeader className="flex flex-row gap-4 items-start">
                  <div className="h-12 w-12 rounded-md bg-background border overflow-hidden p-2">
                    <img
                      src={job.logoUrl || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold leading-tight text-lg">{job.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5 mr-1" />
                      {job.company}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.postedTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm font-medium">{job.matchScore}% Match</span>
                  </div>
                  <Button size="sm">Apply</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return <div>Error loading jobs. Please try again later.</div>
  }
}