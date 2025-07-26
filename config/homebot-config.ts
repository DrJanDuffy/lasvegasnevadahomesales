// Homebot Configuration
export const homebotConfig = {
  // Agent ID - Replace with your actual Homebot agent ID
  agentId: process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID || '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43',
  
  // Widget Configuration
  widget: {
    scriptUrl: 'https://embed.homebotapp.com/lgw/v1/widget.js',
    minHeight: 480,
    zIndex: 1000,
  },
  
  // Widget Types
  widgetTypes: {
    homeowner: 'homeowner',
    buyer: 'buyer',
    seller: 'seller',
  },
  
  // Styling Configuration
  styling: {
    container: {
      minHeight: '480px',
      width: '100%',
      zIndex: 1000,
      position: 'relative' as const,
    },
    widget: {
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
  },
};

// Homebot Widget Props Interface
export interface HomebotWidgetProps {
  agentId?: string;
  className?: string;
  style?: React.CSSProperties;
  widgetType?: 'homeowner' | 'buyer' | 'seller';
} 