---
title: "Event 6"
date: "2025-11-29"
weight: 6
chapter: false
pre: " <b> 4.6. </b> "
---
# AWS Cloud Mastery Series #3

### Purpose of the Series

The event went beyond tool demonstrations and focused on building System Thinking. The goal was to help participants shift from a passive security mindset to a proactive, comprehensive Cloud-Native Security model:

- Community Building: Create a sustainable network to share knowledge through AWS Cloud Clubs.
- Governance at Scale: Establish management foundations for large organizations (hundreds of accounts) to ensure consistency and compliance.
- Defense in Depth: Multi-layered security strategy (Identity - Network - Data) so the system remains safe even if one layer is breached.
- Automated Response: Move from manual incident handling to instant automated processes to minimize damage.

### Speakers

The program brought together experienced experts and key figures in the AWS technical community in Vietnam:

- AWS Cloud Clubs representatives: Captains from major universities (HCMUTE, SGU, PTIT, HUFLIT).
- Identity & Governance experts: Huynh Hoang Long, Dinh Le Hoang Anh (AWS Community Builders).
- Detection & Monitoring experts: Tran Duc Anh, Nguyen Tuan Thinh, Nguyen Do Thanh Dat.
- Network Security expert: Kha Van (Cloud Security Engineer | AWS Community Builder).
- Data Protection experts: Thinh Lam, Viet Nguyen.
- Incident Response experts: Mendel Grabski (Long) — former Head of Security & DevOps, and Tinh Truong — Platform Engineer.

### Detailed Content

#### PART 1: KICKOFF - AWS CLOUD CLUBS & GROWTH OPPORTUNITIES

Introduction to the AWS Cloud Clubs ecosystem — a launchpad for future Cloud talent.

1. Vision:
- More than a learning space, it is an environment to practice leadership and connect with the global Cloud community.

2. Core Benefits:
- Build Skills: Hands-on projects, certification sponsorship, and focused learning accounts.
- Build Community: Shorten the gap between students and industry experts.
- Build Opportunities: Improve CV, receive AWS Credits to prototype ideas, and network for jobs.

3. The Badging Journey:
- A gamified progression path to motivate participation.
- Levels: Bronze > Silver > Gold > Platinum > Diamond.
- Value: Recognition, swag, Credits ($200+), and priority access to major events like Student Community Day.

#### PART 2: IDENTITY & GOVERNANCE

On the Cloud, the network perimeter is no longer the only defense — Identity is the new perimeter.

1. Modern IAM mindset:
- Identity First: Treat identity as the primary defense.
- Credential Spectrum: Move away from long-term credentials (static access keys) to short-term credentials (STS tokens).
- Least Privilege: Grant only necessary permissions; avoid admin(*) for convenience.

2. Governance at scale with AWS Organizations:
- Layered architecture: Organize accounts by function (OUs) — Security (logs, audit), Shared Services, Workloads — to isolate risk.
- Service Control Policies (SCPs): Guardrails (like a constitution) that enforce restrictions even on account root users.

#### PART 3: VISIBILITY & DETECTION

"You cannot protect what you cannot see."

1. Amazon GuardDuty:
- Intelligent detection using AI/ML over three core telemetry sources: CloudTrail (who did what?), VPC Flow Logs (where is traffic going?), and DNS logs (which sites are being accessed?).
- Runtime Monitoring: Optional lightweight agents to monitor OS-level behavior and detect suspicious processes.

2. AWS Security Hub:
- Consolidates findings into ASFF (AWS Security Finding Format).
- Acts as a CSPM (Cloud Security Posture Management) to continuously check compliance (CIS, PCI-DSS) and report misconfigurations.

#### PART 4: NETWORK SECURITY

Build a digital fortress with a Zero Trust approach.

1. VPC Fundamentals:
- Security Groups (stateful): Apply micro-segmentation; prefer reference-based rules over brittle IP whitelists.
- NACLs (stateless): Coarse-grained subnet-level deny lists to block malicious IP ranges.

2. Advanced Filtering:
- Route 53 Resolver DNS Firewall: Block malware from reaching command-and-control servers.
- AWS Network Firewall: Deep Packet Inspection with both stateless (fast) and stateful engines (Suricata rules) for complex detections and FQDN filtering.

3. Modern network architecture:
- Use AWS Transit Gateway to connect multiple VPCs and centralize inspection with Network Firewall.
- Active Threat Defense: Automate detection-to-block workflows (e.g., GuardDuty finds a malicious IP → update Network Firewall rules).

#### PART 5: DATA PROTECTION

Protect core assets with layered encryption.

1. Envelope Encryption:
- Use AWS KMS to encrypt data keys with a master key; data keys encrypt large objects to balance security and performance.

2. Secrets Management:
- Avoid hardcoding credentials. Use AWS Secrets Manager for secure storage and automatic rotation of database credentials.

3. Hardware-backed encryption:
- AWS Nitro offloads crypto operations to dedicated hardware (Nitro Cards) to provide full-disk cryptographic protections with minimal performance impact.

#### PART 6: INCIDENT RESPONSE

When defenses fail, speed matters.

1. Prevention:
- Reduce attack surface: avoid long-lived SSH keys, block S3 public access at the account level, use private subnets.
- IaC: Security starts in code — use Terraform/CDK to review and control configuration changes.

2. The 5-step playbook:
- Preparation: Tools, logs, and playbooks must be ready.
- Detection: Use CloudTrail and GuardDuty signals.
- Containment: Isolate compromised resources (e.g., attach quarantine Security Group via Lambda).
- Eradication & Recovery: Remove root cause and restore from clean backups.
- Post-Incident: Conduct RCA and improve defenses.

3. Automation:
- Use EventBridge to trigger Lambda automations (for example, auto-close a public S3 bucket immediately when detected).

### Conclusion

"Cloud Security & Operations Mastery" is a comprehensive guide for building resilient Cloud systems:

- Identity & Governance: The foundation to control who can do what.
- Network & Detection: The sensors and barriers to observe and block threats.
- Data & Response: The vault and the rapid response team to mitigate incidents.

#### Event Photos

<img src="/images/4-EventParticipated/4.6-Event6/3_IMG_7804.JPG" alt="Event_06" width="2000"/>

> Photo: Over 400 attendees at AWS Cloud Mastery Series #3
