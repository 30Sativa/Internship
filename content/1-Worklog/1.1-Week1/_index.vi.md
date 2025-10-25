---
title: "Worklog Tuần 1"
date: "2025-09-09"
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Mục tiêu Tuần 1:

- Hiểu các kiến thức cơ bản về **điện toán đám mây** và hạ tầng toàn cầu của AWS.
- Học cách quản lý dịch vụ AWS thông qua **Management Console, CLI và SDK**.
- Tìm hiểu **bảo mật, IAM và quản lý chi phí AWS** thông qua các bài thực hành.
- Xây dựng nền tảng kiến thức về **mạng VPC và kết nối** (Subnet, Route Table, IGW, NAT, Peering, Transit Gateway).
- Thực hành trực tiếp trên AWS với các **bài Lab** để củng cố lý thuyết bằng kỹ năng thực tế.

### Nhiệm vụ trong tuần:

| Ngày | Nhiệm vụ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ------------------ |
| 1    | - Đọc và ghi chú lại các quy định, nội quy của đơn vị thực tập<br>- Học Module 01:<br> + Điện toán đám mây: Khái niệm, lợi ích<br> + Tổng quan AWS:<br> + Điểm khác biệt của AWS, triết lý định giá, nguyên tắc lãnh đạo<br> + Hành trình lên đám mây<br> + Hạ tầng AWS: Data center, AZ, Region, Edge Locations<br> + Quản lý dịch vụ AWS:<br> + AWS Management Console<br> + AWS CLI<br> + AWS SDK<br>- Thực hành:<br> + Lab 01: Tạo tài khoản AWS, bật MFA, tạo IAM User/Group, Access Keys<br> + Lab 07: Tạo các loại ngân sách khác nhau<br> + Lab 09: Sử dụng AWS Support Plans và mở case hỗ trợ<br><br>- Nghiên cứu:<br> + AWS Well-Architected Framework                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 08/09/2025   | 08/09/2025      |                    |
| 2    | - Tổng quan mạng: Tầm quan trọng trong kiến trúc AWS Cloud<br>+ Amazon VPC: Khái niệm, khác biệt với Private Cloud truyền thống, triển khai Multi-AZ<br>+ VPC CIDR: IPv4 (bắt buộc), IPv6 (tùy chọn), giới hạn 5 VPC mỗi Region<br>+ Subnet: Public vs Private, các địa chỉ IP dự trữ<br>+ Route Table: Route mặc định, route tùy chỉnh, định tuyến Public Subnet<br>+ Elastic Network Interface (ENI), Elastic IP Address<br>+ VPC Endpoint: Interface Endpoint, Gateway Endpoint (S3, DynamoDB)<br>+ Internet Gateway: Yêu cầu để có Internet access (public IP + route)<br>+ NAT Gateway: Internet outbound từ private subnet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 09/09/2025   | 09/09/2025      |                    |
| 3    | Bảo mật VPC:<br>+ Security Group (stateful, chỉ có allow rules, gắn vào ENI)<br>+ Network ACL (stateless, inbound/outbound rules, gắn vào Subnet)<br>+ VPC Flow Logs (theo dõi traffic, phát hiện request bị từ chối, lưu CloudWatch/S3)<br>+ Kết nối Multi-VPC:<br>+ VPC Peering: Kết nối 1:1, không hỗ trợ transitive routing, CIDR không trùng lặp<br>+ Transit Gateway: Mô hình hub-and-spoke, đơn giản hóa định tuyến, cần TGW Attachment mỗi AZ<br>+ Kết nối Hybrid:<br>+ VPN Site-to-Site: Virtual Private Gateway (AWS) & Customer Gateway (On-premises)<br>+ VPN Client-to-Site: chi phí cao, thường dùng giải pháp bên thứ 3<br>+ Direct Connect: Kết nối chuyên dụng/hosted, độ trễ ổn định (20–30ms), nhà cung cấp VN (Viettel, FPT)<br>+ Elastic Load Balancing (ELB):<br>+ Khái niệm: health check, sticky session, access log (lưu S3)<br>+ Các loại:<br>- Application Load Balancer (Layer 7, HTTP/HTTPS, path-based routing)<br>- Network Load Balancer (Layer 4, TCP/TLS, static IP, hiệu năng cao)<br>- Classic Load Balancer (Layer 4 & 7, cũ)<br>- Gateway Load Balancer (Layer 3, điều hướng traffic appliance) | 10/09/2025   | 10/09/2025      |                    |
| 4    | - Ôn tập:<br>- Hệ thống lại kiến thức từ Ngày 2 & Ngày 3: VPC, Subnet, Route Table, Internet Gateway, NAT Gateway, Security Group, Network ACL, VPC Peering, Transit Gateway, VPN, Direct Connect, Elastic Load Balancing.<br>+ Lab:<br>- Lab 1:<br>+ Tạo VPC, Subnet, Internet Gateway, Route Table, Security Group.<br>+ Bật VPC Flow Logs.<br>+ Khởi chạy EC2 instance và test kết nối SSH.<br>+ Tạo NAT Gateway cho Private Subnet có Internet outbound.<br>+ Sử dụng Reachability Analyzer để kiểm tra kết nối mạng.<br>+ Quản lý EC2 bằng AWS Systems Manager Session Manager.<br>+ Bật CloudWatch Monitoring & Alerting để giám sát EC2.<br>- Lab 2:<br>+ Lặp lại các bước để củng cố kiến thức và kỹ năng thực hành.                                                                                                                                                                                                                                                                                                                                                                                                          | 11/09/2025   | 11/09/2025      |                    |
| 5    | - Thực hành trên AWS:<br>+ Lab 02-02: Session Manager (chuẩn bị, kết nối EC2, quản lý session logs, port forwarding)<br>+ Lab 02-03: VPC Peering (chuẩn bị, cập nhật Network ACL, tạo kết nối peering, cấu hình route table, bật cross-peer DNS)<br>+ Lab 02-04: Transit Gateway (thiết lập hạ tầng, tạo TGW, TGW attachments, tạo TGW route table, thêm gateway, kiểm tra kết quả)<br>+ Lab 02-05: Hybrid DNS (thiết lập, tạo outbound endpoint, tạo Route 53 resolver rule, tạo inbound endpoint)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 12/09/2025   | 12/09/2025      |                    |

