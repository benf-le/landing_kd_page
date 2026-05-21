const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const langSwitch = document.querySelector("[data-lang-switch]");
const revealItems = document.querySelectorAll(".reveal");
const faqItems = document.querySelectorAll(".faq-item");
const footerToggleButtons = document.querySelectorAll("[data-footer-toggle]");
const heroTitlePrefix = document.querySelector("[data-hero-title-prefix]");
const heroTitleDuration = document.querySelector("[data-hero-title-duration]");

const heroTitle = {
  vi: {
    prefix: "Từ ý tưởng đến MVP trong",
    duration: "2 tuần"
  },
  en: {
    prefix: "Idea to MVP in",
    duration: "2 weeks"
  }
};

const translations = {
  "Outcome": { vi: "Kết quả", en: "Outcome" },
  "Scope": { vi: "Phạm vi", en: "Scope" },
  "Timeline": { vi: "Lộ trình", en: "Timeline" },
  "Pricing": { vi: "Chi phí", en: "Pricing" },
  "Đặt lịch": { vi: "Đặt lịch", en: "Book a call" },
  "Home / Startup MVP / Vibe Code": { vi: "Trang chủ / MVP Startup / Vibe Code", en: "Home / Startup MVP / Vibe Code" },
  "For early stage startup founders": { vi: "Dành cho founder startup giai đoạn đầu", en: "For early stage startup founders" },
  "Idea to MVP in 2 weeks": { vi: "Từ ý tưởng đến MVP trong 2 tuần", en: "Idea to MVP in 2 weeks" },
  "Gói Vibe Code 2.5K giúp founder biến ý tưởng thành MVP có thể demo, test với user thật và dùng làm nền tảng cho vòng gọi vốn đầu tiên.": {
    vi: "Gói Vibe Code 2.5K giúp founder biến ý tưởng thành MVP có thể demo, test với người dùng thật và dùng làm nền tảng cho vòng gọi vốn đầu tiên.",
    en: "The 2.5K Vibe Code package helps founders turn an idea into a demo-ready MVP they can test with real users and use as a foundation for early fundraising."
  },
  "Book discovery call": { vi: "Đặt lịch tư vấn", en: "Book discovery call" },
  "Xem scope": { vi: "Xem phạm vi", en: "View scope" },
  "Fixed package": { vi: "Gói cố định", en: "Fixed package" },
  "2 tuần triển khai": { vi: "2 tuần triển khai", en: "2-week delivery" },
  "14 ngày": { vi: "14 ngày", en: "14 days" },
  "Từ idea đến MVP demo-ready": { vi: "Từ ý tưởng đến MVP sẵn sàng demo", en: "From idea to demo-ready MVP" },
  "Chi phí rõ ngay từ đầu": { vi: "Chi phí rõ ngay từ đầu", en: "Clear cost from day one" },
  "1 sprint": { vi: "1 sprint", en: "1 sprint" },
  "Scope gọn, ưu tiên outcome": { vi: "Phạm vi gọn, ưu tiên kết quả", en: "Lean scope, outcome first" },
  "Launch, test, iterate": { vi: "Ra mắt, kiểm chứng, cải tiến", en: "Launch, test, iterate" },
  "Strategise & Plan": { vi: "Chiến lược & lập kế hoạch", en: "Strategise & Plan" },
  "Define MVP goals, core users, roadmap": { vi: "Xác định mục tiêu MVP, người dùng chính và lộ trình", en: "Define MVP goals, core users, roadmap" },
  "Build & Engage": { vi: "Xây dựng & tương tác", en: "Build & Engage" },
  "Human-centric product flow, rapid engineering": { vi: "Luồng sản phẩm lấy người dùng làm trung tâm, triển khai nhanh", en: "Human-centric product flow, rapid engineering" },
  "Analyse & Augment": { vi: "Phân tích & tăng cường", en: "Analyse & Augment" },
  "Launch, track signal, learn from user behavior": { vi: "Ra mắt, đo tín hiệu và học từ hành vi người dùng", en: "Launch, track signal, learn from user behavior" },
  "Built for founders who need signal fast": { vi: "Dành cho founder cần tín hiệu thị trường thật nhanh", en: "Built for founders who need signal fast" },
  "SaaS": { vi: "SaaS", en: "SaaS" },
  "AI Workflow": { vi: "Quy trình AI", en: "AI Workflow" },
  "Marketplace": { vi: "Sàn giao dịch", en: "Marketplace" },
  "Internal Tool": { vi: "Công cụ nội bộ", en: "Internal Tool" },
  "Booking App": { vi: "Ứng dụng đặt lịch", en: "Booking App" },
  "Outcome first": { vi: "Ưu tiên kết quả", en: "Outcome first" },
  "Không bán giờ code. Bán một MVP đủ dùng để kiểm chứng.": {
    vi: "Không bán giờ code. Bán một MVP đủ dùng để kiểm chứng.",
    en: "We do not sell coding hours. We deliver an MVP built for validation."
  },
  "Rõ product promise": { vi: "Rõ lời hứa sản phẩm", en: "Clear product promise" },
  "Chốt user, pain point, luồng chính và tiêu chí demo trước khi build.": {
    vi: "Chốt người dùng, pain point, luồng chính và tiêu chí demo trước khi build.",
    en: "Lock the target user, pain point, core flow and demo criteria before build."
  },
  "MVP có thể thao tác": { vi: "MVP có thể thao tác", en: "Clickable MVP" },
  "Không phải mockup tĩnh. Founder có thể click, demo, thu feedback và đo phản ứng thật.": {
    vi: "Không phải mockup tĩnh. Founder có thể click, demo, thu feedback và đo phản ứng thật.",
    en: "Not a static mockup. Founders can click, demo, collect feedback and measure real reactions."
  },
  "Nền tảng để iterate": { vi: "Nền tảng để cải tiến", en: "Foundation to iterate" },
  "Codebase gọn, tài liệu bàn giao rõ, sẵn sàng mở rộng sau khi có tín hiệu từ thị trường.": {
    vi: "Codebase gọn, tài liệu bàn giao rõ, sẵn sàng mở rộng sau khi có tín hiệu từ thị trường.",
    en: "A lean codebase, clear handoff notes and a foundation ready to extend after market signal."
  },
  "Package scope": { vi: "Phạm vi gói", en: "Package scope" },
  "Gói 2.5K tập trung vào core loop có giá trị nhất": {
    vi: "Gói 2.5K tập trung vào vòng lặp cốt lõi có giá trị nhất",
    en: "The 2.5K package focuses on the highest-value core loop"
  },
  "Mỗi MVP được scope theo mục tiêu học nhanh: đủ tốt để bán, chưa phình thành sản phẩm lớn.": {
    vi: "Mỗi MVP được xác định phạm vi theo mục tiêu học nhanh: đủ tốt để bán, chưa phình thành sản phẩm lớn.",
    en: "Each MVP is scoped for fast learning: good enough to sell, not bloated into a full product."
  },
  "Included": { vi: "Bao gồm", en: "Included" },
  "Product sprint": { vi: "Sprint sản phẩm", en: "Product sprint" },
  "Clarify idea, target user, MVP success criteria": { vi: "Làm rõ ý tưởng, người dùng mục tiêu, tiêu chí thành công của MVP", en: "Clarify idea, target user, MVP success criteria" },
  "User journey, feature priority, lean backlog": { vi: "User journey, ưu tiên tính năng, backlog tinh gọn", en: "User journey, feature priority, lean backlog" },
  "Clickable app flow and deploy-ready MVP": { vi: "Luồng app có thể thao tác và MVP sẵn sàng deploy", en: "Clickable app flow and deploy-ready MVP" },
  "Build": { vi: "Xây dựng", en: "Build" },
  "Core functionality": { vi: "Chức năng cốt lõi", en: "Core functionality" },
  "1 primary user role and 1 main workflow": { vi: "1 vai trò người dùng chính và 1 workflow chính", en: "1 primary user role and 1 main workflow" },
  "Responsive landing/app interface": { vi: "Giao diện landing/app responsive", en: "Responsive landing/app interface" },
  "Authentication or form/data capture when needed": { vi: "Đăng nhập hoặc form/thu thập dữ liệu khi cần", en: "Authentication or form/data capture when needed" },
  "Launch": { vi: "Ra mắt", en: "Launch" },
  "Handoff assets": { vi: "Tài sản bàn giao", en: "Handoff assets" },
  "Live deployment link": { vi: "Link deploy thực tế", en: "Live deployment link" },
  "Basic analytics-ready structure": { vi: "Cấu trúc sẵn sàng gắn analytics cơ bản", en: "Basic analytics-ready structure" },
  "Readme, next-step roadmap, iteration notes": { vi: "Readme, roadmap bước tiếp theo, ghi chú cải tiến", en: "Readme, next-step roadmap, iteration notes" },
  "How we work": { vi: "Cách triển khai", en: "How we work" },
  "AI-assisted build, senior product judgment": { vi: "AI hỗ trợ build, senior product judgment dẫn hướng", en: "AI-assisted build, senior product judgment" },
  "Vibe coding tăng tốc phần production, nhưng quyết định quan trọng vẫn là scope, flow, trade-off kỹ thuật và khả năng demo được trong 14 ngày.": {
    vi: "Vibe coding tăng tốc phần production, nhưng quyết định quan trọng vẫn là phạm vi, luồng sản phẩm, trade-off kỹ thuật và khả năng demo được trong 14 ngày.",
    en: "Vibe coding speeds up production, but the important decisions are scope, product flow, technical trade-offs and demo readiness within 14 days."
  },
  "Lean Discovery": { vi: "Khám phá tinh gọn", en: "Lean Discovery" },
  "Chuyển idea rộng thành một use case có thể chứng minh.": { vi: "Chuyển ý tưởng rộng thành một use case có thể chứng minh.", en: "Turn a broad idea into one provable use case." },
  "Fast Prototype": { vi: "Prototype nhanh", en: "Fast Prototype" },
  "Dựng UI, data shape và luồng chính bằng nhịp build ngắn.": { vi: "Dựng UI, cấu trúc dữ liệu và luồng chính bằng nhịp build ngắn.", en: "Build UI, data shape and core flow in short production cycles." },
  "Founder Review": { vi: "Founder review", en: "Founder Review" },
  "Review liên tục để cắt noise, giữ đúng insight cần test.": { vi: "Review liên tục để cắt nhiễu và giữ đúng insight cần kiểm chứng.", en: "Review continuously to remove noise and keep the insight worth testing." },
  "Launch Ready": { vi: "Sẵn sàng ra mắt", en: "Launch Ready" },
  "Deploy, polish demo path và bàn giao hướng iterate tiếp.": { vi: "Deploy, hoàn thiện luồng demo và bàn giao hướng cải tiến tiếp theo.", en: "Deploy, polish the demo path and hand off the next iteration direction." },
  "Two-week delivery plan": { vi: "Kế hoạch triển khai 2 tuần", en: "Two-week delivery plan" },
  "Lịch triển khai rõ từng chặng": { vi: "Lịch triển khai rõ từng chặng", en: "A clear delivery plan for every stage" },
  "Day 1-2": { vi: "Ngày 1-2", en: "Day 1-2" },
  "Define": { vi: "Định nghĩa", en: "Define" },
  "Workshop, user story, scope lock, success metric.": { vi: "Workshop, user story, chốt phạm vi, chỉ số thành công.", en: "Workshop, user story, scope lock, success metric." },
  "Day 3-5": { vi: "Ngày 3-5", en: "Day 3-5" },
  "Design": { vi: "Thiết kế", en: "Design" },
  "Information architecture, key screens, interaction flow.": { vi: "Kiến trúc thông tin, màn hình chính, luồng tương tác.", en: "Information architecture, key screens, interaction flow." },
  "Day 6-11": { vi: "Ngày 6-11", en: "Day 6-11" },
  "Frontend, core logic, integration, responsive QA.": { vi: "Frontend, logic cốt lõi, tích hợp, QA responsive.", en: "Frontend, core logic, integration, responsive QA." },
  "Day 12-14": { vi: "Ngày 12-14", en: "Day 12-14" },
  "Ship": { vi: "Bàn giao", en: "Ship" },
  "Demo polish, deployment, handoff, next iteration roadmap.": { vi: "Hoàn thiện demo, deploy, bàn giao, roadmap cải tiến tiếp theo.", en: "Demo polish, deployment, handoff, next iteration roadmap." },
  "Fixed offer": { vi: "Gói cố định", en: "Fixed offer" },
  "2.5K / 2 tuần cho founder cần MVP thật, không cần team full-time.": {
    vi: "2.5K / 2 tuần cho founder cần MVP thật, không cần team full-time.",
    en: "2.5K / 2 weeks for founders who need a real MVP without a full-time team."
  },
  "Phù hợp khi bạn đang có idea, insight thị trường, hoặc khách hàng đầu tiên nhưng cần một sản phẩm gọn để demo và học nhanh.": {
    vi: "Phù hợp khi bạn đang có ý tưởng, insight thị trường hoặc khách hàng đầu tiên nhưng cần một sản phẩm gọn để demo và học nhanh.",
    en: "Best when you have an idea, market insight or first customers, and need a lean product to demo and learn fast."
  },
  "Gói Vibe Code": { vi: "Gói Vibe Code", en: "Vibe Code Package" },
  "14 ngày làm việc theo sprint": { vi: "14 ngày làm việc theo sprint", en: "14 days delivered as a sprint" },
  "Start MVP sprint": { vi: "Bắt đầu sprint MVP", en: "Start MVP sprint" },
  "Founder fit": { vi: "Phù hợp với founder nào", en: "Founder fit" },
  "Khi nào nên chọn gói này?": { vi: "Khi nào nên chọn gói này?", en: "When should you choose this package?" },
  "Good fit": { vi: "Phù hợp", en: "Good fit" },
  "Bạn cần demo trong 2 tuần để gặp user, đối tác hoặc investor.": { vi: "Bạn cần demo trong 2 tuần để gặp người dùng, đối tác hoặc nhà đầu tư.", en: "You need a demo in 2 weeks for users, partners or investors." },
  "Bạn chấp nhận scope nhỏ để học nhanh và iterate sau.": { vi: "Bạn chấp nhận phạm vi nhỏ để học nhanh và cải tiến sau.", en: "You accept a small scope to learn fast and iterate later." },
  "Bạn cần một app đủ thật để validate willingness-to-pay.": { vi: "Bạn cần một app đủ thật để kiểm chứng willingness-to-pay.", en: "You need a real-enough app to validate willingness-to-pay." },
  "Not a fit": { vi: "Chưa phù hợp", en: "Not a fit" },
  "Bạn muốn build full product nhiều role, nhiều module ngay từ đầu.": { vi: "Bạn muốn build full product nhiều role, nhiều module ngay từ đầu.", en: "You want a full product with many roles and modules from day one." },
  "Bạn chưa rõ user, pain point, hoặc chưa sẵn sàng cắt bớt feature.": { vi: "Bạn chưa rõ người dùng, pain point hoặc chưa sẵn sàng cắt bớt tính năng.", en: "You are not clear on the user, pain point, or are not ready to cut features." },
  "Bạn cần hệ thống enterprise-grade, audit, compliance phức tạp.": { vi: "Bạn cần hệ thống enterprise-grade, audit hoặc compliance phức tạp.", en: "You need an enterprise-grade system with complex audit or compliance needs." },
  "FAQ": { vi: "FAQ", en: "FAQ" },
  "Các câu hỏi founder thường hỏi trước khi bắt đầu": { vi: "Các câu hỏi founder thường hỏi trước khi bắt đầu", en: "Questions founders usually ask before starting" },
  "MVP gồm những công nghệ nào?": { vi: "MVP gồm những công nghệ nào?", en: "What technologies are included in the MVP?" },
  "Stack được chọn theo mục tiêu build nhanh, deploy ổn và dễ bàn giao. Thông thường gồm frontend responsive, backend/API nhẹ hoặc BaaS khi phù hợp.": {
    vi: "Stack được chọn theo mục tiêu build nhanh, deploy ổn và dễ bàn giao. Thông thường gồm frontend responsive, backend/API nhẹ hoặc BaaS khi phù hợp.",
    en: "The stack is chosen for fast build, stable deployment and easy handoff. It usually includes a responsive frontend, a lightweight backend/API or BaaS when suitable."
  },
  "Có bao gồm branding và landing page không?": { vi: "Có bao gồm branding và landing page không?", en: "Does it include branding and a landing page?" },
  "Có thể bao gồm landing page hoặc app interface cơ bản nếu đó là phần thiết yếu để demo và thu lead trong MVP scope.": {
    vi: "Có thể bao gồm landing page hoặc app interface cơ bản nếu đó là phần thiết yếu để demo và thu lead trong phạm vi MVP.",
    en: "It can include a landing page or basic app interface when that is essential for demoing and collecting leads within the MVP scope."
  },
  "Sau 2 tuần có tiếp tục phát triển được không?": { vi: "Sau 2 tuần có tiếp tục phát triển được không?", en: "Can development continue after 2 weeks?" },
  "Có. Handoff gồm code, ghi chú kỹ thuật và roadmap ưu tiên để tiếp tục iterate theo feedback thật.": {
    vi: "Có. Bàn giao gồm code, ghi chú kỹ thuật và roadmap ưu tiên để tiếp tục cải tiến theo feedback thật.",
    en: "Yes. Handoff includes code, technical notes and a prioritized roadmap to keep iterating from real feedback."
  },
  "Ready for validation": { vi: "Sẵn sàng kiểm chứng", en: "Ready for validation" },
  "Biến idea thành MVP có thể demo trong 14 ngày.": { vi: "Biến ý tưởng thành MVP có thể demo trong 14 ngày.", en: "Turn your idea into a demo-ready MVP in 14 days." },
  "Đặt lịch tư vấn": { vi: "Đặt lịch tư vấn", en: "Book a consultation" },
  "Vibe Code MVP Sprint": { vi: "Vibe Code MVP Sprint", en: "Vibe Code MVP Sprint" },
  "433 - 435 Nguyen Huu Tho, Cam Le Ward, Da Nang": {
    vi: "433 - 435 Nguyễn Hữu Thọ, Cẩm Lệ, Đà Nẵng",
    en: "433 - 435 Nguyen Huu Tho, Cam Le Ward, Da Nang"
  }
};

