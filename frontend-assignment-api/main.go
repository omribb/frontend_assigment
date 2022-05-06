package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

type Airlines []Airline

type Airline struct {
	Code                   string   `json:"code"`
	Name                   string   `json:"name"`
	Logo                   string   `json:"logo"`
	CustomerServiceEmail   string   `json:"customerServiceEmail"`
	CustomerServicePhone   string   `json:"customerServicePhone"`
	CustomerServiceWebsite string   `json:"customerServiceWebsite"`
	Reviews                []Review `json:"reviews"`
}

type Review struct {
	CustomerName     string `json:"customerName"`
	Review           string `json:"review"`
	OverallScore     int64  `json:"overallScore"`
	ScheduleAccuracy int64  `json:"scheduleAccuracy"`
	FoodQuality      int64  `json:"foodQuality"`
	LegRoom          int64  `json:"legRoom"`
	Cleanliness      int64  `json:"cleanliness"`
	Staff            int64  `json:"staff"`
	WouldRecommend   int64  `json:"wouldRecommend"`
}

type SearchResponse struct {
	Code string `json:"code"`
	Name string `json:"name"`
	Logo string `json:"logo"`
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func UnmarshalAirlines(data []byte) (Airlines, error) {
	var r Airlines
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Airlines) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

func main() {
	data, err := os.ReadFile("./data.json")
	check(err)
	airlines, airlinesMarshalError := UnmarshalAirlines(data)
	check(airlinesMarshalError)
	fmt.Println(airlines[0].Code)

	listenAddr := ":3000"
	if val, ok := os.LookupEnv("FUNCTIONS_CUSTOMHANDLER_PORT"); ok {
		listenAddr = ":" + val
	}

	app := fiber.New()
	app.Use(logger.New())

	app.Get("/api/ping", func(c *fiber.Ctx) error {
		return c.SendString("pong!")
	})

	app.Get("/api/airline", func(c *fiber.Ctx) error {
		airlineCode := c.Query("airline-code", "-")
		if airlineCode == "-" {
			c.Status(401)
			return c.SendString("no airline code query")
		}
		var airline Airline
		didFind := false
		for i := 0; i < len(airlines); i++ {
			if airlines[i].Code == airlineCode {
				airline = airlines[i]
				didFind = true
				break
			}
		}
		if didFind == false {
			c.Status(404)
			return c.SendString("not found")
		}
		json, _ := json.Marshal(airline)
		return c.SendString(string(json))
	})

	app.Get("/api/search", func(c *fiber.Ctx) error {
		searchQuery := c.Query("query", "-")
		if searchQuery == "-" {
			c.Status(401)
			return c.SendString("no search query")
		}
		searchQuery = strings.ToLower(searchQuery)
		var toReturn []SearchResponse
		for i := 0; i < len(airlines); i++ {
			if strings.Contains(strings.ToLower(airlines[i].Code), searchQuery) || strings.Contains(strings.ToLower(airlines[i].Name), searchQuery) {
				toReturn = append(toReturn, SearchResponse{Code: airlines[i].Code, Name: airlines[i].Name, Logo: airlines[i].Logo})
			}
		}
		json, _ := json.Marshal(toReturn)
		return c.SendString(string(json))
	})

	app.Listen(listenAddr)
}
