import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BeerIcon, TreesIcon, HomeIcon, BuildingIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';

const BusinessCard = ({ title, icon, children, contacts }) => (
  <Card className="hover:shadow-xl transition-shadow border-border">
    <CardHeader>
      <CardTitle className="flex items-center text-card-foreground">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-muted-foreground">
        {children}
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        {contacts.map((contact, index) => (
          <a key={index} href={contact.href} className="flex items-center text-primary hover:opacity-80 transition-opacity font-medium">
            {contact.icon}
            {contact.label}
          </a>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Businesses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-8 text-foreground">Local Businesses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BusinessCard
          title="The Crown Inn"
          icon={<BeerIcon className="h-6 w-6 mr-2 text-amber-600" />}
          contacts={[
            { href: "tel:+441403710902", icon: <PhoneIcon className="h-4 w-4 mr-1" />, label: "Call" },
            { href: "mailto:info@crown-inn-dialpost.co.uk", icon: <MailIcon className="h-4 w-4 mr-1" />, label: "Email" },
            { href: "https://www.thecrowninndialpost.com", icon: <GlobeIcon className="h-4 w-4 mr-1" />, label: "Website" }
          ]}
        >
          <p className="mb-4">An award-winning free house owned and run by Penny and James Middleton-Burn. Known for excellent home-made food, local Sussex breweries, and a welcoming atmosphere.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Daily menu of pub classics and seasonal specials</li>
            <li>Four beautifully appointed rooms and two self-catering cottages</li>
            <li>Dog-friendly with a beer garden and patio</li>
            <li>Close to excellent walks and the Knepp Castle Estate</li>
          </ul>
        </BusinessCard>
        
        <BusinessCard
          title="Knepp Estate"
          icon={<TreesIcon className="h-6 w-6 mr-2 text-green-600" />}
          contacts={[
            { href: "tel:+441403713230", icon: <PhoneIcon className="h-4 w-4 mr-1" />, label: "Call" },
            { href: "mailto:safaris@knepp.co.uk", icon: <MailIcon className="h-4 w-4 mr-1" />, label: "Email" },
            { href: "https://knepp.co.uk", icon: <GlobeIcon className="h-4 w-4 mr-1" />, label: "Website" }
          ]}
        >
          <p className="mb-4">A pioneering rewilding project spread across 3,500 acres. Knepp Estate offers wildlife safaris, glamping experiences, and educational tours about conservation and biodiversity.</p>
        </BusinessCard>
        
        <BusinessCard
          title="Tates Old Barn Garden Centre"
          icon={<HomeIcon className="h-6 w-6 mr-2 text-blue-600" />}
          contacts={[
            { href: "tel:+441403710000", icon: <PhoneIcon className="h-4 w-4 mr-1" />, label: "Call" },
            { href: "https://www.tatesofsussex.co.uk/garden-centres/old-barn/", icon: <GlobeIcon className="h-4 w-4 mr-1" />, label: "Website" }
          ]}
        >
          <p className="mb-4">Part of the Tates Group since 2018, Old Barn Garden Centre has been transformed into a destination garden centre with a 200-seater restaurant and coffee shop. It offers a wide range of plants, garden supplies, and home decor items.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Extensive plant nursery with knowledgeable staff</li>
            <li>Garden and Lifestyle shop for home and garden inspiration</li>
            <li>Wide range of garden buildings, hot tubs, and conservatories</li>
            <li>200-seater restaurant and coffee shop</li>
            <li>The Garden Room available for events and functions</li>
          </ul>
        </BusinessCard>
        
        <BusinessCard
          title="Thakeham Furniture"
          icon={<BuildingIcon className="h-6 w-6 mr-2 text-red-600" />}
          contacts={[
            { href: "tel:+441403713649", icon: <PhoneIcon className="h-4 w-4 mr-1" />, label: "Call" },
            { href: "mailto:info@thakehamfurniture.co.uk", icon: <MailIcon className="h-4 w-4 mr-1" />, label: "Email" },
            { href: "https://www.thakehamfurniture.co.uk", icon: <GlobeIcon className="h-4 w-4 mr-1" />, label: "Website" }
          ]}
        >
          <p className="mb-4">A family-run antique furniture business established in 1987 by Tim and Belinda Chavasse. Thakeham Furniture specializes in high-quality Georgian furniture with an emphasis on color and patina. Their large showroom in Dial Post, West Sussex, is housed in a characterful old engineering works with ample natural light.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Specializes in Georgian furniture</li>
            <li>Emphasis on color and patina</li>
            <li>Skilled restoration services</li>
            <li>Family-run business since 1987</li>
          </ul>
        </BusinessCard>
        </div>
        <Link to="/" className="mt-8 inline-flex items-center text-primary hover:opacity-80 font-semibold transition-opacity">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Businesses;
