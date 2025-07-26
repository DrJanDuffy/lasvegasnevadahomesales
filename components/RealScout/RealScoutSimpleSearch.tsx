"use client"

import { realScoutConfig } from '../../config/realscout-config';

interface RealScoutSimpleSearchProps {
  agentEncodedId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function RealScoutSimpleSearch({
  agentEncodedId = realScoutConfig.widgets.simpleSearch.agentEncodedId,
  className = "",
  style = {}
}: RealScoutSimpleSearchProps) {
  return (
    <div 
      className={`realscout-widget realscout-simple-search ${className}`}
      style={style}
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search agent-encoded-id="${agentEncodedId}"></realscout-simple-search>`
      }}
    />
  );
} 