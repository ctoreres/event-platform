export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Conf 2025",
    image: "/images/event1.png",
    slug: "react-conf-2025",
    location: "Las Vegas, NV",
    date: "2025-05-15",
    time: "9:00 AM - 6:00 PM"
  },
  {
    title: "Google I/O 2025",
    image: "/images/event2.png",
    slug: "google-io-2025",
    location: "Mountain View, CA",
    date: "2025-05-20",
    time: "10:00 AM - 5:00 PM"
  },
  {
    title: "WWDC 2025",
    image: "/images/event3.png",
    slug: "wwdc-2025",
    location: "Cupertino, CA",
    date: "2025-06-10",
    time: "10:00 AM - 6:00 PM"
  },
  {
    title: "PyCon US 2025",
    image: "/images/event4.png",
    slug: "pycon-us-2025",
    location: "Pittsburgh, PA",
    date: "2025-05-14",
    time: "8:00 AM - 5:00 PM"
  },
  {
    title: "JSConf EU 2025",
    image: "/images/event5.png",
    slug: "jsconf-eu-2025",
    location: "Berlin, Germany",
    date: "2025-06-01",
    time: "9:00 AM - 6:00 PM"
  },
  {
    title: "Hack the North 2025",
    image: "/images/event6.png",
    slug: "hack-the-north-2025",
    location: "Waterloo, ON, Canada",
    date: "2025-01-17",
    time: "All Day"
  }
];