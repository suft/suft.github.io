const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''

const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
      page_path: url
  })
}

const event = (
  action: Gtag.EventNames, 
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
      event_category,
      event_label,
      value
  })
}

export {
  GA_TRACKING_ID,
  pageview,
  event
}