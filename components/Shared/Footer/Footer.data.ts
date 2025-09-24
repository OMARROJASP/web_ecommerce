import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const dataFooter = [
  {
    section: "DIRECCIÓN",
    items: [
      { icon: Mail, text: "rukanasstore@rukanas.com", link: "mailto:rukanasstore@rukanas.com" },
      { icon: Phone, text: "99111785", link: "tel:99111785" },
      { icon: MapPin, text: "Av. El Sol s/n, Lucanas - Ayacucho", link: "https://goo.gl/maps/xxxx" },
    ],
  },
  {
    section: "NOSOTROS",
    items: [
      { text: "Quiénes somos", link: "/about" },
      { text: "Términos y condiciones", link: "/terms" },
      { text: "Política de privacidad", link: "/privacy" },
    ],
  },
  {
    section: "SÍGUENOS",
    items: [
      { icon: Facebook, text: "Facebook", link: "https://facebook.com/rukanasstore" },
      { icon: Instagram, text: "Instagram", link: "https://instagram.com/rukanasstore" },
      { icon: Twitter, text: "Twitter", link: "https://twitter.com/rukanasstore" },
    ],
  },
];
