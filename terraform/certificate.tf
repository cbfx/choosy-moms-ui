data "aws_acm_certificate" "ssl_cert" {
  domain = "${local.isProduction ? module.ui_deploy.host_name : format("*.%s", var.ui_domain)}"
  statuses = ["ISSUED"]
  most_recent = true
}
