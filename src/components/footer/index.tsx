import { ChevronRight } from "lucide-react";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

// Centralized theme configuration - keeping only shared/reused styles
const theme = {
  colors: {
    text: "text-[#ebeaff]", // Light purple text color - used in multiple places
  },
  spacing: {
    columnGap: "gap-8",
  },
  fonts: {
    title: "font-semibold font-Montserrat text-xl",
    body: "font-Raleway text-sm",
    linkText: "font-Montserrat text-sm",
  },
};

// Component-specific styles grouped together
const componentStyles = {
  footer: {
    container:
      "h-auto w-full flex justify-center px-4 py-10 sm:pt-0 sm:px-0 sm:pb-8 z-10 mt-20 border-black border-t-[8px]",
    background: "linear-gradient(135deg, #1e293b, #1e40af)",
    innerContainer: "xl:w-8/12 h-full grid xl:grid-cols-4 py-10",
  },
  socialLink: {
    container:
      "w-fit h-fit p-2 items-center rounded-full flex hover:-translate-y-1 cursor-pointer hover:bg-green-500 transition-all justify-center bg-slate-600",
  },
  footerLink: {
    container: "flex items-center justify-start gap-1 mb-4",
    text: "w-fit gap-1 h-fit items-center rounded-full flex cursor-pointer hover:text-green-400 transition-all justify-start",
  },
  column: {
    container: "w-full col-span-1 space-y-6 pt-10",
    headerContainer: "w-full space-y-2",
    accent: "w-10 h-1 bg-green-400 rounded-full",
    linkContainer: "mt-4",
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
  <div className={componentStyles.socialLink.container}>
    <Icon size={20} color="#ffffff" />
  </div>
);

// Footer link component
const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <div className={componentStyles.footerLink.container}>
    <div className={`${componentStyles.footerLink.text} ${theme.colors.text}`}>
      <ChevronRight size={18} />
      <div className={`w-fit h-fit ${theme.fonts.linkText}`}>{text}</div>
    </div>
  </div>
);

// Column header component
const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title }) => (
  <div className={componentStyles.column.headerContainer}>
    <div className={`w-fit h-fit ${theme.fonts.title} ${theme.colors.text}`}>
      {title}
    </div>
    <div className={componentStyles.column.accent}></div>
  </div>
);

// Column component
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className={componentStyles.column.container}>
    <ColumnHeader title={title} />
    <div className={componentStyles.column.linkContainer}>
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
      className={componentStyles.footer.container}
      style={{ backgroundImage: componentStyles.footer.background }}
    >
      <div
        className={`${componentStyles.footer.innerContainer} ${theme.spacing.columnGap}`}
      >
        {/* Company info column */}
        <div className={componentStyles.column.container}>
          <ColumnHeader title="Scrubbe" />
          <div className={`w-full ${theme.fonts.body} ${theme.colors.text}`}>
            Advanced SIEM & SOAR security intelligence platform that protects
            your organization from emerging threats.
          </div>
          <div className="flex items-center justify-start mt-4 gap-2">
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
