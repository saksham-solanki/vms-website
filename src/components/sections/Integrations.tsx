import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/ui/Section";

const integrations = [
  { name: "Slack", icon: "💬" },
  { name: "Microsoft Teams", icon: "👥" },
  { name: "Google Workspace", icon: "📧" },
  { name: "Okta", icon: "🔐" },
  { name: "Active Directory", icon: "🗂️" },
  { name: "Zapier", icon: "⚡" },
  { name: "Outlook", icon: "📬" },
  { name: "Google Calendar", icon: "📅" },
];

export function Integrations() {
  return (
    <Section background="white" id="integrations">
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>Integrations</SectionLabel>
        <SectionTitle>Works With Your Existing Tools</SectionTitle>
        <SectionDescription className="mx-auto">
          VMS integrates with the tools your team already uses. No workflow
          disruption, no learning curve.
        </SectionDescription>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-3 hover:border-primary-200 hover:shadow-sm transition-all"
          >
            <span className="text-2xl">{integration.icon}</span>
            <span className="text-sm font-semibold text-neutral-700">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
