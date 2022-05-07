export interface IAirlineResponse {
  code: string;
  name: string;
  logo: string;
  customerServiceEmail: string;
  customerServicePhone: string;
  customerServiceWebsite: string;
  reviews: Review[];
}

export interface Review {
  customerName: string;
  review: string;
  overallScore: number;
  scheduleAccuracy: number;
  foodQuality: number;
  legRoom: number;
  cleanliness: number;
  staff: number;
  wouldRecommend: number;
}
