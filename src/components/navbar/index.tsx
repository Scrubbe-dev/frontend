"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as HeroLink, // Renamed to avoid conflict
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Input,
  Divider,
} from "@heroui/react";
import { BookCheck, ChevronDown, Contact, Globe, Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function MainModal({
  children,
  iconComponent,
}: {
  children: React.ReactNode;
  iconComponent: React.ReactNode;
}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-fit h-fit" onClick={onOpen}>
        {iconComponent}
      </div>
      <Modal
        className="p-0 m-0"
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        classNames={{
          closeButton: "z-40",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="p-0 m-0">
          <ModalBody className="p-0 m-0">{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export function SubDropdownMenu({
  title,
  items,
}: {
  title: string;
  items?: { label: string; description: string; icon: React.ReactNode }[];
}) {
  // Default items if none are provided
  const menuItems = items || [
    {
      label: "Contact us",
      description: "Contact us for more info concerning scrubbe",
      icon: <Contact size={25} />,
    },
    {
      label: "About us",
      description: "Learn more about scrubbe",
      icon: <BookCheck size={25} />,
    },
  ];

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent font-Poppins text-[15px] data-[hover=true]:bg-transparent outline-none border-none"
            endContent={<ChevronDown size={15} />}
            radius="sm"
            variant="light"
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={`${title.toLowerCase()} menu`}
        itemClasses={{
          base: "gap-4",
        }}
      >
        {menuItems.map((item, index) => (
          <DropdownItem
            key={`${item.label}-${index}`}
            description={item.description}
            startContent={item.icon}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const mainMenuItem = [
    {
      title: "Features",
      submenu: [
        {
          label: "Core Features",
          description: "Explore our main product features",
          icon: <BookCheck size={25} />,
        },
        {
          label: "Advanced Features",
          description: "Discover our premium capabilities",
          icon: <BookCheck size={25} />,
        },
      ],
    },
    {
      title: "Solutions",
      submenu: [
        {
          label: "Enterprise",
          description: "Solutions for large organizations",
          icon: <BookCheck size={25} />,
        },
        {
          label: "Small Business",
          description: "Tailored for small teams",
          icon: <BookCheck size={25} />,
        },
      ],
    },
    {
      title: "Pricing",
      link: "/",
    },
    {
      title: "Documentation",
      link: "/",
    },
    {
      title: "More",
      submenu: [
        {
          label: "Contact us",
          description: "Contact us for more info concerning scrubbe",
          icon: <Contact size={25} />,
        },
        {
          label: "About us",
          description: "Learn more about scrubbe",
          icon: <BookCheck size={25} />,
        },
      ],
    },
  ];

  const menuItems = [
    "Features",
    "Solutions",
    "Pricing",
    "Documentation",
    "Contact",
    "Login",
    "Log Out",
  ];

  return (
    <Navbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden" // Changed from sm:hidden to lg:hidden
        />
        <NavbarBrand className="gap-2">
          <Link
            href="/"
            className="relative w-[141px] h-[40px] sm:w-[176px] sm:h-[50px] lg:w-[211px] lg:h-[60px]"
          >
            <Image
              src="/scrubbe-logo-01.png"
              alt="scrubbe-logo-01.png"
              fill
              sizes="(min-width: 360px) 100vw"
              className="object-contain"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-6" justify="center">
        {" "}
        {/* Changed from sm:flex to lg:flex */}
        {mainMenuItem.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {!item.submenu ? (
                <NavbarItem className="px-1" key={index}>
                  <HeroLink
                    color="foreground"
                    className="font-Poppins text-[15px] "
                    href={item.link}
                  >
                    {item.title}
                  </HeroLink>
                </NavbarItem>
              ) : (
                <NavbarItem className="-mx-2" key={index}>
                  <SubDropdownMenu title={item.title} items={item.submenu} />
                </NavbarItem>
              )}
            </React.Fragment>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex cursor-pointer">
          {" "}
          {/* This was already using lg:flex */}
          <MainModal
            iconComponent={
              <Search className="text-foreground" color="gray" size={24} />
            }
          >
            <div className="w-full !h-[300px]">
              <div className="w-full h-fit">
                <Input
                  placeholder="Search Documentation"
                  type="text"
                  variant="faded"
                  classNames={{
                    inputWrapper: "bg-transparent border-none shadow-none",
                    input: "placeholder:font-Poppins pl-4 ",
                    mainWrapper: "py-1",
                  }}
                  startContent={<Search size={20} />}
                />
                <Divider />
              </div>
              <div className="w-full h-full overflow-y-hidden">
                <ScrollArea className="w-full h-[400px] bg-gray-50">
                  <ScrollBar />
                </ScrollArea>
              </div>
            </div>
          </MainModal>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex cursor-pointer">
          {" "}
          {/* This was already using lg:flex */}
          <Globe size={24} color="gray" />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="font-Poppins bg-[#2563eb] text-white rounded-sm font-semibold"
            as={HeroLink}
            color="default"
            href="#"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <HeroLink
              className="w-full font-Poppins "
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="md"
            >
              {item}
            </HeroLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default MainNavbar;
