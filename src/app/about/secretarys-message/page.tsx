import { LeadershipMessageView } from "@/components/shared/LeadershipMessageView";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Secretary's Message",
  description:
    "Message from Sri Prabhudev Kalmath, Secretary, Sri Jagadguru Renukacharya Education Society.",
  path: "/about/secretarys-message",
});

export default function SecretarysMessagePage() {
  return (
    <LeadershipMessageView
      title="Secretary's Message"
      name="Sri Prabhudev Kalmath"
      designation="Secretary"
      organization="SJR Education Society"
      imageUrl="/assets/leadership/secretary.jpg"
      paragraphs={[
        "Greetings from Sri Jagadguru Renukacharya Education Society,",
        "It is a matter of great pride to reflect on the remarkable journey of Sri Jagadguru Renukacharya Education Society, which began in 1945 with a vision to provide quality education and continues to illuminate lives even today.",
        "As we celebrate 80 Years of Legacy, we are equally focused on the future. With the integration of AI-powered classrooms, modern infrastructure, and progressive learning systems, we are committed to delivering education that is both relevant and transformative.",
        "As we move forward, we remain committed to fostering excellence, innovation, and holistic development in every learner.",
      ]}
      closing="Warm Regards,"
      signatureLines={[
        "Sri Prabhudev Kalmath",
        "Secretary",
        "SJR Education Society",
      ]}
    />
  );
}
