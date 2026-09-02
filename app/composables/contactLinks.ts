import { ContactInformation } from '~/data_helper/contact'

/** The site's contact channels — one calendar, one email, one WhatsApp deep link. */
export const useContactLinks = () => {
  const phone = `${ContactInformation.countryCode}${ContactInformation.phoneNumber}`.replace(/\D/g, '')
  const whatsappText = 'Hi Kike! I just saw your website and I would like to talk about a project.'

  return {
    calendly: 'https://calendly.com/kiketordera',
    email: ContactInformation.email,
    mailto: `mailto:${ContactInformation.email}`,
    whatsapp: `https://wa.me/${phone}?text=${encodeURIComponent(whatsappText)}`,
    linkedin: ContactInformation.linkedINURL,
  }
}
