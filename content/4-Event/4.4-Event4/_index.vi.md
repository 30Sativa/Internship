---
title: "Event 4"
date: "2025-11-15"
weight: 4
chapter: false
pre: " <b> 4.4. </b> "
---

# AWS Cloud Mastery Series #1: GENERATIVE AI, RAG & AWS AGENTIC AI

### Mục Đích Của Sự Kiện

- Làm chủ kỹ thuật **Prompt Engineering** để tối ưu hóa đầu vào, giúp mô hình hiểu và thực hiện chính xác ý định của người dùng.
- Tận dụng sức mạnh của các **Pretrained AI Services** trên AWS để tích hợp tính năng thông minh nhanh chóng mà không cần xây dựng mô hình từ đầu.
- Hiểu sâu về kiến trúc **RAG (Retrieval-Augmented Generation)** để giải quyết vấn đề ảo giác và cập nhật dữ liệu riêng cho AI.
- Nắm bắt làn sóng công nghệ tiếp theo: **Agentic AI** và cách sử dụng **Amazon Bedrock AgentCore** để chuyển đổi AI Agent từ bản thử nghiệm (POC) sang môi trường thực tế (Production).
- Tiếp cận **Pipecat Framework** để xây dựng các trợ lý ảo giao tiếp bằng giọng nói với độ trễ thấp (Real-time).

### Danh Sách Diễn Giả

- **Anh Lâm Tuấn Kiệt** - Sr DevOps Engineer (FPT Software) - Chuyên gia về vận hành và triển khai hệ thống.
- **Bạn Danh Hoàng Hiếu Nghị** - AI Engineer (Renova Cloud) - Chuyên gia về các giải pháp trí tuệ nhân tạo.
- **Anh Đinh Lê Hoàng Anh** - Cloud Engineer Trainee (First Cloud AI Journey) - Chia sẻ góc nhìn từ người mới bắt đầu hành trình Cloud AI.

### Nội Dung Nổi Bật

#### **1. Prompt Engineering & Foundation Models (Nền Tảng Cốt Lõi)**

Trước khi đi sâu vào các hệ thống phức tạp, sự kiện khẳng định rằng "chất lượng đầu vào quyết định chất lượng đầu ra". Việc giao tiếp hiệu quả với các mô hình nền tảng (Foundation Models) trên Amazon Bedrock là bước đầu tiên:

- **Zero-shot / Few-shot Prompting:** Kỹ thuật điều hướng mô hình bằng cách ra lệnh trực tiếp hoặc cung cấp một vài ví dụ mẫu (context) để AI học theo mẫu đó và trả về kết quả mong muốn.
- **Chain of Thought (CoT):** Một kỹ thuật nâng cao giúp AI xử lý các tác vụ suy luận phức tạp bằng cách yêu cầu nó "giải trình từng bước". Điều này giúp giảm sai sót logic trong câu trả lời.

#### **2. Các Dịch Vụ AI Được Huấn Luyện Trước (AWS AI Services)**

Đây là tầng ứng dụng giúp các lập trình viên không chuyên về Machine Learning vẫn có thể tích hợp AI vào sản phẩm thông qua API:

- **Thị giác máy tính:** **Amazon Rekognition** giúp phân tích hình ảnh/video, nhận diện vật thể và kiểm duyệt nội dung.
- **Xử lý ngôn ngữ tự nhiên:** Bộ ba **Amazon Translate** (dịch thuật), **Comprehend** (phân tích cảm xúc/ngữ nghĩa), và **Textract** (OCR thông minh - trích xuất văn bản từ tài liệu).
- **Xử lý âm thanh:** **Amazon Polly** (chuyển văn bản thành giọng nói tự nhiên) và **Transcribe** (chuyển giọng nói thành văn bản).

#### **3. RAG - Retrieval Augmented Generation**

RAG là giải pháp cầu nối giúp AI "học" được dữ liệu riêng của doanh nghiệp mà không cần huấn luyện lại (fine-tuning), giải quyết vấn đề mô hình bị lỗi thời hoặc "bịa" thông tin (hallucination):

- **Embeddings (Vector hóa):** Sử dụng model như _Amazon Titan Text Embeddings V2_ để chuyển đổi văn bản thành các vector số học, giúp hệ thống hiểu và tìm kiếm dựa trên ngữ nghĩa (semantic search) thay vì chỉ khớp từ khóa.
- **Knowledge Bases for Amazon Bedrock:** Dịch vụ quản lý toàn trình (end-to-end), tự động hóa các khâu phức tạp: Cắt nhỏ tài liệu (Chunking) -> Lưu vào Vector Store -> Truy xuất dữ liệu liên quan (Retrieval) -> Tổng hợp câu trả lời (Generation).

#### **4. Sự Tiến Hóa Lên Agentic AI (Kỷ Nguyên AI Tác Vụ)**

GenAI đang chuyển dịch từ việc chỉ "trả lời câu hỏi" sang "thực hiện hành động". Sự kiện phân loại rõ lộ trình phát triển:

1.  **GenAI Assistants:** Trợ lý ảo thực hiện các tác vụ đơn lẻ, lặp lại dựa trên quy tắc có sẵn.
2.  **GenAI Agents:** AI hướng mục tiêu (Goal-oriented), có khả năng suy luận để chọn công cụ phù hợp nhằm hoàn thành một chuỗi công việc.
3.  **Agentic AI Systems:** Hệ sinh thái đa tác nhân (Multi-agent), hoạt động tự chủ cao (Autonomous), có thể tự phối hợp với nhau dưới sự giám sát tối thiểu của con người.

