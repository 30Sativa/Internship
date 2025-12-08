---
title: "Proposal"
date: "2025-10-25"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

### 1. Tóm tắt điều hành

**Blood Donation Support System (BDSS)** là nền tảng web thông minh giúp **kết nối người hiến máu với người cần máu**, **quản lý tồn kho máu**, và **điều phối ca hiến máu khẩn cấp** thông qua hệ thống matching tự động, dashboard realtime và quy trình hiến máu tự động.

Giải pháp giải quyết vấn đề cấp thiết: **thiếu hệ thống tập trung để quản lý hiệu quả nguồn cung cấp máu và xử lý ca khẩn cấp**.

Hệ thống được xây dựng theo kiến trúc **3-tier trên AWS Cloud**, bao gồm:

- **Frontend**: ReactJS SPA hiện đại, hỗ trợ tìm kiếm theo vị trí và quản lý ca hiến.
- **Backend**: C# .NET Web API xử lý nghiệp vụ y tế, REST API và matching algorithms.
- **Database**: SQL Server triển khai trên EC2 hay RDS
- **Auth**: AWS Cognito quản lý xác thực và phân quyền người dùng.
- **Notifications**: SNS/SES gửi thông báo và email khẩn cấp.
- **Storage**: S3 lưu trữ hồ sơ và tài liệu y tế.

📈 **Lợi ích chính**

- Giảm **60% thời gian xử lý ca khẩn cấp** nhờ matching tự động.
- Tăng **40% hiệu quả quản lý tồn kho máu** với hệ thống cảnh báo thông minh.
- ROI sau **~6 tháng** nhờ chi phí thấp (~30–35 USD/tháng).

---

### 2. Tuyên bố vấn đề

#### 🩸 Tình trạng hiện tại

Các cơ sở y tế hiện nay vẫn quản lý hiến máu thủ công — gọi điện, đăng bài, hoặc tra cứu qua Excel. Hệ thống này **thiếu khả năng realtime**, **không có cảnh báo khẩn cấp**, và **không thể tự động matching** giữa người hiến và người cần máu.

#### ⚠️ Thách thức chính

- ❌ Không có hệ thống **matching tự động** theo nhóm máu và vị trí.
- ❌ Thiếu khả năng **realtime alert** cho ca khẩn.
- ❌ Không có công cụ **dashboard phân tích tồn kho**.
- ❌ Quy trình hiến máu **thủ công và rời rạc**.

#### 👩‍⚕️ Ảnh hưởng đến các bên liên quan

| Vai trò        | Vấn đề chính                                  |
| -------------- | --------------------------------------------- |
| Người hiến máu | Không biết khi nào cần, không được nhắc nhở   |
| Người cần máu  | Khó tìm người hiến phù hợp, thiếu realtime    |
| Nhân viên y tế | Quản lý thủ công, dễ sai sót                  |
| Cơ sở y tế     | Thiếu dữ liệu phân tích, khó dự báo nguồn máu |

#### 📉 Hậu quả kinh doanh

Nếu không có giải pháp, cơ sở y tế tiếp tục **chậm xử lý ca khẩn cấp** và **quản lý tồn kho kém hiệu quả**, ảnh hưởng trực tiếp đến tính mạng bệnh nhân.

---

### 3. Kiến trúc giải pháp

#### 🏗️ Tổng quan kiến trúc

![AWS Architecture](/images/2-Proposal/awsnew.jpg)

Hệ thống được triển khai trên một VPC AWS theo mô hình 3-tier với phân tầng rõ ràng giữa edge (CDN/DNS), layer ứng dụng và layer dữ liệu. Thiết kế phản ánh sơ đồ kiến trúc: public subnet chứa các tài nguyên edge (ALB, NAT gateway, Internet Gateway), private subnet chứa application servers và dữ liệu (EC2 / Auto Scaling group, RDS/SQL Server, ElastiCache). Ngoài ra có các thành phần quản lý sự kiện và giám sát (CloudWatch, EventBridge, SNS) như trong hình.

Kiến trúc chính gồm:

1️⃣ Edge & Delivery

- **Amazon Route 53** – DNS, tên miền và record routing.
- **Amazon CloudFront** – CDN để phân phối React SPA và tĩnh assets.
- **Amazon S3** – Lưu frontend (SPA) và lưu trữ tĩnh/backup.
- **AWS WAF** – Bảo vệ lớp ứng dụng (đặt trước CloudFront/ALB).

