---
title: "Event 2"
date: "2025-09-09"
weight: 1
chapter: false
pre: " <b> 4.2. </b> "
---

# Bài thu hoạch “WORKSHOP KHOA HỌC DỮ LIỆU TRÊN AWS”

### Mục Đích Của Sự Kiện

- Chia sẻ các dịch vụ AI trên AWS
- Hướng dẫn triển khai mô hình AI thông qua Amazon SageMaker
- Chia sẻ cách deploy mô hình AI và truy cập thông qua API

### Danh Sách Diễn Giả

- **Văn Hoàng Kha** - Cloud Solutions Architec AWS User Group Leader
- **Bạch Doãn Vương** - Cloud Develops Engineer AWS Community Builder

### Nội Dung Nổi Bật

#### **Giới thiệu & Tầm quan trọng của Cloud trong Data Science**

- Trình bày vai trò của **điện toán đám mây (Cloud Computing)** trong việc hỗ trợ xử lý dữ liệu, huấn luyện và triển khai mô hình AI quy mô lớn.
- So sánh **Cloud vs. On-premise**:

  - Cloud: khả năng mở rộng linh hoạt, triển khai nhanh, tiết kiệm chi phí vận hành, dễ dàng tích hợp.
  - On-premise: tốn kém chi phí đầu tư ban đầu, khó mở rộng, bảo trì phức tạp.

- Cloud (đặc biệt là **AWS**) mang lại nền tảng mạnh mẽ cho **Data Science pipeline** — từ thu thập, lưu trữ, xử lý dữ liệu, huấn luyện, cho đến triển khai mô hình AI.

#### **Các Layer AI Trên AWS**

AWS chia hệ sinh thái AI thành **3 tầng (layers)**, giúp người dùng lựa chọn mức độ quản lý phù hợp với năng lực và mục tiêu của mình:

**1. AI Services (Fully Managed Layer)**

> _Dành cho người dùng muốn ứng dụng AI mà không cần kiến thức chuyên sâu về Machine Learning._

- Các dịch vụ AI sẵn có, đã được huấn luyện bởi AWS.
- Người dùng chỉ cần gọi API là có thể sử dụng ngay trong ứng dụng.
- **Ví dụ:**

  - **Amazon Comprehend:** Phân tích ngôn ngữ tự nhiên (NLP)
  - **Amazon Translate:** Dịch máy học đa ngôn ngữ
  - **Amazon Textract:** Trích xuất dữ liệu từ tài liệu, hóa đơn
  - **Amazon Rekognition:** Nhận diện hình ảnh và video
  - **Amazon Polly:** Chuyển văn bản thành giọng nói
  - **Amazon Bedrock:** Truy cập các mô hình nền tảng (Foundation Models) như Claude, Titan, Mistral...

👉 **Lợi ích:** Triển khai nhanh, không cần huấn luyện mô hình, chi phí linh hoạt theo nhu cầu sử dụng.

**2. ML Services (Semi-managed Layer)**

> _Dành cho Data Scientist, ML Engineer muốn xây dựng, huấn luyện và triển khai mô hình ML một cách tùy chỉnh hơn._

- **Amazon SageMaker** là trung tâm của tầng này: cung cấp bộ công cụ đầy đủ để **build – train – deploy** mô hình Machine Learning.
- Các tính năng nổi bật:

  - **Data Wrangler:** Làm sạch và xử lý dữ liệu trực quan.
  - **Feature Store:** Quản lý đặc trưng (features) dùng cho nhiều mô hình.
  - **AutoML (SageMaker Autopilot):** Tự động huấn luyện mô hình.
  - **Model Registry & Monitoring:** Theo dõi và quản lý mô hình sau khi deploy.

👉 **Lợi ích:** Toàn quyền kiểm soát pipeline ML, có thể tùy chỉnh thuật toán, môi trường huấn luyện, và quy trình triển khai.

**3. AI Infrastructure (Self-managed Layer)**

> _Dành cho tổ chức hoặc chuyên gia muốn tự quản lý toàn bộ hạ tầng AI/ML để tối ưu chi phí hoặc hiệu năng._