**Thách thức "Hố sâu ngăn cách" (The Prototype to Production Chasm):**
Tại sao nhiều bản demo Agent rất hay nhưng thất bại khi đưa ra thực tế?

- **Hiệu năng & Mở rộng:** Agent hoạt động chậm khi xử lý luồng suy luận dài.
- **An toàn & Quản trị:** Rủi ro khi Agent tự ý thực hiện hành động sai (ví dụ: xóa nhầm database) hoặc truy cập dữ liệu nhạy cảm.
- **Độ phức tạp:** Khó khăn trong việc duy trì bộ nhớ ngữ cảnh (Memory) qua các phiên làm việc dài.

#### **5. Amazon Bedrock AgentCore: Giải Pháp Đưa Agent Ra Thị Trường**

**AgentCore** được giới thiệu như một nền tảng hạ tầng hoàn chỉnh để giải quyết các bài toán trên, giúp doanh nghiệp an tâm triển khai Agent:

- **Các thành phần cốt lõi:**
  - **Runtime & Memory:** Cung cấp môi trường thực thi ổn định và khả năng "ghi nhớ" dài hạn các tương tác quá khứ.
  - **Identity & Gateway:** Quản lý định danh chặt chẽ, đảm bảo Agent chỉ thực hiện đúng quyền hạn được cấp.
  - **Code Interpreter:** Một "sandbox" an toàn cho phép Agent tự viết và chạy code Python để xử lý tính toán số liệu hoặc vẽ biểu đồ chính xác (thay vì tự đoán số liệu).
  - **Observability:** Công cụ giám sát giúp con người theo dõi từng bước suy luận (Trace) của Agent để debug và tối ưu.
- **Lợi ích:** Giúp Developer tập trung vào logic nghiệp vụ, giảm gánh nặng xây dựng hạ tầng phụ trợ.

#### **6. Pipecat: Framework Cho AI Voice Thời Gian Thực**

Giới thiệu một Framework mã nguồn mở giúp xây dựng các ứng dụng giao tiếp người-máy tự nhiên (Multimodal):

- **Đặc điểm:** Tối ưu hóa độ trễ (Latency) cực thấp, yếu tố sống còn trong giao tiếp thoại.
- **Cơ chế Pipeline:**
  1.  **WebRTC Input:** Nhận luồng âm thanh trực tiếp từ trình duyệt/app.
  2.  **STT (Speech-to-Text):** Dịch giọng nói sang văn bản tức thì.
  3.  **LLM Processing:** AI suy nghĩ và sinh câu trả lời dưới dạng text.
  4.  **TTS (Text-to-Speech):** Chuyển câu trả lời thành giọng nói.
  5.  **Output:** Phát lại cho người dùng.
      _Điểm mấu chốt là các bước này diễn ra gần như song song (streaming) để tạo cảm giác hội thoại liền mạch._

### Trải nghiệm chi tiết trong Event

Buổi workshop đã giúp tôi hệ thống hóa lại kiến thức và nhìn thấy bức tranh lớn hơn về tương lai của AI.

#### 1. Sự chuyển dịch từ "Hỏi - Đáp" sang "Hành động" (Agentic AI)

Điều làm tôi ấn tượng nhất là tư duy về **Agentic AI**. Trước đây, tôi chỉ xem AI như một công cụ tra cứu thông minh. Nhưng với **AgentCore**, AI trở thành một "nhân viên kỹ thuật số" có khả năng tự lập kế hoạch và sử dụng công cụ (API, Code, Search) để giải quyết vấn đề trọn vẹn. Đây là bước nhảy vọt về giá trị sử dụng.

#### 2. Giải quyết bài toán "Production"

Phần chia sẻ về **"Hố sâu ngăn cách"** rất thực tế. Nó giải thích tại sao nhiều dự án AI chết yểu. Việc AWS cung cấp các lớp bảo mật (Identity) và giám sát (Observability) trong Bedrock Agent là chìa khóa để doanh nghiệp dám tin tưởng giao quyền cho AI tác động vào hệ thống thực.

#### 3. Tiềm năng của Voice AI với Pipecat

Demo về **Pipecat** cho thấy tương lai của giao tiếp không chạm. Việc kết hợp WebRTC và LLM để tạo ra hội thoại thời gian thực mở ra vô vàn ứng dụng: từ Tổng đài CSKH tự động, Luyện thi IELTS ảo, đến Trợ lý phỏng vấn.

### Kết Luận

Workshop **“Generative AI & Agentic AI on AWS”** đã phác thảo rõ lộ trình phát triển năng lực AI:

- **Hiện tại:** Chúng ta dùng **RAG** và **Prompt Engineering** để khai thác dữ liệu hiệu quả.
- **Tương lai gần:** Chúng ta chuyển sang **Agentic AI**, nơi các hệ thống tự chủ (Autonomous Agents) sẽ thay con người vận hành các quy trình phức tạp.
- **Công cụ:** Với hệ sinh thái toàn diện của AWS (Bedrock, AgentCore) và cộng đồng Open Source (Pipecat, LangChain), rào cản kỹ thuật đã giảm đi đáng kể, nhường chỗ cho sự sáng tạo về giải pháp nghiệp vụ.

#### Một số hình ảnh khi tham gia sự kiện

<img src="/images/4-EventParticipated/4.4-Event4/1_IMG_7805.JPG" alt="Event_04" width="2000"/>

> **Hình ảnh hơn 400 bạn tham dự buổi Event AWS Cloud Mastery Series #1**
