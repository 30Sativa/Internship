---
title: "2. Proposal"
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

The system is deployed inside an AWS VPC following a 3-tier design with clear separation between edge (CDN/DNS), application, and data layers. The diagram shows public subnets hosting edge resources (ALB, NAT Gateway, Internet Gateway) and private subnets hosting application servers and data (EC2 Auto Scaling group, RDS/SQL Server, ElastiCache). Monitoring and event services (CloudWatch, EventBridge, SNS) are used for logging and alerting.

Core architecture components:

1️⃣ Edge & Delivery

- **Amazon Route 53** – DNS and domain routing.
- **Amazon CloudFront** – CDN to deliver the React SPA and static assets.
- **Amazon S3** – Hosts frontend (SPA) and stores static backups / artifacts.
- **AWS WAF** – Application layer protection (deployed in front of CloudFront/ALB).

2️⃣ Network & Load Balancing

- **Internet Gateway** + **Public Subnets** – expose public endpoints (ALB, NAT Gateway).
- **Application Load Balancer (ALB)** – distributes HTTP/HTTPS traffic to the application Auto Scaling group.
- **NAT Gateway** – enables private subnet instances to access the internet for updates and outbound integrations.

3️⃣ Application & Integration

- **EC2 (Auto Scaling)** – run the .NET Web API in private subnets.
- **Amazon EventBridge** – event bus to route application events, CloudWatch alarms and integrate with downstream consumers.
- **Amazon SNS** – notification channel for SMS/email; integrated with EventBridge for alerting workflows.
- **AWS Cognito** – user authentication and RBAC (Donor, Requester, Staff, Admin).
- **AWS Location Service** – geospatial search to find/match nearby donors.

4️⃣ Data & Caching

- **Amazon RDS (SQL Server)** – managed relational DB in private subnets (Multi-AZ) for donor records, blood groups, donation history, inventory. While SQL Server on EC2 is possible, RDS is recommended for HA, backups and simpler management.
- **Amazon ElastiCache (Redis)** – caching for sessions and fast matching operations to reduce DB load.
- **Amazon S3 (Data)** – stores logs, certificates, reports and backups.

5️⃣ Monitoring, Logging & CI/CD

- **Amazon CloudWatch** – logs, metrics and alarms.
- **EventBridge → SNS** – pipeline to handle logs/alerts (CloudWatch metrics or app events → EventBridge rules → SNS topics → subscribers).
- **GitHub Actions** – CI/CD pipeline to build, test and deploy application artifacts to the Auto Scaling group and manage infra changes.

#### 🔧 AWS Services Used

| Service                | Role / Notes                                                            |
| ---------------------- | ------------------------------------------------------------------------ |
| **Route 53**           | DNS and routing                                                           |
| **CloudFront**         | CDN for SPA, combined with WAF for edge protection                        |
| **S3**                 | Frontend hosting, logs, backups, and document storage                      |
| **ALB (Application LB)**| HTTP/HTTPS load balancing to Auto Scaling group                           |
| **NAT Gateway**        | Outbound internet for private subnet instances                            |
| **EC2 (ASG)**          | Hosts .NET API (in private subnets)                                       |
| **RDS (SQL Server)**   | Managed DB (Multi-AZ) for core data                                        |
| **ElastiCache (Redis)**| Cache/session store to accelerate matching                                 |
| **Cognito**            | Authentication & RBAC                                                      |
| **EventBridge**        | Event bus for decoupled integrations and rule-based routing                |
| **SNS**                | Notifications (SMS, email) and topic subscription                          |
| **CloudWatch**         | Logs, metrics, alarms; integrates with EventBridge                         |
| **WAF**                | Protects application layer (CloudFront/ALB)                                |
| **Location Service**   | Geospatial search for nearest donors                                       |
| **QuickSight**         | Optional: dashboards and reporting                                         |

#### 🔐 Security Architecture 

- **VPC isolation**: keep DB and cache in private subnets; use Security Groups to limit traffic by role/port.
- **TLS everywhere**: terminate TLS at CloudFront/ALB, use HTTPS for internal service calls where applicable.
- **AWS WAF**: OWASP rules, rate limiting and IP protections.
- **IAM least privilege**: fine-grained IAM roles for EC2, RDS snapshots, Lambda (if used), EventBridge rules.
- **Encryption**: EBS/RDS/S3 encrypted with KMS (AES-256); sensitive medical data encrypted at rest and in transit.
- **Audit & Logging**: CloudWatch Logs + EventBridge rules to capture and forward auditable events to SNS/alerting or long-term storage.

#### ⚙️ Scalability Design 

- ALB + EC2 Auto Scaling for the application layer.
- RDS Multi-AZ + read replicas for read scalability if needed.
- ElastiCache cluster scale-out for cache layer.
- CloudFront + S3 to reduce origin load.
- Event-driven integration (EventBridge) to decouple components and scale processing independently.

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
| **Total**           | **~$25–30/month**   |

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
