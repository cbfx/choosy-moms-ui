data "aws_acm_certificate" "ssl_cert" {
  domain = "${local.isCustomStage ? format("*.%s", var.ui_domain) : module.ui_deploy.host_name}"
  statuses = ["ISSUED"]
  most_recent = true
}
