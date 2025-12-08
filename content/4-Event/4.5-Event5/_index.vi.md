---
title: "Event 5"
date: "2025-11-17"
weight: 5
chapter: false
pre: " <b> 4.5. </b> "
---

# AWS Cloud Mastery Series #2: Từ DevOps, IaC đến Container & Observability

### Mục Đích Của Sự Kiện

- **Tái định hình tư duy (Mindset Transformation):** Hiểu sâu sắc về Vòng đời Giá trị (Value Cycle) và cách văn hóa DevOps giúp doanh nghiệp cân bằng giữa tốc độ phát triển và sự ổn định của hệ thống.
- **Cách mạng hóa hạ tầng (Modern Infrastructure):** Chuyển đổi từ phương thức quản trị thủ công rủi ro (ClickOps) sang quản trị bằng mã nguồn (Infrastructure as Code - IaC) với bộ ba công cụ: CloudFormation, Terraform và CDK.
- **Chiến lược Container hóa (Container Strategy):** Phân tích kiến trúc và đưa ra quyết định lựa chọn nền tảng điều phối phù hợp nhất với nhu cầu: Từ đơn giản (App Runner), tích hợp sâu (ECS) đến mở rộng linh hoạt (EKS).
- **Giám sát và Thấu hiểu (Deep Observability):** Thiết lập hệ thống giám sát chủ động, không chỉ để báo lỗi mà còn để thấu hiểu hành vi hệ thống và tối ưu trải nghiệm người dùng bằng CloudWatch và X-Ray.

### Danh Sách Diễn Giả
- **Đội ngũ chuyên gia AWS & Cloud Engineers:** Mang đến góc nhìn kiến trúc tổng thể, chiến lược Platform Engineering và các bài demo thực chiến.
- **Anh Trần Vĩ**: FCJer 2024 - Chia sẻ kinh nghiệm thực tế từ cộng đồng.
- **Anh Long Quy Nghiêm**: FCJer 2024 - Chia sẻ góc nhìn từ người mới tiếp cận và phát triển kỹ năng Cloud.

### Nội Dung Chi Tiết

#### **1. DevOps Mindset & CI/CD Pipeline (Nền Tảng Tư Duy)**

Sự kiện nhấn mạnh rằng DevOps không phải là một chức danh hay công cụ, mà là triết lý tập trung vào việc tối ưu hóa dòng chảy giá trị từ ý tưởng đến người dùng cuối.

- **The Value Cycle (Vòng Đời Giá Trị):**

  - Là một chu trình khép kín gồm 5 giai đoạn: _Insights & Analysis (Phân tích nhu cầu) -\> Portfolio & Backlog (Lập kế hoạch) -\> Continuous Integration (Tích hợp) -\> Continuous Testing (Kiểm thử) -\> Continuous Delivery (Chuyển giao)_.
  - **Mục tiêu cốt lõi:** Giải quyết bài toán kinh điển "Speed vs. Stability". DevOps chứng minh rằng chúng ta có thể tăng tốc độ ra mắt tính năng mới (Speed) mà không cần đánh đổi sự an toàn của hệ thống (Stability) nhờ vào tự động hóa.

- **Định nghĩa lại các khái niệm CI/CD:**

  - **Continuous Integration (CI):** Là văn hóa cam kết code thường xuyên (hàng ngày). Mọi thay đổi code đều kích hoạt quy trình Build và Test tự động nhằm phát hiện lỗi ngay lập tức (Fail fast), tránh tích tụ nợ kỹ thuật.
  - **Continuous Delivery (Chuyển giao liên tục):** Code sau khi qua CI sẽ tự động được deploy lên môi trường Staging. Tuy nhiên, bước deploy ra Production là một quyết định kinh doanh, cần một cái "gật đầu" xác nhận từ con người (**Manual Approval**).
  - **Continuous Deployment (Triển khai liên tục):** Mức độ tự động hóa cao nhất. Nếu code vượt qua mọi bài test, nó sẽ đi thẳng ra Production mà không có bất kỳ sự can thiệp nào của con người.

- **Chiến lược Pipeline hiệu quả:**

  - **Centralized CI:** Đội ngũ Platform xây dựng các pipeline chuẩn, đảm bảo tính bảo mật và tuân thủ (Compliance), nhưng trao quyền cho Developer tự sử dụng (Self-service) để không tạo ra nút thắt cổ chai.
  - **Artifact Management (Quản lý thành phẩm):** Tuân thủ nguyên tắc bất biến **"Build Once, Deploy Anywhere"**. Mã nguồn chỉ được đóng gói một lần duy nhất thành Binary/Docker Image (Artifact). Các môi trường Test, Staging hay Prod đều dùng chung Artifact này để đảm bảo những gì đã test chính là những gì sẽ chạy thật.
  - **Cơ chế phản hồi nhanh (Fail Fast):** Pipeline phải được thiết kế để dừng ngay lập tức khi có vấn đề (Lỗi biên dịch, Code xấu, Lỗ hổng bảo mật, Test chậm). Thà dừng quy trình sớm còn hơn để lỗi lọt xuống các bước sau tốn kém hơn.

