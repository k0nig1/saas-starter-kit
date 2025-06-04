# 🧱 SaaS Starter Kit (Cloud-Native Edition)

A production-grade SaaS backend boilerplate built using **AWS Lambda**, **API Gateway**, **PostgreSQL (RDS)**, and **Terraform**. This project is designed to showcase cloud engineering and backend development skills using real infrastructure-as-code and serverless patterns.

---

## 🚀 Features

- 🖥️ **Serverless API** using AWS Lambda + API Gateway (HTTP)
- 🛠️ **Infrastructure-as-Code** with Terraform
- 🗃️ **PostgreSQL database** deployed on Amazon RDS
- 🔒 Secure, private networking using AWS VPC and subnets
- 🌐 API accessible via HTTP endpoint
- 📦 Fully containerizable or extendable to ECS if needed
- ✅ Free Tier–friendly (if configured carefully)

---

## 🧰 Tech Stack

| Layer           | Tech                        |
|----------------|-----------------------------|
| Compute         | AWS Lambda (Node.js)        |
| API Gateway     | Amazon API Gateway (HTTP)   |
| Database        | Amazon RDS (PostgreSQL)     |
| Infrastructure  | Terraform                   |
| Auth            | AWS IAM / Cognito (planned) |

---

## 📁 Project Structure

```
saas-starter-kit/
├── backend/                # Node.js backend (for ECS-based mode)
├── lambda/                 # Lambda function source code
│   ├── handler.js
│   └── package.json
├── infra/                  # Terraform infrastructure code
│   ├── main.tf
│   ├── vpc.tf
│   ├── rds.tf
│   ├── lambda.tf
│   ├── apigateway.tf
│   ├── iam.tf
│   └── variables.tf
├── lambda.zip              # Deployed zip package
└── README.md               # 📖 You are here
```

---

## 🛠️ Prerequisites

- AWS CLI configured (`aws configure`)
- Terraform v1.3+ installed
- AWS IAM user with appropriate permissions (or use a role)
- Node.js (for Lambda packaging)

---

## ⚙️ Setup & Deployment

### 1. Configure AWS Credentials

Make sure `~/.aws/credentials` is set up, or use a named profile in Terraform:
```hcl
provider "aws" {
  region  = "us-east-1"
  profile = "my-saas-app"
}
```

### 2. Package Lambda

```bash
cd lambda
npm install
cd ..
zip -r lambda.zip lambda/
```

### 3. Deploy with Terraform

```bash
cd infra
terraform init
terraform apply
```

Terraform will:
- Create VPC, subnets, and networking
- Deploy RDS and Lambda
- Wire Lambda to API Gateway
- Output your API endpoint

---

## 🌐 Example Endpoint

After deployment, visit:

```
https://<api-id>.execute-api.<region>.amazonaws.com/hello
```

You should see a response like:

```json
{ "time": "2025-06-04T12:00:00Z" }
```

---

## 🛡️ Security Notes

- RDS is private and non-public
- Lambda accesses RDS via VPC and IAM permissions
- Sensitive data (like DB credentials) should eventually be moved to AWS Secrets Manager

---

## 📦 Future Plans

- [ ] Add user authentication (Cognito or JWT)
- [ ] Add CI/CD pipeline with GitHub Actions
- [ ] Add ECS mode as an alternative to Lambda
- [ ] Add frontend (React + S3/CloudFront)

---

## 📄 License

MIT License — use it, fork it, build on it.

---

## 👨‍💻 About the Author

Daniel is a full-stack software engineer and cloud developer with experience building secure, production-grade systems for government and commercial clients.  
> [LinkedIn](https://www.linkedin.com/in/danielholterhaus/) • [GitHub](https://github.com/k0nig1)