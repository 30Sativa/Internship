---
title: "Event 1"
date: "2025-09-09"
weight: 1
chapter: false
pre: " <b> 4.1. </b> "
---

# Bài thu hoạch “Vòng đời phát triển theo hướng AI: Tái định hình kỹ thuật phần mềm”

### Mục Đích Của Sự Kiện

- Hiểu rõ cách AI có thể **tự động hóa và tối ưu hóa** từng giai đoạn trong vòng đời phát triển phần mềm (Software Development Lifecycle – SDLC).
- Nắm bắt được triết lý **AI hỗ trợ con người thay vì thay thế con người** trong quá trình xây dựng ứng dụng.
- Trực tiếp quan sát cách **Amazon Q** và các công cụ AI khác hỗ trợ lập trình viên từ giai đoạn khởi tạo ý tưởng, viết mã, đến triển khai hạ tầng (IaC – Infrastructure as Code).
- Nhận thức được xu hướng “**AI-first development**” – nơi AI trở thành một phần tự nhiên của quy trình phát triển phần mềm tương lai.

### Danh Sách Diễn Giả

- **Toan Huynh**
- **My Nguyen**

### Nội Dung Nổi Bật

#### Thử thách khi lập trình với AI

Phần mở đầu trình bày những **hạn chế và thách thức khi đưa AI vào lập trình**:

- AI chưa thể xử lý các project có logic phức tạp, đòi hỏi hiểu biết sâu về ngữ cảnh nghiệp vụ.
- Lập trình viên **khó kiểm soát chi tiết** trong mã sinh ra nếu không mô tả rõ ràng mục tiêu và phạm vi.
- Chất lượng code phụ thuộc nhiều vào **prompt và context** mà người dùng cung cấp.

Đây chính là lý do AI-DLC ra đời: **tạo ra một quy trình có cấu trúc, giúp AI và con người phối hợp hiệu quả hơn.**

#### AI in Development – How AI is Changing Software

Phần này phân tích cách **AI đang thay đổi ngành phần mềm**:

- AI hỗ trợ sinh code, tạo tài liệu kỹ thuật, thiết kế API, và kiểm thử tự động.
- Developer chuyển vai trò từ “code writer” sang “AI orchestrator” — người điều phối, định hướng và đánh giá đầu ra.
- Các công cụ như **Amazon Q, GitHub Copilot, ChatGPT for Developers** trở thành **công cụ trung tâm trong workflow của team dev hiện đại**.

#### 🔹 Giới thiệu về AI-DLC là gì

**AI-Driven Development Lifecycle (AI-DLC)** là phương pháp tiếp cận phát triển phần mềm có sự đồng hành của AI, nơi mỗi bước được thiết kế để **cung cấp cho AI ngữ cảnh và mục tiêu cụ thể** nhằm tạo ra kết quả chính xác hơn.

**🟧 Inception**

1. **Build Context on Existing Codes** – AI được “nuôi” bằng mã nguồn hiện tại để hiểu cấu trúc dự án.
2. **Elaborate Intent with User Stories** – Developer mô tả yêu cầu thông qua user story, làm rõ mục tiêu.
3. **Plan with Units of Work** – Phân tách công việc thành các đơn vị nhỏ để AI có thể thực thi và sinh code từng phần.

**🟦 Construction**

4. **Domain Model (Component Model)** – Xây dựng mô hình miền hoặc sơ đồ kiến trúc logic.
5. **Generate Code & Test** – AI sinh code và test tự động dựa trên thông tin đã lên kế hoạch.
6. **Add Architectural Components** – Bổ sung các thành phần kiến trúc như API, data layer, logging, security.
7. **Deploy with IaC & Tests** – Tự động triển khai hệ thống với Infrastructure as Code và test tích hợp.

_🔁 Mỗi bước đều cung cấp thêm “rich context” cho bước kế tiếp, giúp AI hiểu sâu hơn về hệ thống và sinh ra kết quả ngày càng chính xác._

#### CORE CONCEPTS – Ba nguyên lý cốt lõi

1. **Context Awareness** – AI cần có ngữ cảnh rõ ràng về mã, yêu cầu và domain để hoạt động hiệu quả.
2. **Collaborative Generation** – Con người và AI hợp tác: AI sinh code, con người định hướng và kiểm duyệt.
3. **Continuous Refinement** – Quy trình lặp lại liên tục để tinh chỉnh đầu ra và cải thiện chất lượng.

#### Mob Elaboration

