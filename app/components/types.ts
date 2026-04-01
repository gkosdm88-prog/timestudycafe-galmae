export type InfoData = {
  name: string;
  branch: string;
  fullName: string;
  description: string;
  phone: string;
  address: string;
  roadAddress: string;
  addressDetail: string;
  operatingHours: { weekday: string; weekend: string; holiday: string };
  sns: { instagram: string; kakao: string; blog: string };
  naverPlace: string;
  transportation: { subway: string; bus: string; parking: string };
  coordinates: { lat: number; lng: number };
};

export type PricingData = {
  hourly: { name: string; price: string }[];
  charge: { name: string; price: string; note: string }[];
  period: { name: string; price: string; note: string }[];
  fixed: { name: string; price: string }[];
  studyroom: { name: string; price: string }[];
  locker: { name: string; price: string }[];
  rules: string[];
};

export type GalleryData = {
  facilities: { name: string; description: string; icon: string }[];
  images: { src: string; alt: string }[];
};

export type NoticeData = {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  pinned: boolean;
};
