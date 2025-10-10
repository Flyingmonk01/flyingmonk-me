'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  name,
  description,
  icon,
  playStoreUrl,
  appStoreUrl,
  websiteUrl,
}) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            {name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {playStoreUrl && (
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <span className="mr-1">Play Store</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {appStoreUrl && appStoreUrl !== 'Coming Soon' ? (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <span className="mr-1">App Store</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : appStoreUrl === 'Coming Soon' ? (
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-muted-foreground">
              Coming Soon
            </span>
          ) : null}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <span className="mr-1">Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export function Apps() {
  const applications = [
    {
      name: '91Astrology',
      description: 'Connect with expert astrologers for personalized horoscope readings and astrological guidance.',
      icon: '✨',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nintyoneastrology.app',
      appStoreUrl: 'https://apps.apple.com/us/app/91astrology-talk-to-astrologer/id6477274013',
      websiteUrl: 'https://91astrology.com',
    },
    {
      name: '91Astrology for Astrologers',
      description: 'Professional platform for astrologers to connect with clients and provide consultations.',
      icon: '🔮',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ninetyoneastrology.astrologerapp',
      appStoreUrl: 'Coming Soon',
    },
    {
      name: '91Wheels',
      description: 'Your one-stop solution for new and used car & bike purchases with expert reviews and comparisons.',
      icon: '🚗',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nintyonewheels.app',
      appStoreUrl: 'https://apps.apple.com/us/app/91wheels/id6752908626',
      websiteUrl: 'https://91wheels.com',
    },
    {
      name: '91Connect',
      description: 'Connect with automotive dealers and get the best deals on your vehicle purchase.',
      icon: '🤝',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dms.ninetyonewheels.app',
      appStoreUrl: 'https://apps.apple.com/us/app/91connect/id6746147749',
    },
  ];

  return (
    <section className="py-12 md:py-24 mt-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Applications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the applications I've developed and published on app stores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AppCard {...app} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}