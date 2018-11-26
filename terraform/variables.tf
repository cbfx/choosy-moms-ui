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

locals {
  ui_url = "${var.ui_domain}"
}

locals {
  deploy_domain = "${local.is_production ? local.ui_url : format("%s.%s", var.stage, local.ui_url)}"
  cert_domain   = "${local.is_production ? local.ui_url : format("*.%s", local.ui_url)}"
  domain_zone   = "${var.ui_domain}"
}
