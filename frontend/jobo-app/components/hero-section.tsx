"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Search, BriefcaseBusiness, SquarePen } from "lucide-react"

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm, "in", location)
  }

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-8 md:mb-12">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Find Your Perfect Job with <span className="text-primary">AI Precision</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Our AI-powered platform matches your skills and preferences to the ideal job opportunities, saving you time
            and increasing your success rate.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl bg-card p-4 shadow-lg border">
          <Tabs defaultValue="jobSeeker" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="jobSeeker">
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                Job Seeker
              </TabsTrigger>
              <TabsTrigger value="employer">
                <SquarePen className="mr-2 h-4 w-4" />
                Employer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobSeeker">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Job title, skills, or keywords"
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Input
                    placeholder="Location or 'Remote'"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <Button type="submit" className="w-full md:w-auto">
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button variant="outline" size="sm" className="text-xs">
                    Remote Jobs
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Tech
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Marketing
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Design
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Engineering
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="employer">
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium">Post a job and reach qualified candidates</h3>
                <p className="text-muted-foreground">Use our AI matching to find the perfect candidates faster.</p>
                <Button size="lg" className="w-full sm:w-auto">
                  Post a Job
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center space-y-2 text-center text-sm text-muted-foreground">
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
            <span>Over 10,000 jobs available</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
            <span>AI-powered skill matching</span>
          </p>
          <p className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
            <span>Personalized job alerts</span>
          </p>
        </div>
      </div>
    </section>
  )
}