Mob Elaboration là phương pháp mở rộng yêu cầu (intent elaboration) theo hình thức cộng tác nhóm:

- Nhiều thành viên cùng nhau mô tả yêu cầu, đặt câu hỏi, và bổ sung thông tin cho AI.
- Giúp AI **hiểu sâu hơn** về nghiệp vụ, mục tiêu và logic phức tạp của dự án.
- Cách tiếp cận này giúp **giảm rủi ro hiểu sai yêu cầu**, đặc biệt trong các team lớn hoặc đa miền.

#### 5-Stage Sequential Process của AI-DLC

AI-DLC được thực hiện qua 5 giai đoạn:

1. **Inception** – Hiểu yêu cầu, phân tích hệ thống.
2. **Construction** – Tạo mô hình miền và cấu trúc ban đầu.
3. **Generation** – Sinh mã tự động.
4. **Testing** – Tự động hóa kiểm thử đơn vị và tích hợp.
5. **Deployment** – Triển khai ứng dụng với IaC và CI/CD pipelines.

Mỗi vòng lặp giúp AI học thêm và cải thiện chất lượng đầu ra.

#### Demo 1 – Trải nghiệm trực quan AI DLC với Amazon Q

Buổi demo minh họa cách áp dụng AI-DLC trong thực tế thông qua **một dự án nhỏ**:

- Bắt đầu từ **ý tưởng đơn giản** → chuyển thành **user story** mô tả yêu cầu nghiệp vụ.
- AI hỗ trợ **phân chia công việc (Units of Work)** và lập kế hoạch chi tiết cho từng module.
- Người tham dự có thể **điều khiển AI thông qua câu hỏi, checkbox và điều kiện logic**, giúp AI hiểu rõ phạm vi công việc.
- AI tiếp tục sinh code, viết test, tạo cấu trúc dự án và triển khai thử nghiệm tự động.
- Demo thể hiện rõ cách **AI và con người phối hợp nhịp nhàng**: AI làm việc lặp đi lặp lại, con người định hướng và ra quyết định chiến lược.

#### Giới Thiệu Về Kiro

**Triết Lý Của Kiro**

Phần tiếp theo của workshop giới thiệu **Kiro**, một môi trường phát triển thông minh được thiết kế **xoay quanh triết lý “AI-native development”** – nơi AI là một phần cốt lõi, không phải chỉ là công cụ hỗ trợ.

Triết lý của Kiro tập trung vào ba yếu tố chính:

1. **Tích hợp sâu với quy trình phát triển** – AI không chỉ hỗ trợ viết code, mà còn tham gia lập kế hoạch, quản lý context, và phân tích tác động thay đổi.
2. **Hiểu ngữ cảnh dự án toàn diện** – Kiro duy trì trạng thái hiểu biết liên tục về cấu trúc hệ thống, cho phép AI tương tác với toàn bộ project thay vì từng file riêng lẻ.
3. **Kiểm soát & cộng tác thông minh** – Lập trình viên có thể hướng dẫn AI thông qua **contextual commands**, giúp đảm bảo rằng mỗi thay đổi đều có mục đích rõ ràng và nhất quán với hệ thống.

**Cấu Trúc Project Trong Kiro**

Khác với các **text editor truyền thống** như VSCode hay JetBrains, Kiro không chỉ là môi trường viết mã — nó là **AI workspace có nhận thức cấu trúc**.

Cấu trúc project trong Kiro bao gồm:

- **Context Layer** – Lưu trữ ngữ cảnh, domain model, và quan hệ giữa các module.
- **Task Layer** – Quản lý các đơn vị công việc (Units of Work) được AI theo dõi và hoàn thành dần.
- **AI Agent Layer** – Mỗi tác vụ (code, test, refactor, deploy) có agent riêng đảm nhận, tạo ra mô hình phát triển **đa agent – hợp tác – song song**.
- **Human-in-the-Loop Control** – Lập trình viên có thể can thiệp ở mọi bước: xác nhận, sửa đổi hoặc từ chối đầu ra của AI.

Điều này giúp Kiro không chỉ là công cụ sinh code mà trở thành **một hệ sinh thái phát triển hợp tác giữa người và AI**.

#### Demo 2: Kiro – Áp Dụng AI-DLC

Trong phần trình diễn, diễn giả minh họa cách Kiro vận hành **AI-DLC một cách liền mạch**:

