export type ChecklistType = {
  [key: string]: {
    tasks: string[]
    links?: { text: string; url: string }[]
  }[]
}

export type ChecklistItem = {
  title: string
  tasks: string[]
  links?: { text: string; url: string }[]
}

export const seoChecklist = {
  'Keyword Research': [
    {
      tasks: [
        'Ensure you are targeting the right keyword',
        'Avoid targeting the same keyword repeatedly'
      ],
      links: [
        {
          text: 'Google Keyword Planner',
          url: 'https://ads.google.com/home/tools/keyword-planner/'
        },
        {
          text: 'SEMrush',
          url: 'https://www.semrush.com/'
        },
        {
          text: 'Ahrefs',
          url: 'https://ahrefs.com/'
        }
      ]
    }
  ],
  'On-Page Optimization': [
    {
      tasks: [
        'Include variations and synonyms of your primary keyword in the copy',
        'Ensure your page satisfies search intent',
        'Include your primary keyword in the title',
        'Ensure your title is enticing for clicks',
        'Consider adding modifiers to your title',
        'Maximize your title tag real estate',
        'Wrap your page title in an H1 tag',
        'Include your primary keyword in the meta description',
        'Craft a compelling meta description',
        'Optimize your URL structure',
        'Ensure your primary keyword appears early in the copy',
        'Avoid overly aggressive keyword density',
        'Ensure your page offers unique and superior value compared to competitors',
        'Proofread your copy for spelling and grammatical errors',
        'Ensure your copy exceeds the length of competitors',
        'Write clear and engaging copy',
        'Format your copy for easy scanning',
        'Ensure your copy is easily understandable',
        'Craft engaging and concise paragraphs',
        'Organize headings logically',
        'Use descriptive headings that include keyword variations',
        'Utilize bullet points and numbered lists for clarity',
        'Regularly update your content'
      ]
    }
  ],
  'Images': [
    {
      tasks: [
        'Include as many or more high-quality images than competitors',
        'Ensure images are unique and relevant',
        'Use high-quality images in appropriate formats',
        'Resize and compress large images or convert to webp format',
        'Optimize image file names and descriptions'
      ],
      links: [
        {
          text: 'Image Compression Tool',
          url: 'https://tinypng.com'
        },
        {
          text: 'WebP Converter',
          url: 'https://convertio.co/png-webp'
        },
        {
          text: 'Image SEO Guide',
          url: 'https://ahrefs.com/blog/image-seo/'
        }
      ]
    }
  ],
  'Video Content': [
    {
      tasks: [
        'Consider adding relevant video content. Ensure videos are relevant and valuable. Host videos on suitable platforms and optimize them'
      ],
      links: [
        {
          text: 'Video SEO Guide',
          url: 'https://ahrefs.com/blog/video-seo/'
        }
      ]
    }
  ],
  'Internal Links': [
    {
      tasks: [
        'Include relevant internal links with descriptive anchor text',
        'Prioritize internal links based on first link priority',
        'Include breadcrumbs for navigation',
        'Ensure all internal links are useful and correctly formatted'
      ]
    }
  ],
  'External Links': [
    {
      tasks: [
        'Include relevant external links with appropriate attributes',
        "Use 'NoFollow' tags for affiliate, sponsored, or paid links",
        'Set external links to open in new tabs if necessary'
      ]
    }
  ],
  'Link Management': [
    {
      tasks: [
        'Regularly check for broken links',
        'Ensure links are clearly distinguishable from text'
      ],
      links: [
        {
          text: 'Broken Link Checker',
          url: 'https://ahrefs.com/broken-link-checker/'
        },
        {
          text: 'Screaming Frog SEO Spider',
          url: 'https://www.screamingfrog.co.uk/seo-spider/'
        }
      ]
    }
  ],
  'Page Speed and Mobile Optimization': [
    {
      tasks: [
        'Optimize page speed to load in less than 3 secs',
        'Ensure responsiveness and mobile-friendliness'
      ],
      links: [
        {
          text: 'PageSpeed Insights',
          url: 'https://developers.google.com/speed/pagespeed/insights/'
        },
        {
          text: 'Mobile-Friendly Test',
          url: 'https://search.google.com/test/mobile-friendly'
        }
      ]
    }
  ],
  'Security and Legibility': [
    {
      tasks: [
        'Install and maintain an SSL certificate',
        'Use legible font types and sizes on all devices',
        'Avoid aggressive interstitials and ad placements'
      ],
      links: [
        {
          text: 'Test SSL Certificate',
          url: 'https://www.sslshopper.com/ssl-checker.html'
        }
      ]
    }
  ],
  'Structured Data (Schema Markup - LD + JSON)': [
    {
      tasks: [
        'Display your address prominently and utilize structured data',
        'Implement structured data correctly'
      ],
      links: [
        {
          text: 'Learn more',
          url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'
        },
        {
          text: 'Schema Markup Generator',
          url: 'https://technicalseo.com/tools/schema-markup-generator/'
        },
        {
          text: 'Schema Markup Validator',
          url: 'https://validator.schema.org/'
        },
        {
          text: 'Google Rich Results Test',
          url: 'https://search.google.com/test/rich-results'
        }
      ]
    }
  ],
  'Content Management': [
    {
      tasks: [
        'Include appropriate disclaimers for health, financial, or legal content',
        'List and link to all sources of information',
        'Provide visible authorship for blog content',
        'Ensure authors are credible and qualified',
        'Include detailed author boxes and pages'
      ]
    }
  ],
  'User Engagement': [
    {
      tasks: [
        'Include clear calls-to-action',
        'Encourage sharing of your content'
      ]
    }
  ],
  'Website Design': [
    {
      tasks: ['Maintain a modern and updated website design'],
      links: [
        {
          text: 'Design Inspiration',
          url: 'https://www.awwwards.com/'
        },
        {
          text: 'Tailwind CSS',
          url: 'https://tailwindcss.com/'
        },
        {
          text: 'DaisyUI',
          url: 'https://daisyui.com/'
        },
        {
          text: 'Material UI',
          url: 'https://material-ui.com/'
        }
      ]
    }
  ],
  'Technical Implementation': [
    {
      tasks: [
        'Implement OG tags, OG images, canonical links & sitemap.xml',
        'Create robots.txt and add sitemap to it',
        'Ensure private pages are hidden from robots.txt',
        'Add page to Google Search Console and check for errors Add sitemap.xml',
        'Add page to Bing Webmaster Tools and check for errors. Add sitemap.xml',
        'Verify all links lead to the correct destinations'
      ],
      links: [
        {
          text: 'Google Search Console',
          url: 'https://search.google.com/search-console'
        },
        {
          text: 'Bing Webmaster Tools',
          url: 'https://www.bing.com/webmasters/'
        },
        {
          text: 'Sitemap Generator',
          url: 'https://www.xml-sitemaps.com/'
        },
        {
          text: 'Sitemap Validator',
          url: 'https://www.xml-sitemaps.com/validate-xml-sitemap.html'
        },
        {
          text: 'Robots.txt Tester',
          url: 'https://technicalseo.com/tools/robots-txt/'
        }
      ]
    }
  ]
}
