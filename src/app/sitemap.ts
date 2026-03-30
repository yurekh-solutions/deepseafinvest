import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://deepseafinvest.com';

  const routes = [
    '',
    '/contact',
    '/equity',
    '/alternates',
    '/disclaimer',
    '/privacy-policy',
    '/terms-conditions',
    '/start-your-journey',
    '/start-financial-planning',
    // Insurance
    '/insurance/why-life-insurance',
    '/insurance/life-insurance-products',
    '/insurance/general-insurance',
    '/insurance/premium-calculator',
    // Fixed Income
    '/fixed-income/fixed-income-products',
    '/fixed-income/fd-calculator',
    '/fixed-income/recurring-deposits-calculator',
    // Mutual Funds
    '/mutual-funds/why-mutual-funds',
    '/mutual-funds/why-sip',
    '/mutual-funds/start-an-sip',
    '/mutual-funds/sip-calculator',
    '/mutual-funds/sip-delay',
    '/mutual-funds/goal-calculator',
    '/mutual-funds/retirement-planner',
    '/mutual-funds/child-education-planner',
    '/mutual-funds/mf-growth-calculator',
    '/mutual-funds/funds-at-glance',
    '/mutual-funds/industry-top-performers',
    '/mutual-funds/our-favourite-funds',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
