import { FeatureCard } from '@/types';
import {
  BiBrain,
  BiEdit,
  BiGroup,
  BiMobile,
  BiPalette,
  BiSearch,
  BiShield,
  BiTachometer,
} from 'react-icons/bi';
import { HomeNavbarProps } from '@/types';

export const homeTabs: HomeNavbarProps[] = [
  {
    id: 'home',
    name: 'Home',
  },
  {
    id: 'features',
    name: 'Features',
  },
  {
    id: 'stats',
    name: 'Stats',
  },
  {
    id: 'guide',
    name: 'Guide',
  },
  {
    id: 'faq',
    name: 'Help',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
];

export const faqs = [
  {
    question: 'What is the Notion AI Clone?',
    answer:
      'The Notion AI Clone is a web application that mimics the functionality of Notion, providing a collaborative workspace for teams to manage projects, documents, and tasks.',
  },
  {
    question: 'How do I create a new workspace?',
    answer:
      "To create a new workspace, click on the 'Create Workspace' button on the dashboard, enter your workspace name, and invite team members.",
  },
  {
    question: 'Can I invite team members to my workspace?',
    answer:
      'Yes, you can invite team members by entering their email addresses when creating a workspace or by going to the workspace settings.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Currently, the Notion AI Clone is web-based, but it is designed to be mobile-friendly and works well on smartphones and tablets.',
  },
  {
    question: 'How do I manage user roles in my workspace?',
    answer:
      'You can manage user roles in the workspace settings, where you can assign roles like admin, editor, or viewer to each member.',
  },
  {
    question: 'What features are included in the free version?',
    answer:
      'The free version includes basic features like creating pages, adding tasks, and inviting team members. Advanced features may require a subscription.',
  },
];

export const featureCard: FeatureCard[] = [
  {
    title: 'Advanced Block Editor',
    description:
      'Create stunning documents with our intuitive block-based editor. Drag, drop, and format content with professional-grade tools.',
    icon: BiEdit,
  },
  {
    title: 'Team Collaboration',
    description:
      'Seamless real-time collaboration with live cursors, instant sync, and granular permission controls for your team.',
    icon: BiGroup,
  },
  {
    title: 'High Performance',
    description:
      'Experience lightning-fast performance with optimized loading, smooth animations, and instant search across all content.',
    icon: BiTachometer,
  },
  {
    title: 'Enterprise Security',
    description:
      'Military-grade encryption, SSO integration, audit logs, and compliance certifications to protect your valuable data.',
    icon: BiShield,
  },
  {
    title: 'Smart AI Assistant',
    description:
      'Boost productivity with AI-powered writing assistance, content suggestions, and automated workflow optimization.',
    icon: BiBrain,
  },
  {
    title: 'Custom Themes',
    description:
      'Personalize your workspace with beautiful themes, custom branding, and flexible layout options that match your style.',
    icon: BiPalette,
  },
  {
    title: 'Universal Search',
    description:
      'Find anything instantly with intelligent full-text search across documents, comments, attachments, and metadata.',
    icon: BiSearch,
  },
  {
    title: 'Multi-Platform Access',
    description:
      'Work seamlessly across web, mobile, and desktop applications with native performance and offline synchronization.',
    icon: BiMobile,
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'FakeCorp',
    image: '/avatars/sarah.jpg',
    content:
      'This Neotion has revolutionized how our team collaborates. The real-time editing and seamless integration make project management effortless.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer',
    company: 'StartupXYZ',
    image: '/avatars/marcus.jpg',
    content:
      'The clean interface and powerful features rival the original Notion. Our development team has adopted it as our primary documentation tool.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Design Director',
    company: 'CreativeFakeStudio',
    image: '/avatars/emily.jpg',
    content:
      'Beautiful design meets functionality. The customizable workspaces allow us to organize our creative projects exactly how we need them.',
    rating: 5,
  },
];
