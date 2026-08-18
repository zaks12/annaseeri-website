import {
  Building2,
  Home,
  Briefcase,
  Search,
  TrendingUp,
  Shield,
  Target,
  Eye,
  Heart,
  FileText,
  Landmark,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  home: Home,
  briefcase: Briefcase,
  search: Search,
  trendingUp: TrendingUp,
  shield: Shield,
  target: Target,
  eye: Eye,
  heart: Heart,
  fileText: FileText,
  landmark: Landmark,
  barChart: BarChart3,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Building2;
  return <Cmp className={className} />;
}
