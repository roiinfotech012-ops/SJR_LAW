import { LeadershipMessageView } from "@/components/shared/LeadershipMessageView";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Chief Patron's Message",
  description:
    "Blessings and message from Poojya Sri Rambhapuri Jagadgurugalu, Permanent Chief Patron of Sri Jagadguru Renukacharya Education Society.",
  path: "/about/chief-patrons-message",
});

export default function ChiefPatronsMessagePage() {
  return (
    <LeadershipMessageView
      title="Chief Patron's Message"
      name="Poojya Sri Rambhapuri Jagadgurugalu"
      designation="Permanent Chief Patron"
      organization="Sri Jagadguru Renukacharya Education Society"
      imageUrl="/assets/leadership/cp.jpg"
      paragraphs={[
        "Blessings and Greetings,",
        "It brings me immense spiritual satisfaction to see the continued growth and service of Sri Jagadguru Renukacharya Education Society, which has been a guiding light in the field of education since 1945.",
        "Rooted in values and guided by dharma, the Society has consistently nurtured generations of students with a strong foundation of knowledge, discipline, and character. With the blessings of Sri Jagadguru Renukacharya, it has carried forward a legacy of meaningful and value-based education.",
        "It is heartening to note that SJR continues to evolve with time by embracing modern education, innovation, and AI-powered learning, while staying true to its rich heritage.",
        "I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.",
      ]}
      closing="With blessings,"
      signatureLines={[
        "Poojya Sri Rambhapuri Jagadgurugalu",
        "Srimad Rambhapuri Veerasimhasanaadeeshwara",
        "Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru, Chikkamagaluru District – 577112",
        "Permanent Chief Patron",
      ]}
    />
  );
}
