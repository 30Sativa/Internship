---
title: "Event 5"
date: "2025-11-17"
weight: 5
chapter: false
pre: " <b> 4.5. </b> "
---

# AWS Cloud Mastery Series #2: From DevOps, IaC to Container & Observability

### Event Purpose

- **Mindset Transformation:** Deep understanding of the Value Cycle and how DevOps culture helps enterprises balance development speed and system stability.
- **Modern Infrastructure Revolution:** Transform from risky manual management (ClickOps) to Infrastructure as Code (IaC) with three tools: CloudFormation, Terraform, and CDK.
- **Container Strategy:** Analyze architecture and make decisions to choose the most suitable orchestration platform: From simple (App Runner), deep integration (ECS) to flexible scaling (EKS).
- **Deep Observability:** Establish proactive monitoring systems, not just for error reporting but also to understand system behavior and optimize user experience with CloudWatch and X-Ray.

### Speaker List

- **AWS & Cloud Engineers Team:** Bringing overall architectural perspective, Platform Engineering strategy, and practical demos.
- **Mr. Tran Vi**: FCJer 2024 - Sharing practical experience from the community.
- **Mr. Long Quy Nghiem**: FCJer 2024 - Sharing perspectives from someone newly approaching and developing Cloud skills.

### Detailed Content

#### **1. DevOps Mindset & CI/CD Pipeline (Foundation of Thinking)**

The event emphasized that DevOps is not a job title or tool, but a philosophy focused on optimizing value flow from idea to end user.

- **The Value Cycle:**

  - A closed cycle consisting of 5 stages: _Insights & Analysis -\> Portfolio & Backlog (Planning) -\> Continuous Integration -\> Continuous Testing -\> Continuous Delivery_.
  - **Core Objective:** Solve the classic "Speed vs. Stability" problem. DevOps proves we can increase the speed of launching new features (Speed) without sacrificing system safety (Stability) through automation.

- **Redefining CI/CD concepts:**

  - **Continuous Integration (CI):** A culture of frequent code commits (daily). Every code change triggers automatic Build and Test processes to detect errors immediately (Fail fast), avoiding technical debt accumulation.
  - **Continuous Delivery:** After passing CI, code is automatically deployed to Staging environment. However, deploying to Production is a business decision requiring human confirmation (**Manual Approval**).
  - **Continuous Deployment:** The highest level of automation. If code passes all tests, it goes straight to Production without any human intervention.

- **Effective Pipeline Strategy:**

  - **Centralized CI:** Platform team builds standard pipelines, ensuring security and compliance, but empowers Developers to self-service to avoid bottlenecks.
  - **Artifact Management:** Follow the immutable principle **"Build Once, Deploy Anywhere"**. Source code is packaged only once into Binary/Docker Image (Artifact). Test, Staging, and Prod environments all use this same Artifact to ensure what was tested is what will run.
  - **Fail Fast Mechanism:** Pipeline must be designed to stop immediately when there's a problem (Compilation error, Bad code, Security vulnerability, Slow test). Better to stop the process early than let errors slip through to more expensive later stages.

- **Effectiveness Metrics:**

  - Use **Heatmap** to visualize entire organization's performance.
  - Focus on 4 golden metrics (DORA Metrics): _Deployment frequency, Lead time for changes, Change Failure Rate, and Mean Time To Recovery (MTTR)_.

#### **2. Infrastructure as Code (IaC) - From ClickOps to Code**

This section analyzed the mandatory shift from manual management to infrastructure automation.

- **The Problem of "ClickOps":** Clicking on AWS Console is intuitive but poses major risks: Human errors (forgetting configuration), inability to recreate identical environments (Inconsistent), and extremely difficult when scaling.
- **IaC Solution:** Turn infrastructure into Code to enjoy software development benefits: Version Control (Git), Code Review, Testing, and Reusability.

**Detailed analysis of 3 leading IaC tools:**

- **1. AWS CloudFormation (Native Tool):**

  - AWS's "official" tool, using **YAML/JSON** to declare desired state (Declarative).
  - **Template Anatomy:** Structure includes _Parameters_ (Flexible inputs), _Mappings_ (Value mapping by region/environment), and _Resources_ (Specific AWS resources).
  - **Stack Management:** Manage resources in groups (Stack). When deleting Stack, all related resources are cleaned up, avoiding resource waste.

- **2. Terraform (Multi-Cloud Powerhouse):**

  - Open-source tool using **HCL** language. The #1 choice for Multi-cloud strategy.
  - **Safe Process:** _Write -\> Plan -\> Apply_. The **Plan** step allows previewing how changes will impact actual infrastructure before applying, helping avoid catastrophic mistakes.
  - **State File:** Terraform's "memory", storing actual infrastructure state for comparison and synchronization.

