import type { ComponentType } from "react";
import {
  Building2, CalendarCheck, Contact, Globe2, Mail, Network, QrCode, Rocket,
  ScanLine, ShieldCheck, Sparkles, Smartphone, Users, Zap, AppWindow,
} from "lucide-react";
import {
  AppleIcon, FacebookIcon, GooglePlayIcon, InstagramIcon, LinkedinIcon,
} from "@/components/BrandIcons";

export type IconType = ComponentType<{
  size?: number;
  className?: string;
}>;

export const brand = {
  name: "TactLink",
  tagline: "Danh bạ thông minh cho kết nối hiện đại",
  headline: "Kết nối thông minh hơn. Mạng lưới nhanh hơn. Không cần giấy.",
  description: "TactLink giúp các chuyên gia, cộng đồng, hiệp hội và nhà tổ chức sự kiện xây dựng các kết nối có ý nghĩa thông qua hồ sơ kỹ thuật số, danh bạ thông minh và các công cụ mạng lưới liền mạch.",
  logo: "/logo/logotactlink.png",
};

export const navItems = [
  { label: "Liên kết", href: "#links" },
  { label: "Tính năng", href: "#features" },
  { label: "Xã hội", href: "#socials" },
  { label: "Khán giả", href: "#audience" },
];

export const appDownloadLinks = [
  {
    label: "Google Play",
    platform: "Android",
    subLabel: "Tải trên",
    href: "https://play.google.com/store/apps/details?id=com.tactlink.app",
    icon: GooglePlayIcon,
  },
  {
    label: "App Store",
    platform: "iOS",
    subLabel: "Tải xuống trên",
    href: "https://apps.apple.com/id/app/tactlink/id1469516661?l=id",
    icon: AppleIcon,
  },
];

export const primaryLinks: Array<{
  label: string;
  description: string;
  href: string;
  icon: IconType;
  badge?: string;
}> = [
  {
    label: "Truy cập trang web chính thức",
    description: "Khám phá toàn bộ nền tảng, giải pháp và hồ sơ công ty của TactLink.",
    href: "https://www.tactlink.com/",
    icon: Globe2,
    badge: "Chính thức",
  },
  {
    label: "Hợp tác với TactLink",
    description: "Dành cho các hiệp hội, cộng đồng, sự kiện và cơ hội hợp tác.",
    href: "https://www.tactlink.com/contact",
    icon: Building2,
    badge: "Đối tác",
  },
];

export const secondaryLinks = [
  { label: "Liên hệ", href: "https://www.tactlink.com/contact" },
  { label: "Giới thiệu", href: "https://www.tactlink.com/about" },
  { label: "Danh bạ thông minh", href: "https://www.tactlink.com/" },
  { label: "Danh thiếp kỹ thuật số", href: "https://www.tactlink.com/digital-namecard" },
];

export const socialLinks = [
  { label: "LinkedIn", region: "Trang Công ty", href: "https://www.linkedin.com/company/tactlink", icon: LinkedinIcon, featured: true },
  { label: "Facebook", region: "Trang Chính thức", href: "https://web.facebook.com/TactLink", icon: FacebookIcon, featured: true },
  { label: "Instagram", region: "Toàn cầu", href: "https://www.instagram.com/tactlinksmartdirectory/", icon: InstagramIcon, featured: true },
  { label: "Instagram", region: "Indonesia", href: "https://www.instagram.com/tactlinkindonesia", icon: InstagramIcon },
  { label: "Instagram", region: "Malaysia", href: "https://www.instagram.com/tactlinkmalaysia", icon: InstagramIcon },
  { label: "Instagram", region: "Vietnam", href: "https://www.instagram.com/tactlinkvietnam", icon: InstagramIcon },
  { label: "Instagram", region: "Bangladesh", href: "https://www.instagram.com/tactlinkbangladesh", icon: InstagramIcon },
  { label: "Instagram", region: "Philippines", href: "https://www.instagram.com/tactlinkphilippines", icon: InstagramIcon },
];

export const features = [
  {
    title: "Danh thiếp kỹ thuật số",
    description: "Thay thế thẻ in bằng danh tính kỹ thuật số thông minh hơn có thể chia sẻ ở bất cứ đâu.",
    icon: QrCode,
    points: ["Chia sẻ mã QR", "Liên kết hồ sơ", "Trao đổi tức thì"],
  },
  {
    title: "Danh bạ thông minh",
    description: "Tổ chức danh bạ, thành viên và cộng đồng trong một hệ sinh thái kỹ thuật số có thể tìm kiếm được.",
    icon: Network,
    points: ["Thành viên có thể tìm kiếm", "Quản lý danh bạ", "Luôn được cập nhật"],
  },
  {
    title: "Mạng lưới sự kiện",
    description: "Làm cho các sự kiện kinh doanh kết nối hơn với quy trình đăng ký và mạng lưới kỹ thuật số.",
    icon: CalendarCheck,
    points: ["Sẵn sàng cho sự kiện", "Đăng ký nhanh hơn", "Hồ sơ kỹ thuật số"],
  },
  {
    title: "Nền tảng Hiệp hội",
    description: "Giúp các tổ chức vượt xa bảng tính tĩnh thành mạng lưới thành viên sống động.",
    icon: Users,
    points: ["Danh bạ thành viên", "Quy trình quản trị", "Phát triển cộng đồng"],
  },
];

