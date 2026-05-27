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
    prefix: "Biến ý tưởng thành MVP chạy thực tế sau đúng",
    duration: "14 ngày"
  },
  en: {
    prefix: "Turn your idea into a live running MVP in exactly",
    duration: "14 days"
  }
};

const translations = {
  // Navigation & General
  "Outcome": { vi: "Kết quả", en: "Outcome" },
  "Pain points": { vi: "Nỗi lòng Founder", en: "Pain points" },
  "Timeline": { vi: "Quy trình", en: "Process" },
  "Pricing": { vi: "Chi phí", en: "Pricing" },
  "Đặt lịch": { vi: "Đặt lịch", en: "Book a call" },

  // PHẦN 1: HERO SECTION
  "For early stage startup founders": {
    vi: "Dành cho founder startup giai đoạn đầu",
    en: "For early stage startup founders"
  },
  "Biến ý tưởng thành MVP chạy thực tế sau đúng": {
    vi: "Biến ý tưởng thành MVP chạy thực tế sau đúng",
    en: "Turn your idea into a live running MVP in exactly"
  },
  "14 ngày": {
    vi: "14 ngày",
    en: "14 days"
  },
  "Ngừng lãng phí hàng tháng trời và hàng chục nghìn USD cho những tính năng chưa ai cần. Gói Vibe Code $2.5K giúp các Early-stage Founders đóng gói lõi sản phẩm (Core Loop), ra mắt thị trường và thu thập tín hiệu thực từ người dùng ngay lập tức.": {
    vi: "Ngừng lãng phí hàng tháng trời và hàng chục nghìn USD cho những tính năng chưa ai cần. Gói Vibe Code $2.5K giúp các Early-stage Founders đóng gói lõi sản phẩm (Core Loop), ra mắt thị trường và thu thập tín hiệu thực từ người dùng ngay lập tức.",
    en: "Stop wasting months and tens of thousands of dollars on features nobody needs. The $2.5K Vibe Code package helps early-stage founders package their product core loop, launch to market, and capture real user feedback immediately."
  },
  "Đặt lịch Hack-Sprint ngay →": {
    vi: "Đặt lịch Hack-Sprint ngay →",
    en: "Book your Hack-Sprint now →"
  },
  "Validate ý tưởng của bạn miễn phí": {
    vi: "Validate ý tưởng của bạn miễn phí",
    en: "Validate your idea for free"
  },
  "Dành riêng cho SaaS, AI Workflow, Marketplace & Web App.": {
    vi: "Dành riêng cho SaaS, AI Workflow, Marketplace & Web App.",
    en: "Exclusively for SaaS, AI Workflow, Marketplace & Web App."
  },

  // PHẦN 2: THE PAIN POINT
  "The Pain Point": {
    vi: "Nỗi lòng Founder",
    en: "The Pain Point"
  },
  "Có phải bạn đang kẹt trong \"Vòng xoáy vô tận\" này?": {
    vi: "Có phải bạn đang kẹt trong \"Vòng xoáy vô tận\" này?",
    en: "Are you stuck in this \"infinite loop\"?"
  },
  "Thực trạng:": {
    vi: "Thực trạng:",
    en: "Reality:"
  },

  // Badges
  "The Speed Anxiety": {
    vi: "Nỗi lo về Tốc độ",
    en: "The Speed Anxiety"
  },
  "The Cash Burn Trap": {
    vi: "Bẫy Đốt tiền",
    en: "The Cash Burn Trap"
  },
  "The Pitching Dilemma": {
    vi: "Bàn tay trắng gặp Nhà đầu tư",
    en: "The Pitching Dilemma"
  },
  "The Non-Tech Founder Wall": {
    vi: "Rào cản Công nghệ",
    en: "The Non-Tech Founder Wall"
  },
  "The Build-Something-Nobody-Wants Nightmare": {
    vi: "Ác mộng xây app không ai dùng",
    en: "The Build-Something-Nobody-Wants Nightmare"
  },

  // Pain Point 1
  "1. Nỗi đau về Tốc độ: \"Sợ mất cửa sổ cơ hội\"": {
    vi: "1. Nỗi đau về Tốc độ: \"Sợ mất cửa sổ cơ hội\"",
    en: "1. Speed Anxiety: \"Fear of missing the window of opportunity\""
  },
  "Ý tưởng công nghệ (nhất là về AI, SaaS) thay đổi theo từng tuần. Founder nhìn thấy một khoảng trống thị trường rất ngon, nhưng họ không có sản phẩm để \"cắm cờ\" giữ chỗ.": {
    vi: "Ý tưởng công nghệ (nhất là về AI, SaaS) thay đổi theo từng tuần. Founder nhìn thấy một khoảng trống thị trường rất ngon, nhưng họ không có sản phẩm để \"cắm cờ\" giữ chỗ.",
    en: "Tech ideas (especially AI and SaaS) change weekly. Founders spot a golden market gap but lack a product to \"plant their flag\" and secure the spot."
  },
  "Sợ đối thủ ra mắt trước và chiếm mất thị trường (FOMO nặng nề).": {
    vi: "Sợ đối thủ ra mắt trước và chiếm mất thị trường (FOMO nặng nề).",
    en: "Fear of competitors launching first and capturing the market (severe FOMO)."
  },
  "Bị kẹt trong \"vòng lặp thảo luận\": Họ mất 2-3 tháng chỉ để họp hành, cãi nhau về tính năng trên giấy mà chưa có gì chạy thử.": {
    vi: "Bị kẹt trong \"vòng lặp thảo luận\": Họ mất 2-3 tháng chỉ để họp hành, cãi nhau về tính năng trên giấy mà chưa có gì chạy thử.",
    en: "Stuck in the \"discussion loop\": Wasting 2-3 months on meetings and debating features on paper without a testable prototype."
  },
  "Mất đà tâm lý (Momentum): Sự hào hứng ban đầu của Founder và Co-founder bị mài mòn theo thời gian vì mãi không thấy sản phẩm thành hình.": {
    vi: "Mất đà tâm lý (Momentum): Sự hào hứng ban đầu của Founder và Co-founder bị mài mòn theo thời gian vì mãi không thấy sản phẩm thành hình.",
    en: "Loss of momentum: The initial excitement of founders and co-founders fades over time as the product fails to take shape."
  },

  // Pain Point 2
  "2. Nỗi đau về Chi phí & Nguồn lực: \"Cái bẫy đốt tiền\"": {
    vi: "2. Nỗi đau về Chi phí & Nguồn lực: \"Cái bẫy đốt tiền\"",
    en: "2. Cash Burn Trap: \"The cost and resource trap\""
  },
  "Founder thường nghĩ muốn làm app thì phải tuyển CTO xịn, thuê 2-3 Dev, 1 Designer. Chi phí vận hành (Burn rate) lên tới 50M - 100M+/tháng trong khi chưa kiếm được đồng nào.": {
    vi: "Founder thường nghĩ muốn làm app thì phải tuyển CTO xịn, thuê 2-3 Dev, 1 Designer. Chi phí vận hành (Burn rate) lên tới 50M - 100M+/tháng trong khi chưa kiếm được đồng nào.",
    en: "Founders often think building an app requires hiring a top CTO, 2-3 developers, and a designer, pushing the burn rate to 50M - 100M+ VND/month before generating any revenue."
  },
  "Sợ tuyển sai người: Tuyển Dev không hợp, mất 2 tháng thử việc, tốn tiền lương nhưng sản phẩm nhận lại là một đống code rác không chạy được.": {
    vi: "Sợ tuyển sai người: Tuyển Dev không hợp, mất 2 tháng thử việc, tốn tiền lương nhưng sản phẩm nhận lại là một đống code rác không chạy được.",
    en: "Fear of hiring the wrong people: Hiring incompatible developers, losing 2 months of probation, wasting salary, only to receive buggy code that doesn't run."
  },
  "Chi phí cơ hội quá lớn: Đốt sạch số tiền tiết kiệm hoặc tiền của người thân (Friends & Family) ngay từ \"vòng gửi xe\" chỉ để xây một cái app mà chưa biết có ai dùng không.": {
    vi: "Chi phí cơ hội quá lớn: Đốt sạch số tiền tiết kiệm hoặc tiền của người thân (Friends & Family) ngay từ \"vòng gửi xe\" chỉ để xây một cái app mà chưa biết có ai dùng không.",
    en: "Massive opportunity cost: Burning through personal savings or family funds right at the starting line just to build an app without knowing if anyone will use it."
  },
  "Bị các Agency truyền thống \"vẽ\" ra đủ loại chi phí, báo giá hàng trăm triệu và kéo dài 3-6 tháng.": {
    vi: "Bị các Agency truyền thống \"vẽ\" ra đủ loại chi phí, báo giá hàng trăm triệu và kéo dài 3-6 tháng.",
    en: "Exploited by traditional agencies that inflate costs, quote hundreds of millions, and drag projects out for 3-6 months."
  },

  // Pain Point 3
  "3. Nỗi đau khi đi Gọi vốn: \"Bàn tay trắng gặp Nhà đầu tư\"": {
    vi: "3. Nỗi đau khi đi Gọi vốn: \"Bàn tay trắng gặp Nhà đầu tư\"",
    en: "3. Pitching Dilemma: \"Empty-handed before investors\""
  },
  "Founder đi gặp các Quỹ (VCs) hoặc Thiên thần (Angel Investors) chỉ với một file Slide (Pitch Deck) bóng bẩy và những lời hứa hẹn.": {
    vi: "Founder đi gặp các Quỹ (VCs) hoặc Thiên thần (Angel Investors) chỉ với một file Slide (Pitch Deck) bóng bẩy và những lời hứa hẹn.",
    en: "Founders pitch to VCs or Angel Investors armed with nothing but a polished slide deck and promises."
  },
  "Nhà đầu tư thời nay rất thực tế, họ không còn xuống tiền cho \"ý tưởng trên giấy\". Câu hỏi của họ luôn là: \"Sản phẩm đâu? Có số liệu (Traction) chưa?\"": {
    vi: "Nhà đầu tư thời nay rất thực tế, họ không còn xuống tiền cho \"ý tưởng trên giấy\". Câu hỏi của họ luôn là: \"Sản phẩm đâu? Có số liệu (Traction) chưa?\"",
    en: "Modern investors are highly pragmatic; they no longer fund \"paper ideas.\" Their question is always: \"Where is the product? What's your traction?\""
  },
  "Founder cảm thấy tự ti, vị thế thương lượng thấp vì không có gì để chứng minh năng lực thực thi (Execution Capability).": {
    vi: "Founder cảm thấy tự ti, vị thế thương lượng thấp vì không có gì để chứng minh năng lực thực thi (Execution Capability).",
    en: "Founders feel insecure with weak bargaining power because they have nothing to prove their execution capability."
  },

  // Pain Point 4
  "4. Nỗi đau về Kỹ thuật: \"Sự mù mờ công nghệ\"": {
    vi: "4. Nỗi đau về Kỹ thuật: \"Sự mù mờ công nghệ\"",
    en: "4. Non-Tech Founder Wall: \"Tech ignorance\""
  },
  "Rất nhiều Founder xuất thân từ Dân Kinh doanh (Business), Marketing hoặc Chuyên gia ngành (Domain Expert). Họ cực giỏi về thị trường nhưng không biết một dòng code nào.": {
    vi: "Rất nhiều Founder xuất thân từ Dân Kinh doanh (Business), Marketing hoặc Chuyên gia ngành (Domain Expert). Họ cực giỏi về thị trường nhưng không biết một dòng code nào.",
    en: "Many founders come from business, marketing, or domain expertise backgrounds. They know the market inside out but can't write a single line of code."
  },
  "Sợ bị Dev \"qua mặt\" hoặc nói giảm nói tránh về tiến độ (Tech-speak).": {
    vi: "Sợ bị Dev \"qua mặt\" hoặc nói giảm nói tránh về tiến độ (Tech-speak).",
    en: "Fear of being misled by developers using jargon to downplay delays or hide poor progress."
  },
  "Không biết chọn Tech Stack nào (React, Flutter, No-code hay Python?) để sau này dễ mở rộng, sợ chọn sai là phải đập đi xây lại từ đầu.": {
    vi: "Không biết chọn Tech Stack nào (React, Flutter, No-code hay Python?) để sau này dễ mở rộng, sợ chọn sai là phải đập đi xây lại từ đầu.",
    en: "Unsure which tech stack to choose (React, Flutter, No-code, or Python?) for future scalability, fearing a wrong choice means starting over."
  },
  "Bị quá tải thông tin, không biết thế nào là \"đủ dùng\" cho một MVP, dẫn đến việc đòi làm quá nhiều tính năng (Feature Creep) khiến dự án bị phình to và chết yểu.": {
    vi: "Bị quá tải thông tin, không biết thế nào là \"đủ dùng\" cho một MVP, dẫn đến việc đòi làm quá nhiều tính năng (Feature Creep) khiến dự án bị phình to và chết yểu.",
    en: "Overwhelmed by information, not knowing what is \"just enough\" for an MVP, leading to feature creep that inflates the project until it fails."
  },
  "Bạn tập trung bán hàng và hiểu User đi, phần Tech để chúng tôi lo. Chúng tôi dịch ý tưởng kinh doanh của bạn thành code sạch, đóng gói gọn gàng và bàn giao 100% quyền sở hữu cho bạn.": {
    vi: "Bạn tập trung bán hàng và hiểu User đi, phần Tech để chúng tôi lo. Chúng tôi dịch ý tưởng kinh doanh của bạn thành code sạch, đóng gói gọn gàng và bàn giao 100% quyền sở hữu cho bạn.",
    en: "Focus on sales and understanding your users; let us handle the tech. We translate your business ideas into clean code, package it neatly, and hand over 100% ownership to you."
  },

  // Pain Point 5
  "5. Nỗi đau Validate: \"Sợ xây lên một thứ không ai thèm dùng\"": {
    vi: "5. Nỗi đau Validate: \"Sợ xây lên một thứ không ai thèm dùng\"",
    en: "5. Build-Something-Nobody-Wants Nightmare: \"Fear of building useless things\""
  },
  "Đây là nguyên nhân số 1 khiến Startup thất bại (theo CB Insights). Founder quá yêu sản phẩm của mình, đóng cửa tự xây 6 tháng, ngày ra mắt hí hửng nhưng... không một bóng người tải về.": {
    vi: "Đây là nguyên nhân số 1 khiến Startup thất bại (theo CB Insights). Founder quá yêu sản phẩm của mình, đóng cửa tự xây 6 tháng, ngày ra mắt hí hửng nhưng... không một bóng người tải về.",
    en: "This is the #1 reason startups fail (according to CB Insights). Founders fall in love with their product, shut themselves away for 6 months to build it, only to launch to absolute silence."
  },
  "Nỗi sợ vô hình về việc mình đang ảo tưởng, đang tự lừa dối bản thân về nhu cầu của thị trường.": {
    vi: "Nỗi sợ vô hình về việc mình đang ảo tưởng, đang tự lừa dối bản thân về nhu cầu của thị trường.",
    en: "An invisible fear of being delusional and self-deceived about real market demand."
  },
  "Khách hàng tiềm năng bảo: \"Cái này hay đấy, khi nào xong gửi tôi xem\", nhưng khi xong bảo họ trả tiền thì họ từ chối. Founder cần một công cụ để test \"Willingness-to-pay\" (Sự sẵn sàng trả tiền) của khách ngay lập tức.": {
    vi: "Khách hàng tiềm năng bảo: \"Cái này hay đấy, khi nào xong gửi tôi xem\", nhưng khi xong bảo họ trả tiền thì họ từ chối. Founder cần một công cụ để test \"Willingness-to-pay\" (Sự sẵn sàng trả tiền) của khách ngay lập tức.",
    en: "Potential customers say, \"This is great, let me know when it's done,\" but refuse to pay when it launches. Founders need a tool to test willingness-to-pay immediately."
  },

  // PHẦN 3: THE SOLUTION & OUTCOME
  "The Solution & Outcome": {
    vi: "Giải pháp & Kết quả",
    en: "The Solution & Outcome"
  },
  "Chúng tôi không bán giờ code. Chúng tôi ship Tín hiệu thị trường (Market Signal).": {
    vi: "Chúng tôi không bán giờ code. Chúng tôi ship Tín hiệu thị trường (Market Signal).",
    en: "We do not sell coding hours. We ship Market Signals."
  },
  "MVP Click-and-Run (Chạy thực tế)": {
    vi: "MVP Click-and-Run (Chạy thực tế)",
    en: "Click-and-Run MVP (Live Running)"
  },
  "Không phải bản Figma hay Mockup tĩnh. Đây là sản phẩm hoàn chỉnh, có database, deploy live link để bạn gửi cho Investor hoặc chạy ads thu Lead.": {
    vi: "Không phải bản Figma hay Mockup tĩnh. Đây là sản phẩm hoàn chỉnh, có database, deploy live link để bạn gửi cho Investor hoặc chạy ads thu Lead.",
    en: "Not a Figma file or a static mockup. This is a fully functional product with a database and a live deployed link you can send to investors or run lead generation ads."
  },
  "1 Core Workflow duy nhất": {
    vi: "1 Core Workflow duy nhất",
    en: "1 Single Core Workflow"
  },
  "Ép phạm vi (Scope) về mức tinh gọn nhất. Giúp bạn tập trung 100% vào tính năng \"ăn tiền\" nhất của Startup.": {
    vi: "Ép phạm vi (Scope) về mức tinh gọn nhất. Giúp bạn tập trung 100% vào tính năng \"ăn tiền\" nhất của Startup.",
    en: "Force the scope to its absolute leanest. Helping you focus 100% on the most high-value feature of your startup."
  },
  "Sẵn sàng để mở rộng (Scalable Codebase)": {
    vi: "Sẵn sàng để mở rộng (Scalable Codebase)",
    en: "Scalable Codebase (Ready to Expand)"
  },
  "Code sạch, tài liệu bàn giao rõ ràng, bàn giao 100% Github. Khi có vốn, bạn có thể tự phát triển tiếp mà không phải đập đi xây lại.": {
    vi: "Code sạch, tài liệu bàn giao rõ ràng, bàn giao 100% Github. Khi có vốn, bạn có thể tự phát triển tiếp mà không phải đập đi xây lại.",
    en: "Clean code, well-documented, 100% GitHub handoff. When you secure funding, you can scale it yourself without rebuilding from scratch."
  },

  // PHẦN 4: PROCESS (14 ngày đếm ngược)
  "Our Process": {
    vi: "Quy trình của chúng tôi",
    en: "Our Process"
  },
  "14 ngày biến ý tưởng trên giấy thành Sản phẩm chạy mượt mà": {
    vi: "14 ngày biến ý tưởng trên giấy thành Sản phẩm chạy mượt mà",
    en: "14 days to turn a paper idea into a smoothly running product"
  },
  "Scope Lock": {
    vi: "Scope Lock",
    en: "Scope Lock"
  },
  "Lean UI/UX": {
    vi: "Lean UI/UX",
    en: "Lean UI/UX"
  },
  "AI-Assisted Engineering": {
    vi: "AI-Assisted Engineering",
    en: "AI-Assisted Engineering"
  },
  "Ship & Handoff": {
    vi: "Bàn giao & Nghiệm thu",
    en: "Ship & Handoff"
  },
  "Workshop cắt bỏ \"Noise\" (tính năng thừa), chốt luồng đi chính của User.": {
    vi: "Workshop cắt bỏ \"Noise\" (tính năng thừa), chốt luồng đi chính của User.",
    en: "Workshop to eliminate \"Noise\" (unnecessary features) and lock the user's primary flow."
  },
  "Thiết kế giao diện app tập trung vào trải nghiệm cốt lõi.": {
    vi: "Thiết kế giao diện app tập trung vào trải nghiệm cốt lõi.",
    en: "Design the app interface focusing on the core experience."
  },
  "Đội ngũ Senior kết hợp sức mạnh AI để code, test và hoàn thiện logic với tốc độ tên lửa.": {
    vi: "Đội ngũ Senior kết hợp sức mạnh AI để code, test và hoàn thiện logic với tốc độ tên lửa.",
    en: "Senior team combines the power of AI to write code, test, and complete logic at rocket speed."
  },
  "Deploy sản phẩm, tích hợp Analytics cơ bản và bàn giao toàn bộ tài sản.": {
    vi: "Deploy sản phẩm, tích hợp Analytics cơ bản và bàn giao toàn bộ tài sản.",
    en: "Deploy the product, integrate basic analytics, and hand over all assets."
  },

  // PHẦN 5: CHÂN DUNG "FOUNDER FIT"
  "Founder Fit": {
    vi: "Founder Fit",
    en: "Founder Fit"
  },
  "Gói dịch vụ này có dành cho bạn?": {
    vi: "Gói dịch vụ này có dành cho bạn?",
    en: "Is this service package right for you?"
  },
  "Nên chọn chúng tôi": {
    vi: "Nên chọn chúng tôi",
    en: "Good Fit (Choose Us)"
  },
  "KHÔNG nên chọn": {
    vi: "KHÔNG nên chọn",
    en: "Not a Fit (Do Not Choose)"
  },
  "Bạn cần sản phẩm thật ĐỂ DEMO gọi vốn hoặc chạy thử nghiệm với tập khách hàng Alpha/Beta.": {
    vi: "Bạn cần sản phẩm thật ĐỂ DEMO gọi vốn hoặc chạy thử nghiệm với tập khách hàng Alpha/Beta.",
    en: "You need a real product TO DEMO for fundraising or run tests with Alpha/Beta customer segments."
  },
  "Bạn có insight ngành rõ ràng nhưng thiếu cánh tay công nghệ (Tech-wing).": {
    vi: "Bạn có insight ngành rõ ràng nhưng thiếu cánh tay công nghệ (Tech-wing).",
    en: "You have clear industry insights but lack a technological tech-wing."
  },
  "Bạn muốn thất bại nhanh hoặc thành công nhanh (Fail fast, learn faster).": {
    vi: "Bạn muốn thất bại nhanh hoặc thành công nhanh (Fail fast, learn faster).",
    en: "You want to fail fast or succeed fast (Fail fast, learn faster)."
  },
  "Bạn muốn xây một hệ thống Enterprise đồ sộ, bảo mật ngân hàng ngay từ phiên bản đầu tiên.": {
    vi: "Bạn muốn xây một hệ thống Enterprise đồ sộ, bảo mật ngân hàng ngay từ phiên bản đầu tiên.",
    en: "You want to build a massive enterprise system with bank-grade security right from version one."
  },
  "Bạn chưa biết User của mình là ai và muốn làm một cái app \"có tất cả mọi thứ\".": {
    vi: "Bạn chưa biết User của mình là ai và muốn làm một cái app \"có tất cả mọi thứ\".",
    en: "You don't know who your users are yet and want to build an app that \"has everything\"."
  },

  // PHẦN 6: PRICING
  "Pricing Model": {
    vi: "Bảng giá",
    en: "Pricing Model"
  },
  "Một mức giá cố định. Không phát sinh chi phí.": {
    vi: "Một mức giá cố định. Không phát sinh chi phí.",
    en: "One fixed price. No hidden costs."
  },
  "Chúng tôi mang đến giải pháp tối ưu cho Founder giai đoạn đầu, không mập mờ về giá, không kéo dài thời gian. Mọi tính năng được đóng gói vừa vặn trong một Sprint 2 tuần quyết định để kiểm chứng giá trị cốt lõi sản phẩm.": {
    vi: "Chúng tôi mang đến giải pháp tối ưu cho Founder giai đoạn đầu, không mập mờ về giá, không kéo dài thời gian. Mọi tính năng được đóng gói vừa vặn trong một Sprint 2 tuần quyết định để kiểm chứng giá trị cốt lõi sản phẩm.",
    en: "We deliver the optimal solution for early-stage founders: transparent pricing, zero delays. Every feature is packed tightly into a decisive 2-week sprint to validate your core product value."
  },
  "Gói Vibe Code": {
    vi: "Gói Vibe Code",
    en: "Vibe Code Package"
  },
  "Trọn gói cho 1 Sprint 2 tuần": {
    vi: "Trọn gói cho 1 Sprint 2 tuần",
    en: "All-inclusive for a 2-week sprint"
  },
  "1 Primary User Role": {
    vi: "1 Primary User Role",
    en: "1 Primary User Role"
  },
  "1 Core Workflow": {
    vi: "1 Core Workflow",
    en: "1 Core Workflow"
  },
  "Live Deployment": {
    vi: "Live Deployment",
    en: "Live Deployment"
  },
  "Source Code Handoff": {
    vi: "Source Code Handoff",
    en: "Source Code Handoff"
  },
  "1-week Support sau bàn giao": {
    vi: "1-week Support sau bàn giao",
    en: "1-week post-handoff support"
  },
  "Bắt đầu Sprint của bạn ngay": {
    vi: "Bắt đầu Sprint của bạn ngay",
    en: "Start your Sprint now"
  },

  // PHẦN 7: FAQ
  "Các câu hỏi thường gặp": {
    vi: "Các câu hỏi thường gặp",
    en: "Frequently Asked Questions"
  },
  "2 tuần có ngắn quá để làm một sản phẩm chất lượng không?": {
    vi: "2 tuần có ngắn quá để làm một sản phẩm chất lượng không?",
    en: "Is 2 weeks too short to build a quality product?"
  },
  "Ngắn nếu làm bừa, nhưng đủ nếu áp dụng AI-assisted build phối hợp với sự định hướng của Senior Product Manager. Chúng tôi không cắt giảm chất lượng, chúng tôi cắt giảm những tính năng chưa cần thiết.": {
    vi: "Ngắn nếu làm bừa, nhưng đủ nếu áp dụng AI-assisted build phối hợp với sự định hướng của Senior Product Manager. Chúng tôi không cắt giảm chất lượng, chúng tôi cắt giảm những tính năng chưa cần thiết.",
    en: "Too short if done poorly, but sufficient when applying AI-assisted builds coordinated with Senior Product Manager guidance. We do not compromise on quality; we trim unnecessary features."
  },
  "Tôi có bị phụ thuộc vào bên bạn sau khi bàn giao không?": {
    vi: "Tôi có bị phụ thuộc vào bên bạn sau khi bàn giao không?",
    en: "Will I be dependent on you after handoff?"
  },
  "Hoàn toàn không. Chúng tôi bàn giao 100% mã nguồn và tài liệu. Bạn toàn quyền sở hữu sản phẩm của mình.": {
    vi: "Hoàn toàn không. Chúng tôi bàn giao 100% mã nguồn và tài liệu. Bạn toàn quyền sở hữu sản phẩm của mình.",
    en: "Absolutely not. We hand over 100% of the source code and documentation. You gain full ownership of your product."
  },

  // CONTACT & OTHER
  "Biến ý tưởng thành MVP chạy thực tế sau đúng 14 ngày.": {
    vi: "Biến ý tưởng thành MVP chạy thực tế sau đúng 14 ngày.",
    en: "Turn your idea into a live running MVP in exactly 14 days."
  },
  "Đặt lịch Hack-Sprint ngay →": {
    vi: "Đặt lịch Hack-Sprint ngay →",
    en: "Book your Hack-Sprint now →"
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
  "433 - 435 Nguyen Huu Tho, Cam Le Ward, Da Nang": {
    vi: "433 - 435 Nguyễn Hữu Thọ, Cẩm Lệ, Đà Nẵng",
    en: "433 - 435 Nguyen Huu Tho, Cam Le Ward, Da Nang"
  },
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
    title: "Kyanon Digital - Biến ý tưởng thành MVP chạy thực tế sau 14 ngày",
    description: "Biến ý tưởng thành MVP chạy thực tế sau đúng 14 ngày. Gói Vibe Code $2.5K giúp early-stage founders đóng gói lõi sản phẩm (Core Loop) và thu thập tín hiệu thực từ người dùng ngay lập tức."
  },
  en: {
    lang: "en",
    title: "Kyanon Digital - Turn your idea into a live MVP in 14 days",
    description: "Turn your idea into a live running MVP in exactly 14 days. The $2.5K Vibe Code package helps early-stage founders package their core product loop and get real user feedback immediately."
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