2️⃣ Network & Load Balancing

- **Internet Gateway** + **Public Subnets** – public endpoints (ALB, NAT gateway).
- **Application Load Balancer (ALB)** – phân phối traffic đến Auto Scaling group của application servers (EC2).
- **NAT Gateway** – cho phép instances trong private subnet truy cập internet để cập nhật/ghi log ra S3.

3️⃣ Application & Integration

- **EC2 (Auto Scaling)** – Chạy .NET Web API (các instance đặt trong private subnets).
- **Amazon EventBridge** – bus sự kiện để định tuyến event từ ứng dụng, CloudWatch và các dịch vụ AWS tới các consumers/notification.
- **Amazon SNS** – channel gửi thông báo (SMS, email) và kết nối với EventBridge cho alerting.
- **AWS Cognito** – xác thực và phân quyền người dùng (Donor, Requester, Staff, Admin).
- **AWS Location Service** – tìm/khớp người hiến theo vị trí.

##### 3️⃣ Data & Analytics Layer

- **Amazon RDS (SQL Server)** – Managed relational DB trong private subnet (Multi-AZ) để lưu hồ sơ, nhóm máu, ca hiến, tồn kho. Nếu cần quản lý trực tiếp có thể dùng SQL Server trên EC2, nhưng khuyến nghị RDS cho HA/backup dễ dàng.
- **Amazon ElastiCache (Redis)** – cache cho session, cơ chế matching nhanh, giảm tải DB.
- **Amazon S3 (Data)** – lưu logs, chứng nhận, báo cáo, backup.

5️⃣ Monitoring, Logging & CI/CD

- **Amazon CloudWatch** – logs, metrics, alarms.
- **EventBridge → SNS** – chuỗi xử lý logs/alerts (log/metric → EventBridge rules → SNS notifications).
- **GitHub Actions** – CI/CD pipeline, deploy lên Auto Scaling group / RDS.

#### 🔧 Dịch vụ AWS sử dụng

| Service                  | Vai trò / Ghi chú                                               |
| ------------------------ | --------------------------------------------------------------- |
| **Route 53**             | DNS và routing                                                  |
| **CloudFront**           | CDN cho SPA, kết hợp WAF để bảo vệ ứng dụng                     |
| **S3**                   | Lưu frontend, logs, backup, tài liệu y tế                       |
| **ALB (Application LB)** | Phân phối HTTP/HTTPS tới Auto Scaling group                     |
| **NAT Gateway**          | Cho phép truy cập internet từ private subnet                    |
| **EC2 (ASG)**            | Chạy .NET API (private subnets)                                 |
| **RDS (SQL Server)**     | Managed DB trong private subnet (Multi-AZ)                      |
| **ElastiCache (Redis)**  | Cache / session / hỗ trợ matching nhanh                         |
| **Cognito**              | Auth & RBAC                                                     |
| **EventBridge**          | Bus sự kiện, integration giữa services & rule-based routing     |
| **SNS**                  | Notifications (SMS, email) và topic để subscribe alert channels |
| **CloudWatch**           | Logs, metrics, alarm và đưa vào EventBridge                     |
| **WAF**                  | Bảo vệ ứng dụng (đặt trước CloudFront/ALB)                      |
| **Location Service**     | Tìm kiếm người hiến theo vị trí (geospatial)                    |

#### 🔐 Kiến trúc bảo mật (cập nhật)

- **VPC isolation**: private subnets cho DB và cache; security groups hạn chế theo port/role.
- **TLS everywhere**: CloudFront/ALB terminate TLS, backend kết nối nội bộ qua HTTPS.
- **AWS WAF**: chính sách chống OWASP, rate limiting.
- **IAM roles & least privilege** cho EC2, RDS snapshots, Lambda (nếu có), EventBridge.
- **Encryption**: EBS/RDS/S3 được mã hóa (AES-256 / KMS), dữ liệu y tế mã hóa khi nghỉ và truyền tải.
- **Audit & Logging**: CloudWatch logs + EventBridge rules để ghi lại và forward sang SNS/alerting.

#### ⚙️ Thiết kế khả năng mở rộng

- ALB + EC2 Auto Scaling cho application layer
- RDS Multi-AZ + read replicas (nếu cần để scale đọc)
- ElastiCache scale-out cho cache layer
- CloudFront + S3 để giảm tải origin
- Event-driven integration (EventBridge) giúp tách services và cải thiện khả năng mở rộng

