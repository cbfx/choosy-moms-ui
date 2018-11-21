module "ui_deploy" {
  source = "github.com/rackerlabs/xplat-terraform-modules//modules/ui-deploy"
  bucket_name = "${var.bucket_name}"
  domain = "${var.ui_domain}"
  dist_path = "${var.dist_path}"
  region = "${var.aws_region}"
  service_name = "${var.service_name}"
  stage = "${var.stage}"
}