- **Đo lường hiệu quả (Metrics):**

  - Sử dụng **Heatmap** để trực quan hóa hiệu suất của toàn bộ tổ chức.
  - Tập trung vào 4 chỉ số vàng (DORA Metrics): _Tần suất triển khai, Thời gian thay đổi (Lead time), Tỷ lệ lỗi khi thay đổi (Change Failure Rate), và Thời gian khôi phục dịch vụ (MTTR)_.

#### **2. Infrastructure as Code (IaC) - Từ ClickOps Đến Code**

Phần này phân tích sự dịch chuyển bắt buộc từ quản trị thủ công sang tự động hóa hạ tầng.

- **Vấn đề của "ClickOps":** Việc click chuột trên AWS Console tuy trực quan nhưng tiềm ẩn rủi ro lớn: Sai sót do con người (quên cấu hình), không thể tái tạo lại môi trường y hệt (Inconsistent), và cực kỳ khó khăn khi cần mở rộng quy mô.
- **Giải pháp IaC:** Biến hạ tầng thành Code để hưởng các lợi ích của phát triển phần mềm: Có Version Control (Git), có Code Review, có thể Test và Tái sử dụng.

**Phân tích chi tiết 3 công cụ IaC hàng đầu:**

- **1. AWS CloudFormation (Native Tool):**

  - Công cụ "chính chủ" của AWS, sử dụng **YAML/JSON** để khai báo trạng thái mong muốn (Declarative).
  - **Template Anatomy:** Cấu trúc gồm _Parameters_ (Đầu vào linh hoạt), _Mappings_ (Ánh xạ giá trị theo vùng/môi trường), và _Resources_ (Tài nguyên AWS cụ thể).
  - **Stack Management:** Quản lý tài nguyên theo nhóm (Stack). Khi xóa Stack, mọi tài nguyên liên quan sẽ được dọn dẹp sạch sẽ, tránh rác tài nguyên.

- **2. Terraform (Multi-Cloud Powerhouse):**

  - Công cụ mã nguồn mở, sử dụng ngôn ngữ **HCL**. Là lựa chọn số 1 cho chiến lược Đa đám mây (Multi-cloud).
  - **Quy trình an toàn:** _Write -\> Plan -\> Apply_. Bước **Plan** cho phép xem trước các thay đổi sẽ tác động thế nào đến hạ tầng thực tế trước khi áp dụng, giúp tránh các sai lầm tai hại.
  - **State File:** Là "bộ nhớ" của Terraform, lưu giữ trạng thái thực của hạ tầng để so sánh và đồng bộ hóa.

- **3. AWS CDK (Cloud Development Kit):**

  - Tiếp cận hạ tầng bằng **ngôn ngữ lập trình hiện đại** (Python, TS, Java...), tận dụng được sức mạnh của vòng lặp, điều kiện, và hướng đối tượng.
  - **Sức mạnh của Abstraction (Constructs):**
    - _L1:_ Cấu hình thô (tương đương CloudFormation).
    - _L2:_ Các Class có sẵn cấu hình mặc định an toàn (Best practices).
    - _L3:_ Các mẫu thiết kế (Patterns) dựng sẵn cả một hệ thống phức tạp (VPC + Cluster + LB) chỉ với vài dòng code.

- **Drift Detection:** Tính năng giúp phát hiện "sự trôi dạt" cấu hình - tức là sự khác biệt giữa Code (IaC) và thực tế (do ai đó sửa tay). Đây là công cụ quan trọng để duy trì kỷ luật vận hành.

#### **3. Containerization - Chiến Lược Chạy Ứng Dụng**

Đi sâu vào các mô hình điều phối (Orchestration) để chọn giải pháp tối ưu:

- **Kubernetes (K8s):**

  - Hệ thống tiêu chuẩn của thế giới Container. Kiến trúc phức tạp gồm **Control Plane** (não bộ) và **Worker Nodes** (cơ bắp).
  - Phù hợp cho các hệ thống cực lớn, cần tùy chỉnh sâu, nhưng đòi hỏi đội ngũ vận hành có kỹ năng cao.

- **So sánh Amazon ECS vs. Amazon EKS:**

  - **Amazon ECS:** "Đơn giản hóa". Được AWS thiết kế để tích hợp liền mạch với các dịch vụ khác (ALB, IAM). Phù hợp cho team muốn tập trung vào ứng dụng, bớt lo về vận hành cụm cluster.
  - **Amazon EKS:** "Chuẩn mở". Là phiên bản Managed Kubernetes của AWS. Phù hợp cho doanh nghiệp cần hệ sinh thái công cụ của K8s hoặc chạy Hybrid-cloud.

