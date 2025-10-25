---
title: "Blood Donation Support System"
date: "2025-10-25"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

### 1. Executive Summary

**Blood Donation Support System (BDSS)** is an intelligent web-based platform designed to **connect blood donors with recipients**, **manage blood inventories**, and **coordinate emergency donation cases** through an automated matching system, real-time dashboards, and streamlined donation workflows.

The solution addresses an urgent problem: **the lack of a centralized system to efficiently manage blood supplies and handle emergency cases**.

The system is built on a **3-tier AWS Cloud architecture**, including:

- **Frontend**: Modern ReactJS SPA supporting location-based search and donation management.
- **Backend**: C# .NET Web API handling medical workflows, REST APIs, and matching algorithms.
- **Database**: SQL Server hosted on EC2 (PostGIS enabled for geolocation data).
- **Auth**: AWS Cognito for authentication and user role management.
- **Realtime**: AWS AppSync (GraphQL Subscriptions) for emergency alerts and real-time notifications.
- **Notifications**: AWS SNS/SES for urgent alerts and emails.
- **Storage**: Amazon S3 for storing medical records and documents.

📈 **Key Benefits**

- Reduces **60% of emergency case handling time** through automated matching.
- Increases **40% efficiency in blood inventory management** with intelligent alerts.
- Achieves **ROI within ~6 months** due to low operational cost (~$30–35/month).

---

### 2. Problem Statement

#### 🩸 Current Situation

Most healthcare centers still manage blood donations manually — via phone calls, online posts, or Excel spreadsheets. These systems **lack real-time capabilities**, **do not support emergency alerts**, and **cannot automatically match** donors with recipients.

#### ⚠️ Key Challenges

- ❌ No **automated matching system** based on blood type and location.
- ❌ Lack of **real-time emergency alerts**.
- ❌ No **dashboard or analytics tool** for inventory monitoring.
- ❌ **Manual and fragmented** donation process.

#### 👩‍⚕️ Stakeholder Impact

| Role                | Main Issues                                               |
| ------------------- | --------------------------------------------------------- |
| Donor               | Not notified when needed, lacks reminders                 |
| Recipient           | Difficult to find compatible donors, no real-time updates |
| Medical Staff       | Manual management, prone to errors                        |
| Healthcare Facility | Lacks analytical data for forecasting                     |

#### 📉 Business Consequences

Without a digital solution, healthcare organizations will continue to **delay emergency response** and **manage inventory inefficiently**, directly affecting patient survival rates.

---

### 3. Solution Architecture

#### 🏗️ Architecture Overview

![AWS Architecture](/images/2-Proposal/awsnew.jpg)

The system is designed following a **3-tier AWS Cloud Architecture**, including:

##### 1️⃣ Edge & Frontend Layer

- **Amazon CloudFront** – CDN for fast global content delivery.
- **Amazon S3 (Frontend)** – Hosts ReactJS SPA, CSS, and JS assets.
- **Amazon Cognito** – Manages authentication and role-based access (Donor, Requester, Staff, Admin).

##### 2️⃣ Application & API Layer

- **Amazon EC2** – Hosts the .NET Web API to handle business logic.
- **AWS Lambda** – Automates background tasks and powers the blood-matching engine.
- **AWS Location Service** – Finds nearby donors based on GPS coordinates.
- **Amazon SNS / Pinpoint** – Sends SMS and email alerts for emergency cases.

##### 3️⃣ Data & Analytics Layer

- **SQL Server (EC2)** – Stores donor records, blood groups, donation history, and inventory data.
- **Amazon S3 (Data)** – Stores logs, certificates, and reports.
- **Amazon QuickSight** – Provides real-time dashboards and performance analytics.

#### 🔧 AWS Services Used

| Service              | Role                                       |
| -------------------- | ------------------------------------------ |
| **EC2**              | Hosts .NET API & SQL Server                |
| **S3**               | Stores images, certificates, and documents |
| **Cognito**          | Handles authentication and authorization   |
| **Lambda**           | Executes automated and scheduled tasks     |
| **SNS / Pinpoint**   | Sends emergency notifications              |
| **Location Service** | Locates nearest donors                     |
| **QuickSight**       | Provides data visualization and analytics  |

#### 🔐 Security Architecture

