---
title: "Event 4"
date: "2025-11-15"
weight: 4
chapter: false
pre: " <b> 4.4. </b> "
---

# AWS Cloud Mastery Series #1: GENERATIVE AI, RAG & AWS AGENTIC AI

### Event Purpose

- Master **Prompt Engineering** techniques to optimize input, helping models understand and execute user intent accurately.
- Leverage the power of **Pretrained AI Services** on AWS to quickly integrate intelligent features without building models from scratch.
- Deep understanding of **RAG (Retrieval-Augmented Generation)** architecture to solve hallucination problems and update private data for AI.
- Grasp the next technology wave: **Agentic AI** and how to use **Amazon Bedrock AgentCore** to transform AI Agents from proof of concept (POC) to production environment.
- Access **Pipecat Framework** to build virtual assistants with low-latency voice communication (Real-time).

### Speaker List

- **Mr. Lam Tuan Kiet** - Sr DevOps Engineer (FPT Software) - Expert in system operations and deployment.
- **Mr. Danh Hoang Hieu Nghi** - AI Engineer (Renova Cloud) - Expert in artificial intelligence solutions.
- **Mr. Dinh Le Hoang Anh** - Cloud Engineer Trainee (First Cloud AI Journey) - Sharing perspectives from someone starting their Cloud AI journey.

### Highlighted Content

#### **1. Prompt Engineering & Foundation Models (Core Foundation)**

Before diving into complex systems, the event emphasized that "input quality determines output quality". Effective communication with Foundation Models on Amazon Bedrock is the first step:

- **Zero-shot / Few-shot Prompting:** Techniques to guide models by giving direct commands or providing a few sample examples (context) for AI to learn from that pattern and return desired results.
- **Chain of Thought (CoT):** An advanced technique helping AI handle complex reasoning tasks by requiring it to "explain step by step". This reduces logical errors in answers.

#### **2. Pretrained AI Services (AWS AI Services)**

This is the application layer helping developers not specialized in Machine Learning to still integrate AI into products through APIs:

- **Computer Vision:** **Amazon Rekognition** helps analyze images/videos, recognize objects and moderate content.
- **Natural Language Processing:** The trio of **Amazon Translate** (translation), **Comprehend** (sentiment/semantic analysis), and **Textract** (intelligent OCR - text extraction from documents).
- **Audio Processing:** **Amazon Polly** (convert text to natural speech) and **Transcribe** (convert speech to text).

#### **3. RAG - Retrieval Augmented Generation**

RAG is a bridging solution helping AI "learn" enterprise-specific data without retraining (fine-tuning), solving the problem of outdated models or "hallucination":

- **Embeddings (Vectorization):** Use models like _Amazon Titan Text Embeddings V2_ to convert text into mathematical vectors, helping systems understand and search based on semantics (semantic search) rather than just keyword matching.
- **Knowledge Bases for Amazon Bedrock:** End-to-end managed service, automating complex steps: Document chunking -> Store in Vector Store -> Retrieve relevant data (Retrieval) -> Synthesize answers (Generation).

#### **4. Evolution to Agentic AI (The Era of Task-oriented AI)**

GenAI is shifting from just "answering questions" to "taking action". The event clearly categorized the development roadmap:

1.  **GenAI Assistants:** Virtual assistants performing single, repetitive tasks based on predefined rules.
2.  **GenAI Agents:** Goal-oriented AI with reasoning ability to choose appropriate tools to complete a sequence of work.
3.  **Agentic AI Systems:** Multi-agent ecosystem, highly autonomous, capable of coordinating with each other under minimal human supervision.

**The Challenge of "The Prototype to Production Chasm":**
Why do many great Agent demos fail when deployed to production?

- **Performance & Scalability:** Agents work slowly when processing long reasoning chains.
- **Safety & Governance:** Risks when Agents autonomously perform wrong actions (e.g., accidentally deleting database) or accessing sensitive data.
- **Complexity:** Difficulty maintaining context memory (Memory) across long working sessions.

#### **5. Amazon Bedrock AgentCore: Solution for Bringing Agents to Market**

**AgentCore** was introduced as a complete infrastructure platform to solve the above problems, helping enterprises confidently deploy Agents:

- **Core Components:**
  - **Runtime & Memory:** Provides stable execution environment and long-term "memory" capability of past interactions.
  - **Identity & Gateway:** Strict identity management, ensuring Agents only execute within granted permissions.
  - **Code Interpreter:** A safe "sandbox" allowing Agents to autonomously write and run Python code to process numerical calculations or draw accurate charts (instead of guessing numbers).
  - **Observability:** Monitoring tools helping humans track each reasoning step (Trace) of Agents for debugging and optimization.
- **Benefits:** Helps Developers focus on business logic, reducing the burden of building supporting infrastructure.

#### **6. Pipecat: Framework for Real-time AI Voice**

Introduction to an open-source Framework helping build natural human-machine communication applications (Multimodal):

- **Features:** Optimizes extremely low latency, a vital factor in voice communication.
- **Pipeline Mechanism:**
  1.  **WebRTC Input:** Receives audio stream directly from browser/app.
  2.  **STT (Speech-to-Text):** Translates speech to text instantly.
  3.  **LLM Processing:** AI thinks and generates text responses.
  4.  **TTS (Text-to-Speech):** Converts responses to speech.
  5.  **Output:** Plays back to users.
      _The key point is these steps occur almost in parallel (streaming) to create a seamless conversation experience._

### Detailed Experience in the Event

The workshop helped me systematize knowledge and see a bigger picture of AI's future.

#### 1. The Shift from "Question-Answer" to "Action" (Agentic AI)

What impressed me most was the thinking about **Agentic AI**. Previously, I only viewed AI as an intelligent lookup tool. But with **AgentCore**, AI becomes a "digital employee" capable of autonomously planning and using tools (API, Code, Search) to solve problems completely. This is a quantum leap in usage value.

#### 2. Solving the "Production" Problem

The sharing about **"The Prototype to Production Chasm"** was very practical. It explains why many AI projects die young. AWS providing security layers (Identity) and monitoring (Observability) in Bedrock Agent is the key for enterprises to dare trust giving AI authority to impact real systems.

#### 3. Potential of Voice AI with Pipecat

The **Pipecat** demo showed the future of contactless communication. Combining WebRTC and LLM to create real-time conversations opens countless applications: from automatic customer service hotlines, virtual IELTS practice, to interview assistants.

### Conclusion

The **"Generative AI & Agentic AI on AWS"** workshop clearly outlined the AI capability development roadmap:

- **Present:** We use **RAG** and **Prompt Engineering** to effectively exploit data.
- **Near Future:** We shift to **Agentic AI**, where autonomous systems (Autonomous Agents) will replace humans in operating complex processes.
- **Tools:** With AWS's comprehensive ecosystem (Bedrock, AgentCore) and Open Source community (Pipecat, LangChain), technical barriers have been significantly reduced, making way for creativity in business solutions.

#### Some images from participating in the event

<img src="/images/4-EventParticipated/4.4-Event4/1_IMG_7805.JPG" alt="Event_04" width="2000"/>

> **Image of over 400 participants attending the AWS Cloud Mastery Series #1 Event**
