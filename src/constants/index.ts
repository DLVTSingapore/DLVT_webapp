import images from '../../public/assets/images';
import { BsInstagram, BsTiktok, BsFacebook, BsWhatsapp } from 'react-icons/bs';

type NavLinks = {
  href: string;
  label: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type FooterLink = {
  title: string;
  links: { name: string; href: string }[];
};

export const navLinks: NavLinks[] = [
  { href: '/our-lineage', label: 'Our Lineage' },
  { href: '/traditional-training', label: 'Traditional Training' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonial', label: 'Testimonial' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const trainingProgression = [
  {
    heading: '小念頭-套路一 (Siu Lim Tao-1st Form)',
    imageSrc: images.tshirtYellow,
    altText: 'Siu Lim Tao-1st Form',
    translationKey: 'tshirt.yellow',
  },
  {
    heading: '尋橋-套路二 (Chum Kiu-2nd Form)',
    imageSrc: images.tshirtGreen,
    altText: 'Chum Kiu-2nd Form',
    translationKey: 'tshirt.green',
  },
  {
    heading: '標指-套路三 (Biu Jee-3rd Form)',
    imageSrc: images.tshirtBlue,
    altText: 'Biu Jee-3rd Form',
    translationKey: 'tshirt.blue',
  },
  {
    heading: '教練 (Instructor)',
    imageSrc: images.tshirtBlack,
    altText: 'Instructor',
    translationKey: 'tshirt.black',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Can I try a class before joining?',
    answer:
      'Yes, we offer trial classes to experience our Wing Chun training. Please contact Sifu Andy via WhatsApp at +65 9231 6638 to arrange a session.',
  },
  {
    question: 'Where is your academy located?',
    answer:
      'Our academy is located in Marymount, Singapore. For the exact address, please reach out to us at dlvt2016sg@gmail.com.',
  },
  {
    question: 'What are the training session times?',
    answer: 'TBC',
  },
  {
    question: 'What happens if I miss a class?',
    answer:
      'You can arrange a makeup session during one of our regular class times, subject to availability. Please inform us in advance.',
  },
  {
    question: 'What are the fees for training?',
    answer:
      'Our rates are structured to provide value for dedicated training. Please contact us at +65 9231 6638 for detailed pricing.',
  },
  {
    question: 'Do you offer private training?',
    answer:
      'Yes, we provide personalized one-on-one Wing Chun instruction tailored to your goals. Contact Sifu Andy for more details.',
  },
  {
    question: 'I have an irregular schedule. Are there flexible options?',
    answer:
      'We offer drop-in classes to accommodate varied schedules. Reach out to discuss a plan that suits your needs.',
  },
  {
    question: 'What should I wear for training?',
    answer:
      'Wear comfortable workout attire and non-slip shoes. Bring water and a change of clothes. Please avoid training if you’re unwell.',
  },
  {
    question: 'Is there a grading or certification system?',
    answer:
      'Yes, our academy follows a structured grading system. Disciples are assessed individually and awarded certifications upon meeting the required standards.',
  },
  {
    question: 'Are there any additional fees?',
    answer:
      'There are no hidden costs beyond the training fees. All necessary materials are provided, with no charges for gradings or equipment.',
  },
  {
    question: 'Do you have a program for women’s self-defense?',
    answer:
      'Yes, our Wing Chun Women’s Defense Program focuses on practical techniques, building confidence and resilience for everyday safety. Contact us to learn more.',
  },
  {
    question: 'What is the lineage of your academy?',
    answer:
      'We proudly uphold the lineage of Grandmaster Ip Man through Grandmaster Ip Ching. Visit our About page for more details.',
  },
  {
    question: 'Are there reviews from other students?',
    answer:
      'Yes, you can read testimonials from our disciples on our website’s Reviews section.',
  },
  {
    question: 'Does training include sparring?',
    answer:
      'Under Sifu Andy’s guidance, we practice chi sao (sticky hands) and controlled drills to develop technique and sensitivity, ensuring a safe learning environment.',
  },
  {
    question: 'I’m a complete beginner. Is that okay?',
    answer:
      'Absolutely. Wing Chun is ideal for beginners, and we tailor instruction to your pace, fostering a strong foundation.',
  },
  {
    question: 'Am I too old or young to start Wing Chun?',
    answer:
      'Wing Chun is a journey of personal growth, suitable for all ages. As long as you’re healthy, you’re welcome to begin.',
  },
  {
    question: 'I have a question not listed here. How can I reach you?',
    answer:
      'Please contact Sifu Andy via WhatsApp at +65 9231 6638 or email dlvt2016sg@gmail.com, and we’ll be happy to assist.',
  },
];

export const footerLinks: FooterLink[] = [
  {
    title: 'About',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Services', href: '/terms-of-service' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  },

  {
    title: 'Get in touch',
    links: [
      {
        name: 'dlvt2016sg@gmail.com',
        href: 'mailto:dlvt2016sg@gmail.com',
      },
    ],
  },
];

export const socialMedia = [
  {
    src: BsInstagram,
    alt: 'instagram logo',
    href: 'https://www.instagram.com/dennisleevtsingapore/',
  },
  {
    src: BsWhatsapp,
    alt: 'whatsapp logo',
    href: 'https://api.whatsapp.com/send?phone=6592316638',
  },
  {
    src: BsTiktok,
    alt: 'tiktok logo',
    href: '#',
  },
  {
    src: BsFacebook,
    alt: 'facebook logo',
    href: '#',
  },
];
