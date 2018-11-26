variable "ui_domain" {
  type = "string"
  default = "gif.cbfx.net"
}

variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

variable "bucket_name" {
  type = "string"
}

variable "dist_path" {
  type = "string"
}

variable "service_name" {
  type = "string"
  default = "choosy_moms_ui"
}

variable "stage" {
  type = "string"
}

locals {
  is_production = "${var.stage == "prod" ? 1 : 0}"
}
