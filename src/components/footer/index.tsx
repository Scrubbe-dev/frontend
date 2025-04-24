import { ChevronRight } from "lucide-react";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

// Centralized theme configuration
const theme = {
  colors: {
    background: "bg-slate-200",
    text: "text-[#ebeaff]", // Light purple text color
    accent: "bg-green-400",
    socialBg: "bg-slate-600", // Darkened social background
    socialHover: "bg-green-500",
    linkHover: "text-green-400", // Adjusted link hover color
  },
  spacing: {
    padding: "px-4 py-5 sm:pt-0 sm:px-0 sm:pb-4",
    columnGap: "gap-8",
    itemGap: "gap-1",
    marginTop: "mt-10",
  },
  fonts: {
    title: "font-semibold font-Montserrat text-xl",
    body: "font-Raleway text-sm",
    linkText: "font-Montserrat text-sm",
  },
};

// Type definitions
interface SocialLinkProps {
  icon: IconType;
}

interface FooterLinkProps {
  text: string;
}

interface ColumnHeaderProps {
  title: string;
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

interface ColumnData {
  title: string;
  links: string[];
}

// Social media link component
const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon }) => (
  <div className="w-fit h-fit p-2 items-center rounded-full flex hover:-translate-y-1 cursor-pointer hover:bg-green-500 transition-all justify-center bg-slate-600">
    <Icon size={20} color="#ffffff" />
  </div>
);

// Footer link component
const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <div className="flex items-center justify-start gap-1">
    <div className="w-fit gap-1 h-fit items-center rounded-full flex cursor-pointer hover:text-green-400 transition-all justify-start text-[#ebeaff]">
      <ChevronRight size={18} />
      <div className={`w-fit h-fit ${theme.fonts.linkText}`}>{text}</div>
    </div>
  </div>
);

// Column header component
const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title }) => (
  <div className="w-full space-y-2">
    <div className={`w-fit h-fit ${theme.fonts.title} ${theme.colors.text}`}>
      {title}
    </div>
    <div className="w-10 h-1 bg-green-400 rounded-full"></div>
  </div>
);

// Column component
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="w-full col-span-1 space-y-6 pt-10">
    <ColumnHeader title={title} />
    <div className="mt-2">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => {
  // Data for columns
  const columns: ColumnData[] = [
    {
      title: "Product",
      links: ["Features", "Integration", "Installation", "Demo", "Pricing"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Blog", "Community", "Support"],
    },
    {
      title: "Company",
      links: [
        "About us",
        "Careers",
        "Press",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
  ];

  return (
    <div
      className={`h-auto w-full flex justify-center ${theme.spacing.padding} z-10 ${theme.spacing.marginTop}`}
      style={{ backgroundImage: "linear-gradient(135deg, #1e293b, #1e40af)" }}
    >
      <div
        className={`xl:w-8/12 h-full grid xl:grid-cols-4 ${theme.spacing.columnGap}`}
      >
        {/* Company info column */}
        <div className="w-full col-span-1 space-y-6 pt-10">
          <ColumnHeader title="Scrubbe" />
          <div className={`w-full ${theme.fonts.body} ${theme.colors.text}`}>
            Advanced SIEM & SOAR security intelligence platform that protects
            your organization from emerging threats.
          </div>
          <div className="flex items-center justify-start mt-2 gap-2">
            <SocialLink icon={FaTwitter} />
            <SocialLink icon={FaLinkedin} />
            <SocialLink icon={FaGithub} />
            <SocialLink icon={FaDiscord} />
          </div>
        </div>

        {/* Generate columns based on data */}
        {columns.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
