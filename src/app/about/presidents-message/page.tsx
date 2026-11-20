import { LeadershipMessageView } from "@/components/shared/LeadershipMessageView";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "President's Message",
  description:
    "Message from Sri S. R. Veerabhadraiah, President, Sri Jagadguru Renukacharya Education Society.",
  path: "/about/presidents-message",
});

export default function PresidentsMessagePage() {
  return (
    <LeadershipMessageView
      title="President's Message"
      name="Sri S. R. Veerabhadraiah"
      designation="President"
      organization="SJR Education Society"
      imageUrl="/assets/leadership/treasurer.jpg"
      paragraphs={[
        "Greetings from Sri Jagadguru Renukacharya Education Society,",
        "It gives me immense pleasure to present the enduring legacy of Sri Jagadguru Renukacharya Education Society—an institution built on vision, strengthened by values, and guided by tradition.",
        "From a modest beginning in 1945 to becoming a trusted name in education today, the Society has continuously expanded its reach and impact. The blessings of Sri Rambhapuri Peeta have played a vital role in this journey of growth and service.",
        "As we commemorate eight decades of excellence, we are also embracing the future with AI-powered classrooms and forward-looking educational practices that prepare students for a dynamic world.",
        "We remain steadfast in our commitment to providing quality, value-based education that empowers generations.",
      ]}
      closing="Warm regards,"
      signatureLines={[
        "Sri S. R. Veerabhadraiah",
        "President",
        "SJR Education Society",
      ]}
    />
  );
}
