interface RealScoutHomeValueProps {
  agentEncodedId: string;
}

export function RealScoutHomeValue({ agentEncodedId }: RealScoutHomeValueProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-home-value agent-encoded-id="${agentEncodedId}"></realscout-home-value>`
      }}
    />
  );
} 