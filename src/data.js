import {
  ShieldCheck, Users, BarChart3, ClipboardList, Search, CalendarCheck, Plane,
  Settings, UserCog, Lock, MessageCircle, Truck, CircleDollarSign, Wrench,
  FileText, KeyRound, Axe, PersonStanding, Gamepad2, Building2, UserCheck,
  ClipboardCheck, MailOpen, AlertTriangle, Handshake, Eye, Rocket, Headphones,
} from "lucide-react";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Why OwnerAway", to: "/why" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const HERO_FEATURES = [
  { icon: ShieldCheck, title: "Peace of Mind", sub: "Your business is in good hands." },
  { icon: Users, title: "Trained Operators", sub: "Experienced, vetted & reliable." },
  { icon: BarChart3, title: "Daily Reporting", sub: "Stay informed every day." },
];

export const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    sub: "Share your operations, needs, and coverage dates.",
    detail: "A short intake call where you walk us through how your venue runs day to day — your hours, your team, your tools, and the dates you'd like to step away.",
  },
  {
    icon: Search,
    title: "We Review Your Operations",
    sub: "We learn your business and assess requirements.",
    detail: "We shadow your processes and document the essentials: opening and closing routines, POS, vendors, and the judgment calls that usually land on your desk.",
  },
  {
    icon: CalendarCheck,
    title: "We Prepare a Coverage Plan",
    sub: "We build a custom plan for a smooth handoff.",
    detail: "You get a written playbook and a named operator (or team) matched to your venue, plus a clear escalation path for anything outside the day-to-day.",
  },
  {
    icon: Plane,
    title: "You Take Off, We Take Over",
    sub: "We manage operations and send daily updates.",
    detail: "While you're away we keep the doors open and the team supported, and you receive a concise end-of-day report so nothing is a surprise when you return.",
  },
];

export const SERVICES = [
  { icon: Settings, label: "Daily Operations", desc: "Opening checklists, floor coverage, and keeping the day running on schedule." },
  { icon: UserCog, label: "Staff Supervision", desc: "Shift oversight, breaks, and on-the-spot guidance so your team stays supported." },
  { icon: Lock, label: "Opening / Closing Procedures", desc: "Secure, consistent open and close routines following your exact playbook." },
  { icon: MessageCircle, label: "Customer Issue Handling", desc: "Calm, professional resolution of complaints, refunds, and escalations." },
  { icon: Truck, label: "Vendor Coordination", desc: "Deliveries, service calls, and supplier check-ins handled in your absence." },
  { icon: CircleDollarSign, label: "Cash / POS Management", desc: "Drawer counts, reconciliations, and end-of-day reporting you can trust." },
  { icon: Wrench, label: "Maintenance Oversight", desc: "First response on equipment issues and coordination of repairs." },
  { icon: FileText, label: "Daily Reports & Updates", desc: "A clear end-of-day summary so you always know how things went." },
];

export const INDUSTRIES = [
  { icon: KeyRound, label: "Escape Rooms", desc: "Game resets, guest briefings, and smooth flow between bookings." },
  { icon: Axe, label: "Axe Throwing Venues", desc: "Safety-first coaching, lane management, and waiver oversight." },
  { icon: PersonStanding, label: "Trampoline Parks", desc: "Court supervision, rotations, and rule enforcement on busy floors." },
  { icon: Users, label: "Family Entertainment Centers", desc: "Coordination across attractions, food service, and the front desk." },
  { icon: Gamepad2, label: "Indoor Activity Venues", desc: "Arcades, VR, and mixed-use spaces run to your standards." },
  { icon: Building2, label: "Hotels / Motels", desc: "Front-desk and housekeeping coordination — launching soon.", note: "Coming Soon" },
];

export const TRUST = [
  { icon: UserCheck, label: "Background-Checked Operators" },
  { icon: ShieldCheck, label: "Confidentiality & NDA" },
  { icon: ClipboardCheck, label: "Clear Scope of Work" },
  { icon: MailOpen, label: "Daily Owner Updates" },
  { icon: Lock, label: "Limited System Access" },
  { icon: AlertTriangle, label: "Emergency Escalation Plan" },
  { icon: ShieldCheck, label: "Insurance Coverage*" },
];

export const VALUES = [
  { icon: Handshake, title: "Built for owners, not corporations", desc: "We work the way independent venues actually run — flexible, hands-on, and human." },
  { icon: Users, title: "Operators who've run venues", desc: "Our people have stood behind the counter and closed up at night. They get it." },
  { icon: Eye, title: "Radical transparency", desc: "Daily reports, a clear scope of work, and an escalation plan agreed in advance." },
  { icon: Rocket, title: "Start small with a pilot", desc: "Try a short, low-risk coverage window before committing to anything longer." },
];

export const STATS = [
  { value: 100, suffix: "%", label: "Vetted & background-checked operators" },
  { value: 24, suffix: "/7", label: "Owner support line during coverage" },
  { value: 1, suffix: "-day", label: "Average response to applications" },
  { value: 6, suffix: "", label: "Entertainment industries served" },
];

export const TESTIMONIALS = [
  { quote: "First real week off in three years. The daily reports meant I never had to wonder what was happening on the floor.", who: "Owner, Escape Room" },
  { quote: "Our closing routine is specific and they nailed it from night one. The handoff playbook was genuinely thorough.", who: "Owner, Axe Throwing Venue" },
  { quote: "Staff felt supported instead of abandoned. That's what sold me — they manage people, not just tasks.", who: "Owner, Family Entertainment Center" },
];

export const FAQ = [
  { q: "How does coverage actually work?", a: "After a short intake and review of your operations, we build a written playbook and assign an operator matched to your venue. They run the day-to-day during your agreed dates and send you an end-of-day report." },
  { q: "How do you vet your operators?", a: "Every operator is background-checked and has hands-on experience running entertainment or hospitality venues. We match operators to your specific format before any coverage begins." },
  { q: "How long can you cover my business?", a: "Anywhere from a few days to extended periods. Most owners start with a short pilot window to build confidence before scheduling longer coverage." },
  { q: "What does it cost?", a: "Pricing depends on your business type, the length of coverage, and operational complexity. Apply for a pilot and we'll give you a clear, no-surprise quote." },
  { q: "What if there's an emergency?", a: "Every engagement includes an emergency escalation plan agreed with you in advance, so your operator knows exactly who to call and when." },
  { q: "Do you sign an NDA?", a: "Yes. Confidentiality and a signed NDA are standard, and operators are given only the limited system access they need to do the job." },
  { q: "Which industries do you serve?", a: "Escape rooms, axe-throwing venues, trampoline parks, family entertainment centers, and indoor activity venues today — with hotels and motels coming soon." },
  { q: "How do I get started?", a: "Head to the Contact page and apply for pilot coverage. We respond within one business day to talk through your needs." },
];

export const BUSINESS_TYPES = [
  "Escape Room", "Axe Throwing Venue", "Trampoline Park",
  "Family Entertainment Center", "Indoor Activity Venue",
  "Hotel / Motel", "Other",
];

export const CONTACT = {
  email: "hello@owneraway.example",
  phone: "(207) 555-0142",
  hours: "Mon–Fri, 9am–6pm ET · 24/7 support line during active coverage",
};
