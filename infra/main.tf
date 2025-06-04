provider "aws" {
  region = var.region
}

module "vpc" {
  source = "./vpc.tf"
}

module "db" {
  source = "./rds.tf"
}

module "app" {
  source = "./ecs.tf"  # or ./lambda.tf
}