- Người dùng có thể xây dựng môi trường huấn luyện bằng cách kết hợp các dịch vụ hạ tầng cơ bản của AWS:

  - **Amazon EC2 / EC2 GPU Instances (P5, G6, Inferentia):** Huấn luyện mô hình tùy chỉnh quy mô lớn.
  - **Amazon EKS / ECS:** Chạy các workload ML trong container hoặc Kubernetes.
  - **AWS Lambda:** Xử lý dữ liệu hoặc inference nhỏ gọn, serverless.
  - **Amazon S3 / EFS:** Lưu trữ dữ liệu và mô hình.

👉 **Lợi ích:** Linh hoạt tối đa, kiểm soát toàn bộ quá trình huấn luyện, nhưng yêu cầu kiến thức kỹ thuật cao hơn.

#### Các Dịch Vụ AI Phổ Biến Của AWS Hỗ Trợ Sinh Viên Trong Quá Trình Train Model

**1. Amazon SageMaker**

- Môi trường phát triển tích hợp (SageMaker Studio) cho toàn bộ quy trình ML:

  - Chuẩn bị dữ liệu
  - Huấn luyện mô hình
  - Theo dõi kết quả
  - Triển khai endpoint phục vụ API inference

- Hỗ trợ AutoML, GPU training, model monitoring và CI/CD cho mô hình AI.

**2. Amazon Comprehend**

- Dịch vụ NLP giúp phân tích, hiểu và phân loại ngôn ngữ tự nhiên.

- **Chức năng chính:**

  - Phân tích cảm xúc (Sentiment Analysis)
  - Nhận dạng thực thể (Entity Recognition)
  - Phân loại văn bản (Text Classification)
  - Gắn nhãn dữ liệu tự động
  - Phát hiện ngôn ngữ

- **Trường hợp sử dụng thực tế:**

  - Xử lý tài liệu thông minh
  - Phân tích mail hàng loạt để phát hiện phản hồi tích cực/tiêu cực
  - Phân tích cảm xúc và tâm lý khách hàng
  - Hỗ trợ trung tâm liên lạc (Contact Center Analytics)
  - Xác thực và trích xuất thông tin cá nhân

**3. Amazon Translate**

- Dịch vụ dịch máy học (Neural Machine Translation).
- Hỗ trợ hơn 75 ngôn ngữ với độ chính xác cao và dễ tích hợp.
- Ứng dụng:

  - Làm website đa ngôn ngữ
  - Dịch nội dung tự động trong ứng dụng
  - Hỗ trợ chatbot và phân tích dữ liệu đa ngôn ngữ

**4. Amazon Textract**

- Tự động trích xuất văn bản và dữ liệu có cấu trúc từ hình ảnh, tài liệu, hoặc biểu mẫu.
- Ứng dụng trong các quy trình như: số hóa hồ sơ, xử lý hóa đơn, tự động nhập dữ liệu vào hệ thống.

#### Tổng Quan Data Science Pipeline Trên AWS

1. **Thu thập & lưu trữ dữ liệu:** Amazon S3, AWS Data Exchange
2. **Tiền xử lý dữ liệu:** AWS Glue, Lambda, Athena
3. **Huấn luyện mô hình:** SageMaker (train, tune, evaluate)
4. **Triển khai mô hình:** SageMaker Endpoint / Lambda + API Gateway
5. **Giám sát & tối ưu:** CloudWatch, Model Monitor

#### **Demo 1: Thiết kế Workflow AI Training bằng Giao Diện Kéo - Thả (No-Code/Low-Code)**

- **Mục tiêu:** Giới thiệu cách xây dựng quy trình huấn luyện mô hình AI mà không cần viết nhiều code.
- **Công cụ sử dụng:** Amazon SageMaker Studio / SageMaker Canvas
- **Nội dung trình diễn:**

  1. Chuẩn bị dataset và tải lên Amazon S3.
  2. Dùng giao diện kéo-thả của SageMaker để:

     - Chọn nguồn dữ liệu, thuật toán huấn luyện và tham số.
     - Thiết kế toàn bộ pipeline gồm bước làm sạch dữ liệu, training, validation và deployment.

  3. Quan sát trực quan tiến trình training và kết quả mô hình (accuracy, confusion matrix, metrics, v.v.).

- **Thông điệp chính:** Sinh viên, nhà phát triển có thể nhanh chóng tạo workflow AI mà không cần viết code phức tạp — giúp rút ngắn thời gian nghiên cứu và thử nghiệm mô hình.