- **3. AWS CDK (Cloud Development Kit):**

  - Approach infrastructure with **modern programming languages** (Python, TS, Java...), leveraging loops, conditions, and object-oriented programming.
  - **Power of Abstraction (Constructs):**
    - _L1:_ Raw configuration (CloudFormation equivalent).
    - _L2:_ Pre-built Classes with safe default configurations (Best practices).
    - _L3:_ Design Patterns building complex systems (VPC + Cluster + LB) with just a few lines of code.

- **Drift Detection:** Feature that detects "configuration drift" - the difference between Code (IaC) and reality (manual edits). This is an important tool for maintaining operational discipline.

#### **3. Containerization - Application Running Strategy**

Deep dive into orchestration models to choose optimal solutions:

- **Kubernetes (K8s):**

  - The world's Container standard. Complex architecture including **Control Plane** (brain) and **Worker Nodes** (muscle).
  - Suitable for extremely large systems needing deep customization, but requires highly skilled operations team.

- **Comparing Amazon ECS vs. Amazon EKS:**

  - **Amazon ECS:** "Simplified". Designed by AWS to integrate seamlessly with other services (ALB, IAM). Suitable for teams wanting to focus on applications, less worry about cluster operations.
  - **Amazon EKS:** "Open standard". AWS's Managed Kubernetes version. Suitable for enterprises needing K8s tool ecosystem or running Hybrid-cloud.

- **Compute Options:**

  - **EC2 Launch Type:** You manage virtual machines (Servers). Maximum control but must handle OS patching, agent updates.
  - **AWS Fargate (Serverless):** You only manage Containers. AWS handles all underlying server infrastructure. Eliminates OS maintenance burden.

- **AWS App Runner:**

  - "Zero-ops" solution. For Developers wanting to deploy Web Apps/APIs as quickly as possible.
  - Automates everything from Source Code -\> Build -\> Deploy -\> Load Balancer -\> HTTPS URL.

#### **4. Observability - Monitoring & Optimization**

Shift from "Monitoring" (Is the system alive?) to "Observability" (Why is the system slow?).

- **Amazon CloudWatch (Monitoring Center):**

  - **Metrics:** Quantitative measurements (High CPU, Full RAM).
  - **Logs:** Detailed activity logs. _Logs Insights_ helps query and analyze millions of log lines in seconds.
  - **Alarms:** Automatic reaction mechanism. When metrics exceed threshold -> Send alert or Auto-scale system.

- **AWS X-Ray (Distributed Tracing):**

  - Solves the "black box" problem in Microservices.
  - **Distributed Tracing:** Maps the journey of a request through dozens of different services. Helps precisely identify which service is causing slowness (Latency) or errors to fix at the root.

- **AWS Observability Best Practices:**

  - Reference **AWS Observability Recipes** to apply standard monitoring patterns.
  - Clearly distinguish roles: **Logs** provide event details, **Traces** provide context and flow of those events.

### Detailed Experience in the Event

The specialized session completely changed how I view software system operations:

#### 1. The Shift from "Ops" to "Platform Engineering"

I realized the role of modern DevOps is not "server attendant" or "hired deployer". DevOps are **Platform Builders**. The mission is to create a safe and automated "highway" (Pipeline & Infrastructure), helping Developers bring code to market themselves (Self-service) without waiting, while still ensuring safety rules.

#### 2. Operational Discipline

The concept of **Immutability** in Artifact management and **Drift Detection** in IaC is truly valuable. In enterprise environments, "it works" is not enough, it must be "stable and consistent". Prohibiting manual edits (ClickOps) and following the "Code -> Build -> Deploy" process is vital to avoid silly human errors.

#### 3. Smart Tool Selection Strategy

The biggest lesson is there's no "best" tool, only "most suitable for context" tool:

- Need absolute stability and latest AWS feature support? Choose **CloudFormation**.
- Enterprise using multiple Clouds (Multicloud)? Choose **Terraform**.
- Team strong in programming, want to write less code but get large infrastructure? Choose **AWS CDK**.
- Want to run simple Web App without managing K8s? **App Runner** is perfect.

### Conclusion

The **"DevOps & IaC Mastery"** session painted a technology maturity roadmap:

- **On Mindset:** Shift from intuitive, manual work to systematic thinking, automation, and data-driven measurement.
- **On Infrastructure:** Control infrastructure with Code (IaC) to achieve flexibility and unlimited scalability.
- **On Operations:** Combine Container power with system understanding capability (Observability) to ensure services are always available and optimized.

This is the solid knowledge foundation for me to confidently step into building large-scale systems on AWS.
