data "aws_route53_zone" "domain" {
  name  = "${local.isProduction ? module.ui_deploy.host_name : var.ui_domain}."
}

resource "aws_route53_record" "custom_domain_record" {
  zone_id = "${data.aws_route53_zone.domain.zone_id}"
  name    = "${module.ui_deploy.host_name}"
  type    = "A"

  alias {
    name = "${aws_cloudfront_distribution.s3_distribution.domain_name}"
    zone_id = "${aws_cloudfront_distribution.s3_distribution.hosted_zone_id}"
    evaluate_target_health = false  # You cannot set this to true for Cloudfront targets.
  }
}
