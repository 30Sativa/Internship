---
layout: default
title: Blood Donation Support System (BDSS)
description: Phần mềm hỗ trợ hiến máu thông minh trên AWS Cloud
---

# 🩸 Blood Donation Support System (BDSS)
## Phần mềm hỗ trợ hiến máu thông minh trên AWS Cloud

[![Type](https://img.shields.io/badge/Type-Healthcare%20Cloud%20Solution-blue)]()
[![Weight](https://img.shields.io/badge/Weight-50%25-red)]()
[![Status](https://img.shields.io/badge/Status-Completed-success)]()

<p align="center">
  <img src="./aws%20new.png" alt="AWS Architecture" style="max-width: 920px; width: 100%; border-radius: 12px; margin: 12px auto;">
</p>

---

## Table of Contents
- [Executive Summary](#-executive-summary)
- [1. Problem Statement](#1--problem-statement)
- [2. Solution Architecture](#2--solution-architecture)
- [3. Technical Implementation](#3--technical-implementation)
- [4. Timeline & Milestones](#4--timeline--milestones)
- [5. Budget Estimation](#5--budget-estimation)
- [6. Risk Assessment](#6--risk-assessment)
- [7. Expected Outcomes](#7--expected-outcomes)
- [Appendices](#-appendices)

---

# 📄 Executive Summary
**Blood Donation Support System (BDSS)** là nền tảng web thông minh giúp **kết nối người hiến máu với người cần máu**, **quản lý tồn kho máu**, và **điều phối ca hiến máu khẩn cấp** thông qua hệ thống matching tự động, dashboard realtime và quy trình hiến máu tự động.  

Giải pháp giải quyết vấn đề cấp thiết: **thiếu hệ thống tập trung để quản lý hiệu quả nguồn cung cấp máu và xử lý ca khẩn cấp**.  

Hệ thống được xây dựng theo kiến trúc **3-tier trên AWS Cloud**, bao gồm:  
- **Frontend**: ReactJS SPA hiện đại, hỗ trợ tìm kiếm theo vị trí và quản lý ca hiến.  
- **Backend**: C# .NET Web API xử lý nghiệp vụ y tế, REST API và matching algorithms.  
- **Database**: SQL Server triển khai trên EC2 (PostGIS cho dữ liệu vị trí).  
- **Auth**: AWS Cognito quản lý xác thực và phân quyền người dùng.  
- **Realtime**: AWS AppSync (GraphQL Subscriptions) cho cảnh báo khẩn cấp realtime.  
- **Notifications**: SNS/SES gửi thông báo và email khẩn cấp.  
- **Storage**: S3 lưu trữ hồ sơ và tài liệu y tế.  

📈 **Lợi ích chính**  
- Giảm **60% thời gian xử lý ca khẩn cấp** nhờ matching tự động.  
- Tăng **40% hiệu quả quản lý tồn kho máu** với hệ thống cảnh báo thông minh.  
- ROI sau **~6 tháng** nhờ chi phí thấp (~30–35 USD/tháng).  

---

# 1. 🎯 Problem Statement
## 🩸 Current Situation
Các cơ sở y tế hiện nay vẫn quản lý hiến máu thủ công — gọi điện, đăng bài, hoặc tra cứu qua Excel. Hệ thống này **thiếu khả năng realtime**, **không có cảnh báo khẩn cấp**, và **không thể tự động matching** giữa người hiến và người cần máu.  

## ⚠️ Key Challenges
- ❌ Không có hệ thống **matching tự động** theo nhóm máu và vị trí.  
- ❌ Thiếu khả năng **realtime alert** cho ca khẩn.  
- ❌ Không có công cụ **dashboard phân tích tồn kho**.  
- ❌ Quy trình hiến máu **thủ công và rời rạc**.  

## 👩‍⚕️ Stakeholder Impact
| Vai trò | Vấn đề chính |
|---|---|
| Người hiến máu | Không biết khi nào cần, không được nhắc nhở |
| Người cần máu | Khó tìm người hiến phù hợp, thiếu realtime |
| Nhân viên y tế | Quản lý thủ công, dễ sai sót |
| Cơ sở y tế | Thiếu dữ liệu phân tích, khó dự báo nguồn máu |

## 📉 Business Consequences
Nếu không có giải pháp, cơ sở y tế tiếp tục **chậm xử lý ca khẩn cấp** và **quản lý tồn kho kém hiệu quả**, ảnh hưởng trực tiếp đến tính mạng bệnh nhân.  

---

# 2. 🏗️ Solution Architecture
### 🏗️ Architecture Overview
Hệ thống được thiết kế theo mô hình **3-tier AWS Cloud Architecture**, gồm ba lớp:

### **1️⃣ Edge & Frontend Layer**
- **Amazon CloudFront** – CDN phân phối nội dung web.  
- **Amazon S3 (Frontend)** – Lưu ReactJS SPA, CSS, JS.  
- **Amazon Cognito** – Quản lý đăng nhập, phân quyền (Donor, Requester, Staff, Admin).  

### **2️⃣ Application & API Layer**
- **Amazon EC2** – Host .NET Web API xử lý logic nghiệp vụ.  
- **AWS Lambda** – Task automation & blood-matching engine.  
- **AWS Location Service** – Tìm người hiến gần nhất qua GPS.  
- **Amazon SNS / Pinpoint** – Gửi SMS/email khi có ca khẩn.  

### **3️⃣ Data & Analytics Layer**
- **SQL Server (EC2)** – Lưu hồ sơ, nhóm máu, ca hiến, tồn kho.  
- **Amazon S3 (Data)** – Lưu logs, chứng nhận, báo cáo.  
- **Amazon QuickSight** – Dashboard realtime & thống kê hiệu suất.  

## 🔧 AWS Services Used
| Service | Vai trò |
|---|---|
| **EC2** | Chạy .NET API & SQL Server |
| **S3** | Lưu ảnh, tài liệu, chứng nhận |
| **Cognito** | Xác thực và phân quyền |
| **Lambda** | Tác vụ tự động, nhắc nhở |
| **SNS / Pinpoint** | Gửi thông báo khẩn cấp |
| **Location Service** | Định vị & tìm người hiến gần nhất |
| **QuickSight** | Dashboard phân tích dữ liệu |

## 🔐 Security Architecture
- **AWS Cognito**: JWT + RBAC  
- **IAM Roles chi tiết** cho Lambda, S3, SES  
- **HTTPS + AWS WAF** cho API Gateway  
- **Mã hóa dữ liệu y tế (AES-256)** khi nghỉ và khi truyền tải  
- Tuân thủ **HIPAA compliance**  

## ⚙️ Scalability Design
- EC2 Auto Scaling + Multi-AZ database  
- S3, SNS, AppSync auto-scale  
- PostGIS indexing cho tìm kiếm địa lý nhanh  

---

# 3. 🔧 Technical Implementation
## 🧩 Implementation Phases
| Giai đoạn | Nội dung chính | Deliverables |
|---:|---|---|
| Phase 1 | Requirements & Design | PRD, ERD, Blood Compatibility Matrix |
| Phase 2 | Backend API | .NET API, SQL schema |
| Phase 3 | Frontend UI | React SPA, Donor Portal |
| Phase 4 | Auth & Matching | Cognito RBAC, matching logic |
| Phase 5 | Notifications | SNS/SES alerts, AppSync realtime |
| Phase 6 | Testing & Deployment | CI/CD pipeline, HIPAA compliance |

## ⚙️ Technical Requirements
- EC2 t3.small (API + DB)  
- S3 (10GB storage)  
- Lambda 256MB (auto reminders)  
- SES/SNS 5.000+ messages/tháng  

## 🧠 Development Approach
- Agile (2-week sprint)  
- RESTful API + GraphQL Subscriptions  
- IaC bằng Terraform  
- Tuân thủ chuẩn y tế (HIPAA)  

## 🧪 Testing Strategy
- **Unit Test**: xUnit cho logic matching  
- **Integration**: Postman workflows  
- **Load Test**: JMeter (emergency flow)  
- **UI Test**: Cypress (donor journey)  

## 🚀 Deployment Plan
- CI/CD qua **GitHub Actions**  
- Blue-green deployment trên EC2  
- Backup & DR cho dữ liệu y tế  
- Compliance audit logging  

---

# 4. 📅 Timeline & Milestones
| Giai đoạn | Thời gian | Kết quả |
|---:|---|---|
| Week 1–2 | Requirement & Design | PRD, ERD, Matrix |
| Week 3–5 | Backend API | CRUD + Matching logic |
| Week 6–8 | Frontend | Donor portal, Emergency alerts |
| Week 9–10 | Notifications | SNS/SES + AppSync |
| Week 11 | Testing | Load + Compliance test |
| Week 12 | Deployment | EC2 + Demo Presentation |

---

# 5. 💰 Budget Estimation
| Thành phần | Chi phí/tháng |
|---|---|
| EC2 (t3.small) | ~$15 |
| S3 Storage (10GB) | ~$3 |
| Cognito | ~$0 (Free 50k MAU) |
| SNS/SES (5k alerts) | ~$8 |
| Lambda | ~$4 |
| **Tổng cộng** | **~$30–35 / tháng** |

📊 **ROI**: Giảm 70% chi phí quản lý thủ công (~100 USD/tháng) → Hoàn vốn sau **6 tháng**.

---

# 6. ⚠️ Risk Assessment
| Rủi ro | Ảnh hưởng | Xác suất | Giảm thiểu |
|---|---|---|---|
| Chi phí vượt dự kiến | Medium | Medium | Free-tier + monitoring |
| Tải cao trong ca khẩn cấp | High | Low | AppSync auto-scale |
| Bảo mật dữ liệu y tế | High | Medium | Cognito + WAF + IAM Roles |
| Lỗi matching | Critical | Low | Medical validation test |
| Notification fail | High | Medium | Multi-channel + retry queue |
| Donor no-show | Medium | High | Backup matching logic |

---

# 7. 🎯 Expected Outcomes
- ⚙️ **Technical**: Cloud-native architecture, >5.000 users, 100+ cases/tháng.  
- 🩸 **Healthcare**: Giảm 60% thời gian phản hồi ca khẩn.  
- 📊 **Business**: ROI đạt sau 6 tháng, chi phí duy trì thấp.  
- 🏥 **Strategic**: Có thể mở rộng thành hệ thống liên kết quốc gia.  

---

# 📚 Appendices
- **A. Technical Specs** – ERD, API endpoints, matrix.  
- **B. Cost Calculations** – AWS Pricing breakdown.  
- **C. Architecture Diagrams** – Logical + Physical views.  
- **D. Medical Compliance** – HIPAA & blood safety.  
- **E. References** – AWS docs, case studies, research.  

---

{% raw %}
<style>
table { width:100%; border-collapse:collapse; margin:14px 0; font-size:15px; }
th, td { border:1px solid #e5e7eb; padding:8px 10px; }
th { background:#f7f7f7; font-weight:600; }
tbody tr:nth-child(even){ background:#fbfbfb; }
img { display:block; margin:18px auto; border-radius:10px; max-width:920px; }
</style>
{% endraw %}
