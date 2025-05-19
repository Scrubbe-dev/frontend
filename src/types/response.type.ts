export type FingerprintResponse = {
  success: boolean;
  data: {
    ip: string;
    location?: Record<string, never>; 
    network: {
      isProxy: boolean;
      
    };
    device: {
      os: string;
      browser: string;
      deviceType?: 'desktop' | 'mobile' | 'tablet' | 'bot' | 'other';
    };
    usersDetails: {
      ip: string;
      type: 'ipv4' | 'ipv6';
      latitude: number;
      longitude: number;
      is_eu: boolean;
      continent_code: string;
      continent_name: string;
      country_code: string;
      country_name: string;
      region_name?: string; 
      city?: string; 
      location: {
        capital: string;
        native_name: string;
        flag: string;
        top_level_domains: string[];
        calling_codes: string[];
      };
      connection: {
        asn: number;
        isp: string;
        organization?: string;
      };
      currencies: {
        name: string;
        code: string;
        symbol: string;
      }[];
      timezones: string[];
      languages?: { 
        code: string;
        name: string;
        native: string;
      }[];
    };
    
    additionalData?: Record<string, unknown>;
  };
  
  error?: {
    code: string;
    message: string;
  };
};