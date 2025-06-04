variable "aws_region" {
  default = "eu-north-1"
}

variable "db_user" {
  default = "postgres"
}

variable "db_password" {
  default   = "ChangeMe123!"
  sensitive = true
}