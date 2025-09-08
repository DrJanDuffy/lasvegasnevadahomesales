'use client';

import { realScoutConfig } from '../../config/realscout-config';

interface RealScoutHomeValueProps {
  agentEncodedId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function RealScoutHomeValue({
  agentEncodedId = realScoutConfig.widgets.homeValue.agentEncodedId,
  className = '',
  style = {},
}: RealScoutHomeValueProps) {
  return (
    <div
      className={`realscout-widget realscout-home-value ${className}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: `<realscout-home-value agent-encoded-id="${agentEncodedId}"></realscout-home-value>`,
      }}
    />
  );
}
