
# CBAM Precision Calculator - Global Edition v1.0

## 🎯 Overview
This toolkit provides a **Deterministic Architecture** for CBAM (Carbon Border Adjustment Mechanism) compliance. 
Unlike black-box SaaS platforms, this package empowers your engineering/compliance team to build audit-proof data pipelines using **Dify** and **Python**.

**Core Philosophy:** We strictly decouple semantic AI data extraction (LLM) from deterministic arithmetic (Python Decimal) to eliminate calculation errors and hallucination risks inherent in pure LLM workflows.

---

## 📂 Package Structure
- `/01_README` : Deployment guides and documentation (Start here).
- `/02_Dify_Blueprints` : JSON templates for automated data extraction pipelines.
- `/03_Python_Nodes` : Secure Python scripts for official EU emission factor calculations.
- `/04_Data_Schemas` : Master CSV templates (CN Codes, Emission Factors) and JSON schemas.
- `/05_Audit_Pack_Templates` : PDF/JSON templates for official EU Registry review.

---

## 🚀 Quick Start Guide (The 3-Step Deployment)

1. **Environment Setup:** Ensure your Dify instance is running and you have Python 3.10+ configured for custom code nodes.
   
2. **Data Integration:** Place your supplier data in `/04_Data_Schemas/master_data.csv`. Ensure the CN Codes match the EU official 2026 registry structure provided in our templates.

3. **Deploy Workflow:** Import the files from `/02_Dify_Blueprints/` into your Dify workspace. Connect your OpenAI/Claude API keys for document parsing.

---

## 🛡️ Deterministic Math & Compliance Assurance
- **Why Python Decimal?** We use the `decimal` module instead of `float` to prevent floating-point arithmetic errors during carbon cost calculations.
- **Audit Proofing:** Every output includes a cryptographically linked Audit Pack. If your filing is challenged by EU customs, you can provide an immutable trail linking raw supplier invoices to the final emissions report.

---

## 🛠️ Technical Support & Customization
This is an enterprise-grade digital asset. If you require integration with your internal SAP/Oracle systems or need to customize the Dify workflow for specific non-EU manufacturing data formats, please contact our implementation team.

**Email:** [fieldtech.solutions.contact@gmail.com]
**FieldTech Solutions:** [https://fieldtech.gumroad.com/l/cbam-precision-calculator](https://fieldtech.gumroad.com/l/cbam-precision-calculator)

---
*© 2026 FieldTech Solutions. All rights reserved. Strictly confidential for licensed users.*
