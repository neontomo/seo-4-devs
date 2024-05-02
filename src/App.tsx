/* 

TODO:
- Add footer with links to Github, Twitter, LinkedIn and my name
- Add a "copy all" button
- Add a "reset all" button
- Link to Github repo
- link to Github checklist

*/

import Message from './components/Message'
import { SmallView, BigView } from './components/Views'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import { ArrowSquareOut, Copy, Envelope } from '@phosphor-icons/react'
import { ChecklistItem, ChecklistType, seoChecklist } from './assets/checklist'
import * as yup from 'yup'

function App() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')
  const [ogImage, setOgImage] = useState('')
  const [googleAnalyticsId, setGoogleAnalyticsId] = useState('')
  const [facebookMetaTags, setFacebookMetaTags] = useState('')
  const [twitterMetaTags, setTwitterMetaTags] = useState('')
  const [googleAnalyticsScript, setGoogleAnalyticsScript] = useState('')
  const [basicSEOTags, setBasicSEOTags] = useState('')
  const [messages, setMessages] = useState<{ message: string; type: string }[]>(
    []
  )

  const inputs = [
    {
      name: 'title',
      label: 'Your website title',
      type: 'text',
      update: setTitle,
      minLength: 60,
      yup: yup.string(),
      yupError: 'Please provide a valid title'
    },
    {
      name: 'url',
      label: 'Your website URL (including https://)',
      type: 'text',
      update: setUrl,
      minLength: 1,
      yup: yup.string().url(),
      yupError: 'Please provide a valid URL',
      links: [
        {
          title: 'Learn about Canonical links',
          url: 'https://yoast.com/rel-canonical/'
        }
      ]
    },
    {
      name: 'description',
      label: 'Your website description (what do you offer?)',
      type: 'text',
      update: setDescription,
      minLength: 160,
      yup: yup.string().min(30),
      yupError: 'Please provide a valid description of at least 30 characters'
    },
    {
      name: 'keywords',
      label: 'Site keywords (comma separated)',
      type: 'text',
      update: setKeywords,
      minLength: 160,
      yup: yup.string().min(30),
      yupError: 'Please provide valid keywords of at least 30 characters'
    },
    {
      name: 'ogImage',
      label: 'Your website OG image (full URL, PNG, 1200 x 630px)',
      type: 'text',
      update: setOgImage,
      minLength: 1,
      yup: yup.string().url(),
      yupError: 'Please provide a valid URL for your image',
      links: [
        {
          title: 'Need an image?',
          url: 'https://placid.app/tools/free-open-graph-image-generator'
        },
        {
          title: 'Test your image',
          url: 'https://www.opengraph.xyz/'
        }
      ]
    },
    {
      name: 'googleAnalyticsId',
      label: 'Google Analytics ID (G-XXXXXXXXXX)',
      type: 'text',
      update: setGoogleAnalyticsId,
      minLength: 1,
      yup: yup
        .string()
        .min(5)
        .max(15)
        .matches(/g-([a-z0-9]+)/i),
      yupError: 'Please provide a valid Google Analytics ID',
      links: [
        {
          title: 'Need an ID?',
          url: 'https://analytics.google.com/analytics/web/'
        },
        {
          title: 'Find your ID',
          url: 'https://tagmanager.google.com/'
        }
      ]
    }
  ]

  const externalTools = [
    {
      title: 'Screaming Frog SEO Spider',
      onClick: () => {
        window.open('https://www.screamingfrog.co.uk/seo-spider/', '_blank')
      }
    },
    {
      title: 'Facebook Debugger',
      onClick: () => {
        window.open(`https://developers.facebook.com/tools/debug/?q=${url}`)
      }
    },
    {
      title: 'Twitter Card Validator',
      onClick: () => {
        window.open('https://cards-dev.twitter.com/validator', '_blank')
      }
    },
    {
      title: 'LinkedIn Post Inspector',
      onClick: () => {
        window.open('https://www.linkedin.com/post-inspector/', '_blank')
      }
    },
    {
      title: 'OG Image Checker',
      onClick: () => {
        window.open(`https://www.opengraph.xyz/`, '_blank')
      }
    },
    {
      title: 'SEOptimer Checker',
      onClick: () => {
        const domain = url
          .replace(/(https?:\/\/)?(www.)?/i, '')
          .replace(/\/$/, '')

        window.open(`https://www.seoptimer.com/${domain}`, '_blank')
      }
    },
    {
      title: 'Rich Results Test',
      onClick: () => {
        window.open(
          `https://search.google.com/test/rich-results?url=${url}`,
          '_blank'
        )
      }
    },
    {
      title: 'Schema Markup Validator',
      onClick: () => {
        window.open(`https://validator.schema.org/`, '_blank')
      }
    },
    {
      title: 'Favicon Generator',
      onClick: () => {
        window.open(`https://realfavicongenerator.net/`, '_blank')
      }
    },
    {
      title: 'Favicon Checker',
      onClick: () => {
        let domain = url
          .replace(/(https?:\/\/)?(www.)?/i, '')
          .replace(/\/$/, '')

        if (domain) {
          domain = `?protocol=https&site=${encodeURIComponent(domain)}`
        }

        window.open(
          `https://realfavicongenerator.net/favicon_checker${domain}`,
          '_blank'
        )
      }
    },
    {
      title: 'Keyword Planner',
      onClick: () => {
        window.open(`https://ads.google.com/aw/keywordplanner/home`, '_blank')
      }
    }
  ]

  const handleClickCopyButton = (textareaId: string) => {
    createMessage(
      'Copied to clipboard, now paste in <head> tag of your site',
      'success'
    )
    navigator.clipboard.writeText(
      document.getElementById(textareaId)?.textContent || ''
    )

    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement

    if (textarea) {
      textarea.click()
    }
  }

  const testURL = () => {
    if (!url || url.length < 1 || !url.includes('http')) {
      return false
    }
    return true
  }

  const createMessage = (message: string, type: string) => {
    setMessages([{ message, type }, ...messages])
  }

  useEffect(() => {
    if (messages.length > 0) {
      const x = setTimeout(() => {
        setMessages(messages.slice(0, messages.length - 1))
      }, 3000)

      return () => {
        clearTimeout(x)
      }
    }
  }, [messages])

  const generateTagOrError = (
    property: string,
    value: string | undefined,
    errorInfo: string
  ) => {
    if (value) {
      return `<meta property="og:${property}" content="${value}" />`
    } else {
      return `<!-- ERROR - Missing info: ${errorInfo} -->`
    }
  }

  const generateLinkOrError = (
    rel: string,
    href: string | undefined,
    errorInfo: string
  ) => {
    if (href) {
      return `<link rel="${rel}" href="${href}" />`
    } else {
      return `<!-- ERROR - Missing info: ${errorInfo} -->`
    }
  }

  const generateFacebookMetatags = () => {
    if (!url && !description && !title && !ogImage) {
      setFacebookMetaTags('')
      return
    }
    if (!testURL()) setUrl('')

    const tags = [
      `<!-- Facebook meta tags -->`,
      generateTagOrError('url', url, 'URL'),
      `<meta property="og:type" content="website" />`,
      generateTagOrError('title', title, 'Title'),
      generateTagOrError('description', description, 'Description'),
      generateTagOrError('image', ogImage, 'OG image')
    ]

    setFacebookMetaTags(tags.join('\n'))
  }

  const generateTwitterMetatags = () => {
    if (!url && !description && !title && !ogImage) {
      setTwitterMetaTags('')
      return
    }
    const tags = [
      `<!-- Twitter meta tags -->`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta property="twitter:domain" content="neontomo.com" />`,
      generateTagOrError('url', url, 'URL'),
      generateTagOrError('title', title, 'Title'),
      generateTagOrError('description', description, 'Description'),
      generateTagOrError('image', ogImage, 'OG image')
    ]

    setTwitterMetaTags(tags.join('\n'))
  }

  const generateGoogleAnalytics = () => {
    if (!googleAnalyticsId) {
      setGoogleAnalyticsScript('')
      return
    }
    const script = [
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}"></script>`,
      `<script>`,
      `window.dataLayer = window.dataLayer || [];`,
      `function gtag(){ dataLayer.push(arguments); }`,
      `gtag('js', new Date());`,
      `gtag('config', '${googleAnalyticsId}');`,
      `</script>`
    ].join('\n')

    setGoogleAnalyticsScript(script)
  }

  const generateBasicSEOTags = () => {
    if (!url && !description && !title && !keywords) {
      setBasicSEOTags('')
      return
    }
    const tags = [
      `<!-- Basic SEO tags -->`,
      generateLinkOrError('canonical', url, 'URL'),
      description
        ? `<meta name="description" content="${description}" />`
        : `<!-- ERROR - Missing info: Description -->`,
      keywords
        ? `<meta name="keywords" content="${keywords}" />`
        : `<!-- ERROR - Missing info: Keywords -->`
    ]

    setBasicSEOTags(tags.join('\n'))
  }

  useEffect(() => {
    generateFacebookMetatags()
    generateTwitterMetatags()
    generateGoogleAnalytics()
    generateBasicSEOTags()
  }, [url, description, title, ogImage, googleAnalyticsId, keywords])

  return (
    <main className="flex flex-col min-h-[100vh]">
      <div className="my-32 grow">
        <SmallView noGap>
          <nav className="flex flex-col gap-4 mb-16">
            <h1 className="text-center m-0">SEO 4 Devs</h1>
            <h4 className="text-center m-0">
              Work hard on your next client instead
            </h4>
          </nav>

          <form className="flex flex-col gap-4 w-full mx-auto">
            {inputs.map((input, index) => (
              <div
                className="grid grid-cols-1 gap-2 w-full box-border"
                key={index}>
                <input
                  id={`input-${input.name}`}
                  className={`px-4 w-full box-border text-xs`}
                  type={input.type}
                  placeholder={input.label}
                  autoFocus={index === 0}
                  onBlur={(e) => {
                    if (
                      input.yup &&
                      !input.yup.isValidSync(e.target.value.trim())
                    ) {
                      createMessage(
                        input.yupError || 'Please provide valid info',
                        'error'
                      )
                      return
                    }
                  }}
                  onChange={(e) => {
                    input.update(e.target.value.trim())
                    const progress = e.target.value.trim().length
                    const progressElement = document.getElementById(
                      `progress-${input.name}`
                    )
                    const progressValueElement = document.getElementById(
                      `progress-${input.name}-value`
                    )
                    if (progressValueElement) {
                      progressValueElement.innerText = progress.toString()
                    }
                    if (progressElement && input.minLength) {
                      progressElement.setAttribute('value', progress.toString())
                      if (progress > input.minLength) {
                        progressElement.classList.remove('progress-success')
                        progressElement.classList.remove('progress-warning')
                        progressElement.classList.add('progress-error')
                      } else if (progress < input.minLength / 2) {
                        progressElement.classList.remove('progress-error')
                        progressElement.classList.remove('progress-success')
                        progressElement.classList.add('progress-warning')
                      } else {
                        progressElement.classList.remove('progress-error')
                        progressElement.classList.remove('progress-warning')
                        progressElement.classList.add('progress-success')
                      }
                    }
                  }}
                />
                {input.links && (
                  <div className="flex flex-row gap-4 items-center justify-end text-xs">
                    {input.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer">
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
                {input.minLength && input.minLength > 1 && (
                  <div className="text-xs m-0 mb-6">
                    <div className="flex flex-row gap-4 items-center text-xs text-gray-500">
                      <span className="p-0">
                        <span id={`progress-${input.name}-value`}>0</span>/
                        {input.minLength}
                      </span>
                      <progress
                        id={`progress-${input.name}`}
                        className="progress progress-warning w-full"
                        value={0}
                        max={input.minLength}></progress>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </form>
          <div className="flex flex-row gap-4 justify-center my-6">
            <Button
              text="Get results"
              onClick={() => {
                document
                  .getElementById('header-results')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
            <Button
              text="Test with fake data"
              onClick={() => {
                const fakeData = {
                  title: 'Tomo Myrman - Software Developer Consultant for hire',
                  url: 'https://neontomo.com',
                  description:
                    'I build websites, make products and implement search engine optimisations to help you grow your business or project.',
                  keywords:
                    'software developer consultant, developer, web design, websites, build websites, SEO, consultant, entrepreneur, web developer, web designer, hire, neontomo, tomo myrman',
                  ogImage: 'https://neontomo.com/img/metatags.png',
                  googleAnalyticsId: 'G-ZNRHESS7KL'
                }
                setTitle(fakeData.title)
                setUrl(fakeData.url)
                setDescription(fakeData.description)
                setKeywords(fakeData.keywords)
                setOgImage(fakeData.ogImage)
                setGoogleAnalyticsId(fakeData.googleAnalyticsId)

                Object.entries(fakeData).forEach(([key, value]) => {
                  const inputElement = document.getElementById(
                    `input-${key}`
                  ) as HTMLInputElement
                  if (!inputElement) return
                  inputElement.value = value
                })

                document
                  .getElementById('header-results')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </div>
        </SmallView>
        <BigView>
          <div>
            <h2
              className="text-center"
              id="header-results">
              Results
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card
                title="Basic SEO Tags"
                children={
                  <textarea
                    id="textarea-basic"
                    placeholder="Basic SEO tags will appear here."
                    className="textarea textarea-bordered textarea-lg w-full box-border h-48 text-xs no-scrollbar"
                    value={basicSEOTags}
                    readOnly
                    onClick={(e) => {
                      e.currentTarget.select()
                    }}></textarea>
                }
                detailsDescription="Paste this in your head tag. Basic SEO tags."
                details={[
                  `Canonical link - tells search engines the main URL`,
                  `Description - what your site is about`,
                  `Keywords - important words for your site`
                ]}
                actions={
                  <>
                    <Button
                      icon={<Copy />}
                      text="Copy HTML"
                      onClick={() => {
                        if (!testURL()) {
                          createMessage(
                            'Please provide a URL for your site first',
                            'error'
                          )
                          return
                        }
                        handleClickCopyButton('textarea-basic')
                      }}
                    />
                  </>
                }
              />

              <Card
                title="Facebook Meta Tags"
                children={
                  <textarea
                    id="textarea-facebook"
                    placeholder="Facebook metatags will appear here."
                    className="textarea textarea-bordered textarea-lg w-full box-border h-48 text-xs no-scrollbar"
                    value={facebookMetaTags}
                    readOnly
                    onClick={(e) => {
                      e.currentTarget.select()
                    }}></textarea>
                }
                detailsDescription="Paste this in your head tag. Ensures your site looks good when shared on Facebook."
                details={[
                  `URL - your site's URL`,
                  `Type - website`,
                  `Title - your site's title`,
                  `Description - your site's description`,
                  `Image - your site's share image`,
                  `Note: Ignore the fb:app_id error when you press the test button`
                ]}
                actions={
                  <>
                    <Button
                      icon={<Copy />}
                      text="Copy HTML"
                      onClick={() => {
                        if (!testURL()) {
                          createMessage(
                            'Please provide a URL for your site first',
                            'error'
                          )
                          return
                        }
                        handleClickCopyButton('textarea-facebook')
                      }}
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="Test"
                      onClick={() => {
                        if (!testURL()) {
                          createMessage(
                            'Please provide a URL for your site first',
                            'error'
                          )
                          return
                        }
                        window.open(
                          `https://developers.facebook.com/tools/debug/?q=${url}`,
                          '_blank'
                        )
                      }}
                    />
                  </>
                }
              />

              <Card
                title="Twitter Meta Tags"
                children={
                  <textarea
                    id="textarea-twitter"
                    placeholder="Twitter metatags will appear here."
                    className="textarea textarea-bordered textarea-lg w-full box-border h-48 text-xs no-scrollbar"
                    value={twitterMetaTags}
                    readOnly
                    onClick={(e) => {
                      e.currentTarget.select()
                    }}></textarea>
                }
                detailsDescription="Paste this in your head tag. Ensures your site looks good when shared on Twitter."
                details={[
                  `Card - summary_large_image`,
                  `Domain - your site domain`,
                  `URL - your site's URL`,
                  `Title - your site's title`,
                  `Description - your site's description`,
                  `Image - your site's share image`
                ]}
                actions={
                  <>
                    <Button
                      icon={<Copy />}
                      text="Copy HTML"
                      onClick={() => {
                        if (!testURL()) {
                          createMessage(
                            'Please provide a URL for your site first',
                            'error'
                          )
                          return
                        }
                        handleClickCopyButton('textarea-twitter')
                      }}
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="Test"
                      onClick={() => {
                        if (!url || url.length < 1 || !url.includes('http')) {
                          createMessage(
                            'Please provide a URL for your site first',
                            'error'
                          )
                          return
                        }
                        window.open(
                          `https://twitter.com/intent/post?text=${url}`,
                          '_blank'
                        )
                      }}
                    />
                  </>
                }
              />

              <Card
                title="Google Analytics"
                children={
                  <textarea
                    id="textarea-ga"
                    placeholder="Google Analytics script will appear here."
                    className="textarea textarea-bordered textarea-lg w-full box-border h-48 text-xs no-scrollbar"
                    value={googleAnalyticsScript}
                    readOnly
                    onClick={(e) => {
                      e.currentTarget.select()
                    }}></textarea>
                }
                detailsDescription="Paste this in your head tag. Requires a Google Analytics account set up first."
                details={[
                  `Async script - loads analytics script`,
                  `Config - sets up analytics w. current date`
                ]}
                actions={
                  <>
                    <Button
                      icon={<Copy />}
                      text="Copy HTML"
                      onClick={() => {
                        if (
                          !googleAnalyticsId ||
                          googleAnalyticsId.length < 1 ||
                          !googleAnalyticsId.toLowerCase().includes('g-')
                        ) {
                          createMessage(
                            'Please provide a Google Analytics ID first',
                            'error'
                          )
                          return
                        }
                        handleClickCopyButton('textarea-ga')
                      }}
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="Google Search Console"
                      onClick={() => {
                        if (
                          !googleAnalyticsId ||
                          googleAnalyticsId.length < 1 ||
                          !googleAnalyticsId.toLowerCase().includes('g-')
                        ) {
                          createMessage(
                            'Please provide a Google Analytics ID first',
                            'error'
                          )
                          return
                        }
                        window.open(
                          `https://search.google.com/search-console`,
                          '_blank'
                        )
                      }}
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="Check Analytics"
                      onClick={() => {
                        if (
                          !googleAnalyticsId ||
                          googleAnalyticsId.length < 1 ||
                          !googleAnalyticsId.toLowerCase().includes('g-')
                        ) {
                          createMessage(
                            'Please provide a Google Analytics ID first',
                            'error'
                          )
                          return
                        }
                        window.open(
                          `https://analytics.google.com/analytics/web/`,
                          '_blank'
                        )
                      }}
                    />
                  </>
                }
              />
            </div>
          </div>
        </BigView>

        <BigView>
          <div>
            <h2 className="text-center">Useful Stuff</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card
                title="External SEO Tools"
                detailsDescription="Check your site with these tools to ensure it's optimised for search engines and social media. As these are external tools, I can't guarantee their availability or accuracy."
                actions={
                  <>
                    {externalTools.map((tool, index) => (
                      <Button
                        icon={<ArrowSquareOut />}
                        key={index}
                        text={tool.title}
                        onClick={tool.onClick}
                      />
                    ))}
                  </>
                }
              />
              <Card
                title="SEO Common Words"
                detailsDescription="The lingo used by SEO experts."
                details={[
                  `SEO - Search Engine Optimisation`,
                  `SERP - Search Engine Results Page`,
                  `CTR - Click Through Rate`,
                  `CMS - Content Management System`,
                  `GA - Google Analytics`,
                  `GSC - Google Search Console`,
                  `On Page SEO - Optimising content on your site`,
                  `Off Page SEO - Optimising content off your site`,
                  `Backlink - A link from another site to yours`,
                  `Keyword - A word or phrase that describes your content`,
                  `Meta Tags - Information about your site for search engines`,
                  `Canonical - The main URL of your site`,
                  `Alt Text - Descriptive text for images`
                ]}
              />
            </div>
          </div>
        </BigView>

        <SmallView>
          <div>
            <Card
              title="SEO Checklist"
              detailsDescription=""
              children={
                <div>
                  {seoChecklist &&
                    Object.keys(seoChecklist as ChecklistType).map(
                      (category: string, index: number) => (
                        <div key={index}>
                          <h3 className="text-lg m-0 mt-6">{category}</h3>
                          {(seoChecklist as any)[category].map(
                            (item: ChecklistItem, index: number) => (
                              <div
                                key={index}
                                className="flex flex-col">
                                {item.tasks.map(
                                  (task: string, index: number) => (
                                    <div
                                      className="form-control flex flex-row"
                                      key={index}>
                                      <label className="label cursor-pointer flex flex-row gap-2">
                                        <input type="checkbox" />
                                        <span className="label-text text-xs">
                                          {task}
                                        </span>
                                      </label>
                                    </div>
                                  )
                                )}
                                {item.links && (
                                  <>
                                    <h5 className="m-0 mt-4">Resources:</h5>
                                    <div className="flex flex-row gap-4 items-center justify-start text-xs mt-3 flex-wrap">
                                      {item.links.map((link, index: number) => (
                                        <Button
                                          icon={<ArrowSquareOut />}
                                          key={index}
                                          text={link.text}
                                          onClick={() =>
                                            window.open(link.url, '_blank')
                                          }
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )
                    )}
                </div>
              }
            />
          </div>
        </SmallView>

        <BigView>
          <div>
            <h2 className="text-center">About</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card
                title="What is SEO 4 Devs?"
                detailsDescription="This tool is for web developers and website owners who want to
              improve their site's SEO. It generates meta tags for Facebook, Twitter, Google Analytics and basic SEO tags. The tool is free to use. The idea came from my own experience as a web developer and consultant for companies, where I noticed a need for great SEO, but most tools were annoying or suggested changing things that didn't matter. I hope you find this tool useful."
              />
              <Card
                title="Who made this?"
                detailsDescription="I'm Tomo, a web developer and SEO consultant. I love building things and helping others. I'm always looking for feedback and ways to improve this tool. If you have any suggestions or want to say hi, please reach out."
                actions={
                  <>
                    <Button
                      icon={<Envelope />}
                      text="Email"
                      onClick={() =>
                        window.open(
                          'mailto:tomo@neontomo.com?subject=SEO 4 Devs'
                        )
                      }
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="Github"
                      onClick={() =>
                        window.open('https://github.com/neontomo', '_blank')
                      }
                    />
                    <Button
                      icon={<ArrowSquareOut />}
                      text="LinkedIn"
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/tomo-myrman',
                          '_blank'
                        )
                      }
                    />
                  </>
                }
              />
            </div>
          </div>
        </BigView>

        <div
          id="errors"
          className="fixed bottom-4 right-4 flex flex-col gap-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              message={message.message}
              type={message.type}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
