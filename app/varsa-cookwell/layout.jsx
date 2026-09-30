export const metadata = {
  title: "VARSA Cookwell | Premium Hard Anodized Cookware",
  description:
    "Commercial-grade hard anodized kadhai and tawa manufactured by Nilkanth Industries.",
  openGraph: {
    title: "VARSA Cookwell — Hard Anodized Cookware",
    description: "Built for chefs, engineered for daily life.",
    url: "https://nilkanth-industries-iota.vercel.app/varsa-cookwell",
    siteName: "Nilkanth Industries",
    images: [
      {
        url: "https://nilkanth-industries-iota.vercel.app/kadhai-1.jpeg",
        width: 800,
        height: 600,
        alt: "VARSA Cookwell Cookware",
      },
      {
        url: "https://nilkanth-industries-iota.vercel.app/tawa-1.jpeg",
        width: 800,
        height: 600,
        alt: "VARSA Cookwell Heavy Duty Roti Tawa",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Layout({ children }) {
  return children;
}