### Thành tựu Tuần 1:

- **Nắm vững kiến thức nền tảng về AWS và Điện toán đám mây**

  - Hiểu khái niệm, lợi ích của cloud computing và hành trình chuyển đổi lên cloud.
  - Nắm vững hạ tầng AWS: Region, AZ, Edge Location, Data Center.

- **Thực hành công cụ quản lý AWS**

  - Sử dụng thành thạo AWS Management Console, AWS CLI, AWS SDK.
  - Tạo và quản lý IAM Users/Groups, kích hoạt MFA, cấu hình Access Keys.

- **Quản lý chi phí và hỗ trợ AWS**

  - Tạo và quản lý các loại Budget khác nhau.
  - Tìm hiểu các gói Support Plans và thực hành mở case hỗ trợ.

- **Kiến thức Networking & Security trên AWS**

  - Xây dựng và cấu hình VPC, Subnet, Route Table, Internet Gateway, NAT Gateway.
  - Triển khai Security Group, Network ACL, VPC Flow Logs.
  - So sánh VPC Peering và Transit Gateway, tìm hiểu kết nối Hybrid (VPN, Direct Connect).

- **Quản lý hệ thống trên AWS**

  - Quản lý EC2 bằng **Session Manager** thay vì SSH.
  - Thực hành Port Forwarding và quản lý Session Logs.
  - Bật giám sát bằng **CloudWatch Monitoring & Alerts**.

- **Giải pháp nâng cao**
  - Cấu hình **VPC Peering** và **Transit Gateway** để kết nối nhiều VPC.
  - Thiết lập **Hybrid DNS** với Route 53 Resolver (Inbound/Outbound Endpoints).
  - Thực hành với **Elastic Load Balancer** (ALB, NLB, CLB, GWLB).

---

👉 **Kết quả:** Sau Tuần 1, tôi đã xây dựng nền tảng vững chắc về AWS cơ bản và các khái niệm mạng ở mức trung cấp, đồng thời hoàn thành nhiều **bài Lab trực tiếp trên AWS** để rèn luyện kỹ năng thực hành.