Object.assign(translations, {
  "OUR PRESENCE": { vi: "HIỆN DIỆN CỦA CHÚNG TÔI", en: "OUR PRESENCE" },
  "Ho Chi Minh City": { vi: "Thành phố Hồ Chí Minh", en: "Ho Chi Minh City" },
  "Office 1: 294-296 Truong Sa Street, Cau Kieu Ward, Ho Chi Minh City": {
    vi: "Văn phòng 1: 294-296 đường Trường Sa, phường Cầu Kiệu, Thành phố Hồ Chí Minh",
    en: "Office 1: 294-296 Truong Sa Street, Cau Kieu Ward, Ho Chi Minh City"
  },
  "Office 2: 09 Hoa Cau Street, Cau Kieu Ward, Ho Chi Minh City": {
    vi: "Văn phòng 2: 09 đường Hoa Cau, phường Cầu Kiệu, Thành phố Hồ Chí Minh",
    en: "Office 2: 09 Hoa Cau Street, Cau Kieu Ward, Ho Chi Minh City"
  },
  "Tel: (+84) 28 3517 1080": { vi: "Điện thoại: (+84) 28 3517 1080", en: "Tel: (+84) 28 3517 1080" },
  "Ha Noi": { vi: "Hà Nội", en: "Ha Noi" },
  "VET Building - 98 Hoang Quoc Viet Street, Nghia Do Ward, Hanoi City": {
    vi: "Tòa nhà VET - 98 đường Hoàng Quốc Việt, phường Nghĩa Đô, Thành phố Hà Nội",
    en: "VET Building - 98 Hoang Quoc Viet Street, Nghia Do Ward, Hanoi City"
  },
  "Da Nang": { vi: "Đà Nẵng", en: "Da Nang" },
  "Singapore": { vi: "Singapore", en: "Singapore" },
  "7 Straits View, Marina One East Tower, #05-01, Singapore 018936": {
    vi: "7 Straits View, Marina One East Tower, #05-01, Singapore 018936",
    en: "7 Straits View, Marina One East Tower, #05-01, Singapore 018936"
  },
  "Kuala Lumpur": { vi: "Kuala Lumpur", en: "Kuala Lumpur" },
  "Bangkok": { vi: "Bangkok", en: "Bangkok" },
  "Melbourne": { vi: "Melbourne", en: "Melbourne" },
  "The Archer": { vi: "The Archer", en: "The Archer" },
  "Our Works": { vi: "Dự án", en: "Our Works" },
  "Careers": { vi: "Tuyển dụng", en: "Careers" },
  "Insights & News": { vi: "Góc nhìn & Tin tức", en: "Insights & News" },
  "White paper & Reports": { vi: "Sách trắng & Báo cáo", en: "White paper & Reports" },
  "Partners": { vi: "Đối tác", en: "Partners" },
  "End-to-End Digital Transformation": { vi: "Chuyển đổi số toàn diện", en: "End-to-End Digital Transformation" },
  "Architecture & Strategy": { vi: "Kiến trúc & Chiến lược", en: "Architecture & Strategy" },
  "Integrate & Orchestrate": { vi: "Tích hợp & Điều phối", en: "Integrate & Orchestrate" },
  "Insights & Analytics": { vi: "Insight & Phân tích dữ liệu", en: "Insights & Analytics" },
  "Software Development": { vi: "Phát triển phần mềm", en: "Software Development" },
  "Custom Software Development": { vi: "Phát triển phần mềm tùy chỉnh", en: "Custom Software Development" },
  "Large-Scale Software Development": { vi: "Phát triển phần mềm quy mô lớn", en: "Large-Scale Software Development" },
  "MVP Development": { vi: "Phát triển MVP", en: "MVP Development" },
  "Application Development": { vi: "Phát triển ứng dụng", en: "Application Development" },
  "Web Development": { vi: "Phát triển web", en: "Web Development" },
  "Mobile Development": { vi: "Phát triển mobile", en: "Mobile Development" },
  "Desktop Development": { vi: "Phát triển desktop", en: "Desktop Development" },
  "Gen AI Development": { vi: "Phát triển Gen AI", en: "Gen AI Development" },
  "API Development": { vi: "Phát triển API", en: "API Development" },
  "Database Development": { vi: "Phát triển cơ sở dữ liệu", en: "Database Development" },
  "UX Design": { vi: "Thiết kế UX", en: "UX Design" },
  "Integrate & Automate": { vi: "Tích hợp & Tự động hóa", en: "Integrate & Automate" },
  "Composable Architecture": { vi: "Kiến trúc composable", en: "Composable Architecture" },
  "Middleware & Integration": { vi: "Middleware & Tích hợp", en: "Middleware & Integration" },
  "Performance & Security": { vi: "Hiệu năng & Bảo mật", en: "Performance & Security" },
  "Data Warehousing": { vi: "Kho dữ liệu", en: "Data Warehousing" },
  "Analytics Enablement": { vi: "Kích hoạt phân tích dữ liệu", en: "Analytics Enablement" },
  "Martech & Engagement": { vi: "Martech & Tương tác", en: "Martech & Engagement" },
  "Data Strategy & Governance": { vi: "Chiến lược & Quản trị dữ liệu", en: "Data Strategy & Governance" },
  "AI, GenAI & ML": { vi: "AI, GenAI & ML", en: "AI, GenAI & ML" },
  "Operate & Support": { vi: "Vận hành & Hỗ trợ", en: "Operate & Support" },
  "Data Entry & Processing": { vi: "Nhập liệu & Xử lý dữ liệu", en: "Data Entry & Processing" },
  "AI & Data Annotation Services": { vi: "Dịch vụ gán nhãn AI & dữ liệu", en: "AI & Data Annotation Services" },
  "Managed Service": { vi: "Dịch vụ quản trị vận hành", en: "Managed Service" },
  "Content Moderation": { vi: "Kiểm duyệt nội dung", en: "Content Moderation" },
  "E-commerce Support": { vi: "Hỗ trợ thương mại điện tử", en: "E-commerce Support" },
  "Tailored Solutions": { vi: "Giải pháp tùy chỉnh", en: "Tailored Solutions" },
  "Our Engagement Models": { vi: "Mô hình hợp tác", en: "Our Engagement Models" },
  "Software Development Outsourcing": { vi: "Gia công phát triển phần mềm", en: "Software Development Outsourcing" },
  "Dedicated Development Team": { vi: "Đội ngũ phát triển chuyên trách", en: "Dedicated Development Team" },
  "IT Staff Augmentation": { vi: "Bổ sung nhân sự IT", en: "IT Staff Augmentation" },
  "Offshore Developer For Hire": { vi: "Thuê lập trình viên offshore", en: "Offshore Developer For Hire" },
  "Our Methodology": { vi: "Phương pháp luận", en: "Our Methodology" },
  "Agile Methodology": { vi: "Phương pháp Agile", en: "Agile Methodology" },
  "Design Thinking Process": { vi: "Quy trình Design Thinking", en: "Design Thinking Process" },
  "Project Governance": { vi: "Quản trị dự án", en: "Project Governance" },
  "Copyright © 2025 Kyanon Digital. All rights reserved.": {
    vi: "Copyright © 2025 Kyanon Digital. Bảo lưu mọi quyền.",
    en: "Copyright © 2025 Kyanon Digital. All rights reserved."
  },
  "Create project brief with AI": { vi: "Tạo project brief bằng AI", en: "Create project brief with AI" },
  "DMCA PROTECTED": { vi: "DMCA PROTECTED", en: "DMCA PROTECTED" }
});

