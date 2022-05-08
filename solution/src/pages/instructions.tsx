import React from "react";
import { useTheme } from "styled-components";
import { BSpacer } from "../components/b-spacer";
import { BTitleRegularColor } from "../components/btitle";
import { useIsMobile } from "../context/is-mobile-context";

export const Instructions: React.FC = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  return (
    <div
      style={{
        padding: isMobile ? "10px" : undefined,
        maxWidth: "600px",
        lineHeight: "1.5",
        margin: "0 auto",
      }}
    >
      <BTitleRegularColor>
        Black Rabbit
        <br />
        Frontend home assignment
      </BTitleRegularColor>
      <BSpacer />
      <div>
        Black Rabbit has decided to incorporate user's airline ranking in their
        website.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>The system has two goals:</div>
      <div>&nbsp;</div>
      <div>
        1. To let the customer get more involved with the brand and help them
        have a place to voice their concerns and opinions.
      </div>
      <div>&nbsp;</div>
      <div>
        2. Let other potential customers review what other people think of the
        airline before they place their order and help them make a more informed
        decision.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>The system has two parts:</div>
      <div>&nbsp;</div>
      <div>
        The first part is an email sent to the customers a few days after their
        flight had landed back and asked them to fill a form regarding their
        satisfaction for the airline. The form consists of the following ranking
        questions: How was the food, how was the staff, were there enough leg
        room, what is your overall satisfaction from your experience, was the
        airplane clean and would you recommend the airline to a friend. in
        addition we provide a place to write freely of their experience.
      </div>
      <div>
        This part is already up and running, the data is being accumulated for
        all the airlines we have.
      </div>
      <div>&nbsp;</div>
      <div>
        The second part, which is your assignment (if you choose to accept it
        😊), is to build a web application that views the data from the
        customers.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>
        The web application consists of two parts:
      </div>
      <div>&nbsp;</div>
      <div>
        1. A free search page, where anyone can go in and search for an airline.
        The user is shown as he types the relevant airline for the search term
        (like google search bar). After he clicks a result he moves to the
        second page.
      </div>
      <div>
        The route for this page should be the home route <code>{"/"}</code>.
      </div>
      <div>&nbsp;</div>
      <div>
        The second page is the page which has all of the reviews and accumulated
        scores for each of the questions.
      </div>
      <div>
        This page will only be available with route param of the airline code,
        so the other frontend team could link to it from other pages.
      </div>
      <div>
        The route for the page should be <code>/airline/:airlineCode</code>.
        Example: <code>/airline/LY</code> or <code>/airline/TK</code>.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>
        Our backend team had helped us with two APIs.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>Search API:</div>
      <div>
        the first one is the airline search API, which returns the relevant
        airlines data (code, name and logo url) according the search term:
      </div>
      <div>
        <code>
          GET https://frontend-assignment-api.azurewebsites.net/api/search
        </code>
      </div>
      <div>
        The search terms is passed through query param named: <code>query</code>
        .
      </div>
      <div style={{ fontWeight: "600", color: theme.colors.accentColor }}>
        Example
      </div>
      <div>Request:</div>
      <div>
        <code>
          GET&nbsp;https://frontend-assignment-api.azurewebsites.net/api/search?query=el%20al
        </code>
      </div>
      <div>Response:</div>
      <div>
        <pre>
          {`[
  {
    "code": "LY",
    "name": "El Al",
    "logo": "https://alicesearch.blob.core.windows.net/airline-logos/FlightCompanyWingLogoLY.png"
  }
]`}
        </pre>
      </div>
      <div>
        *An important thing to know: because we want to show the results as the
        user types our backend team asked not to stress the API too much and
        make too many calls. please debounce while the user types in order to
        reduce the number of api calls.
      </div>
      <div>&nbsp;</div>
      <div style={{ fontWeight: "600" }}>Airline data API:</div>
      <div>
        The second API is the api which returns all of the review data for a
        specific airline.
      </div>
      <div>
        <code>
          GET https://frontend-assignment-api.azurewebsites.net/api/airline
        </code>
      </div>
      <div>
        To get the data for an airline you have to pass a query param named
        <code>airline-code</code> with the specific airline code as a value.
      </div>
      <div style={{ fontWeight: "600", color: theme.colors.accentColor }}>
        Example
      </div>
      <div>Request:</div>
      <div>
        <code>
          GET
          https://frontend-assignment-api.azurewebsites.net/api/airline?airline-code=LY
        </code>
      </div>
      <div>Response:</div>
      <div>
        <pre>
          {`{
  "code": "LY",
  "name": "El Al",
  "logo": "https://alicesearch.blob.core.windows.net/airline-logos/FlightCompanyWingLogoLY.png",
  "customerServiceEmail": "Barrett.Stehr12@hotmail.com",
  "customerServicePhone": "766.966.4721 x990",
  "customerServiceWebsite": "https://corny-steel.info",
  "reviews": [
    {
      "customerName": "Alfonso",
      "review": "Maxime et accusantium inventore nisi delectus autem...",
      "overallScore": 1,
      "scheduleAccuracy": -5,
      "foodQuality": 1,
      "legRoom": 1,
      "cleanliness": 3,
      "staff": 1,
      "wouldRecommend": 5
    },
    {
      "customerName": "Hosea",
      "review": "Vero nobis ut eum illum a. Voluptatibus est perferendis...",
      "overallScore": 2,
      "scheduleAccuracy": 3,
      "foodQuality": 3,
      "legRoom": 1,
      "cleanliness": 3,
      "staff": 1,
      "wouldRecommend": 1
    },
    {
      "customerName": "Abbey",
      "review": "Rerum voluptatem et laborum odit ratione sit rerum...",
      "overallScore": 3,
      "scheduleAccuracy": 3,
      "foodQuality": 2,
      "legRoom": 1,
      "cleanliness": 4,
      "staff": 4,
      "wouldRecommend": 4
    },
    {
      "customerName": "Rhianna",
      "review": "Dignissimos quasi saepe quia voluptate. Consectetur...",
      "overallScore": 2,
      "scheduleAccuracy": -4,
      "foodQuality": 2,
      "legRoom": 1,
      "cleanliness": 4,
      "staff": 2,
      "wouldRecommend": 2
    },
    {
      "customerName": "Modesta",
      "review": "Architecto modi sunt eligendi necessitatibus ...",
      "overallScore": 2,
      "scheduleAccuracy": -1,
      "foodQuality": 3,
      "legRoom": 2,
      "cleanliness": 2,
      "staff": 2,
      "wouldRecommend": 1
    },
    {
      "customerName": "Josiah",
      "review": "Sed consequatur omnis. Nam mollitia nam...",
      "overallScore": 5,
      "scheduleAccuracy": -5,
      "foodQuality": 4,
      "legRoom": 3,
      "cleanliness": 3,
      "staff": 3,
      "wouldRecommend": 1
    },
    {
      "customerName": "Jaclyn",
      "review": "Fuga dolores nihil. Ut et voluptatem...",
      "overallScore": 4,
      "scheduleAccuracy": 3,
      "foodQuality": 5,
      "legRoom": 2,
      "cleanliness": 3,
      "staff": 1,
      "wouldRecommend": 1
    },
    {
      "customerName": "Ova",
      "review": "Repellendus officia ut. Aut autem qui...",
      "overallScore": 5,
      "scheduleAccuracy": -1,
      "foodQuality": 4,
      "legRoom": 1,
      "cleanliness": 1,
      "staff": 1,
      "wouldRecommend": 2
    },
    {
      "customerName": "Sigrid",
      "review": "Nemo reiciendis in a repellat. Facere...",
      "overallScore": 2,
      "scheduleAccuracy": 0,
      "foodQuality": 2,
      "legRoom": 2,
      "cleanliness": 1,
      "staff": 1,
      "wouldRecommend": 5
    },
    {
      "customerName": "Levi",
      "review": "Autem et cum dolore voluptatem architecto. Autem...",
      "overallScore": 2,
      "scheduleAccuracy": -2,
      "foodQuality": 4,
      "legRoom": 2,
      "cleanliness": 3,
      "staff": 1,
      "wouldRecommend": 1
    }
  ]
}`}
        </pre>
      </div>
      <div>
        *Please note that our backend team forgot to accumulate and create an
        average score for all the categories as seen in the example solution.
        It’s your job to do that.
      </div>
      <div>&nbsp;</div>
      <div>
        Please see the example for the web application and play with it. Your
        solution should be on par with the example in terms of visuals and
        behavior, except off course from the instruction page and the upper
        menu.
      </div>
      <div>
        Also note that the web application is mobile optimized as well and have
        a slightly different view.
      </div>
      <div>&nbsp;</div>
      <div>
        When submitting your solution please zip your code (with node modules)
        and provide instructions on how to run it. you can choose whatever
        framework or library you wish.
      </div>
      <div>&nbsp;</div>
      <div>
        <div style={{ fontWeight: "600", color: theme.colors.accentColor }}>
          Good Luck!!
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  );
};