- **Mô hình tính toán (Compute Options):**

  - **EC2 Launch Type:** Bạn quản lý máy ảo (Servers). Kiểm soát tối đa nhưng phải lo việc vá lỗi OS, update agent.
  - **AWS Fargate (Serverless):** Bạn chỉ quản lý Container. AWS lo toàn bộ hạ tầng máy chủ bên dưới. Loại bỏ gánh nặng bảo trì OS.

- **AWS App Runner:**

  - Giải pháp "Zero-ops". Dành cho Developer muốn deploy Web App/API nhanh nhất có thể.
  - Tự động hóa toàn bộ từ Source Code -\> Build -\> Deploy -\> Load Balancer -\> HTTPS URL.

#### **4. Observability - Giám Sát & Tối Ưu Hóa**

Chuyển từ "Monitoring" (Hệ thống có sống không?) sang "Observability" (Tại sao hệ thống chạy chậm?).

- **Amazon CloudWatch (Trung tâm giám sát):**

  - **Metrics:** Các chỉ số đo lường định lượng (CPU cao, RAM đầy).
  - **Logs:** Nhật ký hoạt động chi tiết. *Logs Insights* giúp truy vấn và phân tích hàng triệu dòng log trong vài giây.
  - **Alarms:** Cơ chế phản ứng tự động. Khi chỉ số vượt ngưỡng -> Gửi cảnh báo hoặc Tự động scale hệ thống.

- **AWS X-Ray (Truy vết phân tán):**

  - Giải quyết bài toán "hộp đen" trong Microservices.
  - **Distributed Tracing:** Vẽ lại bản đồ đường đi của một request qua hàng chục service khác nhau. Giúp xác định chính xác service nào đang gây chậm (Latency) hoặc gây lỗi (Error) để xử lý tận gốc.

- **AWS Observability Best Practices:**

  - Tham khảo **AWS Observability Recipes** để áp dụng các mẫu giám sát chuẩn.
  - Phân biệt rõ vai trò: **Logs** cho biết chi tiết sự kiện, **Traces** cho biết ngữ cảnh và luồng đi của sự kiện đó.

### Trải nghiệm chi tiết trong Event

Buổi chuyên đề đã giúp tôi thay đổi hoàn toàn cách nhìn nhận về việc vận hành hệ thống phần mềm:

#### 1. Sự chuyển dịch từ "Ops" sang "Platform Engineering"

Tôi nhận ra vai trò của người làm DevOps hiện đại không phải là "người trực server" hay "người deploy thuê". DevOps là người xây dựng nền tảng **(Platform Builders)**. Nhiệm vụ là tạo ra một "đường cao tốc" (Pipeline & Infrastructure) an toàn và tự động, giúp Developer có thể tự mình đưa code ra thị trường (Self-service) mà không cần chờ đợi, nhưng vẫn đảm bảo các quy tắc an toàn.

#### 2. Kỷ luật trong vận hành (Operational Discipline)

Khái niệm **Immutability (Bất biến)** trong quản lý Artifact và **Drift Detection** trong IaC thực sự đắt giá. Trong môi trường doanh nghiệp, "chạy được" là chưa đủ, mà phải là "chạy ổn định và nhất quán". Việc cấm sửa tay (ClickOps) và tuân thủ quy trình "Code -> Build -> Deploy" là yếu tố sống còn để tránh những lỗi ngớ ngẩn do con người gây ra.

#### 3. Chiến lược lựa chọn công cụ thông minh

Bài học lớn nhất là không có công cụ "xịn nhất", chỉ có công cụ "phù hợp nhất với ngữ cảnh":

- Cần sự ổn định tuyệt đối và hỗ trợ tính năng AWS mới nhất? Chọn **CloudFormation**.
- Doanh nghiệp dùng nhiều Cloud (Multicloud)? Chọn **Terraform**.
- Team mạnh về lập trình, muốn viết ít code mà được hạ tầng lớn? Chọn **AWS CDK**.
- Muốn chạy Web App đơn giản mà không muốn tốn người quản trị K8s? **App Runner** là chân ái.

### Kết Luận

Chuyên đề **"DevOps & IaC Mastery"** đã vẽ nên một lộ trình trưởng thành về công nghệ:

- **Về Tư duy:** Chuyển từ làm việc cảm tính, thủ công sang tư duy hệ thống, tự động hóa và đo lường bằng dữ liệu.
- **Về Hạ tầng:** Kiểm soát hạ tầng bằng Code (IaC) để đạt được sự linh hoạt và khả năng mở rộng vô hạn.
- **Về Vận hành:** Kết hợp sức mạnh của Container với khả năng thấu hiểu hệ thống (Observability) để đảm bảo dịch vụ luôn sẵn sàng và tối ưu.

Đây chính là nền tảng kiến thức vững chắc để tôi tự tin bước vào xây dựng các hệ thống quy mô lớn trên AWS.

