---
title: "Week 1 Worklog"
date: "2025-09-09"
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Week 1 Objectives:

- Understand the fundamentals of **cloud computing** and AWS global infrastructure.
- Learn how to manage AWS services using **Management Console, CLI, and SDK**.
- Explore **AWS security, IAM, and cost management** through practical labs.
- Build foundational knowledge of **VPC networking and connectivity** (Subnets, Route Tables, IGW, NAT, Peering, Transit Gateway).
- Gain hands-on experience by performing **AWS labs** to reinforce theoretical knowledge with practical skills.

### Tasks to be carried out this week:

| Day | Task                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Start Date | Completion Date | Reference Material |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------------- | ------------------ |
| 1   | - Read and take note of internship unit rules and regulations<br>- Learning module 01:<br> + Cloud computing: Concept, benefits<br> + AWS Overview:<br> + AWS differentiation, pricing philosophy, leadership principles<br> + Cloud journey<br> + AWS infrastructure: Data center, AZ, Region, Edge Locations<br> + Managing AWS services:<br> + AWS Management Console<br> + AWS CLI<br> + AWS SDK<br>- Practice:<br> + Lab 01: Create AWS account, enable MFA, set up IAM User/Group, Access keys<br> + Lab 07: Create different budget types<br> + Lab 09: Using AWS support plans and case<br><br>- Research:<br> + AWS Well-Architected Framework                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 08/09/2025 | 08/09/2025      |                    |
| 2   | - Networking overview: Importance of networking in AWS cloud architecture<br>+ Amazon VPC: Concept, difference with traditional private cloud, multi-AZ deployment<br>+ VPC CIDR: IPv4 (required), IPv6 (optional), limit of 5 VPC per Region<br>+ Subnet: Public vs Private, reserved IP addresses<br>+ Route Table: Default route, custom route, public subnet routing<br>+ Elastic Network Interface (ENI), Elastic IP address<br>+ VPC Endpoint: Interface Endpoint, Gateway Endpoint (S3, DynamoDB)<br>+ Internet Gateway: requirements for Internet access (public IP + route)<br>+ NAT Gateway: outbound Internet access from private subnet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 09/09/2025 | 09/09/2025      |                    |
| 3   | VPC Security:<br>+ Security Group (stateful, allow rules only, applied to ENI)<br>+ Network ACL (stateless, inbound/outbound rules, applied to Subnet)<br>+ VPC Flow Logs (monitor traffic, detect denied requests, store in CloudWatch/S3)<br>+ Multi-VPC connectivity:<br>+ VPC Peering: 1:1 connection, no transitive routing, non-overlapping CIDR<br>+ Transit Gateway: hub-and-spoke model, simplify routing, Transit Gateway Attachment per AZ<br>+ Hybrid connectivity:<br>+ VPN Site-to-Site: Virtual Private Gateway (AWS side) & Customer Gateway (on-premises)<br>+ VPN Client-to-Site: costly, usually third-party solution<br>+ Direct Connect: dedicated/hosted connection, stable latency (20–30ms), VN providers (Viettel, FPT)<br>+ Elastic Load Balancing (ELB):<br>+ Concepts: health check, sticky session, access logs (stored in S3)<br>+ Types:<br>- Application Load Balancer (Layer 7, HTTP/HTTPS, path-based routing)<br>- Network Load Balancer (Layer 4, TCP/TLS, static IP, high performance)<br>- Classic Load Balancer (Layer 4 & 7, legacy)<br>- Gateway Load Balancer (Layer 3, appliance traffic forwarding) | 10/09/2025 | 10/09/2025      |                    |
| 4   | - Review:<br>- Revised knowledge from Day 2 & Day 3: VPC, Subnet, Route Table, Internet Gateway, NAT Gateway, Security Group, Network ACL, VPC Peering, Transit Gateway, VPN, Direct Connect, Elastic Load Balancing.<br>+ Lab:<br>- Lab 1:<br>+ Created VPC, Subnet, Internet Gateway, Route Table, Security Group.<br>+ Enabled VPC Flow Logs.<br>+ Launched EC2 instance and tested SSH connectivity.<br>+ Created NAT Gateway for private subnet Internet access.<br>+ Used Reachability Analyzer to verify network connectivity.<br>+ Managed EC2 using AWS Systems Manager Session Manager.<br>+ Enabled CloudWatch Monitoring & Alerting for EC2 monitoring.<br>- Lab 2:<br>+ Repeated the same steps to reinforce knowledge and improve hands-on practice.                                                                                                                                                                                                                                                                                                                                                                              | 11/09/2025 | 11/09/2025      |                    |
| 5   | - Practice on AWS:<br>+ Lab 02-02: Session Manager (preparation, connect to EC2, manage session logs, port forwarding)<br>+ Lab 02-03: VPC Peering (prepare, update Network ACL, create peering connection, configure route tables, enable cross-peer DNS)<br>+ Lab 02-04: Transit Gateway (setup infrastructure, create TGW, TGW attachments, create TGW route table, add gateways, verify result)<br>+ Lab 02-05: Hybrid DNS (setup, create outbound endpoint, create Route 53 resolver rule, create inbound endpoint)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 12/09/2025 | 12/09/2025      |                    |

### Week 1 Achievements:

- **Gained solid knowledge of AWS and Cloud Computing**

  - Understood cloud computing concepts, benefits, and the cloud adoption journey.
  - Learned AWS global infrastructure (Regions, AZs, Edge Locations, Data Centers).

- **Hands-on with AWS management tools**

  - Practiced with AWS Management Console, AWS CLI, and AWS SDK.
  - Created and managed IAM Users/Groups, enabled MFA, and configured Access Keys.

- **Cost management & support**

  - Created and configured different AWS Budgets.
  - Learned AWS Support Plans and practiced opening support cases.

- **AWS Networking & Security**

  - Built and configured VPC, Subnet, Route Table, Internet Gateway, NAT Gateway.
  - Implemented Security Groups, Network ACLs, and VPC Flow Logs.
  - Understood VPC Peering vs. Transit Gateway, and hybrid connectivity (VPN, Direct Connect).

- **System management on AWS**

  - Managed EC2 instances with **Session Manager** instead of SSH.
  - Practiced Port Forwarding and Session Logs.
  - Enabled **CloudWatch Monitoring & Alerts** for EC2.

- **Advanced solutions**
  - Set up **VPC Peering** and **Transit Gateway** for multi-VPC connectivity.
  - Configured **Hybrid DNS** with Route 53 Resolver (Inbound/Outbound Endpoints).
  - Practiced **Elastic Load Balancer** (ALB, NLB, CLB, GWLB).

---

👉 **Outcome:** After Week 1, I have built a strong foundation in AWS fundamentals and intermediate networking concepts, while successfully completing multiple **hands-on labs directly on AWS** to strengthen my practical skills.
