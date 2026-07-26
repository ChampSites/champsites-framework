// framework/constants/icons.ts
// Maps string icon names (used in config files) → Lucide React components.
// Allows config-driven icon references without dynamic imports.

import type { LucideIcon } from "lucide-react";
import {
  Award, Baby, BookOpen, Briefcase, Building2, Calendar, Camera,
  Check, ChevronDown, ChevronRight, Clock, GraduationCap, HandHeart,
  Heart, Home, IndianRupee, Leaf, Mail, MapPin, MessageCircle,
  MessageSquare, Phone, Scale, Scissors, Shield, ShoppingBag, Star,
  ThumbsUp, Trophy, Truck, User, Users, Utensils, Zap, ArrowRight,
  ExternalLink, Globe, Link as LinkIcon, Sparkles, TrendingUp, Target,
  Rocket, Coffee, Music, Mic, Activity, Stethoscope, Car,
  Paintbrush, Wrench, BarChart, Dumbbell, AlarmClock, BellRing,
  BookMarked, Building, ChevronUp, Clipboard, CreditCard, Diamond,
  Droplets, Feather, FileText, Flame, Handshake, Headphones,
  HelpCircle, Hourglass, Info, Key, Layers, LifeBuoy, Loader,
  Lock, LogIn, LogOut, Monitor, Moon, MoreHorizontal, Navigation,
  Package, Paperclip, Pencil, PieChart, PlayCircle, Plus, Power,
  Printer, RefreshCw, Search, Send, Settings, Share2, ShieldCheck,
  Shuffle, Sidebar, Signal, Sliders, Smile, Sun, Tag, Terminal,
  ThumbsDown, ToggleLeft, ToggleRight, Trash, Umbrella, Upload,
  Video, Wallet, Watch, Wind, X, ZoomIn,
  // Social-like alternatives
  AtSign, Hash, Rss,
  // FlaskConical may not exist in older versions, use BeakerIcon or TestTube
  TestTube,
  Code,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Award, Baby, BookOpen, Briefcase, Building2, Calendar, Camera,
  Check, ChevronDown, ChevronRight, Clock, GraduationCap, HandHeart,
  Heart, Home, IndianRupee, Leaf, Mail, MapPin, MessageCircle,
  MessageSquare, Phone, Scale, Scissors, Shield, ShoppingBag, Star,
  ThumbsUp, Trophy, Truck, User, Users, Utensils, Zap, ArrowRight,
  ExternalLink, Globe, Link: LinkIcon, Sparkles, TrendingUp, Target,
  Rocket, Coffee, Music, Mic, Activity, Stethoscope, Car,
  Paintbrush, Wrench, BarChart, Dumbbell, AlarmClock, BellRing,
  BookMarked, Building, ChevronUp, Clipboard, CreditCard, Diamond,
  Droplets, Feather, FileText, Flame, Handshake, Headphones,
  HelpCircle, Hourglass, Info, Key, Layers, LifeBuoy, Loader,
  Lock, LogIn, LogOut, Monitor, Moon, MoreHorizontal, Navigation,
  Package, Paperclip, Pencil, PieChart, PlayCircle, Plus, Power,
  Printer, RefreshCw, Search, Send, Settings, Share2, ShieldCheck,
  Shuffle, Sidebar, Signal, Sliders, Smile, Sun, Tag, Terminal,
  ThumbsDown, ToggleLeft, ToggleRight, Trash, Umbrella, Upload,
  Video, Wallet, Watch, Wind, X, ZoomIn,
  AtSign, Hash, Rss, TestTube, Code,
  // Social icon aliases (use Globe/Link as fallbacks since lucide removed these)
  Instagram: AtSign,
  Linkedin: LinkIcon,
  Twitter: Hash,
  Youtube: PlayCircle,
  Facebook: Globe,
  FlaskConical: TestTube,
  BriefcaseMedical: Briefcase,
  Clapperboard: Camera,
  Command: Terminal,
};

/** Resolves a string icon name to a Lucide component. Falls back to Star. */
export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Star;
}