#### **Demo 2: Triển khai AI Service và Truy Cập Qua API/Website**

- **Mục tiêu:** Giới thiệu cách deploy mô hình AI để người dùng có thể truy cập và sử dụng thực tế.
- **Công cụ sử dụng:** Amazon SageMaker Endpoint, API Gateway, và Lambda.
- **Nội dung trình diễn:**

  1. Deploy mô hình AI đã huấn luyện lên SageMaker Endpoint.
  2. Tích hợp endpoint với API Gateway để tạo REST API công khai.
  3. Tạo đường dẫn web hoặc API URL để người dùng có thể gửi yêu cầu (ví dụ: nhập câu văn để phân tích cảm xúc hoặc dịch ngôn ngữ).
  4. Minh họa cách hiển thị kết quả trực quan (UI demo hoặc Postman/API test).

- **Thông điệp chính:** Cho thấy cách AWS hỗ trợ triển khai mô hình AI từ giai đoạn nghiên cứu đến ứng dụng thực tế — dễ dàng chia sẻ, mở rộng, và thương mại hóa.

#### Thảo Luận: Hiệu Năng & Chi Phí (Cloud vs. On-premise)

| Tiêu chí                    | Cloud (AWS)                             | On-premise                     |
| --------------------------- | --------------------------------------- | ------------------------------ |
| **Khả năng mở rộng**        | Dễ dàng mở rộng tài nguyên theo nhu cầu | Giới hạn phần cứng cố định     |
| **Chi phí**                 | Trả theo mức sử dụng (Pay-as-you-go)    | Chi phí đầu tư ban đầu cao     |
| **Triển khai**              | Tự động, nhanh chóng                    | Thủ công, tốn thời gian        |
| **Bảo trì**                 | AWS quản lý                             | Người dùng tự chịu trách nhiệm |
| **Thích hợp cho sinh viên** | ✅ Có Free Tier, dễ học và thử nghiệm   | ❌ Khó tiếp cận, tốn kém       |

#### Kết Luận

- AWS cung cấp **hệ sinh thái AI toàn diện từ tầng hạ tầng đến tầng ứng dụng**, phù hợp với mọi đối tượng — từ sinh viên mới học AI đến doanh nghiệp triển khai quy mô lớn.

### Trải nghiệm trong event

Tham gia workshop **“AI Services on AWS for Data Science”** là một trải nghiệm rất bổ ích, giúp tôi hiểu rõ hơn về **vai trò của Cloud trong Data Science** và cách AWS hỗ trợ huấn luyện, triển khai, và truy cập mô hình AI.

#### Học hỏi từ các diễn giả có chuyên môn cao

- Diễn giả giới thiệu **tầm quan trọng của Cloud** trong xử lý dữ liệu và huấn luyện mô hình.
- Hiểu rõ **3 layer AI trên AWS**: AI-managed services, ML services (SageMaker), và AI frameworks.

#### Trải nghiệm kỹ thuật thực tế

- **Demo 1:** Thiết kế workflow AI bằng cách **kéo thả trong SageMaker Canvas** để train model mà không cần code.
- **Demo 2:** **Triển khai mô hình AI** thành service có thể truy cập qua **API hoặc liên kết** thực tế.

#### Ứng dụng công cụ hiện đại

- Tìm hiểu các dịch vụ AI nổi bật: **Amazon Comprehend**, **Translate**, và **Textract**.
- Hiểu cách các dịch vụ này hỗ trợ **NLP, dịch tự động**, và **trích xuất dữ liệu thông minh** trong nhiều ngữ cảnh.

#### Kết nối và trao đổi

- Giao lưu với chuyên gia và sinh viên cùng quan tâm đến **AI & Cloud**.
- Trao đổi về **chi phí, hiệu năng (Cloud vs On-premise)** và cách tối ưu sử dụng SageMaker.

#### Bài học rút ra

- Cloud là **nền tảng trọng yếu** trong quy trình Data Science hiện đại.
- AWS cung cấp đầy đủ công cụ cho mọi cấp độ AI — từ không code đến tự triển khai.
- Hiểu rõ hơn **cách đưa mô hình AI vào sản phẩm thực tế** qua các dịch vụ AWS.

#### Một số hình ảnh khi tham gia sự kiện

![](/images/4-EventParticipated/event4-3-1.png)