1. Người dùng nhập **một yêu cầu nghiệp vụ cơ bản**, ví dụ “xây dựng hệ thống quản lý sự kiện”.
2. Kiro tự động phân tích intent, tạo domain model và chia nhỏ thành các user story.
3. AI trong Kiro sinh ra **các module, component và test case** tương ứng.
4. Developer có thể tương tác qua **bảng kiểm (checkbox-based task control)** để xác nhận từng phần việc.
5. Cuối cùng, Kiro **triển khai hệ thống hoàn chỉnh** với IaC và kiểm thử tự động.

Buổi demo cho thấy **AI-DLC không chỉ là lý thuyết**, mà có thể **được triển khai thực tế ngay trong môi trường Kiro** — nơi AI, con người, và quy trình phát triển hòa quyện thành một hệ thống thống nhất.

### Trải nghiệm trong event

Tham gia buổi workshop **“AI DLC x Kiro: Reinventing Developer Experience with AI”** là một trải nghiệm vô cùng bổ ích, giúp tôi hiểu rõ hơn về cách **AI được tích hợp sâu vào môi trường phát triển phần mềm** và cách mà **triết lý thiết kế của Kiro** mang lại hướng tiếp cận mới cho developer.

#### Học hỏi từ các diễn giả có chuyên môn cao

- Các diễn giả đã chia sẻ về **AI DLC** – một nền tảng hỗ trợ phát triển phần mềm dựa trên AI, giúp tự động hóa nhiều quy trình trong SDLC.
- Ngoài ra, phần giới thiệu về **Kiro Editor** mang lại cái nhìn sâu sắc về cách xây dựng một text editor theo hướng **AI-native** thay vì chỉ “thêm plugin AI” vào môi trường cũ.
- Tôi đặc biệt ấn tượng với triết lý của Kiro: **tối giản, hiệu năng cao, tập trung vào trải nghiệm người dùng và khả năng mở rộng theo module**.

#### Trải nghiệm kỹ thuật thực tế

- Buổi demo minh họa cách sử dụng **AI DLC kết hợp với Kiro** để tạo, chỉnh sửa và tối ưu mã nguồn một cách thông minh.
- Tôi được chứng kiến **một project nhỏ** được khởi tạo và quản lý ngay trong Kiro, với khả năng AI tự động đề xuất refactor, viết test case và phân tích logic code.
- So với các text editor phổ biến như VSCode hay Sublime, Kiro thể hiện sự khác biệt nhờ kiến trúc **AI-first** và **plugin architecture nhẹ**, cho phép tích hợp AI mà không làm giảm hiệu suất.

#### Ứng dụng công cụ hiện đại

- Việc trải nghiệm **AI DLC trên Kiro** giúp tôi hiểu rõ hơn về khả năng **tự động hóa quy trình phát triển**, đặc biệt là ở các bước như code generation, documentation và debugging.
- Tôi nhận ra tiềm năng của việc **xây dựng công cụ học tập và làm việc cá nhân** có khả năng gợi ý thông minh, giúp rút ngắn thời gian phát triển và nâng cao chất lượng sản phẩm.
- Các khái niệm về modular design của Kiro cũng gợi ý cho tôi hướng đi trong việc **thiết kế hệ thống linh hoạt, dễ mở rộng và dễ bảo trì**.

#### Kết nối và trao đổi

- Workshop tạo cơ hội để tôi **giao lưu với các developer, nhà nghiên cứu AI và product designer**, từ đó hiểu thêm về xu hướng **AI-augmented development**.
- Qua các cuộc thảo luận, tôi học được nhiều về cách **AI có thể đóng vai trò cộng tác viên sáng tạo**, giúp developer tập trung hơn vào logic và tư duy hệ thống thay vì những thao tác lặp lại.

#### Bài học rút ra

- **AI DLC kết hợp Kiro** là ví dụ điển hình cho thế hệ công cụ phát triển mới — **AI-first IDE**, nơi AI không chỉ hỗ trợ mà còn đồng hành cùng lập trình viên trong mọi giai đoạn phát triển.
- Triết lý “less is more” của Kiro nhấn mạnh rằng **sự tối giản và hiệu suất** có thể tạo ra trải nghiệm mạnh mẽ hơn bất kỳ hệ thống phức tạp nào.
- Tôi học được rằng việc áp dụng AI hiệu quả không chỉ nằm ở công nghệ, mà còn ở **cách tích hợp và triết lý thiết kế**, điều này có thể được mang vào các dự án học tập hoặc phát triển phần mềm thực tế của tôi.

#### Một số hình ảnh khi tham gia sự kiện

## ![](/images/4-EventParticipated/event4-2-1.png)
