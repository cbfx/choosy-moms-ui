data "aws_acm_certificate" "ssl_cert" {
  domain = "${local.is_production ? module.ui_deploy.host_name : format("*.%s", var.ui_domain)}"
  statuses = ["ISSUED"]
  most_recent = true
}