const pageMeta = {
  vi: {
    lang: "vi",
    title: "Kyanon Digital - Making Digital Impact That Matters",
    description: "Gói Vibe Code 2.5K trong 2 tuần giúp startup giai đoạn đầu đi từ ý tưởng đến MVP có thể demo, kiểm chứng và gọi vốn."
  },
  en: {
    lang: "en",
    title: "Kyanon Digital - Making Digital Impact That Matters",
    description: "The 2.5K Vibe Code package helps early-stage startups go from idea to a demo-ready MVP for validation and fundraising."
  }
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  textNodes.push({
    node,
    key: node.nodeValue.trim().replace(/\s+/g, " "),
    leading: node.nodeValue.match(/^\s*/)[0],
    trailing: node.nodeValue.match(/\s*$/)[0]
  });
}

const setLanguage = (lang) => {
  document.documentElement.lang = pageMeta[lang].lang;
  document.title = pageMeta[lang].title;
  document.querySelector('meta[name="description"]').setAttribute("content", pageMeta[lang].description);

  if (heroTitlePrefix && heroTitleDuration) {
    heroTitlePrefix.textContent = heroTitle[lang].prefix;
    heroTitleDuration.textContent = heroTitle[lang].duration;
  }

  textNodes.forEach(({ node, key, leading, trailing }) => {
    if (translations[key]) {
      node.nodeValue = `${leading}${translations[key][lang]}${trailing}`;
    }
  });

  langSwitch.setAttribute("aria-pressed", String(lang === "en"));
  langSwitch.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === lang);
  });
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  if (!nav.classList.contains("is-open")) {
    return;
  }

  const clickedNav = nav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);

  if (!clickedNav && !clickedToggle) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

langSwitch.addEventListener("click", () => {
  const nextLang = langSwitch.getAttribute("aria-pressed") === "true" ? "vi" : "en";
  setLanguage(nextLang);
});

const initialLang = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "vi";
setLanguage(initialLang);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const shouldOpen = item.getAttribute("aria-expanded") !== "true";
    faqItems.forEach((other) => other.setAttribute("aria-expanded", "false"));
    item.setAttribute("aria-expanded", String(shouldOpen));
  });
});

footerToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const shouldOpen = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(shouldOpen));
  });
});