export const stats = [
  { value: "20+", label: "Tổ chức đối tác" },
  { value: "10K+", label: "Kết nối được tạo" },
  { value: "8", label: "Quốc gia đã tiếp cận" },
  { value: "4", label: "Mục tiêu LHQ được hỗ trợ" },
];

export const audiences = [
  { title: "Chuyên gia", description: "Dành cho những người gặp gỡ, trao đổi và quản lý các kết nối mới mỗi ngày.", icon: Contact },
  { title: "Hiệp hội", description: "Dành cho các tổ chức cần một danh bạ thành viên sống động và các công cụ quản trị hiện đại.", icon: Building2 },
  { title: "Cộng đồng", description: "Dành cho các nhóm muốn kết nối các thành viên vượt ra ngoài các nhóm trò chuyện rải rác.", icon: Users },
  { title: "Nhà tổ chức sự kiện", description: "Dành cho các sự kiện mạng lưới, triển lãm, diễn đàn kinh doanh và hội nghị.", icon: CalendarCheck },
];

export const benefits = [
  { title: "Mặc định không dùng giấy", icon: ShieldCheck },
  { title: "Được xây dựng cho cộng đồng toàn cầu", icon: Globe2 },
  { title: "Trao đổi hồ sơ nhanh chóng", icon: Zap },
  { title: "Ưu tiên trải nghiệm di động", icon: Smartphone },
  { title: "Danh tính chuyên nghiệp", icon: Sparkles },
  { title: "Mạng lưới có thể mở rộng", icon: Rocket },
  { title: "Chụp ảnh liên hệ OCR", icon: ScanLine },
  { title: "Trung tâm tất cả trong một", icon: AppWindow },
];

export const contact = {
  email: "info@tactlink.com",
  href: "mailto:info@tactlink.com",
  icon: Mail,
};

export const ui = {
  downloadApp: "Tải ứng dụng",
  exploreFeatures: "Khám phá tính năng",
  quickLinks: "Liên kết nhanh",
  coreFeatures: "Tính năng cốt lõi",
  whyChoose: "Tại sao chọn TactLink",
  connectRegion: "Kết nối với khu vực của bạn",
  whoUses: "Ai sử dụng TactLink?",
  trustedBy: "Được tin tưởng bởi các tổ chức đang phát triển",
  readyToStart: "Sẵn sàng để kết nối mạng thông minh hơn?",
  readyDesc: "Tham gia cùng hàng ngàn chuyên gia đang sử dụng TactLink để xây dựng các kết nối có ý nghĩa.",
  allRightsReserved: "Đã đăng ký Bản quyền.",
  heroChecklist: ["Không dùng giấy", "Trao đổi nhanh hơn", "Phát triển cộng đồng"],
  heroFeatures: [
    { title: "QR", desc: "Chia sẻ tức thì" },
    { title: "Hồ sơ", desc: "Danh tính kỹ thuật số" },
    { title: "Liên hệ", desc: "Lưu thông minh" },
  ],
  trustBadge: "PHONG TRÀO TOÀN CẦU",
  trustTitle: "Được thiết kế cho mạng lưới hiện đại, không dùng giấy.",
  trustDesc: "Từ cộng đồng chuyên gia đến các sự kiện xuyên biên giới, TactLink giúp các tổ chức biến danh sách tĩnh thành mạng lưới kỹ thuật số năng động.",
  ctaTitle: "Biến mọi cuộc gặp gỡ thành một mạng lưới có ý nghĩa.",
  becomePartner: "Trở thành Đối tác",
  emailTactlink: "Gửi Email TactLink",
  quickLinksTitle: "Mọi thứ về TactLink, chỉ với một lần chạm.",
  quickLinksDesc: "Cổng thông tin xã hội cao cấp dành cho tải xuống, hợp tác, thông tin sản phẩm và các kênh TactLink chính thức.",
  downloadAppTitle: "Tải ứng dụng TactLink",
  downloadAppHeadline: "Bắt đầu xây dựng kết nối thông minh hơn ngay hôm nay.",
  downloadAppDesc: "Tạo hồ sơ kỹ thuật số của bạn, chia sẻ danh bạ thông minh và kết nối nhanh hơn qua ứng dụng TactLink chính thức.",
  openLink: "Mở liên kết",
  start: "Bắt đầu",
  smartDirectory: "Danh bạ thông minh",
  featuresTitle: "Được xây dựng cho những người xây dựng mạng lưới, quản lý cộng đồng và tổ chức sự kiện.",
  featuresDesc: "Từ danh tính kỹ thuật số cá nhân đến mạng lưới quy mô hiệp hội, TactLink giúp tạo, quản lý và phát triển các kết nối dễ dàng hơn.",
  audienceTitle: "Một nền tảng cho mọi hệ sinh thái được thúc đẩy bởi kết nối.",
  audienceDesc: "TactLink được xây dựng cho những người và tổ chức cần kết nối nhanh hơn, quản lý liên hệ rõ ràng hơn và sự gắn kết cộng đồng mạnh mẽ hơn.",
  socialTitle: "Theo dõi TactLink qua các cộng đồng toàn cầu.",
  socialDesc: "Luôn cập nhật những câu chuyện về sản phẩm, sự kiện, điểm nhấn cộng đồng và các hoạt động TactLink trong khu vực.",
  footerDesc: "Tái hiện lại mạng lưới với Danh bạ Thông minh. Chuyển đổi mạng lưới chuyên gia, không dùng giấy, thúc đẩy hợp tác và phát triển cộng đồng của bạn.",
  footerSlogan: "Được xây dựng cho mạng lưới thông minh hơn, không dùng giấy.",

};
