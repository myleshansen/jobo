package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Job struct {
	ID         int      `json:"id"`
	Title      string   `json:"title"`
	Company    string   `json:"company"`
	Location   string   `json:"location"`
	Salary     string   `json:"salary"`
	PostedTime string   `json:"postedTime"`
	MatchScore int      `json:"matchScore"`
	IsFeatured bool     `json:"isFeatured"`
	Skills     []string `json:"skills"`
	LogoURL    string   `json:"logoURL"`
}

func main() {
	r := gin.Default()

	jobs := []Job{
		{
			ID:         1,
			Title:      "Software Engineer",
			Company:    "Google",
			Location:   "Mountain View, CA",
			Salary:     "$150,000",
			PostedTime: "1 day ago",
			MatchScore: 95,
			IsFeatured: true,
			Skills:     []string{"Java", "Python", "C++"},
			LogoURL:    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
		},
	}

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"jobs": jobs,
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