---

### 4. Triển khai kỹ thuật

#### 🧩 Các giai đoạn thực hiện

| Giai đoạn | Nội dung chính        | Deliverables                         |
| --------- | --------------------- | ------------------------------------ |
| Phase 1   | Requirements & Design | PRD, ERD, Blood Compatibility Matrix |
| Phase 2   | Backend API           | .NET API, SQL schema                 |
| Phase 3   | Frontend UI           | React SPA, Donor Portal              |
| Phase 4   | Auth & Matching       | Cognito RBAC, matching logic         |
| Phase 5   | Notifications         | SNS/SES alerts, AppSync realtime     |
| Phase 6   | Testing & Deployment  | CI/CD pipeline, HIPAA compliance     |

#### ⚙️ Yêu cầu kỹ thuật

- EC2 t3.small (API + DB)
- S3 (10GB storage)
- SES/SNS 5.000+ messages/tháng

#### 🧠 Phương pháp phát triển

- Agile (2-week sprint)
- RESTful API + GraphQL Subscriptions
- IaC bằng Terraform
- Tuân thủ chuẩn y tế (HIPAA)

#### 🧪 Kiểm thử

- **Unit Test**: xUnit cho logic matching
- **Integration**: Postman workflows
- **Load Test**: JMeter (emergency flow)
- **UI Test**: Cypress (donor journey)

#### 🚀 Kế hoạch triển khai

- CI/CD qua **GitHub Actions**
- Blue-green deployment trên EC2
- Backup & DR cho dữ liệu y tế
- Compliance audit logging

---

### 5. Lộ trình & Mốc thời gian

| Giai đoạn | Thời gian            | Kết quả                        |
| --------- | -------------------- | ------------------------------ |
| Week 1–2  | Requirement & Design | PRD, ERD, Matrix               |
| Week 3–5  | Backend API          | CRUD + Matching logic          |
| Week 6–8  | Frontend             | Donor portal, emergency alerts |
| Week 9–10 | Notifications        | SNS/SES + AppSync              |
| Week 11   | Testing              | Load + Compliance test         |
| Week 12   | Deployment           | EC2 + Demo Presentation        |

---

### 6. Ước tính ngân sách

| Thành phần          | Chi phí/tháng       |
| ------------------- | ------------------- |
| EC2 (t3.small)      | ~$15                |
| S3 Storage (10GB)   | ~$3                 |
| Cognito             | ~$0 (Free 50k MAU)  |
| SNS/SES (5k alerts) | ~$8                 |
| **Tổng cộng**       | **~$25–30 / tháng** |

📊 **ROI**: Giảm 70% chi phí quản lý thủ công (~100 USD/tháng) → Hoàn vốn sau **6 tháng**.

---

### 7. Đánh giá rủi ro

| Rủi ro                    | Ảnh hưởng | Xác suất | Giảm thiểu                  |
| ------------------------- | --------- | -------- | --------------------------- |
| Chi phí vượt dự kiến      | Medium    | Medium   | Free-tier + monitoring      |
| Tải cao trong ca khẩn cấp | High      | Low      | AppSync auto-scale          |
| Bảo mật dữ liệu y tế      | High      | Medium   | Cognito + WAF + IAM Roles   |
| Lỗi matching              | Critical  | Low      | Medical validation test     |
| Notification fail         | High      | Medium   | Multi-channel + retry queue |
| Donor no-show             | Medium    | High     | Backup matching logic       |

---

### 8. Kết quả kỳ vọng

- ⚙️ **Technical**: Cloud-native architecture, >5.000 users, 100+ cases/tháng.
- 🩸 **Healthcare**: Giảm 60% thời gian phản hồi ca khẩn.
- 📊 **Business**: ROI đạt sau 6 tháng, chi phí duy trì thấp.
- 🏥 **Strategic**: Có thể mở rộng thành hệ thống liên kết quốc gia.

---

### 9. Phụ lục

- **A. Technical Specs** – ERD, API endpoints, matrix.
- **B. Cost Calculations** – AWS Pricing breakdown.
- **C. Architecture Diagrams** – Logical + Physical views.
- **D. Medical Compliance** – HIPAA & blood safety.
- **E. References** – AWS docs, case studies, research.
