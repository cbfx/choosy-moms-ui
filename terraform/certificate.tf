data "aws_acm_certificate" "ssl_cert" {
  provider = "aws.us-east-1"
  domain = "${local.isCustomStage ? format("*.%s", var.ui_domain) : module.ui_deploy.host_name}"
  statuses = ["ISSUED"]
  most_recent = true
}
