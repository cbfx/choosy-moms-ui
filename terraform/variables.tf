variable "ui_domain" {
  type = "string"
  default = "gif.cbfx.net"
}

variable "aws_region" {
  type = "string"
  default = "us-east-2"
}

variable "bucket_name" {
  type = "string"
}

variable "dist_path" {
  type = "string"
}

variable "service_name" {
  type = "string"
}

variable "stage" {
  type = "string"
}

locals {
  isProduction = "${var.stage == "prod" ? 1 : 0}"
  isCustomStage = "${var.stage == "prod" || var.stage == "dev" ? 0 : 1}"
}
