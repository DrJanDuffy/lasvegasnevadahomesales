"use client"

import { realScoutConfig } from '../../config/realscout-config';

interface RealScoutAdvancedSearchProps {
  agentEncodedId?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function RealScoutAdvancedSearch({
  agentEncodedId = realScoutConfig.widgets.advancedSearch.agentEncodedId,
  className = "",
  style = {}
}: RealScoutAdvancedSearchProps) {
  return (
    <div 
      className={`realscout-widget realscout-advanced-search ${className}`}
      style={style}
      dangerouslySetInnerHTML={{
        __html: `<realscout-advanced-search agent-encoded-id="${agentEncodedId}"></realscout-advanced-search>`
      }}
    />
  );
} 