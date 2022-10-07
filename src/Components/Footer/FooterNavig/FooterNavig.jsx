import React from "react";
import "./FooterNavig.sass";

const Information = [
  {
    id: 0,
    name: "About us",
    href: "google.com",
  },
  {
    id: 1,
    name: "About Zip",
    href: "google.com",
  },
];
const PCParts = [
  {
    id: 0,
    name: "CPUS",
    href: "google.com",
  },
  {
    id: 1,
    name: "Add On Cards",
    href: "google.com",
  },
];
const DesktopPCs = [
  {
    id: 0,
    name: "Custom PCs",
    href: "google.com",
  },
  {
    id: 1,
    name: "Servers",
    href: "google.com",
  },
];
const Laptops = [
  {
    id: 0,
    name: "Evryday Use Notebooks",
    href: "google.com",
  },
  {
    id: 1,
    name: "MSI Workstation Series",
    href: "google.com",
  },
];
const Adress = [
  {
    id: 0,
    name: "Address: 1234 Street Adress City Address, 1234",
    phonesTitle: "Phones:",
    phones: "(00) 1234 5678",
  },
];

const FooterNavig = () => {
  return (
    <div className="FooterNavigContainer">
      <div className="FooterNavig">
        <h3 className="FooterNavigItem-title">Information</h3>
        {Information.map((info) => {
          return (
            <div className="FooterNavigItem" key={info.id}>
              <a className="FooterNavigItem-a" href={info.href} key={info.id}>
                {info.name}
              </a>
            </div>
          );
        })}
      </div>

      <div className="FooterNavig">
        <h3 className="FooterNavigItem-title">PCParts</h3>
        {PCParts.map((parts) => {
          return (
            <div className="FooterNavigItem" key={parts.id}>
              <a className="FooterNavigItem-a" href={parts.href} key={parts.id}>
                {parts.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="FooterNavig">
        <h3 className="FooterNavigItem-title">DesktopPCs</h3>
        {DesktopPCs.map((desktop) => {
          return (
            <div className="FooterNavigItem" key={desktop.id}>
              <a
                className="FooterNavigItem-a"
                href={desktop.href}
                key={desktop.id}
              >
                {desktop.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="FooterNavig">
        <h3 className="FooterNavigItem-title">Laptops</h3>
        {Laptops.map((laptop) => {
          return (
            <div className="FooterNavigItem" key={laptop.id}>
              <a
                className="FooterNavigItem-a"
                href={laptop.href}
                key={laptop.id}
              >
                {laptop.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="FooterNavig">
        <h3 className="FooterNavigItem-title">Adress</h3>
        {Adress.map((adress) => {
          return (
            <div className="FooterNavigItem" key={adress.id}>
              <a
                className="FooterNavigItem-a"
                href={adress.href}
                key={adress.id}
              >
                {adress.name}
              </a>
              <span className="FooterNavigItem-span">
                {adress.phonesTitle}
                <a href={`tel:${adress.phones}`}>{adress.phones}</a>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNavig;
