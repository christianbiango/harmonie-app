type City = {
  id: string;
  name: string;
  population: string;
  distance_from_doctor: string;
  holiday_type: string;
  region: string;
};

type Doctor = {
  id: string;
  last_name: string;
};

type HolidaysComment = {
  id: string;
  comment: string;
  created_at: string;
  doctors_public: Doctor;
};

type HolidayDetail = {
  id: string;
  name: string;
  image_url: string;
  image_url_2: string;
  image_url_3: string;
  image_alt: string;
  image_2_alt: string;
  image_3_alt: string;
  cities: City;
  holidays_comments: HolidaysComment;
  rooms_description: string;
  equipments: string[];
  salary: string[];
  car: string[];
  exercices_hours: string[];
  support: string[];
  holiday_offer_similarities_id_holidays_offers_fkey: HolidayOfferSimilaritiesId[];
  offers_availability: OffersAvailability[];
};

type OffersAvailability = {
  date: Date;
  available: boolean;
};

type HolidayOfferSimilarities = {
  image_url: string;
  image_alt: string;
  name: string;
  main_category: string;
};

type HolidayOfferSimilaritiesId = {
  id_similar_holiday: HolidayOfferSimilarities;
};