- **AWS Cognito**: JWT-based authentication with RBAC.
- **Granular IAM Roles** for Lambda, S3, and SES.
- **HTTPS + AWS WAF** for API protection.
- **AES-256 encryption** for sensitive medical data at rest and in transit.
- Fully compliant with **HIPAA standards**.

#### ⚙️ Scalability Design

- EC2 Auto Scaling and Multi-AZ database deployment.
- Auto-scaling enabled for S3, SNS, and AppSync.
- PostGIS spatial indexing for optimized geolocation queries.

---

### 4. Technical Implementation

#### 🧩 Implementation Phases

| Phase   | Main Activities           | Deliverables                           |
| ------- | ------------------------- | -------------------------------------- |
| Phase 1 | Requirements & Design     | PRD, ERD, Blood Compatibility Matrix   |
| Phase 2 | Backend API               | .NET API, SQL schema                   |
| Phase 3 | Frontend UI               | React SPA, Donor Portal                |
| Phase 4 | Authentication & Matching | Cognito RBAC, Matching Logic           |
| Phase 5 | Notifications             | SNS/SES alerts, AppSync realtime setup |
| Phase 6 | Testing & Deployment      | CI/CD pipeline, HIPAA compliance       |

#### ⚙️ Technical Requirements

- EC2 t3.small (API + DB)
- S3 (10 GB storage)
- Lambda 256 MB (auto reminders)
- SES/SNS 5,000+ messages/month

#### 🧠 Development Approach

- Agile (2-week sprints)
- RESTful API + GraphQL Subscriptions
- Infrastructure as Code (Terraform)
- Follows healthcare compliance (HIPAA)

#### 🧪 Testing Strategy

- **Unit Tests**: xUnit for matching logic
- **Integration Tests**: Postman workflows
- **Load Tests**: JMeter (emergency flow simulation)
- **UI Tests**: Cypress (donor journey)

#### 🚀 Deployment Plan

- CI/CD with **GitHub Actions**
- Blue-green deployment on EC2
- Backup & Disaster Recovery for medical data
- Compliance and audit logging

---

### 5. Timeline & Milestones

| Phase     | Duration             | Outcome                        |
| --------- | -------------------- | ------------------------------ |
| Week 1–2  | Requirement & Design | PRD, ERD, Matrix               |
| Week 3–5  | Backend API          | CRUD + Matching Logic          |
| Week 6–8  | Frontend             | Donor Portal, Emergency Alerts |
| Week 9–10 | Notifications        | SNS/SES + AppSync              |
| Week 11   | Testing              | Load & Compliance Tests        |
| Week 12   | Deployment           | EC2 + Demo Presentation        |

---

### 6. Budget Estimation

| Component           | Monthly Cost        |
| ------------------- | ------------------- |
| EC2 (t3.small)      | ~$15                |
| S3 Storage (10 GB)  | ~$3                 |
| Cognito             | ~$0 (Free 50k MAUs) |
| SNS/SES (5k alerts) | ~$8                 |
| Lambda              | ~$4                 |
| **Total**           | **~$30–35/month**   |

📊 **ROI:** Reduces 70% of manual management costs (~$100/month) → Break-even within **6 months**.

---

### 7. Risk Assessment

| Risk                         | Impact   | Probability | Mitigation                  |
| ---------------------------- | -------- | ----------- | --------------------------- |
| Unexpected cost increase     | Medium   | Medium      | Use Free-tier & monitoring  |
| High load during emergencies | High     | Low         | Auto-scaling via AppSync    |
| Data security risks          | High     | Medium      | Cognito + WAF + IAM Roles   |
| Matching algorithm errors    | Critical | Low         | Medical validation testing  |
| Notification failure         | High     | Medium      | Multi-channel + retry queue |
| Donor no-shows               | Medium   | High        | Backup matching logic       |

---

### 8. Expected Outcomes

- ⚙️ **Technical**: Cloud-native system with 5,000+ users and 100+ monthly cases.
- 🩸 **Healthcare**: Reduces emergency response time by 60%.
- 📊 **Business**: Achieves ROI within 6 months, maintaining low operational costs.
- 🏥 **Strategic**: Scalable to a national-level healthcare platform.

---

### 9. Appendices

- **A. Technical Specs** – ERD, API endpoints, matching matrix.
- **B. Cost Calculations** – AWS Pricing breakdown.
- **C. Architecture Diagrams** – Logical and Physical views.
- **D. Medical Compliance** – HIPAA and blood safety standards.
- **E. References** – AWS documentation, case studies, and research.
