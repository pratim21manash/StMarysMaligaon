// src/data/seedData.js

// Import background images from assets/background
import imageOne from "../assets/background/imageOne.png";
import imageTwo from "../assets/background/imageTwo.png";
import imageThree from "../assets/background/imageThree.png";
import imageFour from "../assets/background/imageFour.png";
import imageFive from "../assets/background/imageFive.png";

export const schoolInfo = {
  name: "St. Mary's Sr. Secondary School",
  shortName: "St. Mary's Sr. Sec. School",
  branch: "Maligaon",
  city: "Guwahati, Assam",
  established: 1966,
  affiliation: "CBSE",
  affiliationNo: "1234567",
  address: "Maligaon, Guwahati, Assam - 781011",
  phone: "+91 87520 16092",
  email: "info@stmarysmaligaon.in",
  principal: "Dr. Meera Sharma",
};

export const stats = [
  { label: "Years of Excellence", value: 58 },
  { label: "Students", value: 1500 },
  { label: "Teaching Staff", value: 85 },
  { label: "Board Result", value: 98 },
];

export const heroSlides = [
  {
    title: "Nurturing Minds, Building Character",
    subtitle: "Welcome to St. Mary's Sr. Secondary School, Maligaon",
    image: imageOne,
  },
  {
    title: "Excellence in CBSE Education",
    subtitle: "A tradition of academic achievement since 1966",
    image: imageTwo,
  },
  {
    title: "Holistic Growth for Every Child",
    subtitle: "Academics, sports, arts and values working together",
    image: imageThree,
  },
  {
    title: "Building Future Leaders",
    subtitle: "Empowering students for a brighter tomorrow",
    image: imageFour,
  },
  {
    title: "Join the St. Mary's Family",
    subtitle: "Admissions Open 2026-27",
    image: imageFive,
  },
];

export const circulars = [
  {
    id: 1,
    title: "Admission Form for class-XI (2026-2027)",
    date: "2026-03-11",
    time: "11:34:44",
    link: "#",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting Schedule",
    date: "2026-03-15",
    time: "09:30:00",
    link: "#",
  },
  {
    id: 3,
    title: "Annual Sports Day Registration",
    date: "2026-03-20",
    time: "10:00:00",
    link: "#",
  },
];

export const downloads = [
  { id: 1, title: "Admission Form 2026-27", category: "Admission", link: "#" },
  { id: 2, title: "Fee Structure", category: "Fees", link: "#" },
  { id: 3, title: "Academic Calendar", category: "Academics", link: "#" },
  { id: 4, title: "School Prospectus", category: "General", link: "#" },
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    caption: "Annual Day Celebrations",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    caption: "Science Exhibition",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    caption: "Sports Day",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1461896836934-bd09ba8b1782?w=800&q=80",
    caption: "Cultural Fest",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    caption: "Computer Lab",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    caption: "Science Lab",
  },
];

export const managingCommittee = [
  { id: 1, name: "Mr. Thomas D'Souza", role: "Chairman" },
  { id: 2, name: "Mrs. Anjali Rao", role: "Vice Chairperson" },
  { id: 3, name: "Fr. Joseph Kutty", role: "Manager" },
  { id: 4, name: "Mr. Sanjay Baruah", role: "Treasurer" },
];

export const teachingStaff = [
  {
    id: 1,
    name: "Mrs. Priya Nair",
    subject: "English",
    qualification: "M.A., B.Ed",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: 2,
    name: "Mr. Rakesh Sharma",
    subject: "Mathematics",
    qualification: "M.Sc., B.Ed",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80",
  },
  {
    id: 3,
    name: "Ms. Deepa Iyer",
    subject: "Science",
    qualification: "M.Sc., B.Ed",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    id: 4,
    name: "Mr. Arjun Das",
    subject: "Social Science",
    qualification: "M.A., B.Ed",
    photo:
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=400&q=80",
  },
];

export const nonTeachingStaff = [
  { id: 1, name: "Mr. Bikash Kalita", role: "Office Superintendent" },
  { id: 2, name: "Mrs. Ranu Bora", role: "Accountant" },
  { id: 3, name: "Mr. Dilip Gogoi", role: "Librarian" },
];
