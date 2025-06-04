provider "aws" {
  region  = var.aws_region
  profile = "my-saas-app"
}

locals {
  private_subnet_ids = [for subnet in aws_subnet.private : subnet.id]
}